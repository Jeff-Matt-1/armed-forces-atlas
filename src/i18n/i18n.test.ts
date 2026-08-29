import { describe, expect, test } from "bun:test";

import { blocks, items } from "@/content/russia";
import { etTranslations } from "@/content/et";
import { localiseBlock, localiseItem } from "@/content/translations";
import { LOCALES } from "@/i18n/locales";
import { translate } from "@/i18n/strings";

describe("interface strings", () => {
  /**
   * English defines the key set. A missing Estonian string falls back rather
   * than rendering blank, so the failure mode is invisible without a test.
   */
  test("every English key has an Estonian string", () => {
    const untranslated: string[] = [];
    // Keys are only enumerable through a known one; walk them via translate.
    for (const key of KEYS) {
      const en = translate("en", key);
      const et = translate("et", key);
      if (!et || et === en) untranslated.push(key);
    }
    expect(untranslated).toEqual([]);
  });

  test("placeholders survive substitution in both languages", () => {
    for (const locale of LOCALES) {
      expect(translate(locale, "block.entries", { count: 7 })).toContain("7");
      expect(translate(locale, "quiz.scoreLine", { score: 3, total: 4 })).toContain("3");
    }
  });

  test("an unknown placeholder is left alone rather than blanked", () => {
    expect(translate("en", "block.entries", {})).toContain("{count}");
  });
});

describe("content translation", () => {
  test("every block is translated", () => {
    const missing = blocks.filter((b) => !etTranslations.blocks[b.slug]);
    expect(missing.map((b) => b.slug)).toEqual([]);
  });

  test("every item is translated", () => {
    const missing = items.filter((i) => !etTranslations.items[i.slug]);
    expect(missing.map((i) => i.slug)).toEqual([]);
  });

  /**
   * A translation keyed by a slug that no longer exists silently translates
   * nothing — the same class of failure as an item pointing at no block.
   */
  test("no translation key points at a slug that does not exist", () => {
    const blockSlugs = new Set(blocks.map((b) => b.slug));
    const itemSlugs = new Set(items.map((i) => i.slug));
    expect(Object.keys(etTranslations.blocks).filter((k) => !blockSlugs.has(k))).toEqual([]);
    expect(Object.keys(etTranslations.items).filter((k) => !itemSlugs.has(k))).toEqual([]);
  });

  /** The same shape is expected of the Estonian Foundations akas. */
  test("every Estonian Foundations aka is an abbreviation with its expansion", () => {
    const wrong = items
      .filter((i) => i.blockSlug === "foundations")
      .map((i) => [i.slug, etTranslations.items[i.slug]?.aka] as const)
      .filter(([, aka]) => !/^[A-Z]{2,4} \(.+\)$/.test(aka ?? ""))
      .map(([slug, aka]) => `${slug}: ${aka}`);
    expect(wrong).toEqual([]);
  });

  test("localising to English returns the source untouched", () => {
    const block = blocks[0]!;
    const item = items[0]!;
    expect(localiseBlock(block, "en")).toBe(block);
    expect(localiseItem(item, "en")).toBe(item);
  });

  test("a translated item keeps the fields translation does not cover", () => {
    const item = items.find((i) => i.slug === "t-90m")!;
    const et = localiseItem(item, "et");
    // Identity and imagery are not language-dependent.
    expect(et.slug).toBe(item.slug);
    expect(et.imageUrl).toBe(item.imageUrl);
    expect(et.imageCredit).toBe(item.imageCredit);
    expect(et.sort).toBe(item.sort);
    // Prose is.
    expect(et.doctrineNote).not.toBe(item.doctrineNote);
  });

  /**
   * Estonian uses õ, ä, ö, ü and š/ž. Their absence across the whole table
   * would mean the files had been mangled by an encoding step somewhere.
   */
  test("Estonian diacritics survive the build", () => {
    const all = Object.values(etTranslations.items)
      .flatMap((t) => [t.doctrineNote ?? "", ...(t.cues ?? []), ...(t.placements ?? [])])
      .join(" ");
    expect(/[õäöüšž]/i.test(all)).toBe(true);
  });

  test("no stray Cyrillic or invisible characters in the Estonian tables", () => {
    const all = [
      ...Object.values(etTranslations.blocks).flatMap((b) => [
        b.title ?? "",
        b.subtitle ?? "",
        b.brief ?? "",
        b.doctrineNote ?? "",
      ]),
      ...Object.values(etTranslations.items).flatMap((t) => [
        t.name ?? "",
        t.aka ?? "",
        t.armament ?? "",
        t.rangeText ?? "",
        t.doctrineNote ?? "",
        ...(t.cues ?? []),
        ...(t.placements ?? []),
      ]),
    ].join(" ");
    expect(/[\u0400-\u04FF]/u.test(all)).toBe(false);
    const INVISIBLE = [0x00ad, 0x200b, 0x200c, 0x200d, 0xfeff];
    expect([...all].some((c) => INVISIBLE.includes(c.codePointAt(0)!))).toBe(false);
  });
});

/** Every key used by the interface, listed so the test above can walk them. */
const KEYS = [
  "nav.blocks",
  "nav.review",
  "nav.progress",
  "nav.sources",
  "nav.signIn",
  "nav.signOut",
  "shell.tagline",
  "shell.footerSources",
  "shell.footerDoctrine",
  "shell.language",
  "home.eyebrow",
  "home.title",
  "home.intro",
  "home.startFoundations",
  "home.photoDrill",
  "home.statBlocks",
  "home.statEntries",
  "home.statDue",
  "home.statStreak",
  "home.continue",
  "home.readyBlocks",
  "home.allBlocks",
  "home.modeFlashcards",
  "home.modeFlashcardsBody",
  "home.modePhotoId",
  "home.modePhotoIdBody",
  "home.modeStructure",
  "home.modeStructureBody",
  "home.openDrill",
  "block.blockNumber",
  "block.noPhotograph",
  "block.entries",
  "block.doctrineNote",
  "block.flashcards",
  "block.photoId",
  "block.structureDrill",
  "block.exam",
  "item.recognitionCues",
  "item.forceStructure",
  "item.armamentRange",
  "item.employment",
  "item.data",
  "item.status",
  "item.crew",
  "quiz.identify",
  "quiz.scoreLine",
  "quiz.failLine",
  "quiz.saving",
  "quiz.recognitionCard",
  "quiz.backToBlocks",
  "quiz.passed",
  "quiz.strong",
  "quiz.needsWork",
  "quiz.missed",
  "quiz.finish",
  "quiz.next",
  "quiz.saveFailed",
  "quiz.saveRetry",
  "quiz.notEnough",
  "quiz.notEnoughBody",
  "gaps.title",
  "gaps.cards",
  "gaps.photo",
  "gaps.placement",
  "gaps.exam",
  "gaps.open",
  "quiz.notForBlock",
  "quiz.notForBlockBody",
] as const;
