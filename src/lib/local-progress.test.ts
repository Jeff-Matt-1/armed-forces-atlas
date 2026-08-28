import { describe, expect, test } from "bun:test";

import {
  advanceStreak,
  mergeBlock,
  mergeReview,
  mergeStreak,
  todayStamp,
} from "@/lib/local-progress";
import type { BlockProgressRow, CardReview, StreakRow } from "@/lib/progress-types";

function review(over: Partial<CardReview> = {}): CardReview {
  return {
    item_slug: "t-90m",
    block_slug: "tanks",
    ease: 2.5,
    interval_days: 1,
    reps: 1,
    lapses: 0,
    last_grade: 2,
    due_at: "2026-08-27T00:00:00.000Z",
    ...over,
  };
}

function block(over: Partial<BlockProgressRow> = {}): BlockProgressRow {
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

function streak(over: Partial<StreakRow> = {}): StreakRow {
  return { current_streak: 1, longest_streak: 1, last_study_date: "2026-08-27", ...over };
}

const DAY = 24 * 60 * 60 * 1000;

describe("mergeReview", () => {
  test("keeps the side with more repetitions", () => {
    const local = review({ reps: 5, interval_days: 2 });
    const remote = review({ reps: 2, interval_days: 40 });
    expect(mergeReview(local, remote)).toBe(local);
  });

  test("breaks a repetition tie on the longer interval", () => {
    const local = review({ reps: 3, interval_days: 12 });
    const remote = review({ reps: 3, interval_days: 4 });
    expect(mergeReview(local, remote)).toBe(local);
  });

  test("prefers remote when both sides are identical", () => {
    const local = review();
    const remote = review();
    expect(mergeReview(local, remote)).toBe(remote);
  });
});

describe("mergeBlock", () => {
  test("takes the best score and never un-passes an exam", () => {
    const merged = mergeBlock(
      block({ best_score: 90, exam_passed: true, mastery: 40 }),
      block({ best_score: 55, exam_passed: false, mastery: 70 }),
    );
    expect(merged.best_score).toBe(90);
    expect(merged.exam_passed).toBe(true);
    expect(merged.mastery).toBe(70);
  });
});

describe("mergeStreak", () => {
  test("returns the other side when one is missing", () => {
    const only = streak();
    expect(mergeStreak(null, only)).toBe(only);
    expect(mergeStreak(only, null)).toBe(only);
    expect(mergeStreak(null, null)).toBeNull();
  });

  test("takes the max of each counter and the later study date", () => {
    const merged = mergeStreak(
      streak({ current_streak: 3, longest_streak: 9, last_study_date: "2026-08-20" }),
      streak({ current_streak: 5, longest_streak: 6, last_study_date: "2026-08-26" }),
    );
    expect(merged).toEqual({
      current_streak: 5,
      longest_streak: 9,
      last_study_date: "2026-08-26",
    });
  });
});

describe("advanceStreak", () => {
  const now = Date.parse("2026-08-27T10:00:00.000Z");

  test("starts a streak from nothing", () => {
    expect(advanceStreak(null, now)).toEqual({
      current_streak: 1,
      longest_streak: 1,
      last_study_date: "2026-08-27",
    });
  });

  test("does not advance twice in one day", () => {
    const already = streak({ current_streak: 4, longest_streak: 4, last_study_date: "2026-08-27" });
    expect(advanceStreak(already, now)).toBe(already);
  });

  test("continues a streak studied yesterday", () => {
    const yesterday = streak({
      current_streak: 4,
      longest_streak: 4,
      last_study_date: todayStamp(now - DAY),
    });
    expect(advanceStreak(yesterday, now).current_streak).toBe(5);
  });

  test("resets after a missed day but keeps the longest", () => {
    const stale = streak({
      current_streak: 9,
      longest_streak: 9,
      last_study_date: todayStamp(now - 3 * DAY),
    });
    const next = advanceStreak(stale, now);
    expect(next.current_streak).toBe(1);
    expect(next.longest_streak).toBe(9);
  });
});
