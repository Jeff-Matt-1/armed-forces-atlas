import { describe, expect, test } from "bun:test";

import { readyBlocks } from "@/lib/content";
import { badgeState, maxRank, tierFor } from "@/lib/badges";
import type { BlockProgressRow } from "@/lib/progress-types";

const row = (block_slug: string, best_exam: number): BlockProgressRow => ({
  block_slug,
  mastery: 0,
  exam_passed: best_exam >= 80,
  best_score: best_exam,
  best_photo_id: 0,
  best_structure: 0,
  best_exam,
});

const foundations = readyBlocks[0]!.slug;
const second = readyBlocks[1]!.slug;
const third = readyBlocks[2]!.slug;

describe("excellence badges", () => {
  test("nothing is shown until an exam has been cleared", () => {
    expect(badgeState([]).rank).toBeNull();
    expect(badgeState([row(foundations, 95)]).rank).toBeNull();
  });

  /**
   * Foundations is the vocabulary block, so clearing it says you are ready to
   * begin rather than that you have achieved something. It earns the frame.
   */
  test("Foundations earns the bare frame", () => {
    const state = badgeState([row(foundations, 100)]);
    expect(state.rank).toBe(0);
    expect(state.blocks).toEqual([foundations]);
    expect(tierFor(0)).toEqual({ rank: 0, chevrons: 0, stars: 0, winged: false, wreath: false });
  });

  test("each further block cleared without a mistake is one rank", () => {
    expect(badgeState([row(foundations, 100), row(second, 100)]).rank).toBe(1);
    expect(badgeState([row(foundations, 100), row(second, 100), row(third, 100)]).rank).toBe(2);
  });

  /**
   * The rank counts blocks, not attempts, so a block cannot be farmed by
   * sitting its exam again -- best_exam is already kept at its highest value.
   */
  test("a block counts once however often it is cleared", () => {
    const twice = [row(second, 100), row(second, 100)];
    expect(badgeState(twice).blocks).toEqual([second]);
  });

  /**
   * The case the user asked for: a block passed with one mistake and later
   * cleared properly must advance the ladder, exactly as a new block would.
   */
  test("going back to clear a block passed with a mistake advances the rank", () => {
    const before = badgeState([row(foundations, 100), row(second, 94)]);
    expect(before.rank).toBe(0);
    const after = badgeState([row(foundations, 100), row(second, 100)]);
    expect(after.rank).toBe(1);
  });

  test("blocks are listed in curriculum order, not the order they were cleared", () => {
    const state = badgeState([row(third, 100), row(foundations, 100), row(second, 100)]);
    expect(state.blocks).toEqual([foundations, second, third]);
  });

  test("the ladder has one rung per block beyond Foundations and stops there", () => {
    expect(maxRank()).toBe(readyBlocks.length - 1);
    const all = readyBlocks.map((block) => row(block.slug, 100));
    const state = badgeState(all);
    expect(state.rank).toBe(maxRank());
    expect(state.complete).toBe(true);
  });

  /**
   * Every rung must draw something, and no rung may draw nothing at all -- a
   * badge that renders as an empty frame at rank 9 would read as a bug.
   */
  test("every rank above the frame carries a device", () => {
    const bare: number[] = [];
    for (let rank = 1; rank <= maxRank(); rank++) {
      const tier = tierFor(rank);
      if (tier.chevrons === 0 && tier.stars === 0 && !tier.winged) bare.push(rank);
    }
    expect(bare).toEqual([]);
  });

  /**
   * Two ranks that draw the same badge would make the ladder appear to stall
   * exactly when the reader has earned something, which is worse than having
   * no badge at all.
   */
  test("no two ranks draw the same badge", () => {
    const seen = new Map<string, number>();
    const duplicates: string[] = [];
    for (let rank = 0; rank <= maxRank(); rank++) {
      const { rank: _ignored, ...device } = tierFor(rank);
      const key = JSON.stringify(device);
      const first = seen.get(key);
      if (first !== undefined) duplicates.push(`rank ${rank} draws the same as rank ${first}`);
      else seen.set(key, rank);
    }
    expect(duplicates).toEqual([]);
  });

  test("the ladder never draws more devices than the artwork allows", () => {
    const over: string[] = [];
    for (let rank = 0; rank <= maxRank() + 5; rank++) {
      const tier = tierFor(rank);
      if (tier.chevrons > 6) over.push(`rank ${rank}: ${tier.chevrons} chevrons`);
      if (tier.stars > 3) over.push(`rank ${rank}: ${tier.stars} stars`);
    }
    expect(over).toEqual([]);
  });
});
