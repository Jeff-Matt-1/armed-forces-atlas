-- "infinite recursion detected in policy for relation class_seats".
--
-- The previous migration let a trainee read the class they are seated in, with
-- a policy on classes that consults class_seats. Its comment claimed there was
-- no recursion. That was wrong, and the mistake is worth naming: a policy
-- expression does not evaluate the one policy you had in mind on the table it
-- reads, it evaluates ALL of them. class_seats also carries the instructor
-- policy, which consults classes, which consults class_seats, and Postgres
-- refuses the whole read.
--
-- Both class_seats and classes became unreadable for everyone, so this is a
-- regression and not a missing feature. It reached production between two
-- deploys and was caught on the deployed site.
--
-- The fix is the same device already used for instructor_owns_trainee: put
-- each cross-table lookup behind a SECURITY DEFINER function, which runs
-- outside row-level security and so cannot re-enter it. Neither policy now
-- reads the other table directly, and the cycle has nowhere to close.

CREATE OR REPLACE FUNCTION public.instructor_owns_class(klass UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.classes c
    WHERE c.id = klass AND c.instructor_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION public.seated_in_class(klass UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.class_seats s
    WHERE s.class_id = klass AND s.user_id = auth.uid()
  );
$$;

REVOKE EXECUTE ON FUNCTION public.instructor_owns_class(UUID) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.seated_in_class(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.instructor_owns_class(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.seated_in_class(UUID) TO authenticated;

DROP POLICY "Instructors manage seats in their classes" ON public.class_seats;
CREATE POLICY "Instructors manage seats in their classes" ON public.class_seats
  FOR ALL TO authenticated
  USING (public.instructor_owns_class(class_id))
  WITH CHECK (public.instructor_owns_class(class_id));

DROP POLICY "Trainees read the class they are seated in" ON public.classes;
CREATE POLICY "Trainees read the class they are seated in" ON public.classes
  FOR SELECT TO authenticated
  USING (public.seated_in_class(id));
