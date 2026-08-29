import { describe, expect, test } from "bun:test";

import { masteryBreakdown, masteryGaps, type MasteryInput } from "@/lib/mastery";
import type { BlockProgressRow, CardReview } from "@/lib/progress-types";

const SLUGS = ["a", "b", "c", "d"];

function reviewed(slugs: string[]): Map<string, CardReview> {
  const map = new Map<string, CardReview>();
  for (const slug of slugs) {
    map.set(slug, {
      item_slug: slug,
      block_slug: "tanks",
      ease: 2.5,
      interval_days: 1,
      reps: 1,
      lapses: 0,
      last_grade: 2,
      due_at: "2026-08-30T00:00:00.000Z",
    });
  }
  return map;
}

function progress(over: Partial<BlockProgressRow> = {}): BlockProgressRow {
  return {
    block_slug: "tanks",
    mastery: 0,
    exam_passed: false,
    best_score: 0,
    best_photo_id: 0,
    best_structure: 0,
    best_exam: 0,
    ...over,
  };
}

/** A normal block: every item can be asked by photo and by placement. */
function input(over: Partial<MasteryInput> = {}): MasteryInput {
  return {
    itemSlugs: SLUGS,
    askable: { photo: SLUGS.length, placement: SLUGS.length },
    reviewMap: new Map(),
    correctByKind: { photo: new Set(), placement: new Set() },
    progress: progress(),
    ...over,
  };
}

describe("masteryBreakdown", () => {
  test("is zero for an untouched block", () => {
    expect(masteryBreakdown(input()).total).toBe(0);
  });

  test("an empty block does not divide by zero", () => {
    expect(
      masteryBreakdown(input({ itemSlugs: [], askable: { photo: 0, placement: 0 } })).total,
    ).toBe(0);
  });

  test("doing every activity reaches 100", () => {
    const result = masteryBreakdown(
      input({
        reviewMap: reviewed(SLUGS),
        correctByKind: { photo: new Set(SLUGS), placement: new Set(SLUGS) },
        progress: progress({ exam_passed: true }),
      }),
    );
    expect(result.total).toBe(100);
  });

  /** The reported bug: a fully studied block used to read 44%. */
  test("the old 44% case is gone", () => {
    const result = masteryBreakdown(
      input({ reviewMap: reviewed(SLUGS), progress: progress({ exam_passed: true }) }),
    );
    // Cards and exam are done; the two drills are not. 40 + 20 of 100.
    expect(result.total).toBe(60);
  });

  test("progress accumulates per item rather than by best attempt", () => {
    const half = masteryBreakdown(
      input({ correctByKind: { photo: new Set(["a", "b"]), placement: new Set() } }),
    );
    const all = masteryBreakdown(
      input({ correctByKind: { photo: new Set(SLUGS), placement: new Set() } }),
    );

    expect(half.photo).toBe(0.5);
    expect(all.photo).toBe(1);
    // One lucky answer cannot award the whole component.
    expect(half.total).toBeLessThan(all.total);
  });

  /**
   * Ranks has two distinct placements, so no placement question can be built
   * from it. Requiring one would make 100% unreachable — the same class of bug
   * as the original 44%.
   */
  test("a block that cannot ask placement questions still reaches 100", () => {
    const result = masteryBreakdown(
      input({
        askable: { photo: SLUGS.length, placement: 0 },
        reviewMap: reviewed(SLUGS),
        correctByKind: { photo: new Set(SLUGS), placement: new Set() },
        progress: progress({ exam_passed: true }),
      }),
    );
    expect(result.total).toBe(100);
  });

  test("weights renormalise when a component is unavailable", () => {
    // Cards only, in a block with no placement questions: 0.4 of (0.4+0.2+0.2).
    const result = masteryBreakdown(
      input({ askable: { photo: SLUGS.length, placement: 0 }, reviewMap: reviewed(SLUGS) }),
    );
    expect(result.total).toBe(50);
  });

  test("a card graded Again stops counting", () => {
    const map = reviewed(SLUGS);
    for (const [slug, row] of map) map.set(slug, { ...row, reps: 0 });
    expect(masteryBreakdown(input({ reviewMap: map })).cards).toBe(0);
  });

  test("mastery does not depend on how far intervals have grown", () => {
    const fresh = reviewed(SLUGS);
    const mature = new Map(fresh);
    for (const [slug, row] of mature) mature.set(slug, { ...row, interval_days: 60, reps: 5 });

    expect(masteryBreakdown(input({ reviewMap: mature })).total).toBe(
      masteryBreakdown(input({ reviewMap: fresh })).total,
    );
  });
});

describe("masteryGaps", () => {
  /** Every item can be asked both ways in these fixtures. */
  const all = { canAskPhoto: () => true, canAskPlacement: () => true };

  test("an untouched block owes every item on every component", () => {
    const gaps = masteryGaps({ ...input(), ...all });
    expect(gaps.cards).toEqual(SLUGS);
    expect(gaps.photo).toEqual(SLUGS);
    expect(gaps.placement).toEqual(SLUGS);
    expect(gaps.examPassed).toBe(false);
  });

  test("a card graded back to zero reps is owed again", () => {
    const gaps = masteryGaps({ ...input({ reviewMap: reviewed(["a", "b"]) }), ...all });
    expect(gaps.cards).toEqual(["c", "d"]);
  });

  /**
   * The panel and the percentage are two views of one calculation, and a reader
   * told "nothing outstanding" beside a number below 100 would rightly not
   * trust either. This holds them to each other in both directions.
   */
  test("nothing outstanding means 100, and 100 means nothing outstanding", () => {
    const complete: MasteryInput = input({
      reviewMap: reviewed(SLUGS),
      correctByKind: { photo: new Set(SLUGS), placement: new Set(SLUGS) },
      progress: progress({ exam_passed: true }),
    });

    const gaps = masteryGaps({ ...complete, ...all });
    expect(gaps.cards).toEqual([]);
    expect(gaps.photo).toEqual([]);
    expect(gaps.placement).toEqual([]);
    expect(gaps.examPassed).toBe(true);
    expect(masteryBreakdown(complete).total).toBe(100);

    // And one card short is no longer either.
    const short: MasteryInput = { ...complete, reviewMap: reviewed(SLUGS.slice(0, 3)) };
    expect(masteryGaps({ ...short, ...all }).cards).toEqual(["d"]);
    expect(masteryBreakdown(short).total).toBeLessThan(100);
  });

  test("a component the block cannot ask is never owed", () => {
    const gaps = masteryGaps({
      ...input({ askable: { photo: 0, placement: 0 } }),
      ...all,
    });
    expect(gaps.photo).toEqual([]);
    expect(gaps.placement).toEqual([]);
  });

  test("an item that cannot be asked by photo is not owed a photo answer", () => {
    const gaps = masteryGaps({
      ...input(),
      canAskPhoto: (slug) => slug !== "a",
      canAskPlacement: () => true,
    });
    expect(gaps.photo).toEqual(["b", "c", "d"]);
  });
});
