-- Mastery previously derived only from flashcard SM-2 state plus a flat exam
-- bonus, so photo-ID and structure drill work never moved the ring, and a
-- fully studied block still read 44% on the day it was completed.
--
-- Recording the best score per drill mode lets mastery reflect the four
-- activities a block actually offers.

ALTER TABLE public.block_progress
  ADD COLUMN IF NOT EXISTS best_photo_id INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS best_structure INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS best_exam INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS cards_seen INT NOT NULL DEFAULT 0;
