import type { BlockProgressRow, CardReview } from "@/lib/progress-types";

/**
 * Block mastery.
 *
 * The first model averaged SM-2 retention across a block's cards and added a
 * flat 0.15 for a passed exam. That had two problems. Photo-ID and structure
 * drills moved it not at all, so two of the four activities a block offers were
 * invisible. And retention on a freshly graded card is only 0.29, so a block
 * studied to completion in one sitting read 44% — with 100% unreachable until
 * every card had been carried out to a 21-day interval.
 *
 * Mastery now tracks the work a block actually asks for: learn the cards, drill
 * recognition, drill placement, pass the exam. Completing all four reaches 100%
 * on the day you do it, which is what the ring is read as meaning.
 *
 * Retention deliberately does NOT scale this number. Tying it to SM-2 interval
 * growth is what made 100% unreachable without weeks of elapsed time — a
 * finished block would still have read 89% the day it was finished. Decay is
 * surfaced where it is actionable instead: the review queue schedules cards as
 * they come due, and the weak-items list ranks what keeps being missed.
 *
 * A card only counts once it has been recalled successfully. Grading a card
 * "Again" resets its repetitions, which drops it back out of the count.
 */

export const MASTERY_WEIGHTS = {
  cards: 0.4,
  photoId: 0.2,
  structure: 0.2,
  exam: 0.2,
} as const;

export type MasteryBreakdown = {
  /** Coverage and retention across the block's cards, 0–1. */
  cards: number;
  /** Best photo-ID drill score for this block, 0–1. */
  photoId: number;
  /** Best structure-placement drill score for this block, 0–1. */
  structure: number;
  /** Best block exam score, 0–1. */
  exam: number;
  /** Weighted total as a percentage, 0–100. */
  total: number;
};

/** A card counts once it has been recalled; "Again" resets reps and uncounts it. */
function cardScore(review: CardReview | undefined): number {
  return !review || review.reps === 0 ? 0 : 1;
}

export function masteryBreakdown(
  itemSlugs: string[],
  reviewMap: Map<string, CardReview>,
  progress: BlockProgressRow | undefined,
): MasteryBreakdown {
  if (itemSlugs.length === 0) {
    return { cards: 0, photoId: 0, structure: 0, exam: 0, total: 0 };
  }

  const cards =
    itemSlugs.reduce((sum, slug) => sum + cardScore(reviewMap.get(slug)), 0) / itemSlugs.length;

  const photoId = (progress?.best_photo_id ?? 0) / 100;
  const structure = (progress?.best_structure ?? 0) / 100;
  // A passed exam counts in full even if the pass was not perfect: the block
  // gate already requires 80%, and re-sitting for the last few points is busy
  // work rather than learning.
  const exam = progress?.exam_passed ? 1 : (progress?.best_exam ?? 0) / 100;

  const total =
    cards * MASTERY_WEIGHTS.cards +
    photoId * MASTERY_WEIGHTS.photoId +
    structure * MASTERY_WEIGHTS.structure +
    exam * MASTERY_WEIGHTS.exam;

  return {
    cards,
    photoId,
    structure,
    exam,
    total: Math.min(100, Math.round(total * 100)),
  };
}
