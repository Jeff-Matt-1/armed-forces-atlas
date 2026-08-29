import { describe, expect, test } from "bun:test";

import { blocks, items } from "@/content/russia";
import { armamentQuestion, placementQuestion } from "@/lib/quiz";

const blockSlugs = new Set(blocks.map((b) => b.slug));
const readyBlocks = blocks.filter((b) => b.status === "ready");

describe("content wiring", () => {
  /**
   * An item whose blockSlug matches no block belongs to nothing: it never
   * renders, and its block silently reports zero entries. Nothing else in the
   * app fails, which is what makes it worth a test — blocks 15's items were
   * written against "recon" while the block itself is "reconnaissance".
   */
  test("every item belongs to a declared block", () => {
    const orphans = items.filter((i) => !blockSlugs.has(i.blockSlug));
    expect(orphans.map((i) => `${i.slug} -> ${i.blockSlug}`)).toEqual([]);
  });

  test("every block marked ready actually has entries", () => {
    const empty = readyBlocks.filter((b) => !items.some((i) => i.blockSlug === b.slug));
    expect(empty.map((b) => b.slug)).toEqual([]);
  });

  test("slugs are unique", () => {
    const seen = new Set<string>();
    const duplicates = items.filter((i) => (seen.has(i.slug) ? true : (seen.add(i.slug), false)));
    expect(duplicates.map((i) => i.slug)).toEqual([]);
  });

  test("ready blocks carry a brief and a doctrinal note", () => {
    const bare = readyBlocks.filter((b) => !b.brief || !b.doctrineNote);
    expect(bare.map((b) => b.slug)).toEqual([]);
  });

  test("every item has an image and a credit for it", () => {
    const uncredited = items.filter((i) => !i.imageUrl || !i.imageCredit || !i.imagePage);
    expect(uncredited.map((i) => i.slug)).toEqual([]);
  });
});

describe("question generation", () => {
  /**
   * A block needs enough items for the generator to find three distractors,
   * or its exam comes out empty — the failure that once left the Ranks block
   * a dead end.
   */
  test("every ready block can build a placement question", () => {
    const barren = readyBlocks.filter((b) => {
      const pool = items.filter((i) => i.blockSlug === b.slug);
      return !pool.some((i) => placementQuestion(i, pool) !== null);
    });
    expect(barren.map((b) => b.slug)).toEqual([]);
  });

  /**
   * Unarmed equipment must say so with null rather than with prose. Writing
   * "None" as a string makes several phrasings of nothing look like several
   * distinct answers, and the generator duly offers four options that all mean
   * none — a question nobody can answer.
   */
  test("no armament question offers only ways of saying none", () => {
    const isNone = (s: string) => /^none\b/i.test(s.trim());
    const bad: string[] = [];
    for (const block of readyBlocks) {
      const pool = items.filter((i) => i.blockSlug === block.slug);
      for (const item of pool) {
        const q = armamentQuestion(item, pool);
        if (q && q.options.filter(isNone).length > 1) bad.push(`${block.slug}/${item.slug}`);
      }
    }
    expect(bad).toEqual([]);
  });
});
