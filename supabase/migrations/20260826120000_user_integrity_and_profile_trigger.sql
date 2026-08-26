-- Hardening applied when moving to a self-owned Supabase project.
--
-- Assumes an empty database: the foreign keys below will fail if orphaned
-- progress rows already exist. On a populated project, delete orphans first.

-- 1. Tie every user-scoped row to auth.users and cascade deletes.
--
-- Previously these were bare UUIDs with no referential integrity, so deleting
-- an account left its reviews, attempts, streaks and progress behind forever
-- — both a correctness problem and a data-retention one.

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_id_fkey
  FOREIGN KEY (id) REFERENCES auth.users (id) ON DELETE CASCADE;

ALTER TABLE public.card_reviews
  ADD CONSTRAINT card_reviews_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE;

ALTER TABLE public.attempts
  ADD CONSTRAINT attempts_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE;

ALTER TABLE public.block_progress
  ADD CONSTRAINT block_progress_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE;

ALTER TABLE public.streaks
  ADD CONSTRAINT streaks_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE;

-- 2. Create the profile row in the database, not the browser.
--
-- Profile creation was a client-side upsert immediately after signUp. If the
-- network dropped in between, the account existed with no profile and no retry
-- path. A trigger makes it atomic with user creation.
--
-- SECURITY DEFINER with an empty search_path and fully-qualified names: this
-- runs as the definer, so an unqualified name could otherwise be resolved
-- against an attacker-controlled schema.

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data ->> 'full_name',
      NEW.raw_user_meta_data ->> 'name',
      split_part(NEW.email, '@', 1)
    )
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
