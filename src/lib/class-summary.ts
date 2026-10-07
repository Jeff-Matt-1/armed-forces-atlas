import { badgeState } from "@/lib/badges";
import { readyBlocks } from "@/lib/content";
import type { BlockProgressRow, StreakRow } from "@/lib/progress-types";

/**
 * The five numbers a roster row carries.
 *
 * Kept apart from src/lib/class.ts, which reaches the network: what a trainee
 * reports to their class is the part worth holding to a test, and it should be
 * testable without a session, a Supabase client or a React tree.
 *
 * The summary is computed on the trainee's device rather than in the database
 * because mastery is derived from the curriculum — which items a block holds,
 * which kinds of question it can ask, how the weights renormalise — and the
 * database does not know the curriculum. Computing it server-side would mean a
 * second definition of mastery, free to drift from the first.
 */
export type ClassSummary = {
  overall: number;
  blocks_passed: number;
  blocks_total: number;
  badge_rank: number;
  current_streak: number;
  last_study_date: string | null;
};

export function classSummary(input: {
  overall: number;
  passedBlocks: Set<string>;
  blockProgress: BlockProgressRow[];
  streak: StreakRow | null;
}): ClassSummary {
  // Counted over the ready blocks rather than over the rows, so "8 / 22" is
  // measured against the curriculum the trainee actually holds — a row left
  // over from an edition that has since dropped a block would otherwise make
  // the roster read 23 of 22.
  const passed = readyBlocks.filter((block) => input.passedBlocks.has(block.slug)).length;

  return {
    overall: input.overall,
    blocks_passed: passed,
    blocks_total: readyBlocks.length,
    badge_rank: badgeState(input.blockProgress).rank ?? 0,
    current_streak: input.streak?.current_streak ?? 0,
    last_study_date: input.streak?.last_study_date ?? null,
  };
}
