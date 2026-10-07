-- Revoking from PUBLIC did not take the anonymous role with it.
--
-- The two previous migrations each ended with REVOKE EXECUTE ... FROM PUBLIC,
-- which reads like it closes the function to everyone not explicitly granted.
-- It does not on a Supabase project: the platform installs ALTER DEFAULT
-- PRIVILEGES granting EXECUTE on new functions in public to anon,
-- authenticated and service_role, so each function was created with an
-- explicit grant to anon that a revoke from PUBLIC leaves untouched. The
-- database linter is what surfaced it, under
-- anon_security_definer_function_executable.
--
-- Nothing was reachable through it — claim_seat returns 'unauthenticated'
-- before it touches a row, and the other two are false for a caller with no
-- auth.uid(). But a SECURITY DEFINER function exposed at /rest/v1/rpc to
-- anyone on the internet is not a thing to leave open because today's body
-- happens to be harmless.
--
-- authenticated keeps EXECUTE on all three. It needs it: a row-level security
-- policy expression is evaluated as the querying role, so the two helpers have
-- to be callable by the very users whose access they decide.

REVOKE EXECUTE ON FUNCTION public.is_instructor() FROM anon;
REVOKE EXECUTE ON FUNCTION public.instructor_owns_trainee(UUID) FROM anon;
REVOKE EXECUTE ON FUNCTION public.claim_seat(TEXT) FROM anon;
