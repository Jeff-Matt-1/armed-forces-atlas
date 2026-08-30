import { etBlocks } from "@/content/et/blocks";
import { etAirDefence } from "@/content/et/items/air-defence";
import { etAircraft } from "@/content/et/items/aircraft";
import { etApc } from "@/content/et/items/apc";
import { etArtillery } from "@/content/et/items/artillery";
import { etC2 } from "@/content/et/items/c2";
import { etDrones } from "@/content/et/items/drones";
import { etEngineering } from "@/content/et/items/engineering";
import { etEw } from "@/content/et/items/ew";
import { etFoundations } from "@/content/et/items/foundations";
import { etHandguns } from "@/content/et/items/handguns";
import { etHeavyWeapons } from "@/content/et/items/heavy-weapons";
import { etIfv } from "@/content/et/items/ifv";
import { etLightVehicles } from "@/content/et/items/light-vehicles";
import { etMissiles } from "@/content/et/items/missiles";
import { etRadars } from "@/content/et/items/radars";
import { etRanks } from "@/content/et/items/ranks";
import { etRecon } from "@/content/et/items/recon";
import { etSubmarines } from "@/content/et/items/submarines";
import { etTanks } from "@/content/et/items/tanks";
import { etTrucks } from "@/content/et/items/trucks";
import { etVessels } from "@/content/et/items/vessels";
import type { ContentTranslations } from "@/content/translations";

/**
 * The Estonian content table, assembled from one file per block.
 *
 * Exported as a value and imported as one by src/content/translations.ts.
 * It was registered by a side-effecting import at first, which the bundler was
 * free to drop — and did. Anything absent falls back to English, which is what
 * let the translation land block by block.
 */
export const etTranslations: ContentTranslations = {
  blocks: etBlocks,
  items: {
    ...etFoundations,
    ...etRanks,
    ...etHandguns,
    ...etHeavyWeapons,
    ...etLightVehicles,
    ...etTrucks,
    ...etArtillery,
    ...etIfv,
    ...etApc,
    ...etTanks,
    ...etEw,
    ...etC2,
    ...etMissiles,
    ...etRadars,
    ...etEngineering,
    ...etAirDefence,
    ...etRecon,
    ...etVessels,
    ...etSubmarines,
    ...etDrones,
    ...etAircraft,
  },
};
