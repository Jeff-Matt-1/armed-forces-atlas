import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import {
  allPlacements,
  isBlockUnlocked,
  itemsOfBlock,
  readyBlocks,
  type Item,
} from "@/lib/content";
import {
  advanceStreak,
  clearLocalProgress,
  hasLocalProgress,
  mergeBlock,
  mergeReview,
  mergeStreak,
  readLocalProgress,
  recordLocalAttempt,
  recordLocalReview,
} from "@/lib/local-progress";
import type {
  Attempt,
  BlockProgressRow,
  CardReview,
  CorrectAnswer,
  DrillResult,
  StreakRow,
} from "@/lib/progress-types";
import { masteryBreakdown, masteryGaps, type MasteryBreakdown } from "@/lib/mastery";
import { askableCounts, placementQuestion, photoQuestion } from "@/lib/quiz";
import { emptyReview, schedule, type ReviewState } from "@/lib/srs";

export type { Attempt, BlockProgressRow, CardReview, StreakRow } from "@/lib/progress-types";

const GATE_KEY = "recognition-trainer:unlock-gate";

export function readGatePreference(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(GATE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function writeGatePreference(enabled: boolean) {
  try {
    window.localStorage.setItem(GATE_KEY, enabled ? "on" : "off");
  } catch {
    // Preference is a convenience; storage being unavailable is not fatal.
  }
}

type Snapshot = {
  reviews: CardReview[];
  blocks: BlockProgressRow[];
  drills: DrillResult[];
  streak: StreakRow | null;
};

async function fetchRemoteSnapshot(): Promise<Snapshot> {
  const [reviews, blocks, drills, streak] = await Promise.all([
    supabase
      .from("card_reviews")
      .select("item_slug, block_slug, ease, interval_days, reps, lapses, last_grade, due_at"),
    supabase
      .from("block_progress")
      .select(
        "block_slug, mastery, exam_passed, best_score, best_photo_id, best_structure, best_exam",
      ),
    supabase.from("drill_results").select("item_slug, block_slug, kind"),
    supabase
      .from("streaks")
      .select("current_streak, longest_streak, last_study_date")
      .maybeSingle(),
  ]);

  if (reviews.error) throw reviews.error;
  if (blocks.error) throw blocks.error;
  if (drills.error) throw drills.error;
  if (streak.error) throw streak.error;

  return {
    reviews: (reviews.data ?? []) as CardReview[],
    blocks: (blocks.data ?? []) as BlockProgressRow[],
    drills: (drills.data ?? []) as DrillResult[],
    streak: (streak.data ?? null) as StreakRow | null,
  };
}

function localSnapshot(): Snapshot {
  const store = readLocalProgress();
  return {
    reviews: Object.values(store.reviews),
    blocks: Object.values(store.blocks),
    drills: store.drills ?? [],
    streak: store.streak,
  };
}

export function useProgress() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  const snapshot = useQuery({
    queryKey: ["progress", userId],
    queryFn: (): Promise<Snapshot> =>
      userId ? fetchRemoteSnapshot() : Promise.resolve(localSnapshot()),
  });

  const data = snapshot.data ?? { reviews: [], blocks: [], drills: [], streak: null };

  const reviewMap = new Map<string, CardReview>();
  for (const row of data.reviews) reviewMap.set(row.item_slug, row);

  const passedBlocks = new Set(
    data.blocks.filter((row) => row.exam_passed).map((row) => row.block_slug),
  );

  const blockBySlug = new Map(data.blocks.map((row) => [row.block_slug, row]));

  // Correct answers grouped by question kind, so a mixed drill credits each
  // item to whichever block it belongs to.
  const correctByKind = { photo: new Set<string>(), placement: new Set<string>() };
  for (const row of data.drills) {
    if (row.kind === "photo-id") correctByKind.photo.add(row.item_slug);
    if (row.kind === "placement") correctByKind.placement.add(row.item_slug);
  }

  function breakdownOf(blockSlug: string): MasteryBreakdown {
    return masteryBreakdown({
      itemSlugs: itemsOfBlock(blockSlug).map((item) => item.slug),
      askable: askableCounts(blockSlug),
      reviewMap,
      correctByKind,
      progress: blockBySlug.get(blockSlug),
    });
  }

  function masteryOf(blockSlug: string): number {
    return breakdownOf(blockSlug).total;
  }

  /**
   * The specific work still outstanding in a block.
   *
   * Mastery accumulates per item, so a block can be short of 100 with every
   * drill "finished" — the components count items answered correctly, not runs
   * completed. Without this a reader can see the number but not what moves it.
   *
   * The askable checks mirror askableCounts deliberately: mastery divides by
   * those counts, so listing anything outside them would name work that cannot
   * be done and could never reach zero.
   */
  function gapsOf(blockSlug: string): BlockGaps {
    const items = itemsOfBlock(blockSlug);
    const askable = askableCounts(blockSlug);
    const placementPool = allPlacements([blockSlug]);
    const photoPool = items.filter((item) => item.imageUrl);
    const bySlug = new Map(items.map((item) => [item.slug, item]));
    const resolve = (slugs: string[]) =>
      slugs.map((slug) => bySlug.get(slug)).filter((item) => item !== undefined);

    const gaps = masteryGaps({
      itemSlugs: items.map((item) => item.slug),
      askable,
      reviewMap,
      correctByKind,
      progress: blockBySlug.get(blockSlug),
      // Same question the counts asked, so the list can always reach empty.
      canAskPhoto: (slug) => {
        const item = bySlug.get(slug);
        return item ? photoQuestion(item, photoPool) !== null : false;
      },
      canAskPlacement: (slug) => {
        const item = bySlug.get(slug);
        return item ? placementQuestion(item, placementPool) !== null : false;
      },
    });

    return {
      cards: resolve(gaps.cards),
      photo: resolve(gaps.photo),
      placement: resolve(gaps.placement),
      examPassed: gaps.examPassed,
      asks: { photo: askable.photo > 0, placement: askable.placement > 0 },
      totals: { cards: items.length, photo: askable.photo, placement: askable.placement },
    };
  }

  const now = Date.now();
  const dueSlugs = data.reviews
    .filter((row) => new Date(row.due_at).getTime() <= now)
    .map((row) => row.item_slug);

  const weakItems = data.reviews
    .filter((row) => row.lapses > 0)
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, 12);

  const overall = readyBlocks.length
    ? Math.round(readyBlocks.reduce((sum, b) => sum + masteryOf(b.slug), 0) / readyBlocks.length)
    : 0;

  return {
    isSignedIn: Boolean(userId),
    loading: snapshot.isLoading,
    reviews: data.reviews,
    reviewMap,
    blockProgress: data.blocks,
    passedBlocks,
    streak: data.streak,
    dueSlugs,
    weakItems,
    masteryOf,
    breakdownOf,
    gapsOf,
    overall,
  };
}

/** What a block still needs before it reads 100%. */
export type BlockGaps = {
  /** Items never recalled in flashcards, or reset by grading "Again". */
  cards: Item[];
  /** Items never yet identified correctly from a photograph. */
  photo: Item[];
  /** Items whose placement has never been answered correctly. */
  placement: Item[];
  examPassed: boolean;
  /** Whether the block can offer each kind at all; Ranks cannot ask placement. */
  asks: { photo: boolean; placement: boolean };
  /** How many items each component covers, so progress reads as a fraction. */
  totals: { cards: number; photo: number; placement: number };
};

type ReviewInput = {
  itemSlug: string;
  blockSlug: string;
  grade: number;
  current?: ReviewState | undefined;
};

export function useRecordReview() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: ReviewInput) => {
      if (!user) {
        recordLocalReview(input);
        return;
      }

      const next = schedule(input.current ?? emptyReview, input.grade);
      const { error } = await supabase.from("card_reviews").upsert(
        {
          user_id: user.id,
          item_slug: input.itemSlug,
          block_slug: input.blockSlug,
          ease: next.ease,
          interval_days: next.intervalDays,
          reps: next.reps,
          lapses: next.lapses,
          last_grade: input.grade,
          due_at: next.dueAt.toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,item_slug" },
      );
      if (error) throw error;
      await touchRemoteStreak(user.id);
    },
    onSuccess: () => invalidateProgress(queryClient),
  });
}

type AttemptInput = {
  blockSlug: string | null;
  mode: string;
  score: number;
  total: number;
  passed: boolean;
  missed: string[];
  correct: CorrectAnswer[];
};

export function useRecordAttempt() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: AttemptInput) => {
      if (!user) {
        recordLocalAttempt(input);
        return;
      }

      const { error } = await supabase.from("attempts").insert({
        user_id: user.id,
        block_slug: input.blockSlug,
        mode: input.mode,
        score: input.score,
        total: input.total,
        passed: input.passed,
        missed: input.missed,
      });
      if (error) throw error;

      // Every correct answer credits its own item and block, so a drill run
      // across all blocks still advances each block it touched. Insert-only:
      // the row's existence means "answered correctly at least once".
      if (input.correct.length > 0) {
        const rows = dedupeCorrect(input.correct).map((row) => ({
          user_id: user.id,
          item_slug: row.item_slug,
          block_slug: row.block_slug,
          kind: row.kind,
        }));
        const { error: drillError } = await supabase
          .from("drill_results")
          .upsert(rows, { onConflict: "user_id,item_slug,kind", ignoreDuplicates: true });
        if (drillError) throw drillError;
      }

      if (input.blockSlug) {
        const percent = input.total ? Math.round((input.score / input.total) * 100) : 0;
        const { data: existing, error: existingError } = await supabase
          .from("block_progress")
          .select("best_score, exam_passed, best_photo_id, best_structure, best_exam")
          .eq("block_slug", input.blockSlug)
          .maybeSingle();
        if (existingError) throw existingError;

        const { error: progressError } = await supabase.from("block_progress").upsert(
          {
            user_id: user.id,
            block_slug: input.blockSlug,
            best_score: Math.max(percent, existing?.best_score ?? 0),
            // Per-mode bests, so mastery can reflect each activity separately.
            best_photo_id:
              input.mode === "photo-id"
                ? Math.max(percent, existing?.best_photo_id ?? 0)
                : (existing?.best_photo_id ?? 0),
            best_structure:
              input.mode === "structure"
                ? Math.max(percent, existing?.best_structure ?? 0)
                : (existing?.best_structure ?? 0),
            best_exam:
              input.mode === "exam"
                ? Math.max(percent, existing?.best_exam ?? 0)
                : (existing?.best_exam ?? 0),
            exam_passed:
              (existing?.exam_passed ?? false) || (input.mode === "exam" && input.passed),
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,block_slug" },
        );
        if (progressError) throw progressError;
      }

      await touchRemoteStreak(user.id);
    },
    onSuccess: () => invalidateProgress(queryClient),
  });
}

export function useAttempts() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  return useQuery({
    queryKey: ["attempts", userId],
    queryFn: async (): Promise<Attempt[]> => {
      if (!userId) return readLocalProgress().attempts;

      const { data, error } = await supabase
        .from("attempts")
        .select("id, block_slug, mode, score, total, passed, missed, created_at")
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return (data ?? []) as Attempt[];
    },
  });
}

/**
 * Folds anonymous progress into the account on first sign-in.
 *
 * Runs once per signed-in session, and only when there is something to move.
 * Local storage is cleared only after every write has succeeded, so a failure
 * part-way leaves the local copy intact to retry rather than losing the work.
 */
export function useMergeLocalProgress() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const mergedFor = useRef<string | null>(null);
  const [merging, setMerging] = useState(false);

  const userId = user?.id ?? null;

  useEffect(() => {
    if (!userId || mergedFor.current === userId) return;

    if (!hasLocalProgress()) {
      mergedFor.current = userId;
      return;
    }

    mergedFor.current = userId;
    setMerging(true);

    void mergeLocalIntoAccount(userId)
      .then(() => {
        clearLocalProgress();
        invalidateProgress(queryClient);
      })
      .catch(() => {
        // Leave the local copy alone so the work is not lost, and allow a
        // later sign-in to retry the merge.
        mergedFor.current = null;
      })
      .finally(() => setMerging(false));
  }, [userId, queryClient]);

  return { merging };
}

async function mergeLocalIntoAccount(userId: string): Promise<void> {
  const local = readLocalProgress();
  const remote = await fetchRemoteSnapshot();
  const stamp = new Date().toISOString();

  const remoteReviews = new Map(remote.reviews.map((row) => [row.item_slug, row]));
  const reviewUpserts = Object.values(local.reviews)
    .map((localRow) => {
      const remoteRow = remoteReviews.get(localRow.item_slug);
      return remoteRow ? mergeReview(localRow, remoteRow) : localRow;
    })
    // A merge that resolved to the row already on the server is a no-op.
    .filter((row) => remoteReviews.get(row.item_slug) !== row)
    .map((row) => ({ user_id: userId, ...row, updated_at: stamp }));

  if (reviewUpserts.length) {
    const { error } = await supabase
      .from("card_reviews")
      .upsert(reviewUpserts, { onConflict: "user_id,item_slug" });
    if (error) throw error;
  }

  const remoteBlocks = new Map(remote.blocks.map((row) => [row.block_slug, row]));
  const blockUpserts = Object.values(local.blocks)
    .map((localRow) => {
      const remoteRow = remoteBlocks.get(localRow.block_slug);
      return remoteRow ? mergeBlock(localRow, remoteRow) : localRow;
    })
    .map((row) => ({ user_id: userId, ...row, updated_at: stamp }));

  if (blockUpserts.length) {
    const { error } = await supabase
      .from("block_progress")
      .upsert(blockUpserts, { onConflict: "user_id,block_slug" });
    if (error) throw error;
  }

  // Drill results are a union of facts, so anonymous answers simply add to
  // whatever the account already holds.
  if (local.drills.length > 0) {
    const rows = local.drills.map((row) => ({
      user_id: userId,
      item_slug: row.item_slug,
      block_slug: row.block_slug,
      kind: row.kind,
    }));
    const { error } = await supabase
      .from("drill_results")
      .upsert(rows, { onConflict: "user_id,item_slug,kind", ignoreDuplicates: true });
    if (error) throw error;
  }

  if (local.attempts.length) {
    // Attempts are an append-only history, so local ones are inserted rather
    // than merged. The id is left to the database instead of reusing the
    // locally generated one.
    const { error } = await supabase.from("attempts").insert(
      local.attempts.map((row) => ({
        user_id: userId,
        block_slug: row.block_slug,
        mode: row.mode,
        score: row.score,
        total: row.total,
        passed: row.passed,
        // Locally recorded attempts always store a slug array; the row type is
        // `unknown` only because the column is jsonb.
        missed: (row.missed ?? []) as string[],
        created_at: row.created_at,
      })),
    );
    if (error) throw error;
  }

  const streak = mergeStreak(local.streak, remote.streak);
  if (streak) {
    const { error } = await supabase
      .from("streaks")
      .upsert({ user_id: userId, ...streak, updated_at: stamp }, { onConflict: "user_id" });
    if (error) throw error;
  }
}

async function touchRemoteStreak(userId: string) {
  const { data, error: readError } = await supabase
    .from("streaks")
    .select("current_streak, longest_streak, last_study_date")
    .maybeSingle();
  if (readError) throw readError;

  const previous = (data ?? null) as StreakRow | null;
  const next = advanceStreak(previous);
  // advanceStreak returns the same object when today is already counted.
  if (previous && next === previous) return;

  const { error: streakError } = await supabase
    .from("streaks")
    .upsert(
      { user_id: userId, ...next, updated_at: new Date().toISOString() },
      { onConflict: "user_id" },
    );
  if (streakError) throw streakError;
}

/** One row per item+kind; a quiz can ask about the same item more than once. */
function dedupeCorrect(rows: CorrectAnswer[]): CorrectAnswer[] {
  const seen = new Map<string, CorrectAnswer>();
  for (const row of rows) {
    if (row.block_slug) seen.set(`${row.item_slug}:${row.kind}`, row);
  }
  return [...seen.values()];
}

function invalidateProgress(queryClient: ReturnType<typeof useQueryClient>) {
  void queryClient.invalidateQueries({ queryKey: ["progress"] });
  void queryClient.invalidateQueries({ queryKey: ["attempts"] });
}

/**
 * Whether a block may be opened, once that is actually known.
 *
 * Both inputs land after hydration -- the gate preference from localStorage and
 * the passed blocks from the progress query -- so no page can decide this on
 * the server. It reports "checking" until both have arrived, because either
 * guess is visibly wrong: assume open and a locked block flashes its contents,
 * assume locked and a block you earned flashes a padlock at you.
 */
export function useBlockAccess(slug: string): "checking" | "open" | "locked" {
  const progress = useProgress();
  const [gate, setGate] = useState<boolean | null>(null);

  useEffect(() => setGate(readGatePreference()), []);

  if (gate === null || progress.loading) return "checking";
  return isBlockUnlocked(slug, progress.passedBlocks, gate) ? "open" : "locked";
}

export type BlockCardState = "open" | "locked" | "unreleased";

/**
 * The unlock preference, read after hydration because it lives in
 * localStorage. Defaults to on, so the gate is never briefly bypassed.
 */
export function useUnlockGate(): boolean {
  const [gate, setGate] = useState(true);
  useEffect(() => setGate(readGatePreference()), []);
  return gate;
}
