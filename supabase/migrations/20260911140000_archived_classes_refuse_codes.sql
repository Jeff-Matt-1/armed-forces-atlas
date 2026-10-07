-- A finished course has to stop accepting its own codes.
--
-- classes carried archived_at from the first migration and nothing ever set it
-- or read it except the instructor's list query. That made "the course is over"
-- a purely cosmetic act: the class disappeared from the dashboard while its
-- thirty printed codes went on working, and anyone holding a sheet could still
-- join months later.
--
-- Closing the class is now the meaning of archived_at, so claim_seat checks it
-- and reports 'closed'. A trainee who already holds the seat is unaffected:
-- their account, their device and their local progress are untouched, and the
-- instructor keeps the final roster until they delete the class outright.

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

  IF public.is_instructor() THEN
    RETURN QUERY SELECT 'instructor'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  SELECT * INTO seat
  FROM public.class_seats s
  WHERE s.code = upper(regexp_replace(seat_code, '[^A-Za-z0-9]', '', 'g'))
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN QUERY SELECT 'unknown'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  SELECT * INTO klass FROM public.classes c WHERE c.id = seat.class_id;

  -- Checked before the seat's own state, so a closed class says so rather than
  -- reporting the seat taken or free. Which of those it is stops mattering the
  -- moment the course ends.
  IF klass.archived_at IS NOT NULL THEN
    RETURN QUERY SELECT 'closed'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  IF seat.user_id IS NOT NULL AND seat.user_id <> auth.uid() THEN
    RETURN QUERY SELECT 'taken'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  IF seat.user_id IS NULL AND EXISTS (
    SELECT 1 FROM public.class_seats s
    WHERE s.user_id = auth.uid() AND s.id <> seat.id
  ) THEN
    RETURN QUERY SELECT 'elsewhere'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
    RETURN;
  END IF;

  IF seat.user_id IS NULL THEN
    UPDATE public.class_seats s
      SET user_id = auth.uid(), claimed_at = now()
      WHERE s.id = seat.id;
  END IF;

  UPDATE public.profiles p
    SET display_name = COALESCE(seat.label, 'Seat ' || seat.seat_no)
    WHERE p.id = auth.uid();

  RETURN QUERY SELECT 'ok'::TEXT, klass.name, seat.seat_no, seat.label;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.claim_seat(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_seat(TEXT) TO authenticated;
