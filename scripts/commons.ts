/**
 * Wikimedia Commons asset sourcing.
 *
 * Attribution for these images is a licence obligation, not a nicety, so the
 * author and licence are read from the Commons API rather than typed by hand.
 * Every credit in src/content therefore traces back to the file's own metadata.
 *
 *   bun run scripts/commons.ts search "russian army insignia colonel"
 *   bun run scripts/commons.ts fetch scripts/sources/<name>.tsv
 *
 * The TSV is `slug<TAB>File:Some Title.jpg`, one per line, `#` for comments.
 * Images land in public/images/items/<slug>.<ext> and credits are written to
 * scripts/sources/credits.json for use when authoring content entries.
 */

const API = "https://commons.wikimedia.org/w/api.php";
const OUT_DIR = "public/images/items";
const CREDITS = "scripts/sources/credits.json";

/**
 * Wikimedia's robot policy requires automated clients to identify themselves
 * with contact information; requests without it are refused at volume with
 * "429 ... does not comply with our robot policy". Set COMMONS_CONTACT to a
 * URL or email you are happy to publish to Wikimedia.
 */
const CONTACT =
  Bun.env["COMMONS_CONTACT"]?.trim() || "https://github.com/Jeff-Matt-1/armed-forces-atlas";
const UA = `ArmedForcesAtlas/0.1 (${CONTACT}) bun/${Bun.version}`;

/** Thumbnail width. Insignia need far less than a vehicle photograph. */
const DEFAULT_WIDTH = 1280;

/** Commons throttles bursts; pace requests and honour Retry-After exactly. */
const PACE_MS = Number(Bun.env["COMMONS_PACE_MS"] ?? 1500);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Seconds from a Retry-After header, with a floor so we never busy-retry. */
function retryDelayMs(res: Response, attempt: number): number {
  const header = Number(res.headers.get("retry-after"));
  if (Number.isFinite(header) && header > 0) return header * 1000 + 500;
  return Math.min(30_000, 3000 * (attempt + 1));
}

type Credit = {
  slug: string;
  file: string;
  localPath: string;
  imageCredit: string;
  imagePage: string;
  licence: string;
  artist: string;
  attributionRequired: boolean;
};

async function api(params: Record<string, string>): Promise<unknown> {
  const url = new URL(API);
  url.search = new URLSearchParams({ format: "json", origin: "*", ...params }).toString();

  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429) {
      await sleep(retryDelayMs(res, attempt));
      continue;
    }
    if (!res.ok) throw new Error(`API ${res.status} for ${JSON.stringify(params)}`);
    return res.json();
  }
  throw new Error(`API rate-limited after retries: ${JSON.stringify(params)}`);
}

/** Commons returns author and credit as HTML; content entries want plain text. */
function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function search(query: string, limit = 12): Promise<void> {
  const data = (await api({
    action: "query",
    list: "search",
    srsearch: query,
    srnamespace: "6",
    srlimit: String(limit),
  })) as { query?: { search?: { title: string }[] } };

  const hits = data.query?.search ?? [];
  if (hits.length === 0) {
    console.log("no results");
    return;
  }
  for (const hit of hits) console.log(hit.title);
}

type ImageInfo = {
  thumburl?: string;
  url?: string;
  descriptionurl?: string;
  extmetadata?: Record<string, { value?: string }>;
};

async function infoFor(titles: string[], width: number): Promise<Map<string, ImageInfo>> {
  const out = new Map<string, ImageInfo>();
  // The API takes up to 50 titles per call, but thumbnail rendering is the
  // expensive part, so keep batches small enough to stay polite.
  for (let i = 0; i < titles.length; i += 10) {
    const batch = titles.slice(i, i + 10);
    const data = (await api({
      action: "query",
      prop: "imageinfo",
      iiprop: "url|extmetadata",
      iiurlwidth: String(width),
      titles: batch.join("|"),
    })) as { query?: { pages?: Record<string, { title?: string; imageinfo?: ImageInfo[] }> } };

    for (const page of Object.values(data.query?.pages ?? {})) {
      const info = page.imageinfo?.[0];
      if (page.title && info) out.set(page.title, info);
    }
    await sleep(PACE_MS);
  }
  return out;
}

async function download(url: string, dest: string): Promise<number> {
  for (let attempt = 0; attempt < 8; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429) {
      await sleep(retryDelayMs(res, attempt));
      continue;
    }
    if (!res.ok) throw new Error(`download ${res.status}`);
    const bytes = new Uint8Array(await res.arrayBuffer());
    await Bun.write(dest, bytes);
    return bytes.byteLength;
  }
  throw new Error("download rate-limited after retries");
}

async function fetchAll(tsvPath: string): Promise<void> {
  const lines = (await Bun.file(tsvPath).text())
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));

  // slug <TAB> File:Title [<TAB> thumbnail width]
  const entries = lines.map((line) => {
    const [slug, file, width] = line.split("\t");
    return {
      slug: (slug ?? "").trim(),
      file: (file ?? "").trim(),
      width: Number(width) || DEFAULT_WIDTH,
    };
  });

  const info = new Map<string, ImageInfo>();
  for (const width of new Set(entries.map((e) => e.width))) {
    const titles = entries.filter((e) => e.width === width).map((e) => e.file);
    for (const [title, found] of await infoFor(titles, width)) info.set(title, found);
  }

  const existing: Credit[] = (await Bun.file(CREDITS).exists())
    ? JSON.parse(await Bun.file(CREDITS).text())
    : [];
  const bySlug = new Map(existing.map((c) => [c.slug, c]));

  let ok = 0;
  let failed = 0;

  for (const entry of entries) {
    const found = info.get(entry.file);
    if (!found) {
      console.log(`MISS  ${entry.slug.padEnd(28)} ${entry.file}`);
      failed++;
      continue;
    }

    // Prefer the rendered thumbnail: it bounds file size, and for SVG source
    // files (insignia are usually SVG) it is the only raster form.
    const source = found.thumburl ?? found.url;
    if (!source) {
      console.log(`NOURL ${entry.slug.padEnd(28)} ${entry.file}`);
      failed++;
      continue;
    }

    const ext = source.toLowerCase().includes(".png") ? "png" : "jpg";
    const localPath = `/images/items/${entry.slug}.${ext}`;
    const dest = `${OUT_DIR}/${entry.slug}.${ext}`;

    const meta = found.extmetadata ?? {};
    const artist = stripHtml(meta["Artist"]?.value ?? "Unknown author");
    const licence = stripHtml(meta["LicenseShortName"]?.value ?? "See Commons file page");
    const attributionRequired = (meta["AttributionRequired"]?.value ?? "").toLowerCase() === "true";

    try {
      const size = await download(source, dest);
      bySlug.set(entry.slug, {
        slug: entry.slug,
        file: entry.file,
        localPath,
        imageCredit: `${licence} — ${artist}`,
        imagePage: found.descriptionurl ?? `https://commons.wikimedia.org/wiki/${entry.file}`,
        licence,
        artist,
        attributionRequired,
      });
      console.log(
        `OK    ${entry.slug.padEnd(28)} ${(size / 1024).toFixed(0).padStart(5)}K  ${licence} — ${artist}`,
      );
      ok++;
    } catch (error) {
      console.log(`FAIL  ${entry.slug.padEnd(28)} ${String(error)}`);
      failed++;
    }
    await sleep(PACE_MS);
  }

  const merged = [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
  await Bun.write(CREDITS, JSON.stringify(merged, null, 2) + "\n");
  console.log(`\n${ok} ok, ${failed} failed. Credits: ${CREDITS} (${merged.length} total)`);
}

const [mode, ...args] = Bun.argv.slice(2);

if (mode === "search" && args[0]) {
  await search(args.join(" "));
} else if (mode === "fetch" && args[0]) {
  await fetchAll(args[0]);
} else {
  console.log(
    "usage:\n  bun run scripts/commons.ts search <query>\n  bun run scripts/commons.ts fetch <tsv>",
  );
  process.exit(1);
}
