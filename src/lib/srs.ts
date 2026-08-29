import type { StringKey } from "@/i18n/strings";

/**
 * SM-2 spaced repetition.
 * Grades: 0 = again, 1 = hard, 2 = good, 3 = easy.
 */

export type ReviewState = {
  ease: number;
  intervalDays: number;
  reps: number;
  lapses: number;
};

export type ScheduledReview = ReviewState & { dueAt: Date };

const MIN_EASE = 1.3;
const MAX_EASE = 3.0;

export const emptyReview: ReviewState = { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 };

export function schedule(state: ReviewState, grade: number): ScheduledReview {
  let { ease, intervalDays, reps, lapses } = state;

  if (grade === 0) {
    lapses += 1;
    reps = 0;
    ease = clamp(ease - 0.2);
    intervalDays = 0;
  } else {
    reps += 1;
    if (grade === 1) ease = clamp(ease - 0.15);
    if (grade === 3) ease = clamp(ease + 0.1);

    if (reps === 1) intervalDays = grade === 1 ? 0.5 : 1;
    else if (reps === 2) intervalDays = grade === 1 ? 2 : 3;
    else intervalDays = Math.round(intervalDays * ease * (grade === 1 ? 0.7 : 1) * 10) / 10;

    intervalDays = Math.min(intervalDays, 365);
  }

  const dueAt = new Date(Date.now() + Math.max(intervalDays, 1 / 144) * 24 * 60 * 60 * 1000);
  return { ease, intervalDays, reps, lapses, dueAt };
}

function clamp(ease: number): number {
  return Math.min(MAX_EASE, Math.max(MIN_EASE, Math.round(ease * 100) / 100));
}

/** 0–1 retention strength used to derive block mastery. */
export function strength(state: { intervalDays: number; reps: number }): number {
  if (state.reps === 0) return 0;
  return Math.min(1, 0.25 + (state.intervalDays / 21) * 0.75);
}

/**
 * The four SM-2 grades in ascending order, as interface string keys so the
 * buttons speak the reader's language rather than always English.
 */
export const gradeKeys = [
  "drill.gradeAgain",
  "drill.gradeHard",
  "drill.gradeGood",
  "drill.gradeEasy",
] as const satisfies readonly StringKey[];
