-- claim_seat crashed instead of answering when the caller already held a seat.
--
-- The previous migration added class_seats_user_idx to enforce one seat per
-- account. It does — but the enforcement arrived as a unique-violation raised
-- out of the UPDATE inside claim_seat, so a trainee who typed a second class's
-- code got a database error where the interface expected one of its four
-- statuses. Found by exercising the policies before any of this reached a
-- browser.
--
-- The index stays; it is the invariant. What changes is that the function
-- checks the invariant itself and reports it, so every outcome a trainee can
-- reach is a sentence the join screen can print.
--
-- The same probe found the second fault: the lookup upper-cased the code but
-- did not remove the dash it is printed with, so a code copied off the sheet as
-- typed came back "unknown". The client normalises before calling, which is why
-- this would not have shown up in the interface — and is exactly why the
-- function should not depend on the client having done it.

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
  WHERE s.code = upper(regexp_replace(seat_code, '[^A-Za-z0-9]', '', 'g'))
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

  IF seat.user_id IS NULL AND EXISTS (
    SELECT 1 FROM public.class_seats s
    WHERE s.user_id = auth.uid() AND s.id <> seat.id
  ) THEN
    RETURN QUERY SELECT 'elsewhere'::TEXT, NULL::TEXT, NULL::INT, NULL::TEXT;
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
