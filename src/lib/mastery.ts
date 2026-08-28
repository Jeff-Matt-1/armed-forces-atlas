import type { BlockProgressRow, CardReview } from "@/lib/progress-types";

/**
 * Block mastery.
 *
 * Every successful piece of work inside a block moves this number, and doing
 * all of a block's learning takes it to 100. Three rules follow from that:
 *
 * 1. Progress ACCUMULATES per item rather than recording a best attempt. Answer
 *    six of nine tanks correctly in a photo drill and you hold six; get the
 *    other three right later and you hold nine. A single lucky answer in a
 *    twelve-question drill cannot award a whole component.
 * 2. It does not matter whether a drill was filtered to one block. Each answer
 *    credits the block its item belongs to, so a mixed drill spread across four
 *    blocks advances all four.
 * 3. Components only count when the block can actually offer them. Ranks has
 *    two distinct placements, so no placement question can ever be built from
 *    it; requiring one would put 100% out of reach. Weights are renormalised
 *    over whatever a block can genuinely ask.
 *
 * Retention deliberately does not scale this number — tying mastery to SM-2
 * interval growth is what previously made a finished block read 44%. Decay is
 * surfaced where it is actionable: the review queue and the weak-items list.
 */

/** Relative weights, renormalised over the components a block can offer. */
export const MASTERY_WEIGHTS = {
  cards: 0.4,
  photo: 0.2,
  placement: 0.2,
  exam: 0.2,
} as const;

export type MasteryInput = {
  /** Every item slug in the block. */
  itemSlugs: string[];
  /** How many of them each question kind can be asked about. */
  askable: { photo: number; placement: number };
  reviewMap: Map<string, CardReview>;
  /** Item slugs answered correctly, per question kind. */
  correctByKind: { photo: Set<string>; placement: Set<string> };
  progress: BlockProgressRow | undefined;
};

export type MasteryBreakdown = {
  /** Cards recalled at least once, 0–1. */
  cards: number;
  /** Photo recognition accumulated across drills and exams, 0–1. */
  photo: number;
  /** Placement knowledge accumulated across drills and exams, 0–1. */
  placement: number;
  /** Block exam passed, 0 or 1. */
  exam: number;
  /** Weighted total as a percentage, 0–100. */
  total: number;
};

/** How many of `slugs` appear in `done`. */
function countIn(slugs: string[], done: Set<string>): number {
  return slugs.reduce((n, slug) => n + (done.has(slug) ? 1 : 0), 0);
}

export function masteryBreakdown(input: MasteryInput): MasteryBreakdown {
  const { itemSlugs, askable, reviewMap, correctByKind, progress } = input;

  if (itemSlugs.length === 0) {
    return { cards: 0, photo: 0, placement: 0, exam: 0, total: 0 };
  }

  // A card counts once recalled; grading "Again" resets reps and uncounts it.
  const cards =
    itemSlugs.filter((slug) => (reviewMap.get(slug)?.reps ?? 0) > 0).length / itemSlugs.length;

  const photo = askable.photo > 0 ? countIn(itemSlugs, correctByKind.photo) / askable.photo : 0;
  const placement =
    askable.placement > 0 ? countIn(itemSlugs, correctByKind.placement) / askable.placement : 0;
  const exam = progress?.exam_passed ? 1 : 0;

  // Only components the block can actually offer take part in the total.
  const parts: { value: number; weight: number }[] = [
    { value: cards, weight: MASTERY_WEIGHTS.cards },
    { value: exam, weight: MASTERY_WEIGHTS.exam },
  ];
  if (askable.photo > 0) parts.push({ value: photo, weight: MASTERY_WEIGHTS.photo });
  if (askable.placement > 0) parts.push({ value: placement, weight: MASTERY_WEIGHTS.placement });

  const weightSum = parts.reduce((sum, part) => sum + part.weight, 0);
  const total = parts.reduce((sum, part) => sum + part.value * part.weight, 0) / weightSum;

  return {
    cards,
    photo: Math.min(1, photo),
    placement: Math.min(1, placement),
    exam,
    total: Math.min(100, Math.round(total * 100)),
  };
}
