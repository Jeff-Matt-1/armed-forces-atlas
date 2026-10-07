-- Classes, seat codes and a roster summary.
--
-- An institution's second question, after "does it work with no signal", is
-- "how does the instructor know who is actually training". Answering it needed
-- a way to put thirty trainees on a roster without an email address each and
-- without a password each: there is no SMTP configured and none is planned, so
-- a forgotten password has no recovery path and lands back on the instructor.
--
-- So the credential is a single eight-character seat code. The account behind
-- it is an ordinary Supabase account whose email is derived from the hash of
-- the code and whose password is the code itself, which means the same code on
-- a second device reaches the same account with nothing stored anywhere and
-- nothing to recover. Sign-up and sign-in stay ordinary client calls with the
-- publishable key; no service-role key is involved.
--
-- Deliberately absent: any instructor access to card_reviews, attempts,
-- block_progress, streaks or drill_results. None of those tables change here
-- and none of their policies change. An instructor can reach a five-number
-- summary and nothing else, by construction rather than by discipline.

-- 1. Who may run a class.
--
-- There is no self-serve instructor sign-up, and for institutional use there
-- should not be. The flag is set by hand.
--
-- The UPDATE grant is narrowed to display_name at the same time. The existing
-- "Users update their own profile" policy is row-level, so without a column
-- grant any trainee could set is_instructor on their own row and promote
-- themselves.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_instructor BOOLEAN NOT NULL DEFAULT false;

REVOKE UPDATE ON public.profiles FROM authenticated;
GRANT UPDATE (display_name) ON public.profiles TO authenticated;

CREATE OR REPLACE FUNCTION public.is_instructor()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT COALESCE(
    (SELECT p.is_instructor FROM public.profiles p WHERE p.id = auth.uid()),
    false
  );
$$;

REVOKE EXECUTE ON FUNCTION public.is_instructor() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_instructor() TO authenticated;

-- 2. Classes and their seats.
--
-- The code is stored in plaintext and readable only by the owning instructor.
-- That is the trade Google Classroom and Kahoot make, and it is the right one
-- here: a class sheet that cannot be reprinted is a worse problem than a
-- low-value secret at rest, and the most a stolen code buys is a falsified
-- summary row for one seat.
--
-- The character class matches the generator's alphabet: 31 glyphs, with 0, 1,
-- O, I and L removed so a printed sheet cannot be misread. The eighth
-- character is a checksum, so a mistyped code fails on the device rather than
-- as a round trip.

CREATE TABLE IF NOT EXISTS public.classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instructor_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  name TEXT NOT NULL CHECK (length(btrim(name)) BETWEEN 1 AND 80),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  archived_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS classes_instructor_idx
  ON public.classes (instructor_id);

CREATE TABLE IF NOT EXISTS public.class_seats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES public.classes (id) ON DELETE CASCADE,
  seat_no INT NOT NULL CHECK (seat_no BETWEEN 1 AND 30),
  code TEXT NOT NULL UNIQUE CHECK (code ~ '^[2-9A-HJKMNP-Z]{8}$'),
  label TEXT CHECK (label IS NULL OR length(label) <= 80),
  user_id UUID REFERENCES auth.users (id) ON DELETE SET NULL,
  claimed_at TIMESTAMPTZ,
  UNIQUE (class_id, seat_no)
);

-- One seat per account. Without this a trainee who joined class A could later
-- type a code from class B and appear on both rosters with one set of numbers.
CREATE UNIQUE INDEX IF NOT EXISTS class_seats_user_idx
  ON public.class_seats (user_id)
  WHERE user_id IS NOT NULL;

-- 3. The roster row.
--
-- Written by the trainee's own device, not computed here. Mastery is derived
-- in TypeScript from the curriculum — which items a block holds, which kinds
-- of question it can ask, how the weights renormalise — and the database does
-- not know the curriculum. A SQL reimplementation would be a second definition
-- of mastery that drifts from the first. block_progress.mastery is a dead
-- column for the same reason; do not start trusting it.
--
-- synced_at is separate from last_study_date on purpose. A trainee studying
-- offline for a week has a fresh study date and a stale sync, and an
-- instructor who reads the stale row as idleness will chase someone who has
-- been working the whole time.

CREATE TABLE IF NOT EXISTS public.class_progress (
  user_id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  overall INT NOT NULL DEFAULT 0 CHECK (overall BETWEEN 0 AND 100),
  blocks_passed INT NOT NULL DEFAULT 0 CHECK (blocks_passed >= 0),
  blocks_total INT NOT NULL DEFAULT 0 CHECK (blocks_total >= 0),
  badge_rank INT NOT NULL DEFAULT 0 CHECK (badge_rank >= 0),
  current_streak INT NOT NULL DEFAULT 0 CHECK (current_streak >= 0),
  last_study_date DATE,
  content_build TEXT CHECK (content_build IS NULL OR length(content_build) <= 40),
  synced_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Row-level security.
--
-- instructor_owns_trainee is SECURITY DEFINER so that the membership lookup
-- inside class_progress's policy does not itself run class_seats' policies as
-- the reader. Empty search_path and fully-qualified names throughout, as in
-- handle_new_user.

CREATE OR REPLACE FUNCTION public.instructor_owns_trainee(trainee UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.class_seats s
    JOIN public.classes c ON c.id = s.class_id
    WHERE s.user_id = trainee
      AND c.instructor_id = auth.uid()
  );
$$;

REVOKE EXECUTE ON FUNCTION public.instructor_owns_trainee(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.instructor_owns_trainee(UUID) TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.classes TO authenticated;
GRANT ALL ON public.classes TO service_role;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Instructors manage their own classes" ON public.classes
  FOR ALL TO authenticated
  USING (instructor_id = auth.uid())
  WITH CHECK (instructor_id = auth.uid() AND public.is_instructor());

GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_seats TO authenticated;
GRANT ALL ON public.class_seats TO service_role;
ALTER TABLE public.class_seats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Instructors manage seats in their classes" ON public.class_seats
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.classes c
      WHERE c.id = class_id AND c.instructor_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.classes c
      WHERE c.id = class_id AND c.instructor_id = auth.uid()
    )
  );

-- Read-only for the trainee: claiming happens inside claim_seat, so a trainee
-- never needs UPDATE and cannot move themselves to another seat.
CREATE POLICY "Trainees read their own seat" ON public.class_seats
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_progress TO authenticated;
GRANT ALL ON public.class_progress TO service_role;
ALTER TABLE public.class_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Trainees write their own summary" ON public.class_progress
  FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Instructors read summaries of their trainees" ON public.class_progress
  FOR SELECT TO authenticated
  USING (public.instructor_owns_trainee(user_id));

-- 5. Claiming a seat.
--
-- Returns a status rather than raising, so the interface can say which of the
-- three things went wrong without parsing an error message across two
-- languages.
--
-- The caller is already signed in by the time this runs: the client derives
-- the credentials from the code, signs in or signs up, and only then claims.
-- A mistyped code that survives the checksum therefore leaves one empty
-- orphan account behind. That is the accepted cost of not exposing a
-- code-checking oracle to anonymous callers.

CREATE OR REPLACE FUNCTION public.claim_seat(seat_code TEXT)
RETURNS TABLE (status TEXT, class_name TEXT, seat_no INT, seat_label TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  seat public.class_seats;
  klass public.classes;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN QUERY SELECT 'unauthenticated'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  -- An instructor account joining a class would bind the account that owns the
  -- roster to a row on it, and the roster would then include its own reader.
  IF public.is_instructor() THEN
    RETURN QUERY SELECT 'instructor'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  SELECT * INTO seat
  FROM public.class_seats s
  WHERE s.code = upper(btrim(seat_code))
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN QUERY SELECT 'unknown'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  -- Re-entering your own code on a second device is the normal path and must
  -- succeed. A different account on a claimed seat is someone typing a code
  -- that is not theirs while signed in as themselves.
  IF seat.user_id IS NOT NULL AND seat.user_id <> auth.uid() THEN
    RETURN QUERY SELECT 'taken'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  SELECT * INTO klass FROM public.classes c WHERE c.id = seat.class_id;

  IF seat.user_id IS NULL THEN
    UPDATE public.class_seats s
      SET user_id = auth.uid(), claimed_at = now()
      WHERE s.id = seat.id;
  END IF;

  -- The instructor's label for the seat is the name the roster shows, so the
  -- profile follows it rather than the derived email's hash.
  UPDATE public.profiles p
    SET display_name = COALESCE(seat.label, 'Seat ' || seat.seat_no)
    WHERE p.id = auth.uid();

  RETURN QUERY SELECT 'ok'::TEXT, klass.name, seat.seat_no, seat.label;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.claim_seat(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_seat(TEXT) TO authenticated;
