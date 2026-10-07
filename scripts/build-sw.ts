/**
 * Emits the service worker from the finished build.
 *
 *   bun run scripts/build-sw.ts        (runs as part of `bun run build`)
 *
 * Asset filenames are content-hashed by the client build, so the precache list
 * cannot be written by hand — it has to be read back out of .output/public
 * after Vite and nitro have run. The result is written to .output/public/sw.js,
 * which the Workers ASSETS binding serves at /sw.js.
 *
 * Two version strings, for two different lifetimes:
 *
 *   SHELL_VERSION  hashes the precache list *and* the images, so any code,
 *                  font or photograph change makes a new shell and retires the
 *                  old one. The images are in there because the precached
 *                  offline-manifest.json carries the edition number.
 *   IMAGES_VERSION hashes the names and sizes of public/images/items, so a
 *                  routine deploy leaves a reader's 47 MB of photographs alone
 *                  and only replacing a photograph costs them the download.
 */

const OUT = ".output/public";
const SOURCE = "scripts/service-worker.js";
const IMAGES_DIR = "public/images/items";

/** Files served from the app's own origin that every route needs. */
const FIXED = [
  "/offline.html",
  "/offline-manifest.json",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
];

function shortHash(input: string): string {
  return new Bun.CryptoHasher("sha256").update(input).digest("hex").slice(0, 10);
}

async function listUnder(dir: string, prefix: string): Promise<string[]> {
  const glob = new Bun.Glob("**/*");
  const names: string[] = [];
  for await (const name of glob.scan({ cwd: dir, onlyFiles: true })) {
    names.push(prefix + name.replaceAll("\\", "/"));
  }
  return names.sort();
}

const assets = await listUnder(`${OUT}/assets`, "/assets/");
if (assets.length === 0) throw new Error(`no assets in ${OUT}/assets — run the build first`);

// Only the woff2 files, not fonts.css's siblings: the stylesheet is precached
// through FIXED-style listing below because every page needs it.
const fonts = await listUnder(`${OUT}/fonts`, "/fonts/");

const precache = [...assets, ...fonts.filter((f) => !f.endsWith("OFL.txt")), ...FIXED].sort();

// Image identity, one fingerprint per file rather than one for the set.
//
// It used to be a single hash over every name and size, which named the image
// cache — so correcting one photograph renamed the cache and cost every offline
// reader all 49 MB again. A per-file hash lets the worker drop exactly the
// pictures that changed. Hashing the bytes rather than trusting the size also
// catches a replacement that happens to be the same length.
const imageGlob = new Bun.Glob("*");
const fingerprints: Record<string, string> = {};
// Name and byte size, which is how the retired scheme identified an image. Kept
// only to work out the cache name a reader's existing download sits under.
const legacyFacts: string[] = [];
let imageBytes = 0;

for await (const name of imageGlob.scan({ cwd: IMAGES_DIR, onlyFiles: true })) {
  const file = Bun.file(`${IMAGES_DIR}/${name}`);
  imageBytes += file.size;
  legacyFacts.push(`${name}:${file.size}`);
  const hasher = new Bun.CryptoHasher("sha256");
  hasher.update(await file.arrayBuffer());
  fingerprints[`/images/items/${name}`] = hasher.digest("hex").slice(0, 10);
}

// Sorted so the manifest and the hashes below are stable across builds.
const imageFacts = Object.keys(fingerprints)
  .sort()
  .map((path) => `${path}:${fingerprints[path]}`);

// Still folded into the shell hash. offline-manifest.json is precached and
// carries the edition number an institution uses to say which version a class
// trained on, so a replaced photograph has to retire the shell too, or a reader
// keeps being shown the edition before the one they hold. That costs the pages,
// about 10 MB — not the photographs, which now survive.
const shellVersion = shortHash([...precache, ...imageFacts].join("\n"));

// Only for handing a reader's existing download to the stable cache; see
// LEGACY_IMAGES_CACHE in the worker. Computed the way the old scheme computed
// it, so it names the cache that holds exactly these photographs.
const legacyImagesVersion = shortHash(["2", ...legacyFacts.sort()].join("\n"));

await Bun.write(
  `${OUT}/offline-manifest.json`,
  // "build" is shown in the interface. An institution has to be able to say
  // which edition a class trained on, and storing it beside the download makes
  // that a question about the device rather than about the server.
  //
  // The cache names travel with it because the page fills those caches itself.
  // Matching them on a prefix instead meant the page could not fill one that
  // did not exist yet, and the worker creates the image cache lazily — so
  // before the first photograph had ever been viewed there was nothing to find
  // and the download refused outright.
  //
  // "files" is what makes a one-photograph correction cost one photograph: the
  // worker compares it against what the reader is holding and drops only the
  // entries whose fingerprint moved.
  JSON.stringify({
    build: shellVersion,
    images: imageFacts.length,
    bytes: imageBytes,
    caches: { pages: `afa-pages-${shellVersion}`, images: "afa-images" },
    files: Object.fromEntries(
      Object.keys(fingerprints)
        .sort()
        .map((k) => [k, fingerprints[k]]),
    ),
  }) + "\n",
);

for (const path of precache) {
  if (!(await Bun.file(`${OUT}${path}`).exists())) {
    throw new Error(`precache lists ${path}, which the build did not produce`);
  }
}

const source = await Bun.file(SOURCE).text();
const sw = source
  .replace("__SHELL_VERSION__", shellVersion)
  .replace("__IMAGES_VERSION__", legacyImagesVersion)
  .replace("__PRECACHE__", JSON.stringify(precache, null, 2));

if (sw.includes("__SHELL_VERSION__") || sw.includes("__PRECACHE__")) {
  throw new Error("placeholders left unsubstituted — did the source change?");
}

// The manifest's "build" and the worker's SHELL_VERSION are the same number
// shown in two places, and they have already drifted apart once: an edit that
// changed one left the other computing its own hash, so a deployment shipped a
// worker and a manifest that disagreed. Cheaper to assert than to notice.
const emitted = sw.match(/SHELL_VERSION = "(\w+)"/)?.[1];
if (emitted !== shellVersion) {
  throw new Error(`sw.js says ${emitted}, the manifest says ${shellVersion}`);
}

await Bun.write(`${OUT}/sw.js`, sw);
console.log(
  `sw.js: ${precache.length} precached (${assets.length} assets, ${fonts.length} fonts), ` +
    `${imageFacts.length} images fingerprinted`,
);
