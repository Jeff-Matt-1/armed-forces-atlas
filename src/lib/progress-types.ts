/**
 * Row shapes shared by the Supabase-backed and localStorage-backed progress
 * stores. Both stores speak the same shapes so the UI never has to care which
 * one it is reading, and so merging one into the other is a field-by-field
 * comparison rather than a translation.
 */

export type CardReview = {
  item_slug: string;
  block_slug: string;
  ease: number;
  interval_days: number;
  reps: number;
  lapses: number;
  last_grade: number | null;
  due_at: string;
};

export type Attempt = {
  id: string;
  block_slug: string | null;
  mode: string;
  score: number;
  total: number;
  passed: boolean;
  missed: unknown;
  created_at: string;
};

export type BlockProgressRow = {
  block_slug: string;
  mastery: number;
  exam_passed: boolean;
  /** Best score across any mode. Kept for continuity; mastery uses the per-mode fields. */
  best_score: number;
  best_photo_id: number;
  best_structure: number;
  best_exam: number;
};

export type StreakRow = {
  current_streak: number;
  longest_streak: number;
  last_study_date: string | null;
};
