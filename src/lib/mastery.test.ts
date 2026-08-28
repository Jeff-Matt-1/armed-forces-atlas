import { describe, expect, test } from "bun:test";

import { masteryBreakdown } from "@/lib/mastery";
import type { BlockProgressRow, CardReview } from "@/lib/progress-types";

const SLUGS = ["a", "b", "c", "d"];

function reviewed(slugs: string[], over: Partial<CardReview> = {}): Map<string, CardReview> {
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
      due_at: "2026-08-29T00:00:00.000Z",
      ...over,
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

describe("masteryBreakdown", () => {
  test("is zero for an untouched block", () => {
    expect(masteryBreakdown(SLUGS, new Map(), undefined).total).toBe(0);
  });

  test("empty block does not divide by zero", () => {
    expect(masteryBreakdown([], new Map(), undefined).total).toBe(0);
  });

  test("doing everything in one sitting reaches 100", () => {
    const result = masteryBreakdown(
      SLUGS,
      // Carried out to a long interval, so the cards component is full.
      reviewed(SLUGS, { interval_days: 30, reps: 4 }),
      progress({
        best_photo_id: 100,
        best_structure: 100,
        best_exam: 100,
        exam_passed: true,
      }),
    );
    expect(result.total).toBe(100);
  });

  /**
   * The regression this model exists for: flipping every card once and passing
   * the exam used to read 44%, because drills counted for nothing and a fresh
   * card scored only 0.29.
   */
  test("cards seen once plus a passed exam scores the two parts done", () => {
    // 40% cards + 20% exam. The drills are genuinely not done, so this is not
    // 100 — but it is no longer 44, and it no longer depends on elapsed days.
    const result = masteryBreakdown(SLUGS, reviewed(SLUGS), progress({ exam_passed: true }));
    expect(result.total).toBe(60);
  });

  test("each drill contributes its own weight", () => {
    const base = masteryBreakdown(SLUGS, new Map(), progress());
    const withPhoto = masteryBreakdown(SLUGS, new Map(), progress({ best_photo_id: 100 }));
    const withStructure = masteryBreakdown(SLUGS, new Map(), progress({ best_structure: 100 }));

    expect(withPhoto.total - base.total).toBe(20);
    expect(withStructure.total - base.total).toBe(20);
  });

  test("a passed exam counts in full even when the pass was not perfect", () => {
    const scraped = masteryBreakdown(
      SLUGS,
      new Map(),
      progress({ exam_passed: true, best_exam: 80 }),
    );
    expect(scraped.exam).toBe(1);
  });

  test("a card graded Again stops counting", () => {
    // schedule() resets reps to 0 on a failed recall, so coverage drops.
    const failed = masteryBreakdown(SLUGS, reviewed(SLUGS, { reps: 0 }), progress());
    expect(failed.cards).toBe(0);
  });

  test("mastery does not depend on how long the intervals have grown", () => {
    const fresh = masteryBreakdown(SLUGS, reviewed(SLUGS), progress());
    const mature = masteryBreakdown(
      SLUGS,
      reviewed(SLUGS, { interval_days: 30, reps: 4 }),
      progress(),
    );
    expect(mature.cards).toBe(fresh.cards);
  });

  test("partial card coverage scores proportionally", () => {
    const half = masteryBreakdown(SLUGS, reviewed(["a", "b"]), progress());
    const all = masteryBreakdown(SLUGS, reviewed(SLUGS), progress());
    expect(half.cards).toBeCloseTo(all.cards / 2, 5);
  });
});
