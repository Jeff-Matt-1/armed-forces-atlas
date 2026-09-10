import { allItems, readyBlocks } from "@/lib/content";

/**
 * Downloading the whole library for use with no connection.
 *
 * The work is done from the page rather than by messaging the service worker.
 * The Cache API is available in both, the caches are the same objects, and
 * doing it here means progress can be reported per file without inventing a
 * message protocol to carry it back.
 *
 * Two things are fetched, and the second is the one that matters. Photographs
 * are the bulk of the bytes, but caching them alone would still leave every
 * page a network error, because each navigation is server-rendered per request
 * and there is no prerendered HTML to fall back on. Caching the documents too
 * works because every route loader in this app is a synchronous lookup in the
 * bundled content — a cached document plus the precached JS renders any route
 * with nothing else available.
 */

/** Cache names carry a version the page does not know; match on the prefix. */
const IMAGES_PREFIX = "afa-images-";
const PAGES_PREFIX = "afa-pages-";

/** Enough at once to saturate a connection, few enough not to stall the UI. */
const CONCURRENCY = 6;

export type OfflineProgress = { done: number; total: number };

export function offlineSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "caches" in window &&
    "serviceWorker" in navigator &&
    navigator.serviceWorker.controller !== null
  );
}

/** Every route the app can render, in the order a reader would meet them. */
export function pageUrls(): string[] {
  const fixed = [
    "/",
    "/learn",
    "/review",
    "/progress",
    "/about",
    "/privacy",
    "/drill/flashcards",
    "/drill/photo-id",
    "/drill/structure",
  ];
  const blocks = readyBlocks.flatMap((block) => [`/learn/${block.slug}`, `/exam/${block.slug}`]);
  const items = allItems
    .filter((item) => readyBlocks.some((block) => block.slug === item.blockSlug))
    .map((item) => `/learn/${item.blockSlug}/${item.slug}`);
  return [...fixed, ...blocks, ...items];
}

export function imageUrls(): string[] {
  return [...new Set(allItems.map((item) => item.imageUrl).filter((url): url is string => !!url))];
}

async function cacheNamed(prefix: string): Promise<Cache | null> {
  const key = (await caches.keys()).find((name) => name.startsWith(prefix));
  return key ? caches.open(key) : null;
}

/**
 * How much of the library is already stored.
 *
 * Counted rather than remembered in a flag: a reader can clear site data, or a
 * new build can retire the page cache, and a flag would then promise something
 * that is no longer true.
 */
export async function offlineStatus(): Promise<OfflineProgress> {
  if (!offlineSupported()) return { done: 0, total: 0 };
  const images = await cacheNamed(IMAGES_PREFIX);
  const pages = await cacheNamed(PAGES_PREFIX);
  const wanted = [...imageUrls(), ...pageUrls()];
  const held = new Set(
    [...((await images?.keys()) ?? []), ...((await pages?.keys()) ?? [])].map(
      (request) => new URL(request.url).pathname,
    ),
  );
  return { done: wanted.filter((url) => held.has(url)).length, total: wanted.length };
}

async function fillCache(
  cache: Cache,
  urls: string[],
  signal: AbortSignal,
  tick: () => void,
): Promise<void> {
  const queue = [...urls];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length > 0) {
      if (signal.aborted) return;
      const url = queue.pop();
      if (!url) return;
      // Already held is the common case on a re-run, and re-fetching 47 MB to
      // discover that would be the whole cost of the feature.
      if (await cache.match(url)) {
        tick();
        continue;
      }
      const response = await fetch(url, { signal });
      if (response.ok) await cache.put(url, response);
      tick();
    }
  });
  await Promise.all(workers);
}

/**
 * Fetch and store everything. Rejects on a storage quota error rather than
 * finishing quietly with half a library, because a reader who was told it was
 * downloaded and then finds a blank card in the field has been lied to.
 */
export async function downloadAll(
  signal: AbortSignal,
  onProgress: (progress: OfflineProgress) => void,
): Promise<void> {
  const images = await cacheNamed(IMAGES_PREFIX);
  const pages = await cacheNamed(PAGES_PREFIX);
  if (!images || !pages) throw new Error("offline caches unavailable");

  const imageList = imageUrls();
  const pageList = pageUrls();
  const total = imageList.length + pageList.length;
  let done = 0;
  const tick = () => onProgress({ done: ++done, total });

  onProgress({ done: 0, total });
  await fillCache(pages, pageList, signal, tick);
  await fillCache(images, imageList, signal, tick);
}

/** Frees the space again. The precached shell stays — it is a few hundred KB. */
export async function removeDownload(): Promise<void> {
  for (const name of await caches.keys()) {
    if (name.startsWith(IMAGES_PREFIX) || name.startsWith(PAGES_PREFIX)) await caches.delete(name);
  }
}

/** Bytes actually held by this origin, for showing what the download cost. */
export async function storageUsed(): Promise<number | null> {
  try {
    const estimate = await navigator.storage.estimate();
    return estimate.usage ?? null;
  } catch {
    return null;
  }
}
