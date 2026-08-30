import type { Item } from "@/content/types";

/**
 * Block 15 — Reconnaissance Systems.
 *
 * Reconnaissance vehicles look like the fighting vehicles they are built from,
 * because that is the point — they have to survive where they are sent. The
 * tell is always on the roof: a sensor where a weapon should be, an extra
 * cupola, a mast, a cluster of antennas.
 *
 * The block is deliberately short. Much of what does Russian reconnaissance is
 * covered elsewhere — the counter-battery and battlefield radars in block 12,
 * the observation parties in block 11, and the drones that now do most of it
 * in block 19.
 */
export const recon: Item[] = [
  {
    slug: "brdm-2",
    blockSlug: "reconnaissance",
    name: "BRDM-2",
    aka: "BRDM-2M",
    imageUrl: "/images/items/brdm-2.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:BRDM-2_-_ETIF-2010_(1).jpg",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT effective to about 2,000 m",
    cues: [
      "Four wheels, not eight — smaller than any BTR",
      "Two pairs of belly wheels between the axles, lowered for soft ground",
      "Small conical turret, the same one a BTR-60PB carries",
      "Pointed boat hull with a low, rounded profile",
    ],
    placements: [
      "Reconnaissance companies of motor rifle and tank regiments",
      "Base vehicle for NBC and anti-tank missile variants",
    ],
    doctrineNote:
      "Fast, amphibious and lightly armoured — meant to look, not to fight. Grau & Bartles stress the weight of effort Russian formations put into reconnaissance, and this is the vehicle that traditionally carried it.",
    crew: "4",
    service: "In service",
    sort: 0,
  },
  {
    slug: "brm-1k",
    blockSlug: "reconnaissance",
    name: "BRM-1K",
    aka: null,
    imageUrl: "/images/items/brm-1k.jpg",
    imageCredit: "CC BY-SA 2.5 — Mzajac",
    imagePage: "https://commons.wikimedia.org/wiki/File:BRM-1K.jpg",
    armament: "73 mm 2A28 Grom, 7.62 mm PKT",
    rangeText: "Surveillance radar detects vehicles to about 7 km",
    cues: [
      "BMP-1 hull and six roadwheels, with a larger two-man turret",
      "Turret sits further back than a BMP-1's and has no missile rail",
      "Small surveillance radar that folds up behind the turret",
      "Extra whip antennas for the reconnaissance radio fit",
    ],
    placements: [
      "Reconnaissance companies of motor rifle and tank brigades",
      "Works forward of the units it reports to",
    ],
    doctrineNote:
      "A BMP that trades its missile for sensors and radios. Because the silhouette is nearly a BMP-1's, it hides inside an ordinary column — the bigger turret and the folded radar are the only things that give it away.",
    crew: "6",
    service: "In service",
    sort: 1,
  },
  {
    slug: "prp-4a-argus",
    blockSlug: "reconnaissance",
    name: "PRP-4A Argus",
    aka: "Mobile reconnaissance post",
    imageUrl: "/images/items/prp-4a-argus.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:Russia_Arms_Expo_2013_(531-22).jpg",
    armament: "7.62 mm PKT",
    rangeText: "Detects and locates targets out to roughly 10 km",
    cues: [
      "BMP hull carrying a turret with two large domed hatches",
      "Sensor and optic housings where a gun would sit — no main armament",
      "Tall whip antennas standing well clear of the turret",
      "Turret reads as cluttered with equipment rather than armed",
    ],
    placements: [
      "Artillery reconnaissance batteries",
      "Finds and locates targets for the guns it works with",
    ],
    doctrineNote:
      "This is the eye of the artillery: it locates a target, fixes its position and passes it to the fire direction net. In a system where the guns decide the battle, the vehicle that finds their targets is a higher-value objective than most tanks.",
    crew: "5",
    service: "In service",
    sort: 2,
  },
  {
    slug: "rkhm-6",
    blockSlug: "reconnaissance",
    name: "RKhM-6",
    aka: "NBC reconnaissance vehicle",
    imageUrl: "/images/items/rkhm-6.jpg",
    imageCredit:
      "CC BY 4.0 — Ministry of Defense of the Russian Federation Official website, all materials are licensed under Creative Commons Attribution 4.0 https://eng.mil.ru/en/index.htm",
    imagePage: "https://commons.wikimedia.org/wiki/File:RKhM-6_NBC_vehicle_%D0%B0t_Lebyazhye.jpg",
    armament: "7.62 mm PKT",
    rangeText: null,
    cues: [
      "BTR-80 hull, eight wheels, with sampling gear at the rear",
      "Marker-flag dispensers mounted on the back of the hull",
      "Small machine-gun turret rather than the BTR-80's 14.5 mm cone",
      "Often seen with the crew working outside in protective suits",
    ],
    placements: [
      "NBC protection troops (RKhBZ)",
      "Surveys routes and areas ahead of a formation moving through them",
    ],
    doctrineNote:
      "Reconnaissance of ground rather than of the enemy: it samples air and soil, marks contaminated areas and reports whether a route can be used. The flag dispensers are the clearest cue and explain the whole job.",
    crew: "4",
    service: "In service",
    sort: 3,
  },
];
