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
 *   SHELL_VERSION  hashes the precache list, so any code or font change makes a
 *                  new shell and retires the old one.
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

// Image identity: names and byte sizes. Enough to notice a replaced photograph
// without hashing 47 MB on every build.
const imageGlob = new Bun.Glob("*");
const imageFacts: string[] = [];
for await (const name of imageGlob.scan({ cwd: IMAGES_DIR, onlyFiles: true })) {
  imageFacts.push(`${name}:${Bun.file(`${IMAGES_DIR}/${name}`).size}`);
}
imageFacts.sort();

// What the download will cost, so the button can say so before it is pressed
// rather than after. Written before the precache existence check runs, because
// the check will look for it.
const imageBytes = imageFacts.reduce((sum, fact) => sum + Number(fact.split(":").pop()), 0);

// Deliberately hashes the images as well as the code. offline-manifest.json is
// precached, and it carries the edition number an institution uses to say which
// version a class trained on — so a replaced photograph has to retire the shell
// too, or a reader keeps being shown the edition before the one they hold. The
// cost is re-fetching the pages, about 10 MB; the photographs are keyed
// separately and survive.
const shellVersion = shortHash([...precache, ...imageFacts].join("\n"));
await Bun.write(
  `${OUT}/offline-manifest.json`,
  // "build" is shown in the interface. An institution has to be able to say
  // which edition a class trained on, and storing it beside the download makes
  // that a question about the device rather than about the server.
  JSON.stringify({ build: shellVersion, images: imageFacts.length, bytes: imageBytes }) + "\n",
);

for (const path of precache) {
  if (!(await Bun.file(`${OUT}${path}`).exists())) {
    throw new Error(`precache lists ${path}, which the build did not produce`);
  }
}

const source = await Bun.file(SOURCE).text();
const sw = source
  .replace("__SHELL_VERSION__", shortHash(precache.join("\n")))
  .replace("__IMAGES_VERSION__", shortHash(imageFacts.join("\n")))
  .replace("__PRECACHE__", JSON.stringify(precache, null, 2));

if (sw.includes("__SHELL_VERSION__") || sw.includes("__PRECACHE__")) {
  throw new Error("placeholders left unsubstituted — did the source change?");
}

await Bun.write(`${OUT}/sw.js`, sw);
console.log(
  `sw.js: ${precache.length} precached (${assets.length} assets, ${fonts.length} fonts), ` +
    `${imageFacts.length} images tracked`,
);
