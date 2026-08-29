/**
 * Canonical origin of the deployed site.
 *
 * Open Graph and Twitter card images must be absolute URLs — a root-relative
 * path is silently ignored by every crawler — so anything that ends up in a
 * social meta tag has to go through `absoluteUrl`.
 *
 * Set VITE_SITE_URL in the deploy environment. The fallback only keeps local
 * development working; it is not a valid production origin.
 */
const configured = import.meta.env["VITE_SITE_URL"] as string | undefined;

export const SITE_URL = (configured ?? "http://localhost:8080").replace(/\/+$/, "");

/** Turn a root-relative asset path into an absolute URL. Passes through absolute inputs. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}

/**
 * Where Supabase should send the user back to after an emailed link.
 *
 * The live origin is preferred over SITE_URL so that a link requested from
 * localhost returns to localhost rather than to production. SITE_URL is only
 * the fallback for the server render, which has no origin of its own.
 */
export function authRedirectTo(path: string): string {
  const base = typeof window === "undefined" ? SITE_URL : window.location.origin;
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
