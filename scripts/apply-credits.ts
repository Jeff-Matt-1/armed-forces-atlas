/**
 * Writes sourced image metadata into a content file.
 *
 *   bun run scripts/apply-credits.ts src/content/items/heavy-weapons.ts
 *
 * Fills the null imageUrl / imageCredit / imagePage fields of each entry from
 * scripts/sources/credits.json, matched by slug. Credits come from the Commons
 * API (see scripts/commons.ts) so attribution is never hand-typed.
 *
 * Entries that already carry an imageUrl are left alone, so this is safe to
 * re-run after adding more images to a block.
 */

type Credit = { slug: string; localPath: string; imageCredit: string; imagePage: string };

const target = Bun.argv[2];
if (!target) {
  console.error("usage: bun run scripts/apply-credits.ts <content-file.ts>");
  process.exit(1);
}

const credits: Credit[] = JSON.parse(
  await Bun.file("scripts/sources/credits.json").text(),
) as Credit[];
let src = await Bun.file(target).text();

let patched = 0;
const skipped: string[] = [];

for (const credit of credits) {
  const re = new RegExp(
    `(slug: "${credit.slug}",[\\s\\S]{0,600}?)imageUrl: null,\\n(\\s*)imageCredit: null,\\n\\s*imagePage: null,`,
  );
  if (!re.test(src)) {
    if (src.includes(`slug: "${credit.slug}",`)) skipped.push(credit.slug);
    continue;
  }
  src = src.replace(
    re,
    (_m, head: string, indent: string) =>
      `${head}imageUrl: ${JSON.stringify(credit.localPath)},\n` +
      `${indent}imageCredit: ${JSON.stringify(credit.imageCredit)},\n` +
      `${indent}imagePage: ${JSON.stringify(credit.imagePage)},`,
  );
  patched++;
}

await Bun.write(target, src);
console.log(`${target}: patched ${patched}`);
if (skipped.length) console.log(`already had an image: ${skipped.join(", ")}`);
