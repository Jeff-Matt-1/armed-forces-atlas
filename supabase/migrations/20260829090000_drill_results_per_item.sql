-- Progress should accumulate from every successful answer, not from the best
-- single attempt, and a drill run across all blocks should still credit the
-- blocks it touched. Recording which items a user has answered correctly, and
-- by which kind of question, makes both work.
--
-- A row's existence means "answered correctly at least once", so writes are
-- insert-only and idempotent. Keyed by question kind rather than drill mode, so
-- a photo question answered inside a block exam credits photo recognition just
-- as the photo-ID drill would.

CREATE TABLE IF NOT EXISTS public.drill_results (
  user_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  item_slug TEXT NOT NULL,
  block_slug TEXT NOT NULL,
  kind TEXT NOT NULL,
  first_correct_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, item_slug, kind)
);

CREATE INDEX IF NOT EXISTS drill_results_user_block_idx
  ON public.drill_results (user_id, block_slug);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.drill_results TO authenticated;
GRANT ALL ON public.drill_results TO service_role;

ALTER TABLE public.drill_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own drill results" ON public.drill_results
  FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
