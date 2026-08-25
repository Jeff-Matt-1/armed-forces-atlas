import { blocks as rawBlocks, items as rawItems, type Block, type Item } from "@/content/russia";

export type { Block, Item };

export const allBlocks: Block[] = [...rawBlocks].sort((a, b) => a.ordinal - b.ordinal);
export const allItems: Item[] = rawItems;

export const readyBlocks = allBlocks.filter((b) => b.status === "ready");

export function getBlock(slug: string): Block | undefined {
  return allBlocks.find((b) => b.slug === slug);
}

export function getItem(slug: string): Item | undefined {
  return allItems.find((i) => i.slug === slug);
}

export function itemsOfBlock(slug: string): Item[] {
  return allItems.filter((i) => i.blockSlug === slug).sort((a, b) => a.sort - b.sort);
}

export function studyableItems(blockSlugs?: string[]): Item[] {
  const ready = new Set(readyBlocks.map((b) => b.slug));
  return allItems.filter(
    (i) => ready.has(i.blockSlug) && (!blockSlugs || blockSlugs.includes(i.blockSlug)),
  );
}

/** Items that carry a photograph — the only ones usable for visual recognition drills. */
export function photoItems(blockSlugs?: string[]): Item[] {
  return studyableItems(blockSlugs).filter((i) => Boolean(i.imageUrl));
}

/** Every distinct force-structure placement string across studyable content. */
export function allPlacements(blockSlugs?: string[]): string[] {
  const set = new Set<string>();
  for (const item of studyableItems(blockSlugs)) {
    for (const placement of item.placements) set.add(placement);
  }
  return [...set];
}

export function blockItemCount(slug: string): number {
  return allItems.filter((i) => i.blockSlug === slug).length;
}

export function plateNumber(ordinal: number): string {
  return ordinal.toString().padStart(2, "0");
}

/**
 * Progressive unlock: a ready block opens once the previous ready block's exam
 * is passed. Foundations is always open.
 */
export function isBlockUnlocked(
  slug: string,
  passedBlocks: Set<string>,
  gateEnabled: boolean,
): boolean {
  const block = getBlock(slug);
  if (!block || block.status !== "ready") return false;
  if (!gateEnabled) return true;
  const index = readyBlocks.findIndex((b) => b.slug === slug);
  if (index <= 0) return true;
  const previous = readyBlocks[index - 1];
  return previous ? passedBlocks.has(previous.slug) : true;
}
