CREATE TABLE public.profiles (
  id UUID PRIMARY KEY,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read their own profile" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "Users create their own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Users update their own profile" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE TABLE public.card_reviews (
  user_id UUID NOT NULL,
  item_slug TEXT NOT NULL,
  block_slug TEXT NOT NULL,
  ease REAL NOT NULL DEFAULT 2.5,
  interval_days REAL NOT NULL DEFAULT 0,
  reps INT NOT NULL DEFAULT 0,
  lapses INT NOT NULL DEFAULT 0,
  last_grade INT,
  due_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, item_slug)
);
CREATE INDEX card_reviews_due_idx ON public.card_reviews (user_id, due_at);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.card_reviews TO authenticated;
GRANT ALL ON public.card_reviews TO service_role;
ALTER TABLE public.card_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their own card reviews" ON public.card_reviews FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  block_slug TEXT,
  mode TEXT NOT NULL,
  score INT NOT NULL DEFAULT 0,
  total INT NOT NULL DEFAULT 0,
  passed BOOLEAN NOT NULL DEFAULT false,
  missed JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX attempts_user_idx ON public.attempts (user_id, created_at DESC);
GRANT SELECT, INSERT ON public.attempts TO authenticated;
GRANT ALL ON public.attempts TO service_role;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read their own attempts" ON public.attempts FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users record their own attempts" ON public.attempts FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE TABLE public.block_progress (
  user_id UUID NOT NULL,
  block_slug TEXT NOT NULL,
  mastery INT NOT NULL DEFAULT 0,
  exam_passed BOOLEAN NOT NULL DEFAULT false,
  best_score INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, block_slug)
);
GRANT SELECT, INSERT, UPDATE ON public.block_progress TO authenticated;
GRANT ALL ON public.block_progress TO service_role;
ALTER TABLE public.block_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their own block progress" ON public.block_progress FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.streaks (
  user_id UUID PRIMARY KEY,
  current_streak INT NOT NULL DEFAULT 0,
  longest_streak INT NOT NULL DEFAULT 0,
  last_study_date DATE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.streaks TO authenticated;
GRANT ALL ON public.streaks TO service_role;
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their own streak" ON public.streaks FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());