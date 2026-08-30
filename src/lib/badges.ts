import { readyBlocks } from "@/lib/content";
import type { BlockProgressRow } from "@/lib/progress-types";

/**
 * Excellence badges.
 *
 * A block exam passed without a single mistake earns one step up the ladder,
 * and each block can only ever give that step once. Because `best_exam` is a
 * percentage kept at its highest value, a flawless run is simply 100 — so
 * going back to a block you passed with one mistake and clearing it properly
 * advances the ladder exactly as finishing a new block does, which is the
 * behaviour asked for.
 *
 * Foundations earns the empty frame rather than a device: it is the vocabulary
 * block, and finishing it cleanly says you are ready to start rather than that
 * you have achieved something in the field.
 */

/** The exam score that counts as flawless. */
export const FLAWLESS = 100;

export type BadgeTier = {
  /** 0 is the bare frame; 1 and up carry a device. */
  rank: number;
  /** Chevrons drawn across the badge, 0–6. */
  chevrons: number;
  /** Stars above the chevrons, 0–3. */
  stars: number;
  /** Wings and a wreath mark the senior third of the ladder. */
  winged: boolean;
  wreath: boolean;
};

/**
 * The ladder, written out rather than computed from the rank.
 *
 * Four bands of six, each varying one thing at a time so a reader can see they
 * have moved up: chevrons alone, then chevrons under stars, then wings, then
 * wings with a chevron. Enumerating it is what makes every rung provably
 * different — a formula over bands quietly repeated itself once the ladder
 * grew past eighteen.
 */
const LADDER: Array<Omit<BadgeTier, "rank">> = [
  // Chevrons alone.
  ...[1, 2, 3, 4, 5, 6].map((chevrons) => ({ chevrons, stars: 0, winged: false, wreath: false })),
  // Stars above chevrons.
  ...[1, 2].flatMap((stars) =>
    [1, 2, 3].map((chevrons) => ({ chevrons, stars, winged: false, wreath: false })),
  ),
  // Winged, then winged with a wreath.
  ...[false, true].flatMap((wreath) =>
    [1, 2, 3].map((stars) => ({ chevrons: 0, stars, winged: true, wreath })),
  ),
  // Winged with a chevron beneath, for a ladder longer than eighteen.
  ...[false, true].flatMap((wreath) =>
    [1, 2, 3].map((stars) => ({ chevrons: 1, stars, winged: true, wreath })),
  ),
];

export function tierFor(rank: number): BadgeTier {
  if (rank <= 0) return { rank: 0, chevrons: 0, stars: 0, winged: false, wreath: false };
  const capped = Math.min(rank, LADDER.length);
  return { rank: capped, ...LADDER[capped - 1]! };
}

/**
 * The highest rung: one per block beyond Foundations, or the end of the
 * ladder if the curriculum ever outgrows the artwork.
 */
export function maxRank(): number {
  return Math.max(1, Math.min(readyBlocks.length - 1, LADDER.length));
}

/**
 * Blocks cleared without a mistake, in curriculum order.
 *
 * Order is the curriculum's rather than the order they were earned in: the
 * badge answers "which blocks are clean", and a reader scanning the list wants
 * it in the shape of the syllabus they are working through.
 */
export function flawlessBlocks(rows: BlockProgressRow[]): string[] {
  const clean = new Set(
    rows.filter((row) => (row.best_exam ?? 0) >= FLAWLESS).map((row) => row.block_slug),
  );
  return readyBlocks.filter((block) => clean.has(block.slug)).map((block) => block.slug);
}

export type BadgeState = {
  /** null until Foundations has been cleared; 0 is the bare frame. */
  rank: number | null;
  /** Every block cleared without a mistake, in curriculum order. */
  blocks: string[];
  /** True once the ladder cannot go higher. */
  complete: boolean;
};

/**
 * Foundations gives the frame; every other clean block is one rung.
 *
 * Clearing a later block before Foundations still counts — the ladder measures
 * clean exams, not obedience to the order — but the frame does not appear
 * until something has actually been cleared, so an untouched account carries
 * no badge at all.
 */
export function badgeState(rows: BlockProgressRow[]): BadgeState {
  const blocks = flawlessBlocks(rows);
  if (blocks.length === 0) return { rank: null, blocks, complete: false };

  const foundations = readyBlocks[0]?.slug;
  const beyondFoundations = blocks.filter((slug) => slug !== foundations).length;
  return {
    rank: beyondFoundations,
    blocks,
    complete: beyondFoundations >= maxRank(),
  };
}
