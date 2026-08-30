import type { Item } from "@/content/types";

/**
 * Block 07 — IFVs.
 *
 * A short family with a clear internal logic. The BMP line runs low, wide and
 * tracked, and is separated almost entirely by turret and gun. The BMD line is
 * the same idea shrunk to fit an aircraft, so the tell is size and roadwheel
 * count rather than armament. The one structural break is the BMP-3, which
 * moved the engine to the rear and rearranged everything around it.
 */
export const ifv: Item[] = [
  {
    slug: "bmp-1",
    blockSlug: "ifv",
    name: "BMP-1",
    aka: null,
    imageUrl: "/images/items/bmp-1.jpg",
    imageCredit: "Attribution — Łukasz Golowanow & Maciek Hypś, Konflikty.pl",
    imagePage: "https://commons.wikimedia.org/wiki/File:BMP-1_Zlot_Dar%C5%82owo_2009.JPG",
    armament: "73 mm 2A28 Grom, 7.62 mm PKT, 9M14 Malyutka rail",
    rangeText: "Gun effective to about 800 m",
    cues: [
      "Very low flat hull with a sharply pointed bow",
      "Small conical one-man turret set forward of centre",
      "Short stubby 73 mm barrel with a bulbous end — no long thin gun",
      "Missile rail mounted above the gun barrel",
    ],
    placements: [
      "Motor rifle battalions in older and reserve establishments",
      "Widely reactivated from storage",
    ],
    doctrineNote:
      "The vehicle that created the category: infantry that fights from and alongside its transport rather than dismounting far back. Its low-pressure gun was never meant to fight tanks, only to open buildings and trenches.",
    crew: "3 + 8",
    service: "In service",
    sort: 0,
  },
  {
    slug: "bmp-2",
    blockSlug: "ifv",
    name: "BMP-2",
    aka: null,
    imageUrl: "/images/items/bmp-2.jpg",
    imageCredit: "CC BY-SA 3.0 — Andshel",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%91%D0%9C%D0%9F-2_%D0%BD%D0%B0_%D0%BF%D0%B0%D1%80%D0%B0%D0%B4%D0%B5_%D0%B2_%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B5.JPG",
    armament: "30 mm 2A42 autocannon, 7.62 mm PKT, 9M113 Konkurs",
    rangeText: "Autocannon effective to about 2,000 m",
    cues: [
      "Taller two-man turret, set further back than a BMP-1's",
      "Long thin 30 mm barrel that elevates steeply — the clearest split from a BMP-1",
      "Missile launcher on the turret roof rather than over the barrel",
      "Same six roadwheels and low hull as the BMP-1 underneath",
    ],
    placements: [
      "Motor rifle battalions across the ground forces",
      "The most common Russian IFV in service",
    ],
    doctrineNote:
      "The 30 mm gun and the high elevation answered two lessons from Afghanistan at once: the need to suppress at range and the need to shoot uphill. It remains the standard infantry vehicle.",
    crew: "3 + 7",
    service: "In service",
    sort: 1,
  },
  {
    slug: "bmp-3",
    blockSlug: "ifv",
    name: "BMP-3",
    aka: null,
    imageUrl: "/images/items/bmp-3.jpg",
    imageCredit: "CC BY 2.0 — Dmitriy Fomin from Moscow, Russia",
    imagePage: "https://commons.wikimedia.org/wiki/File:BMP-3_(41204909204).jpg",
    armament: "100 mm 2A70 gun-launcher, 30 mm 2A72, 7.62 mm PKT",
    rangeText: "100 mm gun to 4,000 m; guided round to 5,500 m",
    cues: [
      "Two weapons in one turret — a fat 100 mm tube with a thin 30 mm barrel beside it",
      "Engine at the rear, so infantry step over the powerpack to leave",
      "Hull noticeably wider and taller than a BMP-1 or BMP-2",
      "Driver sits front centre with a rifleman either side of him",
    ],
    placements: ["Motor rifle brigades equipped to the newer standard", "Naval infantry"],
    doctrineNote:
      "The rear engine is the recognition cue and the tactical problem in one: it gives the vehicle a tank-calibre gun but forces dismounts to exit over the engine deck rather than straight out the back.",
    crew: "3 + 7",
    service: "In service",
    sort: 2,
  },
  {
    slug: "bmd-2",
    blockSlug: "ifv",
    name: "BMD-2",
    aka: null,
    imageUrl: "/images/items/bmd-2.jpg",
    imageCredit: "CC BY-SA 4.0 — Rockybrown",
    imagePage: "https://commons.wikimedia.org/wiki/File:BMD-2_airborne_combat_vehicle.jpg",
    armament: "30 mm 2A42 autocannon, 7.62 mm PKT, 9M113 Konkurs",
    rangeText: "Autocannon effective to about 2,000 m",
    cues: [
      "Much smaller than any BMP — the size is the first cue",
      "Five small roadwheels, against six larger ones on a BMP",
      "Hydropneumatic suspension: ride height visibly changes",
      "Small one-man 30 mm turret, not the BMP-2's two-man turret",
    ],
    placements: ["Airborne (VDV) units", "Air-assault formations"],
    doctrineNote:
      "Everything about it is a compromise for air-droppability. Grau & Bartles note that the VDV fights as a distinct arm with its own vehicles; seeing a BMD rather than a BMP tells you which arm you are looking at.",
    crew: "2 + 5",
    service: "In service",
    sort: 3,
  },
  {
    slug: "bmd-4m",
    blockSlug: "ifv",
    name: "BMD-4M",
    aka: "Sadovnitsa",
    imageUrl: "/images/items/bmd-4m.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:BMD-4M_at_Army_2016.jpg",
    armament: "100 mm 2A70 gun-launcher, 30 mm 2A72, 7.62 mm PKT",
    rangeText: "100 mm gun to 4,000 m; guided round to 5,500 m",
    cues: [
      "BMP-3 armament — 100 mm and 30 mm together — on a hull half the size",
      "Five roadwheels on a short low airborne hull",
      "Turret looks oversized for the vehicle carrying it",
      "Shares its running gear with the BTR-MDM in the same units",
    ],
    placements: [
      "Airborne (VDV) units re-equipped to the current standard",
      "Paired with BTR-MDM carriers in the same battalions",
    ],
    doctrineNote:
      "Gives airborne units the same firepower as a BMP-3 in a droppable package. It is the clearest sign of a modernised VDV formation rather than a legacy one.",
    crew: "2 + 5",
    service: "In service",
    sort: 4,
  },
];
