import { describe, expect, test } from "bun:test";

import { blocks, items } from "@/content/russia";
import {
  armamentQuestion,
  buildExam,
  buildPhotoQuiz,
  designationQuestion,
  placementQuestion,
} from "@/lib/quiz";

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
   * The failure this guards against is the one that once left Ranks a dead
   * end: a block that looks finished but whose exam generates nothing.
   *
   * It deliberately asserts against buildExam rather than against one question
   * type. Not every block can build every kind — Ranks has 28 entries but only
   * two distinct placements, so it never produces a placement question and
   * leans on designation and seniority instead. What matters is that the exam
   * a learner actually sits is not empty.
   */
  test("every ready block builds a usable exam", () => {
    const thin = readyBlocks
      .map((b) => ({ slug: b.slug, count: buildExam(b.slug).length }))
      .filter((r) => r.count < 8);
    expect(thin).toEqual([]);
  });

  test("every ready block builds photo questions", () => {
    const barren = readyBlocks.filter((b) => buildPhotoQuiz([b.slug]).length === 0);
    expect(barren.map((b) => b.slug)).toEqual([]);
  });

  /**
   * A question is unfair when the right option can be picked out by a word it
   * alone shares with the subject of the prompt — asking for the armament of
   * the 2A65 Msta-B and offering "152 mm 2A65 howitzer" against three options
   * naming no gun at all. The learner matches a string instead of knowing the
   * answer.
   *
   * Sharing a word is fine when other options share it too: General-Mayor,
   * General-Leytenant and General-Polkovnik all answer to "General", and the
   * learner still has to know which. Only a word unique to the answer gives it
   * away.
   *
   * Photo-ID and seniority prompts never name their subject, so they cannot
   * leak and are not checked.
   */
  test("no question can be answered by matching a word in the prompt", () => {
    const GENERIC = new Set([
      "class",
      "project",
      "obr",
      "mod",
      "modernisation",
      "variant",
      "system",
      "vehicle",
      "carrier",
      "launcher",
      "bridge",
      "radar",
      "the",
      "and",
      "mm",
    ]);
    const words = (value: string) =>
      value
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= 2 && !GENERIC.has(w));

    const leaking: string[] = [];
    for (const block of blocks) {
      const pool = items.filter((i) => i.blockSlug === block.slug);
      const placements = [...new Set(pool.flatMap((i) => i.placements))];
      for (const item of pool) {
        const built = [
          designationQuestion(item, pool),
          placementQuestion(item, placements),
          armamentQuestion(item, pool),
        ];
        for (const q of built) {
          if (!q) continue;
          const subject = q.kind === "designation" ? (item.aka ?? "") : item.name;
          const subjectWords = new Set(words(subject));
          const shared = words(q.answer).filter((w) => subjectWords.has(w));
          if (shared.length === 0) continue;
          const others = q.options.filter((o) => o !== q.answer);
          if (!others.some((o) => words(o).some((w) => shared.includes(w)))) {
            leaking.push(`${block.slug}/${item.slug} [${q.kind}] gives away "${shared.join(",")}"`);
          }
        }
      }
    }
    expect(leaking).toEqual([]);
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
