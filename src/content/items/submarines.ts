import type { Item } from "@/content/types";

/**
 * Block 17 — Submarines.
 *
 * Only three things are ever visible: hull length, beam, and the shape and
 * position of the sail. That is enough. Ballistic missile boats carry their
 * tubes behind the sail, which raises a long hump down the after casing;
 * cruise missile boats carry theirs alongside the pressure hull, which makes
 * the boat unusually wide; attack boats have neither and look clean.
 *
 * Photographs are scarce for this subject — Commons holds mostly line drawings
 * — so two entries here use the Russian Ministry of Defence's own web-sized
 * images. A submarine survives that better than a vehicle would, because the
 * cue is a silhouette rather than a detail.
 */
export const submarines: Item[] = [
  {
    slug: "borei",
    blockSlug: "submarines",
    name: "Borei class",
    aka: "Project 955; Dolgorukiy",
    imageUrl: "/images/items/borei.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:A_Borei_class_submarine_at_sea.jpg",
    armament: "16 × Bulava ballistic missiles",
    rangeText: "Missiles to about 8,000 km",
    cues: [
      "Long low hump running aft from the sail — the missile compartment",
      "Sail is smoothly faired into the hull, with no sharp step",
      "Sail set well forward, roughly a third of the way back",
      "Hull tapers cleanly to the stern with no external pods",
    ],
    placements: [
      "Strategic missile submarines of the Northern and Pacific Fleets",
      "The current backbone of the sea-based deterrent",
    ],
    doctrineNote:
      "The sea leg of the nuclear triad, and the part of it hardest to find and therefore hardest to destroy first. Its patrol areas, not its weapons, are what make it survivable.",
    crew: "About 107",
    service: "In service",
    sort: 0,
  },
  {
    slug: "delta-iv",
    blockSlug: "submarines",
    name: "Delta IV class",
    aka: "Project 667BDRM Delfin",
    imageUrl: "/images/items/delta-iv.jpg",
    imageCredit: "CC BY 4.0 — Министерство обороны Российской Федерации",
    imagePage: "https://commons.wikimedia.org/wiki/File:Submarine_Novomoskovsk,_2016_2.jpg",
    armament: "16 × R-29RMU Sineva ballistic missiles",
    rangeText: "Missiles to about 8,300 km",
    cues: [
      "Very tall missile hump standing well proud of the hull behind the sail",
      "Step between sail and casing is abrupt, not faired like a Borei's",
      "Older, more angular sail with a squared-off top",
      "Hump runs almost to the stern",
    ],
    placements: [
      "Strategic missile submarines of the Northern Fleet",
      "Being replaced progressively by the Borei class",
    ],
    doctrineNote:
      "The generation the Borei replaces, and the clearest illustration of the recognition rule: the taller and more abrupt the hump, the older the boat.",
    crew: "About 135",
    service: "In service",
    sort: 1,
  },
  {
    slug: "typhoon",
    blockSlug: "submarines",
    name: "Typhoon class",
    aka: "Project 941 Akula",
    imageUrl: "/images/items/typhoon.jpg",
    imageCredit: "CC BY 4.0 — Sergey Fedyunin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%C2%AB%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B9%C2%BB.jpg",
    armament: "20 × R-39 ballistic missiles",
    rangeText: "Missiles to about 8,300 km",
    cues: [
      "Extraordinarily wide — the beam is the giveaway, not the length",
      "Missile tubes sit forward of the sail, which is unique here",
      "Sail set well back, roughly amidships",
      "Broad flat casing rather than a rounded hull top",
    ],
    placements: [
      "Withdrawn from the strategic patrol role",
      "Last boat used for trials before retirement",
    ],
    doctrineNote:
      "Included because it is unmistakable and still turns up in imagery. Its two parallel pressure hulls inside one outer casing are why it is so wide, and why nothing else looks like it.",
    crew: "About 160",
    service: "Retired",
    sort: 2,
  },
  {
    slug: "oscar-ii",
    blockSlug: "submarines",
    name: "Oscar II class",
    aka: "Project 949A Antey",
    imageUrl: "/images/items/oscar-ii.jpg",
    imageCredit: "CC BY 4.0 — Министерство обороны Российской федерации",
    imagePage: "https://commons.wikimedia.org/wiki/File:K-410_Smolensk.jpg",
    armament: "24 × P-700 Granit cruise missiles, torpedoes",
    rangeText: "Missiles to about 550 km",
    cues: [
      "Very wide hull, but with no missile hump behind the sail",
      "Width comes from missile tubes lying alongside the pressure hull",
      "Long parallel-sided casing with a broad flat top",
      "Sail is tall, narrow and set well forward",
    ],
    placements: [
      "Cruise missile submarines of the Northern and Pacific Fleets",
      "Tasked against carrier groups",
    ],
    doctrineNote:
      "Wide without a hump is the whole diagnosis: the missiles are beside the hull, not behind the sail. Built for the same job as the Kirov, from underneath.",
    crew: "About 107",
    service: "In service",
    sort: 3,
  },
  {
    slug: "akula",
    blockSlug: "submarines",
    name: "Akula class",
    aka: "Project 971 Shchuka-B",
    imageUrl: "/images/items/akula.jpg",
    imageCredit: "Public domain — Unknown author",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Akula_class_submarine_starboard_quarter_view.JPEG",
    armament: "Torpedoes and cruise missiles through the torpedo tubes",
    rangeText: null,
    cues: [
      "Clean hull with no hump and no unusual width — an attack boat",
      "Distinctive teardrop pod on top of the vertical rudder",
      "Long low sail faired smoothly into the casing",
      "Noticeably slimmer than any missile submarine here",
    ],
    placements: [
      "Nuclear attack submarines of the Northern and Pacific Fleets",
      "Hunt other submarines and shadow surface groups",
    ],
    doctrineNote:
      "The pod on the rudder is the reliable cue and houses a towed sonar array. An attack boat carries its weapons internally, so a clean silhouette is itself the identification.",
    crew: "About 73",
    service: "In service",
    sort: 4,
  },
  {
    slug: "kilo",
    blockSlug: "submarines",
    name: "Improved Kilo class",
    aka: "Project 636.3 Varshavyanka",
    imageUrl: "/images/items/kilo.jpg",
    imageCredit: "CC BY 4.0 — Unknown author",
    imagePage: "https://commons.wikimedia.org/wiki/File:B-261_Novorossiysk,_2020.jpg",
    armament: "Torpedoes and Kalibr cruise missiles",
    rangeText: "Kalibr to about 1,500 km against land targets",
    cues: [
      "Much smaller than every nuclear boat in the block",
      "Short, tubby hull with a pronounced teardrop shape",
      "Squat sail set well forward on a short casing",
      "Diesel-electric, so it is often seen surfaced or at periscope depth",
    ],
    placements: [
      "Black Sea, Baltic and Pacific Fleets",
      "Coastal and near-sea patrol, and land attack",
    ],
    doctrineNote:
      "Quiet when running on batteries and cheap enough to build in numbers. Carrying Kalibr turns a coastal defence submarine into a land-attack platform, which is why size is a poor guide to threat here.",
    crew: "About 52",
    service: "In service",
    sort: 5,
  },
];
