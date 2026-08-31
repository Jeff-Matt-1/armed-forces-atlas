import { allItems } from "@/lib/content";
import { existsSync } from "node:fs";

const ORIGIN = "https://app.armed-forces-atlas.workers.dev";
const missingLocal: string[] = [];
const bad: string[] = [];

const urls = allItems
  .filter((i) => i.imageUrl)
  .map((i) => ({ slug: i.slug, url: i.imageUrl! }));

console.log(`checking ${urls.length} referenced images\n`);

for (const { slug, url } of urls) {
  if (!existsSync("public" + url)) missingLocal.push(`${slug} -> ${url}`);
}

// Production, in small parallel batches so we do not hammer the worker.
for (let i = 0; i < urls.length; i += 12) {
  const batch = urls.slice(i, i + 12);
  const results = await Promise.all(
    batch.map(async ({ slug, url }) => {
      try {
        const r = await fetch(ORIGIN + url, { method: "GET" });
        return { slug, url, status: r.status, type: r.headers.get("content-type") ?? "" };
      } catch (e) {
        return { slug, url, status: 0, type: String(e) };
      }
    }),
  );
  for (const r of results) {
    if (r.status !== 200 || !r.type.startsWith("image/")) {
      bad.push(`${r.status} ${r.type.slice(0, 30)}  ${r.slug} -> ${r.url}`);
    }
  }
}

console.log(`missing on disk: ${missingLocal.length}`);
for (const m of missingLocal) console.log("  " + m);
console.log(`\nnot served as an image in production: ${bad.length}`);
for (const b of bad) console.log("  " + b);
