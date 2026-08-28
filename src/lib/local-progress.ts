/**
 * Local-first progress, kept in localStorage.
 *
 * Progress used to be written only to Supabase, so a visitor without an
 * account could do twenty flashcards and have every one of them silently
 * discarded. Studying now always records locally; an account upgrades that to
 * sync across devices rather than being the price of entry.
 *
 * Everything here is defensive about storage: private windows, cleared site
 * data and browsers that throw on access all have to degrade to "no saved
 * progress" instead of breaking the app.
 */

import type {
  Attempt,
  BlockProgressRow,
  CardReview,
  DrillResult,
  StreakRow,
} from "@/lib/progress-types";
import { emptyReview, schedule, type ReviewState } from "@/lib/srs";

const STORE_KEY = "recognition-trainer:progress";
const STORE_VERSION = 1;

/** Attempts are a rolling history; older ones are not worth the storage quota. */
const MAX_ATTEMPTS = 50;

export type LocalProgress = {
  version: number;
  reviews: Record<string, CardReview>;
  blocks: Record<string, BlockProgressRow>;
  /** Items answered correctly, keyed "itemSlug:kind" so entries stay unique. */
  drills: DrillResult[];
  attempts: Attempt[];
  streak: StreakRow | null;
};

export function emptyLocalProgress(): LocalProgress {
  return {
    version: STORE_VERSION,
    reviews: {},
    blocks: {},
    drills: [],
    attempts: [],
    streak: null,
  };
}

export function readLocalProgress(): LocalProgress {
  if (typeof window === "undefined") return emptyLocalProgress();
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    if (!raw) return emptyLocalProgress();
    const parsed = JSON.parse(raw) as Partial<LocalProgress>;
    if (parsed.version !== STORE_VERSION) return emptyLocalProgress();
    return {
      version: STORE_VERSION,
      reviews: parsed.reviews ?? {},
      blocks: parsed.blocks ?? {},
      drills: parsed.drills ?? [],
      attempts: parsed.attempts ?? [],
      streak: parsed.streak ?? null,
    };
  } catch {
    return emptyLocalProgress();
  }
}

export function writeLocalProgress(next: LocalProgress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(next));
  } catch {
    // Quota exceeded or storage blocked. Losing local progress is bad but
    // throwing here would break the drill the user is in the middle of.
  }
}

export function clearLocalProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORE_KEY);
  } catch {
    // Nothing sensible to do; the merge already succeeded.
  }
}

export function hasLocalProgress(store: LocalProgress = readLocalProgress()): boolean {
  return (
    Object.keys(store.reviews).length > 0 ||
    Object.keys(store.blocks).length > 0 ||
    store.drills.length > 0 ||
    store.attempts.length > 0
  );
}

/** UTC day stamp, matching what the Supabase path writes to last_study_date. */
export function todayStamp(now: number = Date.now()): string {
  return new Date(now).toISOString().slice(0, 10);
}

/**
 * Streak advance, shared by both stores so local and remote cannot drift.
 * Studying twice in one day does not advance; a gap of more than a day resets.
 */
export function advanceStreak(previous: StreakRow | null, now: number = Date.now()): StreakRow {
  const today = todayStamp(now);
  if (previous?.last_study_date === today) return previous;

  const yesterday = todayStamp(now - 24 * 60 * 60 * 1000);
  const current = previous?.last_study_date === yesterday ? previous.current_streak + 1 : 1;

  return {
    current_streak: current,
    longest_streak: Math.max(current, previous?.longest_streak ?? 0),
    last_study_date: today,
  };
}

export function recordLocalReview(input: {
  itemSlug: string;
  blockSlug: string;
  grade: number;
  current?: ReviewState | undefined;
}): LocalProgress {
  const store = readLocalProgress();
  const next = schedule(input.current ?? emptyReview, input.grade);

  store.reviews[input.itemSlug] = {
    item_slug: input.itemSlug,
    block_slug: input.blockSlug,
    ease: next.ease,
    interval_days: next.intervalDays,
    reps: next.reps,
    lapses: next.lapses,
    last_grade: input.grade,
    due_at: next.dueAt.toISOString(),
  };
  store.streak = advanceStreak(store.streak);

  writeLocalProgress(store);
  return store;
}

export function recordLocalAttempt(input: {
  blockSlug: string | null;
  mode: string;
  score: number;
  total: number;
  passed: boolean;
  missed: string[];
  correct: DrillResult[];
}): LocalProgress {
  const store = readLocalProgress();

  // Every correct answer credits its own item and block, so a drill spanning
  // several blocks advances each of them. Union, never overwrite.
  if (input.correct.length > 0) {
    const seen = new Set(store.drills.map((row) => `${row.item_slug}:${row.kind}`));
    for (const row of input.correct) {
      const key = `${row.item_slug}:${row.kind}`;
      if (row.block_slug && !seen.has(key)) {
        seen.add(key);
        store.drills.push(row);
      }
    }
  }

  store.attempts = [
    {
      id: newId(),
      block_slug: input.blockSlug,
      mode: input.mode,
      score: input.score,
      total: input.total,
      passed: input.passed,
      missed: input.missed,
      created_at: new Date().toISOString(),
    },
    ...store.attempts,
  ].slice(0, MAX_ATTEMPTS);

  if (input.blockSlug) {
    const percent = input.total ? Math.round((input.score / input.total) * 100) : 0;
    const existing = store.blocks[input.blockSlug];
    store.blocks[input.blockSlug] = {
      block_slug: input.blockSlug,
      mastery: existing?.mastery ?? 0,
      best_score: Math.max(percent, existing?.best_score ?? 0),
      // Per-mode bests, mirroring the Supabase path so mastery is identical
      // whether or not the user is signed in.
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
      exam_passed: (existing?.exam_passed ?? false) || (input.mode === "exam" && input.passed),
    };
  }

  store.streak = advanceStreak(store.streak);

  writeLocalProgress(store);
  return store;
}

/**
 * Merge rules, used when a local store is folded into an account.
 *
 * The principle throughout: never lose work. Where the two disagree, keep the
 * side that represents more study, and for anything cumulative take the max.
 */

/** Keep whichever review is further along: more repetitions, then longer interval. */
export function mergeReview(local: CardReview, remote: CardReview): CardReview {
  if (remote.reps !== local.reps) return remote.reps > local.reps ? remote : local;
  if (remote.interval_days !== local.interval_days) {
    return remote.interval_days > local.interval_days ? remote : local;
  }
  return remote;
}

export function mergeBlock(local: BlockProgressRow, remote: BlockProgressRow): BlockProgressRow {
  return {
    block_slug: remote.block_slug,
    mastery: Math.max(local.mastery, remote.mastery),
    best_score: Math.max(local.best_score, remote.best_score),
    best_photo_id: Math.max(local.best_photo_id ?? 0, remote.best_photo_id ?? 0),
    best_structure: Math.max(local.best_structure ?? 0, remote.best_structure ?? 0),
    best_exam: Math.max(local.best_exam ?? 0, remote.best_exam ?? 0),
    exam_passed: local.exam_passed || remote.exam_passed,
  };
}

/** Drill results are facts about what was answered; the merge is a union. */
export function mergeDrills(local: DrillResult[], remote: DrillResult[]): DrillResult[] {
  const byKey = new Map<string, DrillResult>();
  for (const row of [...remote, ...local]) byKey.set(`${row.item_slug}:${row.kind}`, row);
  return [...byKey.values()];
}

export function mergeStreak(local: StreakRow | null, remote: StreakRow | null): StreakRow | null {
  if (!local) return remote;
  if (!remote) return local;
  const lastLocal = local.last_study_date ?? "";
  const lastRemote = remote.last_study_date ?? "";
  return {
    current_streak: Math.max(local.current_streak, remote.current_streak),
    longest_streak: Math.max(local.longest_streak, remote.longest_streak),
    last_study_date: (lastLocal > lastRemote ? lastLocal : lastRemote) || null,
  };
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `local-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
