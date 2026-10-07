import { describe, expect, test } from "bun:test";

import { classSummary } from "@/lib/class-summary";
import { readyBlocks } from "@/lib/content";
import type { BlockProgressRow, StreakRow } from "@/lib/progress-types";

const row = (block_slug: string, best_exam: number): BlockProgressRow => ({
  block_slug,
  mastery: 0,
  exam_passed: best_exam >= 80,
  best_score: best_exam,
  best_photo_id: 0,
  best_structure: 0,
  best_exam,
});

const streak = (current: number, last: string | null): StreakRow => ({
  current_streak: current,
  longest_streak: current,
  last_study_date: last,
});

const summaryOf = (blocks: BlockProgressRow[], overall = 0, streakRow: StreakRow | null = null) =>
  classSummary({
    overall,
    passedBlocks: new Set(blocks.filter((b) => b.exam_passed).map((b) => b.block_slug)),
    blockProgress: blocks,
    streak: streakRow,
  });

const foundations = readyBlocks[0]!.slug;
const second = readyBlocks[1]!.slug;

describe("the roster summary", () => {
  test("an untouched account reports zeros and no study date", () => {
    expect(summaryOf([])).toEqual({
      overall: 0,
      blocks_passed: 0,
      blocks_total: readyBlocks.length,
      badge_rank: 0,
      current_streak: 0,
      last_study_date: null,
    });
  });

  test("counts passed blocks and carries the streak", () => {
    const result = summaryOf([row(foundations, 90), row(second, 85)], 41, streak(6, "2026-09-11"));
    expect(result.blocks_passed).toBe(2);
    expect(result.overall).toBe(41);
    expect(result.current_streak).toBe(6);
    expect(result.last_study_date).toBe("2026-09-11");
  });

  test("a failed exam is not a passed block", () => {
    expect(summaryOf([row(foundations, 70)]).blocks_passed).toBe(0);
  });

  test("badge rank follows flawless exams, not passed ones", () => {
    // Foundations gives the frame rather than a rung, so one clean block
    // beyond it is rank 1 while two merely passed blocks are still rank 0.
    expect(summaryOf([row(foundations, 90), row(second, 90)]).badge_rank).toBe(0);
    expect(summaryOf([row(foundations, 100), row(second, 100)]).badge_rank).toBe(1);
  });

  test("a block no longer in the build cannot inflate the count", () => {
    // The denominator is the curriculum this device holds, so a stale row from
    // an older edition must not make the roster read 23 of 22.
    const result = summaryOf([row(foundations, 100), row("retired-block", 100)]);
    expect(result.blocks_passed).toBe(1);
    expect(result.blocks_total).toBe(readyBlocks.length);
    expect(result.blocks_passed).toBeLessThanOrEqual(result.blocks_total);
  });
});
