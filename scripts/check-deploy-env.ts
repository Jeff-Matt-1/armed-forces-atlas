/**
 * Guard the values that get frozen into a production build.
 *
 * Every VITE_* variable is inlined by Vite at build time, so a wrong value is
 * not a misconfiguration that can be corrected in the Cloudflare dashboard
 * afterwards — it is baked into the bundle already serving traffic. The two
 * that fail silently are the ones checked here: a localhost VITE_SITE_URL
 * produces social preview images no crawler can fetch, and a missing Supabase
 * key takes the whole app down on first render.
 *
 * The files are read in Vite's own precedence order rather than trusting the
 * ambient environment, because Bun's automatic .env loading and Vite's differ:
 * reading Bun.env here would see the development .env and reject a deploy that
 * .env.production had configured correctly.
 *
 * Run automatically by `bun run deploy`.
 */
const MODE = "production";

/** Vite loads these in order, each overriding the last. */
const ENV_FILES = [".env", ".env.local", `.env.${MODE}`, `.env.${MODE}.local`];

function parse(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const match = /^\s*(?:export\s+)?([\w.-]+)\s*=\s*(.*)$/.exec(line);
    if (!match || line.trimStart().startsWith("#")) continue;
    const key = match[1];
    let value = (match[2] ?? "").trim();
    // Strip one layer of matching quotes; leave anything else verbatim.
    const quoted = /^(['"])([\s\S]*)\1$/.exec(value);
    if (quoted) value = quoted[2] ?? "";
    else value = value.replace(/\s+#.*$/, "").trim();
    if (key) out[key] = value;
  }
  return out;
}

const env: Record<string, string> = {};
for (const file of ENV_FILES) {
  const handle = Bun.file(file);
  if (!(await handle.exists())) continue;
  Object.assign(env, parse(await handle.text()));
}
// The ambient environment is only a fallback, never an override. Bun loads
// .env into process.env before this script runs, so treating the environment
// as authoritative would let the development .env win over .env.production —
// the exact confusion this guard exists to catch. A CI build that sets the
// values as real variables and ships no .env file still resolves correctly.
const REQUIRED = ["VITE_SUPABASE_URL", "VITE_SUPABASE_PUBLISHABLE_KEY", "VITE_SITE_URL"] as const;

for (const key of REQUIRED) {
  if (!env[key]?.trim()) {
    const ambient = process.env[key];
    if (ambient?.trim()) env[key] = ambient;
  }
}

const problems: string[] = [];

for (const key of REQUIRED) {
  if (!env[key]?.trim()) problems.push(`${key} is not set`);
}

const siteUrl = env["VITE_SITE_URL"]?.trim();
if (siteUrl && /localhost|127\.0\.0\.1/.test(siteUrl)) {
  problems.push(
    `VITE_SITE_URL is ${siteUrl} — a development origin. Set the deployed origin in .env.production.`,
  );
}
if (siteUrl && !/^https?:\/\//.test(siteUrl)) {
  problems.push(`VITE_SITE_URL is ${siteUrl} — it needs the scheme, e.g. https://example.com`);
}
if (siteUrl && siteUrl.endsWith("/")) {
  problems.push(`VITE_SITE_URL is ${siteUrl} — drop the trailing slash.`);
}

if (problems.length > 0) {
  console.error("Refusing to build for deployment:\n");
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error(
    "\nVite reads .env.production for production builds, so put the deployed" +
      "\nvalues there rather than editing .env, which development still needs.\n",
  );
  process.exit(1);
}

console.log(`Deploy environment looks sane — building for ${siteUrl}`);
