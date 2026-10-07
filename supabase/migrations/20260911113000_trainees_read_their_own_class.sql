-- A trainee could not read the name of the class they had just joined.
--
-- classes had exactly one policy, for the instructor who owns it, so the join
-- screen's embedded lookup of the class name came back null and the page
-- greeted a new trainee with "— · seat 1". Caught on the deployed site rather
-- than in the policy probe, because the probe counted rows and an em dash is
-- what a null renders as.
--
-- The class name is not a secret from its own members; it is the one thing
-- that tells a trainee they typed the right code. Membership is the condition,
-- so a seat in the class is what grants the read.
--
-- No recursion: this policy consults class_seats, whose own trainee policy
-- consults nothing but auth.uid().

CREATE POLICY "Trainees read the class they are seated in" ON public.classes
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.class_seats s
      WHERE s.class_id = id AND s.user_id = auth.uid()
    )
  );
