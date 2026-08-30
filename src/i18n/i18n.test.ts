import { describe, expect, test } from "bun:test";

import { blocks, items } from "@/content/russia";
import { etTranslations } from "@/content/et";
import { localiseBlock, localiseItem } from "@/content/translations";
import { allItems, itemsOfBlock, setContentLocale } from "@/lib/content";
import { designationQuestion } from "@/lib/quiz";
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
  /**
   * A translation may only translate. localiseItem merges field by field, so a
   * table entry that supplies a field English leaves null does not translate
   * anything -- it invents content for one language. Every EW, C2 and radar
   * entry did exactly that with armament, so Estonian readers were asked
   * armament questions that do not exist in English, and every option was a
   * different way of writing "nothing".
   */
  test("no translation adds a field English does not have", () => {
    const invented: string[] = [];
    for (const item of items) {
      const t = etTranslations.items[item.slug];
      if (!t) continue;
      if (!item.armament && t.armament) invented.push(`${item.slug}.armament`);
      if (!item.aka && t.aka) invented.push(`${item.slug}.aka`);
      if (!item.rangeText && t.rangeText) invented.push(`${item.slug}.rangeText`);
      if (!item.crew && t.crew) invented.push(`${item.slug}.crew`);
    }
    expect(invented).toEqual([]);
  });

  /**
   * "What is the main armament?" has no answer for something unarmed: every
   * option is a rephrasing of nothing. Unarmed entries say so with null, which
   * stops the question being generated at all -- in every language, since a
   * translation that writes "puudub" puts the question back.
   */
  test("no armament, in any language, means nothing", () => {
    const prose: string[] = [];
    const nothing = /^(none|puudub|standardvarustuses puudub|ei ole)\b/i;
    for (const locale of LOCALES) {
      for (const item of items.map((i) => localiseItem(i, locale))) {
        if (item.armament && nothing.test(item.armament.trim())) {
          prose.push(`${locale} ${item.slug}: "${item.armament}"`);
        }
      }
    }
    expect(prose).toEqual([]);
  });

  /**
   * An untranslated field still renders -- in English, beside Estonian ones.
   * In a quiz that is worse than a blank: one UAZ entry had no Estonian
   * armament, so "None as standard" appeared as an option next to
   * "Standardvarustuses puudub" and was marked the correct answer. On a card it
   * is merely wrong-looking -- a new entry shipped reading "In service" under
   * an Estonian heading -- so every displayed field is checked, not just the
   * two a quiz draws its options from.
   */
  test("no answerable field falls back to English", () => {
    const fallbacks: string[] = [];
    for (const item of items) {
      const t = etTranslations.items[item.slug];
      if (!t) continue;
      if (item.aka && !t.aka) fallbacks.push(`${item.slug}.aka`);
      if (item.armament && !t.armament) fallbacks.push(`${item.slug}.armament`);
      if (item.rangeText && !t.rangeText) fallbacks.push(`${item.slug}.rangeText`);
      if (item.cues.length && !t.cues) fallbacks.push(`${item.slug}.cues`);
      if (item.placements.length && !t.placements) fallbacks.push(`${item.slug}.placements`);
      if (item.doctrineNote && !t.doctrineNote) fallbacks.push(`${item.slug}.doctrineNote`);
      if (item.crew && !t.crew) fallbacks.push(`${item.slug}.crew`);
      if (item.service && !t.service) fallbacks.push(`${item.slug}.service`);
    }
    expect(fallbacks).toEqual([]);
  });

  /**
   * A designation question must not carry its own answer.
   *
   * The guard for this compared spellings, and a Russian name reaches the app
   * through more than one: "Krasuha-S4" was asked against "1RL257 Krasukha-4",
   * and Estonian "\u0160ilka" against "ZSU-23-4 Shilka", because kh/h and \u0161/sh made
   * one word look like two. Reducing both sides to a single skeleton is what
   * lets the check see them, so the check is written out again here rather
   * than calling the implementation it is meant to be testing.
   */
  test("no designation question contains its own answer", () => {
    const skeleton = (v: string) =>
      v
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/shch/g, "s")
        .replace(/kh/g, "h")
        .replace(/sh/g, "s")
        .replace(/zh/g, "z")
        .replace(/ch/g, "c")
        .replace(/ts/g, "c")
        .replace(/y/g, "i")
        .replace(/[^\p{L}\p{N}]/gu, "");

    const leaky: string[] = [];
    for (const locale of LOCALES) {
      setContentLocale(locale);
      for (const item of allItems) {
        if (!item.aka) continue;
        if (!designationQuestion(item, itemsOfBlock(item.blockSlug))) continue;
        const aka = skeleton(item.aka);
        const name = skeleton(item.name);
        if (aka.length >= 4 && (name.includes(aka) || aka.includes(name))) {
          leaky.push(locale + " " + item.name + ' <- "' + item.aka + '"');
        }
      }
    }
    setContentLocale("en");
    expect(leaky).toEqual([]);
  });

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
