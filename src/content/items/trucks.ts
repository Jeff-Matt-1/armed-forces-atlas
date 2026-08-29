import type { Item } from "@/content/types";

/**
 * Block 05 — Trucks.
 *
 * The logistics chassis that carries everything else. Recognition is about
 * axle count, cab shape and whether the bonnet sits ahead of the cab or the
 * cab sits over the engine.
 */
export const trucks: Item[] = [
  {
    slug: "ural-4320",
    blockSlug: "trucks",
    name: "Ural-4320",
    aka: "Ural",
    imageUrl: "/images/items/ural-4320.jpg",
    imageCredit: "CC BY-SA 4.0 — Matti Blume",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Ural-4320,_12._Internationales_Maritimes-Fahrzeugtreffen,_Ribnitz-Damgarten_(_1060471).jpg",
    armament: null,
    rangeText: null,
    cues: [
      "6x6 with a bonnet ahead of the cab",
      "Rounded bonnet with the grille set well back",
      "Canvas tilt over a wooden or metal cargo bed",
      "Large single wheels front and rear, no twin rears",
    ],
    placements: [
      "Material support battalions of brigades and regiments",
      "Prime mover for towed artillery and the BM-21 chassis family",
    ],
    doctrineNote:
      "The workhorse of Russian logistics. Grau & Bartles emphasise that Russian formations carry limited organic lift, so the truck park is a real constraint on how far a force can operate from railheads.",
    crew: "1 + 2",
    service: "In service",
    sort: 0,
  },
  {
    slug: "kamaz-5350",
    blockSlug: "trucks",
    name: "KamAZ-5350",
    aka: "Mustang",
    imageUrl: "/images/items/kamaz-5350.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:KamAZ-5350.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "6x6 cab-over-engine — flat front with no bonnet",
      "Large windscreen split by a central pillar on older cabs",
      "Steps cut into the front bumper for cab access",
      "Square headlight clusters low in the bumper",
      "Unarmed as standard, though armoured-cab variants are in service",
    ],
    placements: [
      "General transport across all arms",
      "Carrier for command posts, EW cabins and radar shelters",
    ],
    doctrineNote:
      "The modern standard tactical truck. Because so many systems are mounted on this chassis, the cab alone does not identify the payload — read the load bed.",
    crew: "1 + 2",
    service: "In service",
    sort: 1,
  },
  {
    slug: "kamaz-4310",
    blockSlug: "trucks",
    name: "KamAZ-4310",
    aka: null,
    imageUrl: "/images/items/kamaz-4310.jpg",
    imageCredit: "CC BY-SA 4.0 — Alexey8601",
    imagePage: "https://commons.wikimedia.org/wiki/File:2014.05.14_kamaz-4310(1).JPG",
    armament: null,
    rangeText: null,
    cues: [
      "Cab-over 6x6, older and boxier than the 5350",
      "Round headlights set in a flat panel front",
      "Cargo bed with removable side boards and a canvas tilt",
      "Spare wheel carried behind the cab",
    ],
    placements: [
      "Second-line transport and training establishments",
      "Prime mover for lighter towed systems",
    ],
    doctrineNote:
      "An older generation still widely present. Its appearance alongside newer types is a normal feature of a mobilised or composite unit.",
    crew: "1 + 2",
    service: "In service, ageing",
    sort: 2,
  },
  {
    slug: "kraz-255",
    blockSlug: "trucks",
    name: "KrAZ-255B",
    aka: "Lapot",
    imageUrl: "/images/items/kraz-255.jpg",
    imageCredit: "Attribution — Unknown author",
    imagePage: "https://commons.wikimedia.org/wiki/File:KrAZ_255.JPG",
    armament: null,
    rangeText: null,
    cues: [
      "Very large bonneted 6x6 with huge low-pressure tyres",
      "Bulbous rounded bonnet — the nickname means 'bast shoe'",
      "Sits noticeably higher than a Ural",
      "Often seen with engineer bridging or pontoon loads",
    ],
    placements: [
      "Engineer units as a bridging and pontoon carrier",
      "Heavy recovery and equipment transport",
    ],
    doctrineNote:
      "Heavy-duty and largely superseded, but retained in engineer roles where its load capacity still matters.",
    crew: "1 + 2",
    service: "Reserve and engineer use",
    sort: 3,
  },
  {
    slug: "kamaz-63501",
    blockSlug: "trucks",
    name: "KamAZ-63501",
    aka: "Mustang 8x8",
    imageUrl: "/images/items/kamaz-63501.jpg",
    imageCredit: "CC0 — Ural-66",
    imagePage: "https://commons.wikimedia.org/wiki/File:KamAZ_63501_AT_(3).jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Eight wheels — four axles, all driven",
      "Cab-over layout shared with the 5350 family",
      "Long load bed to match the extended chassis",
      "Commonly carries missile, radar or engineer superstructures",
    ],
    placements: [
      "Launcher and radar chassis for air defence systems",
      "Heavy logistics in army-level material support units",
    ],
    doctrineNote:
      "An 8x8 chassis under a shelter or launcher usually indicates a high-value system: air defence, EW or rocket artillery rather than routine cargo.",
    crew: "1 + 2",
    service: "In service",
    sort: 4,
  },
  {
    slug: "gaz-66",
    blockSlug: "trucks",
    name: "GAZ-66",
    aka: "Shishiga",
    imageUrl: "/images/items/gaz-66.jpg",
    imageCredit: "CC BY-SA 4.0 — Dimitǎr Boevski",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:GAZ-66_truck_in_Vrachesh,_Botevgrad_municipality,_Bulgaria_01.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Small 4x4 cab-over with a snub, almost square nose",
      "Only two axles — much shorter than a Ural or KamAZ",
      "Round headlights mounted high on the cab front",
      "Short canvas-tilted cargo bed",
    ],
    placements: [
      "Airborne units, being air-droppable",
      "Light transport in second-line and territorial units",
    ],
    doctrineNote:
      "Its air-droppable size tied it to the VDV. Largely replaced, but still a marker for airborne or older establishments.",
    crew: "1 + 2",
    service: "Reserve",
    sort: 5,
  },
];
