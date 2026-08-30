import { describe, expect, test } from "bun:test";

import { blocks, items } from "@/content/russia";
import { allPlacements, itemsOfBlock } from "@/lib/content";
import {
  armamentQuestion,
  askableCounts,
  buildExam,
  buildPhotoQuiz,
  designationQuestion,
  photoQuestion,
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

  /**
   * An aka is what a thing is called, not where it sits in an ordnance
   * catalogue. "Sagittarius; 1B181" and "6P41" made designation recall a test
   * of having memorised a GRAU index, which says nothing about recognising
   * anything. Where NATO gave a reporting name that is the answer -- AT-14
   * Spriggan for the 9M133 Kornet -- and where it gave none, an English gloss
   * of the Russian name, or nothing at all.
   *
   * Item *names* may carry an index: the 9M133 Kornet is called that. Only the
   * "also known as" is held to this.
   */
  test("no aka is a bare GRAU index", () => {
    const index = /^\d+[A-Z]+\d+[A-Z]?$/;
    const offenders: string[] = [];
    for (const item of items) {
      if (!item.aka) continue;
      for (const part of item.aka.split(/[;,/]/)) {
        if (index.test(part.trim())) offenders.push(item.slug + ': "' + item.aka + '"');
      }
    }
    expect(offenders).toEqual([]);
  });

  /**
   * Two placements that mean the same thing become two options in one
   * question, and the reader has to guess which wording the app prefers.
   * The Shilka and the Tunguska both sit in regimental air defence batteries
   * and each described it in its own word order, so "tank and motor rifle
   * regiments" was marked wrong against "motor rifle and tank regiments".
   *
   * Comparing a sorted bag of significant words catches the word-order case,
   * which is the one that arises when two people write the same fact twice.
   */
  test("no two placements in a block say the same thing", () => {
    const skip = new Set(["of", "and", "the", "a", "in", "for", "at", "to", "ja", "ning"]);
    const bag = (value: string) =>
      [
        ...new Set(
          value
            .toLowerCase()
            .split(/[^\p{L}\p{N}]+/u)
            .filter((word) => word && !skip.has(word)),
        ),
      ]
        .sort()
        .join(" ");

    const clashes: string[] = [];
    for (const block of readyBlocks) {
      const groups = new Map<string, Set<string>>();
      for (const placement of allPlacements([block.slug])) {
        const key = bag(placement);
        if (!groups.has(key)) groups.set(key, new Set());
        groups.get(key)!.add(placement);
      }
      for (const variants of groups.values()) {
        if (variants.size > 1) clashes.push(block.slug + ": " + [...variants].join(" / "));
      }
    }
    expect(clashes).toEqual([]);
  });

  test("slugs are unique", () => {
    const seen = new Set<string>();
    const duplicates = items.filter((i) => (seen.has(i.slug) ? true : (seen.add(i.slug), false)));
    expect(duplicates.map((i) => i.slug)).toEqual([]);
  });

  /**
   * Foundations entries name a category, not a machine, so the alternative
   * designation is the Russian abbreviation and its expansion — "BTR
   * (bronetransportyor)". The block had drifted into four different shapes,
   * including a bare "REB" with nothing to expand it, so the cards no longer
   * read the same way.
   */
  test("every Foundations aka is an abbreviation with its expansion", () => {
    const wrong = items
      .filter((i) => i.blockSlug === "foundations")
      .filter((i) => !/^[A-Z]{2,4} \(.+\)$/.test(i.aka ?? ""))
      .map((i) => `${i.slug}: ${i.aka}`);
    expect(wrong).toEqual([]);
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
   * askableCounts is the denominator mastery divides by, so a block can only
   * reach 100% if every item it counts can actually be asked about. It used to
   * approximate the builders — counting items with a photograph, or with enough
   * distinct placements — while the builders additionally reject a question
   * whose answer can be matched to its own prompt. Foundations counted ten
   * placement questions and could build three, so the block was unfinishable
   * and the reader was left staring at a number that would not move.
   */
  test("every counted question can actually be built", () => {
    const mismatches: string[] = [];
    for (const block of readyBlocks) {
      const pool = itemsOfBlock(block.slug);
      const photos = pool.filter((i) => i.imageUrl);
      const placements = allPlacements([block.slug]);
      const counted = askableCounts(block.slug);

      const buildablePhoto = pool.filter((i) => photoQuestion(i, photos) !== null).length;
      const buildablePlacement = pool.filter(
        (i) => placementQuestion(i, placements) !== null,
      ).length;

      if (counted.photo !== buildablePhoto) {
        mismatches.push(`${block.slug} photo: counts ${counted.photo}, builds ${buildablePhoto}`);
      }
      if (counted.placement !== buildablePlacement) {
        mismatches.push(
          `${block.slug} placement: counts ${counted.placement}, builds ${buildablePlacement}`,
        );
      }
    }
    expect(mismatches).toEqual([]);
  });

  /**
   * Whether a question can be built must not depend on which distractors happen
   * to be drawn, or the denominator would wobble between renders and a block
   * would drift in and out of being finishable.
   */
  test("buildability does not depend on the draw", () => {
    const unstable: string[] = [];
    for (const block of readyBlocks) {
      const pool = itemsOfBlock(block.slug);
      const placements = allPlacements([block.slug]);
      for (const item of pool) {
        const results = new Set(
          Array.from({ length: 25 }, () => placementQuestion(item, placements) !== null),
        );
        if (results.size > 1) unstable.push(`${block.slug}/${item.slug}`);
      }
    }
    expect(unstable).toEqual([]);
  });

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
