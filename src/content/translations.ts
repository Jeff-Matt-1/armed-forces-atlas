import { etTranslations } from "@/content/et";
import type { Block, Item } from "@/content/types";
import type { Locale } from "@/i18n/locales";

/**
 * Translated content lives apart from the English source rather than as extra
 * fields on every entry, so a block can be translated without touching the
 * data it translates, and an untranslated field simply falls back.
 *
 * Every field is optional. A partially translated entry renders the parts that
 * exist in the chosen language and the rest in English, which is the right
 * behaviour while translation is in progress and harmless once it is not.
 */
export type BlockTranslation = {
  title?: string;
  subtitle?: string;
  brief?: string;
  doctrineNote?: string;
};

export type ItemTranslation = {
  /** Designations such as "T-90M" are not translated; category names are. */
  name?: string;
  aka?: string;
  armament?: string;
  rangeText?: string;
  cues?: string[];
  placements?: string[];
  doctrineNote?: string;
  crew?: string;
  service?: string;
};

export type ContentTranslations = {
  blocks: Record<string, BlockTranslation>;
  items: Record<string, ItemTranslation>;
};

const EMPTY: ContentTranslations = { blocks: {}, items: {} };

/**
 * Tables are imported as values rather than registered by a side-effecting
 * import. This package sets "sideEffects": false, so an import kept only for
 * its side effect is fair game for the bundler to remove — which is exactly
 * what happened to the Estonian content the first time round.
 */
const TABLES: Partial<Record<Locale, ContentTranslations>> = {
  et: etTranslations,
};

function tableFor(locale: Locale): ContentTranslations {
  return TABLES[locale] ?? EMPTY;
}

export function localiseBlock(block: Block, locale: Locale): Block {
  if (locale === "en") return block;
  const t = tableFor(locale).blocks[block.slug];
  if (!t) return block;
  return {
    ...block,
    title: t.title ?? block.title,
    subtitle: t.subtitle ?? block.subtitle,
    brief: t.brief ?? block.brief,
    doctrineNote: t.doctrineNote ?? block.doctrineNote,
  };
}

export function localiseItem(item: Item, locale: Locale): Item {
  if (locale === "en") return item;
  const t = tableFor(locale).items[item.slug];
  if (!t) return item;
  return {
    ...item,
    name: t.name ?? item.name,
    aka: t.aka ?? item.aka,
    armament: t.armament ?? item.armament,
    rangeText: t.rangeText ?? item.rangeText,
    cues: t.cues ?? item.cues,
    placements: t.placements ?? item.placements,
    doctrineNote: t.doctrineNote ?? item.doctrineNote,
    crew: t.crew ?? item.crew,
    service: t.service ?? item.service,
  };
}

/** How much of a locale is done, for the coverage test and for reporting. */
export function translationCoverage(
  locale: Locale,
  blocks: Block[],
  items: Item[],
): { blocks: number; items: number; totalBlocks: number; totalItems: number } {
  const table = tableFor(locale);
  return {
    blocks: blocks.filter((b) => table.blocks[b.slug]).length,
    items: items.filter((i) => table.items[i.slug]).length,
    totalBlocks: blocks.length,
    totalItems: items.length,
  };
}
