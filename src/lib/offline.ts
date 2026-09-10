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
 * bundled content — a stored document plus the precached JS renders any route
 * with nothing else available.
 */

/** Enough at once to saturate a connection, few enough not to stall the UI. */
const CONCURRENCY = 6;

export type OfflineProgress = { done: number; total: number };

export type OfflineManifest = {
  build: string;
  images: number;
  bytes: number;
  caches: { pages: string; images: string };
};

/**
 * Written by scripts/build-sw.ts beside the service worker, so the page and the
 * worker cannot disagree about which caches they are filling.
 *
 * Reading the names from here rather than matching a prefix over existing
 * caches is deliberate: the worker creates the image cache lazily, on the first
 * photograph it is asked for, so a prefix search found nothing at all before
 * the reader had opened a single card — and the download refused outright.
 */
let manifestPromise: Promise<OfflineManifest | null> | null = null;

export function offlineManifest(): Promise<OfflineManifest | null> {
  manifestPromise ??= fetch("/offline-manifest.json")
    .then((response) => (response.ok ? (response.json() as Promise<OfflineManifest>) : null))
    .catch(() => null);
  return manifestPromise;
}

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

/**
 * How much of the library is already stored.
 *
 * Counted from the caches on every visit rather than remembered in a flag: site
 * data can be cleared and a new build retires the page cache, and a flag would
 * go on promising something that had stopped being true.
 */
export async function offlineStatus(): Promise<OfflineProgress> {
  if (!offlineSupported()) return { done: 0, total: 0 };
  const manifest = await offlineManifest();
  if (!manifest) return { done: 0, total: 0 };

  const existing = new Set(await caches.keys());
  const held = new Set<string>();
  for (const name of [manifest.caches.pages, manifest.caches.images]) {
    if (!existing.has(name)) continue;
    const cache = await caches.open(name);
    for (const request of await cache.keys()) held.add(new URL(request.url).pathname);
  }

  const wanted = [...imageUrls(), ...pageUrls()];
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
 * Fetch and store everything. Rejects rather than finishing quietly with half a
 * library, because a reader who was told it was downloaded and then finds a
 * blank card in the field has been lied to.
 */
export async function downloadAll(
  signal: AbortSignal,
  onProgress: (progress: OfflineProgress) => void,
): Promise<void> {
  const manifest = await offlineManifest();
  if (!manifest) throw new Error("offline manifest unavailable");

  const pages = await caches.open(manifest.caches.pages);
  const images = await caches.open(manifest.caches.images);

  const imageList = imageUrls();
  const pageList = pageUrls();
  const total = imageList.length + pageList.length;
  let done = 0;
  const tick = () => onProgress({ done: ++done, total });

  onProgress({ done: 0, total });
  await fillCache(pages, pageList, signal, tick);
  await fillCache(images, imageList, signal, tick);
}

/**
 * Frees the space again — including caches retired by an earlier build, which
 * the worker only clears when it next activates. The precached shell stays; it
 * is a few hundred kilobytes and the app needs it to start.
 */
export async function removeDownload(): Promise<void> {
  for (const name of await caches.keys()) {
    if (name.startsWith("afa-images-") || name.startsWith("afa-pages-")) await caches.delete(name);
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
