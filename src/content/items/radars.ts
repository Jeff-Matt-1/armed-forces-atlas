import type { Item } from "@/content/types";

/**
 * Block 12 — Radars.
 *
 * Read the antenna and you have the radar. Size runs with wavelength and with
 * range: a lattice of long rods spanning two lorry-widths is a metre-band set
 * looking hundreds of kilometres for aircraft, while a small drum on a tracked
 * hull is looking a few kilometres for vehicles or shells.
 *
 * The second question is what it hunts. Air surveillance sets stand high and
 * turn slowly; battlefield and counter-battery sets sit low, hide, and scan a
 * narrow sector — because anything that radiates near the line invites the
 * artillery this block exists to detect.
 */
export const radars: Item[] = [
  {
    slug: "p-18",
    blockSlug: "radars",
    name: "P-18",
    aka: "Terek; Spoon Rest D",
    imageUrl: "/images/items/p-18.jpg",
    imageCredit: "CC BY-SA 3.0 — Антон Бородин",
    imagePage: "https://commons.wikimedia.org/wiki/File:P-18_radar_in_Russia.JPG",
    armament: null,
    rangeText: "Detects aircraft to roughly 250 km",
    cues: [
      "Broad lattice of long horizontal rods in stacked rows",
      "Array carried on a Ural truck, with a second truck for the cabin",
      "Rods are widely spaced — the metre band needs large, sparse elements",
      "Array rotates as a whole on a mast above the vehicle",
    ],
    placements: [
      "Radio-technical troops providing air surveillance",
      "Early warning and target acquisition for air defence units",
    ],
    doctrineNote:
      "Old, and valued for the reason it is old: metre-band wavelengths return echoes from shapes optimised against much shorter ones, so a set of this age remains awkward for stealth aircraft to defeat.",
    crew: null,
    service: "In service",
    sort: 0,
  },
  {
    slug: "nebo-m",
    blockSlug: "radars",
    name: "55Zh6M Nebo-M",
    aka: "Nebo-M; RLM-M module",
    imageUrl: "/images/items/nebo-m.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Nebo-M_RLM-ME_Army-2016.jpg",
    armament: null,
    rangeText: "Detects aircraft to roughly 600 km",
    cues: [
      "Enormous rectangular array, several rows deep and far wider than the vehicle",
      "Array raised on a lattice tower rather than sitting on the roof",
      "BAZ 8x8 chassis with the cab well forward of the tower",
      "Multiple vehicles working together as one system",
    ],
    placements: [
      "Radio-technical troops at district level",
      "Feeds the long-range surface-to-air missile systems",
    ],
    doctrineNote:
      "The modern successor to sets like the P-18, combining several wavebands so that what is hard to see in one is visible in another. It is a strategic-level sensor: finding one means finding the air defence network it serves.",
    crew: null,
    service: "In service",
    sort: 1,
  },
  {
    slug: "kasta-2e2",
    blockSlug: "radars",
    name: "39N6 Kasta-2E2",
    aka: "Kasta-2E2; Flat Face E",
    imageUrl: "/images/items/kasta-2e2.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:39N6E_Kasta-2E2_radar_-_100th_Anniversary_VVS-R_-02.jpg",
    armament: null,
    rangeText: "Detects aircraft to roughly 150 km",
    cues: [
      "Single solid rectangular panel, not an open lattice of rods",
      "Panel mounted on a tall thin mast well above the vehicle",
      "Noticeably smaller than a Nebo-M array",
      "Towed cabin and generator set up alongside",
    ],
    placements: [
      "Low-altitude air surveillance for air defence units",
      "Gap-filling below the coverage of longer-range sets",
    ],
    doctrineNote:
      "Built to see what flies low — helicopters, cruise missiles, drones — which is why the antenna goes up a mast. Height, not power, is what buys coverage against a target hugging the ground.",
    crew: null,
    service: "In service",
    sort: 2,
  },
  {
    slug: "zoopark-1",
    blockSlug: "radars",
    name: "1L219 Zoopark-1",
    aka: "Zoopark",
    imageUrl: "/images/items/zoopark-1.jpg",
    imageCredit: "CC BY-SA 3.0 de — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:1L219_Zoopark-1_radar_Tula_2016.JPG",
    armament: null,
    rangeText: "Locates firing guns to 20 km, rocket launchers to 35 km",
    cues: [
      "Tracked MT-LB-family hull with a flat rectangular panel on the rear deck",
      "Panel tilts up and scans a sector rather than turning full circle",
      "Panel folds flat onto the hull for travel",
      "Low overall — nothing like the mast height of an air surveillance set",
    ],
    placements: [
      "Counter-battery radar of artillery reconnaissance units",
      "Sited close behind the line so its sector covers enemy gun areas",
    ],
    doctrineNote:
      "Tracks shells in flight and computes backwards to the gun that fired them. In a war fought by artillery on both sides it is among the most valuable targets on the battlefield, which is why it is tracked, low, and moves after it radiates.",
    crew: null,
    service: "In service",
    sort: 3,
  },
  {
    slug: "snar-10",
    blockSlug: "radars",
    name: "SNAR-10",
    aka: "Leopard; 1RL232",
    imageUrl: "/images/items/snar-10.jpg",
    imageCredit: "CC0 — Alf van Beem",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Battlefield_Surveillance_Radar_SNAR_10_on_MTLB_M_1975_in_Aalborg_Forsvars-_og_Garnisonsmuseum,_pic1.JPG",
    armament: "7.62 mm PKT",
    rangeText: "Detects vehicles to roughly 20 km, moving men to 10 km",
    cues: [
      "MT-LB hull carrying a small rotating drum-shaped antenna",
      "Antenna housed in a rounded cover, not an open array",
      "Sits on a short mount just above the rear deck",
      "Smallest antenna in the block by a wide margin",
    ],
    placements: [
      "Battlefield surveillance in artillery reconnaissance batteries",
      "Watches ground movement rather than airspace",
    ],
    doctrineNote:
      "Points at the ground, not the sky: it finds vehicles and men moving in the enemy's rear and can walk artillery onto them by watching the fall of shot. The small antenna is the tell that this is a short-range ground sensor.",
    crew: null,
    service: "In service",
    sort: 4,
  },
];
