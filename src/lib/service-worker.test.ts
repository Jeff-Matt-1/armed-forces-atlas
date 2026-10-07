import { readFileSync } from "node:fs";

import { describe, expect, test } from "bun:test";

/**
 * The service worker's caching rules, driven against a mock Cache Storage.
 *
 * These rules cannot be checked by reading them. A service worker that caches
 * the wrong thing does not fail loudly — it serves a stale page, or a 404 it
 * decided to keep, or it quietly stops working offline and the reader finds out
 * in the field. A bad one also persists: it stays installed until replaced.
 *
 * scripts/service-worker.js is plain JavaScript with three placeholders, so it
 * loads here with the same substitutions the build makes and can be driven
 * through its own event listeners.
 */

const SHELL = "afa-shell-testshell";
const PAGES = "afa-pages-testshell";
const IMAGES = "afa-images";
const LEGACY_IMAGES = "afa-images-testimages";
const ORIGIN = "https://atlas.test";

type Fetcher = (request: Request, init?: RequestInit) => Promise<Response>;
type Handler = (event: never) => void;

const ok = (body: string) => new Response(body, { status: 200 });

/** Serves the given paths and 404s everything else. */
const serving =
  (bodies: Record<string, string>): Fetcher =>
  async (request) => {
    const body = bodies[new URL(request.url).pathname];
    return body === undefined ? new Response("missing", { status: 404 }) : ok(body);
  };

const offline: Fetcher = async () => {
  throw new TypeError("Failed to fetch");
};

class MockCache {
  entries = new Map<string, Response>();
  constructor(private readonly fetcher: Fetcher) {}

  private key(request: RequestInfo): string {
    const url = typeof request === "string" ? request : (request as Request).url;
    return new URL(url, ORIGIN).pathname;
  }
  async addAll(urls: string[]) {
    for (const url of urls) {
      const response = await this.fetcher(new Request(new URL(url, ORIGIN)));
      if (!response.ok) throw new TypeError(`addAll failed for ${url}`);
      this.entries.set(this.key(url), response);
    }
  }
  async match(request: RequestInfo) {
    return this.entries.get(this.key(request));
  }
  async put(request: RequestInfo, response: Response) {
    this.entries.set(this.key(request), response);
  }
  async delete(request: RequestInfo) {
    return this.entries.delete(this.key(request));
  }
  async keys() {
    return [...this.entries.keys()].map((path) => new Request(new URL(path, ORIGIN)));
  }
}

function load(options: { precache?: string[]; existing?: string[]; fetch: Fetcher }) {
  const source = readFileSync("scripts/service-worker.js", "utf8")
    .replace("__SHELL_VERSION__", "testshell")
    .replace("__IMAGES_VERSION__", "testimages")
    .replace("__PRECACHE__", JSON.stringify(options.precache ?? []));

  const stores = new Map<string, MockCache>();
  const store = (name: string) => {
    if (!stores.has(name)) stores.set(name, new MockCache(options.fetch));
    return stores.get(name)!;
  };
  for (const name of options.existing ?? []) store(name);

  const caches = {
    open: async (name: string) => store(name),
    keys: async () => [...stores.keys()],
    has: async (name: string) => stores.has(name),
    delete: async (name: string) => stores.delete(name),
    match: async (request: RequestInfo, opts?: { cacheName?: string }) =>
      opts?.cacheName ? stores.get(opts.cacheName)?.match(request) : undefined,
  };

  const listeners = new Map<string, Handler>();
  let claimed = false;
  const self = {
    addEventListener: (type: string, handler: Handler) => listeners.set(type, handler),
    location: { origin: ORIGIN },
    clients: {
      claim: async () => {
        claimed = true;
      },
    },
    skipWaiting: () => {},
  };

  new Function("self", "caches", "fetch", source)(self, caches, options.fetch);

  const drive = async (type: "install" | "activate") => {
    let waited: Promise<unknown> = Promise.resolve();
    (listeners.get(type) as (e: unknown) => void)({
      waitUntil: (p: Promise<unknown>) => (waited = p),
    });
    await waited;
  };

  return {
    stores,
    seed(cacheName: string, path: string, body: string) {
      store(cacheName).entries.set(path, ok(body));
    },
    isClaimed: () => claimed,
    install: () => drive("install"),
    activate: () => drive("activate"),
    /** The response the worker chose, or null when it did not intervene. */
    async request(url: string, init?: { mode?: string; method?: string }) {
      const request = new Request(new URL(url, ORIGIN), { method: init?.method ?? "GET" });
      Object.defineProperty(request, "mode", { value: init?.mode ?? "cors" });
      let responded: Promise<Response> | null = null;
      (listeners.get("fetch") as (e: unknown) => void)({
        request,
        respondWith: (p: Promise<Response>) => (responded = p),
      });
      return responded === null ? null : await (responded as Promise<Response>);
    },
  };
}

describe("service worker", () => {
  /**
   * The fault this guards against was invisible and survived every remedy a
   * reader could try. A worker's own fetch is not covered by pressing reload,
   * so once a photograph had been replaced the worker would miss in its image
   * cache, be handed the day-old copy out of the browser's HTTP cache, and
   * store that as the new one. Hard reloads, closing tabs and accepting the
   * update all re-ran the same sequence and re-poisoned the cache.
   *
   * Assets and fonts are deliberately not revalidated: their filenames carry a
   * content hash, so a stale one cannot exist.
   */
  /**
   * Cloudflare answers /offline.html with a 307 to /offline, so the response
   * addAll stores carries redirected = true — and a browser refuses a
   * redirected response as the answer to a navigation. The offline document
   * would have been stored successfully and then failed at the only moment it
   * is ever needed, which is the hardest kind of fault to notice: nothing is
   * wrong until someone is in the field with no signal.
   */
  /**
   * The point of fingerprinting each photograph. Before this, the image cache
   * was named after a hash of every picture in it, so correcting one made the
   * name change and the whole 49 MB download was thrown away and re-fetched.
   */
  test("only the photographs whose bytes changed are dropped", async () => {
    const manifest = JSON.stringify({
      files: { "/images/items/kept.jpg": "aaa", "/images/items/changed.jpg": "new" },
    });
    const sw = load({
      precache: ["/offline-manifest.json"],
      fetch: serving({ "/offline-manifest.json": manifest }),
    });
    await sw.install();

    sw.seed(IMAGES, "/images/items/kept.jpg", "unchanged bytes");
    sw.seed(IMAGES, "/images/items/changed.jpg", "superseded bytes");
    sw.seed(
      IMAGES,
      "/__image-fingerprints",
      JSON.stringify({ "/images/items/kept.jpg": "aaa", "/images/items/changed.jpg": "old" }),
    );

    await sw.activate();

    const images = sw.stores.get(IMAGES)!;
    expect(await images.match("/images/items/kept.jpg")).toBeDefined();
    expect(await images.match("/images/items/changed.jpg")).toBeUndefined();
  });

  /**
   * Moving to a stable cache name would itself have cost every offline reader
   * the download once, which is the very thing being fixed. A cache under the
   * old name holds exactly the photographs this build ships — the name was a
   * hash of them — so its contents are handed over rather than re-fetched.
   */
  test("an existing download is handed over rather than re-fetched", async () => {
    const sw = load({
      precache: ["/offline-manifest.json"],
      existing: [LEGACY_IMAGES],
      fetch: serving({ "/offline-manifest.json": JSON.stringify({ files: {} }) }),
    });
    await sw.install();
    sw.seed(LEGACY_IMAGES, "/images/items/t-90m.jpg", "the reader's copy");

    await sw.activate();

    const moved = await sw.stores.get(IMAGES)!.match("/images/items/t-90m.jpg");
    expect(moved).toBeDefined();
    expect(await moved!.text()).toBe("the reader's copy");
    expect(sw.stores.has(LEGACY_IMAGES)).toBe(false);
  });

  test("the offline document is stored without its redirect flag", async () => {
    const redirecting: Fetcher = async (request) => {
      const response = ok("<html>offline</html>");
      if (new URL(request.url).pathname === "/offline.html") {
        Object.defineProperty(response, "redirected", { value: true });
      }
      return response;
    };

    const sw = load({ precache: ["/offline.html", "/assets/app.js"], fetch: redirecting });
    await sw.install();

    const stored = await sw.stores.get(SHELL)!.match("/offline.html");
    expect(stored).toBeDefined();
    expect(stored!.redirected).toBe(false);
    expect(await stored!.text()).toBe("<html>offline</html>");
  });

  test("photographs are revalidated on a miss, hashed assets are not", async () => {
    const calls: Array<{ path: string; cache: RequestCache | undefined }> = [];
    const recording: Fetcher = async (request, init) => {
      calls.push({ path: new URL(request.url).pathname, cache: init?.cache });
      return ok("body");
    };

    const sw = load({ fetch: recording });
    await sw.request("/images/items/t-90m.jpg");
    await sw.request("/assets/app-abc123.js");

    expect(calls).toEqual([
      { path: "/images/items/t-90m.jpg", cache: "no-cache" },
      { path: "/assets/app-abc123.js", cache: undefined },
    ]);
  });

  test("install precaches every listed file", async () => {
    const precache = ["/assets/app.js", "/fonts/a.woff2", "/offline.html"];
    const sw = load({
      precache,
      fetch: serving({ "/assets/app.js": "js", "/fonts/a.woff2": "font", "/offline.html": "off" }),
    });
    await sw.install();
    expect([...sw.stores.get(SHELL)!.entries.keys()].sort()).toEqual([...precache].sort());
  });

  test("a missing precache file fails the install rather than half-installing", async () => {
    const sw = load({
      precache: ["/assets/app.js", "/gone.js"],
      fetch: serving({ "/assets/app.js": "js" }),
    });
    await expect(sw.install()).rejects.toThrow();
  });

  test("activate keeps this build's caches and retires the app's older ones", async () => {
    const sw = load({
      existing: [SHELL, PAGES, IMAGES, "afa-shell-old", "afa-pages-old", "someone-elses-cache"],
      fetch: offline,
    });
    await sw.activate();
    expect([...sw.stores.keys()].sort()).toEqual(
      [IMAGES, PAGES, SHELL, "someone-elses-cache"].sort(),
    );
    expect(sw.isClaimed()).toBe(true);
  });

  test("a held image is served without touching the network", async () => {
    const sw = load({ fetch: offline });
    sw.seed(IMAGES, "/images/items/t-90m.jpg", "cached photo");
    const response = await sw.request("/images/items/t-90m.jpg");
    expect(await response!.text()).toBe("cached photo");
  });

  test("an image not yet held is fetched and then kept", async () => {
    const sw = load({ fetch: serving({ "/images/items/t-90m.jpg": "photo" }) });
    expect(await (await sw.request("/images/items/t-90m.jpg"))!.text()).toBe("photo");
    expect(await sw.stores.get(IMAGES)!.match("/images/items/t-90m.jpg")).toBeDefined();
  });

  test("a failed response is not kept, so a 404 cannot outlive the mistake", async () => {
    const sw = load({ fetch: serving({}) });
    expect((await sw.request("/images/items/missing.jpg"))!.status).toBe(404);
    expect(await sw.stores.get(IMAGES)!.match("/images/items/missing.jpg")).toBeUndefined();
  });

  test("navigation prefers the network and stores what it gets", async () => {
    const sw = load({ fetch: serving({ "/learn/tanks": "fresh" }) });
    expect(await (await sw.request("/learn/tanks", { mode: "navigate" }))!.text()).toBe("fresh");
    expect(await sw.stores.get(PAGES)!.match("/learn/tanks")).toBeDefined();
  });

  test("offline, a navigation falls back to that URL's stored page", async () => {
    const sw = load({ fetch: offline });
    sw.seed(PAGES, "/learn/tanks", "stored page");
    expect(await (await sw.request("/learn/tanks", { mode: "navigate" }))!.text()).toBe(
      "stored page",
    );
  });

  test("offline and unstored, it says so rather than serving the home page", async () => {
    const sw = load({ precache: ["/offline.html"], fetch: offline });
    sw.seed(SHELL, "/offline.html", "offline notice");
    sw.seed(PAGES, "/", "home page");
    expect(await (await sw.request("/learn/tanks", { mode: "navigate" }))!.text()).toBe(
      "offline notice",
    );
  });

  test("another origin is never intercepted, so Supabase fails the way the app expects", async () => {
    const sw = load({ fetch: offline });
    expect(await sw.request("https://tiftfaczauypdmlfnmiv.supabase.co/rest/v1/streaks")).toBeNull();
  });

  test("a non-GET request is left alone", async () => {
    const sw = load({ fetch: offline });
    expect(await sw.request("/learn", { method: "POST", mode: "navigate" })).toBeNull();
  });
});
