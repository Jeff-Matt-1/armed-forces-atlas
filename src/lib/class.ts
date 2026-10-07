import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import {
  generateSeatCode,
  isSeatCode,
  normaliseSeatCode,
  seatEmail,
  seatPassword,
} from "@/lib/class-codes";
import { classSummary, type ClassSummary } from "@/lib/class-summary";
import { offlineManifest } from "@/lib/offline";
import { useProgress } from "@/lib/progress";

/**
 * Classes, seats and the roster.
 *
 * The instructor sees one row per seat and nothing else. That is not a
 * restraint applied in the interface — the roster reads two small tables that
 * exist for it, and no policy anywhere grants an instructor a single row of
 * card_reviews, attempts, block_progress, streaks or drill_results.
 *
 * The summary on that row is written by the trainee's own device. Mastery is
 * derived from the curriculum, which lives in the bundle and not in the
 * database, so computing it server-side would mean a second definition of
 * mastery that drifts from the first.
 */

export const MAX_SEATS = 30;

// Re-exported so a caller needs one import for the whole feature, while the
// pure part stays in a module the tests can load without a Supabase client.
export { classSummary, type ClassSummary } from "@/lib/class-summary";

export type ClassRow = {
  id: string;
  name: string;
  created_at: string;
  archived_at: string | null;
};

export type Seat = {
  id: string;
  seat_no: number;
  code: string;
  label: string | null;
  user_id: string | null;
  claimed_at: string | null;
};

/** A seat with whatever its trainee's device has reported, if anything. */
export type RosterEntry = Seat & { summary: ClassSummary | null; synced_at: string | null };

/* -------------------------------------------------------------------------- */
/* The instructor's side                                                      */
/* -------------------------------------------------------------------------- */

export function useIsInstructor() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  return useQuery({
    queryKey: ["is-instructor", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("is_instructor")
        .eq("id", userId!)
        .maybeSingle();
      if (error) throw error;
      return Boolean(data?.is_instructor);
    },
  });
}

/**
 * Every class the instructor owns, closed ones included.
 *
 * Closed classes used to be filtered out here, which made "the course is over"
 * look like deletion while leaving the roster reachable only through a URL. The
 * page separates them instead, so ending a course and destroying its record
 * stay two different acts.
 *
 * Ownership is filtered explicitly rather than left to row-level security.
 * Trainees may also read the class they are seated in, so "whatever the policy
 * returns" stopped meaning "mine" the moment that policy existed: an instructor
 * who had joined a class with a code saw it listed among their own, with a
 * roster of one seat and buttons that quietly did nothing.
 */
export function useClasses() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  return useQuery({
    queryKey: ["classes", userId],
    enabled: Boolean(userId),
    queryFn: async (): Promise<ClassRow[]> => {
      const { data, error } = await supabase
        .from("classes")
        .select("id, name, created_at, archived_at")
        .eq("instructor_id", userId!)
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });
}

/**
 * End a course, or reopen one ended by mistake.
 *
 * Closing sets archived_at, which claim_seat reads: every code printed for the
 * class stops working from that moment. Nothing else moves — the seats, the
 * final numbers and the trainees' own accounts all stay exactly as they were,
 * so the roster remains readable and the decision remains reversible.
 */
export function useSetClassArchived() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ classId, archived }: { classId: string; archived: boolean }) => {
      const { error } = await supabase
        .from("classes")
        .update({ archived_at: archived ? new Date().toISOString() : null })
        .eq("id", classId);
      if (error) throw error;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
}

/**
 * Destroy a class and its seats.
 *
 * The seats go with it through the foreign key, so the codes stop resolving to
 * anything and the instructor loses every summary at once: class_progress is
 * readable to them only through a seat in a class they own.
 *
 * What this cannot reach is the trainees' own rows and accounts. Those belong
 * to the trainees, not to the class, and no policy lets one person delete
 * another's data — which is the right answer rather than a gap. Their study
 * also stays on their devices, so a deleted class costs a trainee nothing.
 */
export function useDeleteClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (classId: string) => {
      const { error } = await supabase.from("classes").delete().eq("id", classId);
      if (error) throw error;
    },
    onSuccess: (_result, classId) => {
      void queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.removeQueries({ queryKey: ["roster", classId] });
    },
  });
}

export function useCreateClass() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, seats }: { name: string; seats: number }): Promise<ClassRow> => {
      if (!user) throw new Error("not signed in");
      const { data: created, error } = await supabase
        .from("classes")
        .insert({ name: name.trim(), instructor_id: user.id })
        .select("id, name, created_at, archived_at")
        .single();
      if (error) throw error;

      if (seats > 0) await insertSeats(created.id, 1, seats);
      return created;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
}

/**
 * Codes are generated here rather than in the database so that the alphabet,
 * the grouping and the check character have exactly one definition, tested in
 * class-codes.test.ts. The database only enforces the shape.
 */
async function insertSeats(classId: string, from: number, count: number): Promise<void> {
  const rows = Array.from({ length: count }, (_, index) => ({
    class_id: classId,
    seat_no: from + index,
    code: generateSeatCode(),
  }));
  const { error } = await supabase.from("class_seats").insert(rows);
  if (error) throw error;
}

export function useAddSeats() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      classId,
      taken,
      count,
    }: {
      classId: string;
      taken: number;
      count: number;
    }) => {
      const room = Math.max(0, MAX_SEATS - taken);
      if (room === 0) throw new Error("class is full");
      await insertSeats(classId, taken + 1, Math.min(count, room));
    },
    onSuccess: (_result, variables) => {
      void queryClient.invalidateQueries({ queryKey: ["roster", variables.classId] });
    },
  });
}

export function useRenameSeat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ seatId, label }: { seatId: string; classId: string; label: string }) => {
      const trimmed = label.trim();
      const { error } = await supabase
        .from("class_seats")
        .update({ label: trimmed.length > 0 ? trimmed : null })
        .eq("id", seatId);
      if (error) throw error;
    },
    onSuccess: (_result, variables) => {
      void queryClient.invalidateQueries({ queryKey: ["roster", variables.classId] });
    },
  });
}

/**
 * Two queries rather than one embedded select: class_seats.user_id and
 * class_progress.user_id both point at auth.users and not at each other, so
 * PostgREST has no relationship to follow between them.
 */
export function useRoster(classId: string | null) {
  return useQuery({
    queryKey: ["roster", classId],
    enabled: Boolean(classId),
    queryFn: async (): Promise<RosterEntry[]> => {
      const { data: seats, error } = await supabase
        .from("class_seats")
        .select("id, seat_no, code, label, user_id, claimed_at")
        .eq("class_id", classId!)
        .order("seat_no", { ascending: true });
      if (error) throw error;

      const claimed = (seats ?? []).map((seat) => seat.user_id).filter((id): id is string => !!id);
      if (claimed.length === 0) {
        return (seats ?? []).map((seat) => ({ ...seat, summary: null, synced_at: null }));
      }

      const { data: rows, error: summaryError } = await supabase
        .from("class_progress")
        .select(
          "user_id, overall, blocks_passed, blocks_total, badge_rank, current_streak, last_study_date, synced_at",
        )
        .in("user_id", claimed);
      if (summaryError) throw summaryError;

      const byUser = new Map((rows ?? []).map((row) => [row.user_id, row]));
      return (seats ?? []).map((seat) => {
        const row = seat.user_id ? byUser.get(seat.user_id) : undefined;
        return {
          ...seat,
          synced_at: row?.synced_at ?? null,
          summary: row
            ? {
                overall: row.overall,
                blocks_passed: row.blocks_passed,
                blocks_total: row.blocks_total,
                badge_rank: row.badge_rank,
                current_streak: row.current_streak,
                last_study_date: row.last_study_date,
              }
            : null,
        };
      });
    },
  });
}

/* -------------------------------------------------------------------------- */
/* The trainee's side                                                         */
/* -------------------------------------------------------------------------- */

export type MySeat = {
  seat_no: number;
  label: string | null;
  class_name: string | null;
  /** The course has ended: the roster is frozen and this device stops reporting. */
  closed: boolean;
};

export function useMySeat() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  return useQuery({
    queryKey: ["my-seat", userId],
    enabled: Boolean(userId),
    // The seat itself never moves once claimed; only the class closing can
    // change this answer, and a course ending a few minutes before the device
    // notices costs nothing.
    staleTime: 5 * 60 * 1000,
    queryFn: async (): Promise<MySeat | null> => {
      const { data, error } = await supabase
        .from("class_seats")
        .select("seat_no, label, classes(name, archived_at)")
        .eq("user_id", userId!)
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;
      const klass = data.classes as { name: string; archived_at: string | null } | null;
      return {
        seat_no: data.seat_no,
        label: data.label,
        class_name: klass?.name ?? null,
        closed: Boolean(klass?.archived_at),
      };
    },
  });
}

export type JoinOutcome =
  | { status: "ok"; className: string; seatNo: number; label: string | null }
  | {
      status:
        | "malformed"
        | "unknown"
        | "closed"
        | "taken"
        | "elsewhere"
        | "instructor"
        | "unauthenticated";
    };

/**
 * Join a class with a seat code.
 *
 * The order matters. The checksum is tested first, on the device, because
 * claiming requires a session and a session for a code that does not exist
 * leaves an empty orphan account behind. Then sign in, because a returning
 * trainee is the common case, and only sign up when that address has never
 * been seen.
 */
export async function joinWithCode(raw: string): Promise<JoinOutcome> {
  const code = normaliseSeatCode(raw);
  if (!isSeatCode(code)) return { status: "malformed" };

  const email = await seatEmail(code);
  const password = seatPassword(code);

  let created = false;
  const attempt = await supabase.auth.signInWithPassword({ email, password });
  if (attempt.error) {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    created = true;
  }

  const { data, error } = await supabase.rpc("claim_seat", { seat_code: code });
  if (error) throw error;

  const result = (Array.isArray(data) ? data[0] : data) as
    | {
        status: string;
        class_name: string | null;
        seat_no: number | null;
        seat_label: string | null;
      }
    | undefined;

  if (result?.status === "ok") {
    return {
      status: "ok",
      className: result.class_name ?? "",
      seatNo: result.seat_no ?? 0,
      label: result.seat_label,
    };
  }

  // The account was created a moment ago for a code that leads nowhere: it
  // does not exist, or its course has ended. Leaving it signed in would show
  // the device as an account holder with no class and no way to explain
  // itself. Conditioned on having created it, so a real trainee who mistypes
  // while signed in is not thrown out of their own account.
  if (created) await supabase.auth.signOut();

  const status = result?.status;
  if (
    status === "unknown" ||
    status === "closed" ||
    status === "taken" ||
    status === "elsewhere" ||
    status === "instructor"
  ) {
    return { status };
  }
  return { status: "unauthenticated" };
}

export function useJoinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: joinWithCode,
    onSuccess: (outcome) => {
      if (outcome.status !== "ok") return;
      void queryClient.invalidateQueries({ queryKey: ["my-seat"] });
      void queryClient.invalidateQueries({ queryKey: ["progress"] });
    },
  });
}

/**
 * Report this device's summary to the class.
 *
 * Runs only for a signed-in trainee who holds a seat, and only when the
 * summary has actually moved. Offline it simply does not run and retries when
 * the connection comes back — the roster's synced_at is what tells the
 * instructor that a row is a week old rather than that a trainee has stopped.
 */
export function useSyncClassSummary() {
  const { user } = useAuth();
  const seat = useMySeat();
  const progress = useProgress();
  const lastSent = useRef<string | null>(null);

  // A closed course stops receiving. The instructor ended it, and going on
  // reporting a former trainee's study to them would be collecting data from
  // someone who has no reason to think the arrangement still stands. The
  // roster keeps whatever was last sent, which is the record of where the
  // class finished.
  const ready = Boolean(user) && Boolean(seat.data) && !seat.data?.closed && !progress.loading;
  const summary = ready
    ? classSummary({
        overall: progress.overall,
        passedBlocks: progress.passedBlocks,
        blockProgress: progress.blockProgress,
        streak: progress.streak,
      })
    : null;
  const serialised = summary ? JSON.stringify(summary) : null;

  useEffect(() => {
    if (!user || !serialised || !summary) return;

    let cancelled = false;

    async function send() {
      if (cancelled || lastSent.current === serialised) return;
      const build = (await offlineManifest())?.build ?? null;
      const { error } = await supabase.from("class_progress").upsert({
        user_id: user!.id,
        ...summary!,
        content_build: build,
        synced_at: new Date().toISOString(),
      });
      // A failure is almost always the network. Leaving lastSent untouched is
      // the whole retry mechanism: the next change, or the next reconnection,
      // sends the current numbers rather than a queued stale set.
      if (!error && !cancelled) lastSent.current = serialised;
    }

    void send();
    window.addEventListener("online", send);
    return () => {
      cancelled = true;
      window.removeEventListener("online", send);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, serialised]);
}
