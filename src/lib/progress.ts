import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { itemsOfBlock, readyBlocks } from "@/lib/content";
import { emptyReview, schedule, strength, type ReviewState } from "@/lib/srs";
import { useAuth } from "@/hooks/useAuth";

export type CardReview = {
  item_slug: string;
  block_slug: string;
  ease: number;
  interval_days: number;
  reps: number;
  lapses: number;
  last_grade: number | null;
  due_at: string;
};

export type Attempt = {
  id: string;
  block_slug: string | null;
  mode: string;
  score: number;
  total: number;
  passed: boolean;
  missed: unknown;
  created_at: string;
};

export type BlockProgressRow = {
  block_slug: string;
  mastery: number;
  exam_passed: boolean;
  best_score: number;
};

export type StreakRow = {
  current_streak: number;
  longest_streak: number;
  last_study_date: string | null;
};

const GATE_KEY = "recognition-trainer:unlock-gate";

export function readGatePreference(): boolean {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem(GATE_KEY) !== "off";
}

export function writeGatePreference(enabled: boolean) {
  window.localStorage.setItem(GATE_KEY, enabled ? "on" : "off");
}

export function useProgress() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  const reviews = useQuery({
    queryKey: ["card_reviews", userId],
    enabled: Boolean(userId),
    queryFn: async (): Promise<CardReview[]> => {
      const { data, error } = await supabase
        .from("card_reviews")
        .select("item_slug, block_slug, ease, interval_days, reps, lapses, last_grade, due_at");
      if (error) throw error;
      return (data ?? []) as CardReview[];
    },
  });

  const blockProgress = useQuery({
    queryKey: ["block_progress", userId],
    enabled: Boolean(userId),
    queryFn: async (): Promise<BlockProgressRow[]> => {
      const { data, error } = await supabase
        .from("block_progress")
        .select("block_slug, mastery, exam_passed, best_score");
      if (error) throw error;
      return (data ?? []) as BlockProgressRow[];
    },
  });

  const streak = useQuery({
    queryKey: ["streaks", userId],
    enabled: Boolean(userId),
    queryFn: async (): Promise<StreakRow | null> => {
      const { data, error } = await supabase
        .from("streaks")
        .select("current_streak, longest_streak, last_study_date")
        .maybeSingle();
      if (error) throw error;
      return (data ?? null) as StreakRow | null;
    },
  });

  const reviewMap = new Map<string, CardReview>();
  for (const row of reviews.data ?? []) reviewMap.set(row.item_slug, row);

  const passedBlocks = new Set(
    (blockProgress.data ?? []).filter((row) => row.exam_passed).map((row) => row.block_slug),
  );

  function masteryOf(blockSlug: string): number {
    const items = itemsOfBlock(blockSlug);
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => {
      const row = reviewMap.get(item.slug);
      return sum + (row ? strength({ intervalDays: row.interval_days, reps: row.reps }) : 0);
    }, 0);
    const examBonus = passedBlocks.has(blockSlug) ? 0.15 : 0;
    return Math.min(100, Math.round((total / items.length + examBonus) * 100));
  }

  const now = Date.now();
  const dueSlugs = (reviews.data ?? [])
    .filter((row) => new Date(row.due_at).getTime() <= now)
    .map((row) => row.item_slug);

  const weakItems = (reviews.data ?? [])
    .filter((row) => row.lapses > 0)
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, 12);

  const overall = readyBlocks.length
    ? Math.round(readyBlocks.reduce((sum, b) => sum + masteryOf(b.slug), 0) / readyBlocks.length)
    : 0;

  return {
    isSignedIn: Boolean(userId),
    loading: reviews.isLoading || blockProgress.isLoading,
    reviews: reviews.data ?? [],
    reviewMap,
    blockProgress: blockProgress.data ?? [],
    passedBlocks,
    streak: streak.data ?? null,
    dueSlugs,
    weakItems,
    masteryOf,
    overall,
  };
}

export function useRecordReview() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      itemSlug: string;
      blockSlug: string;
      grade: number;
      current?: ReviewState | undefined;
    }) => {
      if (!user) return;
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
      await touchStreak(user.id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["card_reviews"] });
      void queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
}

export function useRecordAttempt() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      blockSlug: string | null;
      mode: string;
      score: number;
      total: number;
      passed: boolean;
      missed: string[];
    }) => {
      if (!user) return;
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

      if (input.blockSlug) {
        const percent = input.total ? Math.round((input.score / input.total) * 100) : 0;
        const { data: existing } = await supabase
          .from("block_progress")
          .select("best_score, exam_passed")
          .eq("block_slug", input.blockSlug)
          .maybeSingle();

        await supabase.from("block_progress").upsert(
          {
            user_id: user.id,
            block_slug: input.blockSlug,
            best_score: Math.max(percent, existing?.best_score ?? 0),
            exam_passed:
              (existing?.exam_passed ?? false) || (input.mode === "exam" && input.passed),
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,block_slug" },
        );
      }

      await touchStreak(user.id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["block_progress"] });
      void queryClient.invalidateQueries({ queryKey: ["attempts"] });
      void queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
}

export function useAttempts() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["attempts", user?.id ?? null],
    enabled: Boolean(user),
    queryFn: async (): Promise<Attempt[]> => {
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

async function touchStreak(userId: string) {
  const today = new Date().toISOString().slice(0, 10);
  const { data } = await supabase
    .from("streaks")
    .select("current_streak, longest_streak, last_study_date")
    .maybeSingle();

  if (data?.last_study_date === today) return;

  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const current = data?.last_study_date === yesterday ? (data.current_streak ?? 0) + 1 : 1;

  await supabase.from("streaks").upsert(
    {
      user_id: userId,
      current_streak: current,
      longest_streak: Math.max(current, data?.longest_streak ?? 0),
      last_study_date: today,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );
}
