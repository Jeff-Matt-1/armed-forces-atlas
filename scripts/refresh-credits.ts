/**
 * Rewrites the image credit of entries whose photograph has been replaced.
 *
 *   bun run scripts/refresh-credits.ts src/content/items/vessels.ts udaloy moskva
 *
 * apply-credits.ts deliberately only fills null fields, so that re-running it
 * after adding images can never disturb an entry that is already sourced. That
 * is the wrong tool when the picture itself changes: the file on disk is new,
 * so the old author and licence beside it are now simply wrong. This overwrites
 * imageCredit and imagePage from scripts/sources/credits.json for named slugs
 * only, which keeps "swap a photo" an explicit act rather than a side effect.
 */

type Credit = { slug: string; localPath: string; imageCredit: string; imagePage: string };

const [target, ...slugs] = Bun.argv.slice(2);
if (!target || slugs.length === 0) {
  console.error("usage: bun run scripts/refresh-credits.ts <content-file.ts> <slug>...");
  process.exit(1);
}

const credits: Credit[] = JSON.parse(
  await Bun.file("scripts/sources/credits.json").text(),
) as Credit[];
const bySlug = new Map(credits.map((c) => [c.slug, c]));

let src = await Bun.file(target).text();
let patched = 0;

for (const slug of slugs) {
  const credit = bySlug.get(slug);
  if (!credit) {
    console.log(`NOCREDIT ${slug}`);
    continue;
  }

  // Work inside one entry only. Entry objects in these files end at a line that
  // is exactly "  },", so slicing to the next one keeps a replace from reaching
  // into the following entry — the failure that once removed the wrong field.
  const start = src.indexOf(`slug: "${slug}",`);
  if (start === -1) {
    console.log(`NOENTRY  ${slug}`);
    continue;
  }
  const end = src.indexOf("\n  },\n", start);
  const entry = src.slice(start, end);

  // Prettier wraps a long imagePage onto its own line, so both forms occur.
  const next = entry
    .replace(/imageUrl: "[^"]*"/, `imageUrl: "${credit.localPath}"`)
    .replace(/imageCredit:\s*\n?\s*"[^"]*"/, `imageCredit: ${JSON.stringify(credit.imageCredit)}`)
    .replace(/imagePage:\s*\n?\s*"[^"]*"/, `imagePage: ${JSON.stringify(credit.imagePage)}`);

  if (next === entry) {
    console.log(`NOCHANGE ${slug}`);
    continue;
  }
  src = src.slice(0, start) + next + src.slice(end);
  patched++;
  console.log(`ok       ${slug.padEnd(22)} ${credit.imageCredit}`);
}

await Bun.write(target, src);
console.log(`\n${patched} entries updated in ${target}`);
