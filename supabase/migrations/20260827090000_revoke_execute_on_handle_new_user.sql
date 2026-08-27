-- handle_new_user() is a trigger function and must never be callable through
-- PostgREST. As a SECURITY DEFINER function it was exposed at
-- /rest/v1/rpc/handle_new_user to both anon and authenticated, which the
-- Supabase security advisor flags (lints 0028 / 0029).
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM authenticated;
