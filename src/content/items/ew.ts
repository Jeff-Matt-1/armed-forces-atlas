import type { Item } from "@/content/types";

/**
 * Block 10 — EW Systems.
 *
 * The chassis tells you almost nothing here: these ride on the same KamAZ,
 * BAZ, BTR-80 and MT-LB hulls learned in earlier blocks. The antenna is the
 * whole recognition problem — dish or array, one or several, on the vehicle or
 * guyed out on the ground beside it.
 *
 * A second cue is footprint. A jammer that has to radiate hard sets up as a
 * spread of masts and guy wires across open ground; one that protects the
 * vehicle it rides on keeps everything on the roof.
 */
export const ew: Item[] = [
  {
    slug: "krasukha-4",
    blockSlug: "ew",
    name: "1RL257 Krasukha-4",
    aka: "Krasukha-S4",
    imageUrl: "/images/items/krasukha-4.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:1RL257E_Krasukha-4_Army-2018.jpg",
    armament: null,
    rangeText: "Effective against airborne radars out to roughly 300 km",
    cues: [
      "Several round parabolic dishes together on one folding mount",
      "KamAZ-63501 8x8 with a shelter body behind the cab",
      "Antenna array folds down flat along the roof for travel",
      "No weapon of any kind — the mount where a gun would be carries dishes",
    ],
    placements: [
      "EW brigades and companies held at district and army level",
      "Deployed to cover a formation rather than a unit",
    ],
    doctrineNote:
      "Aimed upward, at airborne fire-control radars, radar satellites and drone datalinks. It is not fighting the enemy in front of it but the sensors that would otherwise see the formation it protects.",
    crew: null,
    service: "In service",
    sort: 0,
  },
  {
    slug: "krasukha-2",
    blockSlug: "ew",
    name: "1L269 Krasukha-2",
    aka: "Krasukha-2O",
    imageUrl: "/images/items/krasukha-2.jpg",
    imageCredit: "CC BY-SA 3.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Krasukha-2_(%D0%9A%D1%80%D0%B0%D1%81%D1%83%D1%85%D0%B0-2)_Unloaded.jpg",
    armament: null,
    rangeText: "Effective against airborne radars out to roughly 250 km",
    cues: [
      "One very large single dish, not the cluster of smaller ones on a Krasukha-4",
      "BAZ 8x8 chassis with a forward cab and a long flat deck",
      "Dish rises at the rear of the vehicle and dominates the silhouette",
      "Stabilising jacks lowered at the corners when set up",
    ],
    placements: ["EW brigades at district level", "Paired with Krasukha-4 in the same formations"],
    doctrineNote:
      "Built to blind airborne early-warning aircraft specifically. Where the Krasukha-4 covers a spread of airborne emitters, this concentrates on the one that sees furthest.",
    crew: null,
    service: "In service",
    sort: 1,
  },
  {
    slug: "r-330zh-zhitel",
    blockSlug: "ew",
    name: "R-330Zh Zhitel",
    aka: "Resident",
    imageUrl: "/images/items/r-330zh-zhitel.jpg",
    imageCredit: "CC BY 4.0 — Денис Абрамов (Denis Abramov)",
    imagePage: "https://commons.wikimedia.org/wiki/File:R-330Zh_Zhitel_jammer.jpg",
    armament: null,
    rangeText: "Suppresses satellite navigation within roughly 25–30 km",
    cues: [
      "Sets up as a spread across open ground, not as a single vehicle",
      "Guyed telescopic mast carrying a crown of small horizontal elements",
      "A towed module alongside with two further tall guyed masts",
      "KamAZ 6x6 with a shelter body as the carrier",
    ],
    placements: [
      "EW companies of brigades and EW battalions at army level",
      "Sited to cover an area rather than to accompany a unit",
    ],
    doctrineNote:
      "Attacks satellite navigation and satellite phones — the inputs precision weapons and drones depend on. The guy wires are the giveaway and the weakness: it takes time to erect and cannot displace quickly.",
    crew: null,
    service: "In service",
    sort: 2,
  },
  {
    slug: "borisoglebsk-2",
    blockSlug: "ew",
    name: "RB-301B Borisoglebsk-2",
    aka: "Borisoglebsk-2",
    imageUrl: "/images/items/borisoglebsk-2.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defense of Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Electronic_warfare_complex_Borisoglebsk-2.jpg",
    armament: null,
    rangeText: "Against tactical radio nets, typically tens of kilometres",
    cues: [
      "Tracked MT-LB hull — low, flat and far smaller than the truck-based jammers",
      "Single telescopic mast rising from the centre of the roof",
      "Boxy equipment panniers along both sides of the hull",
      "Crew work on the roof to raise the mast, so it is often seen occupied",
    ],
    placements: [
      "EW companies organic to motor rifle and tank brigades",
      "Works forward with the formation it belongs to",
    ],
    doctrineNote:
      "A brigade's own jammer, small enough to move with the battle. Grau & Bartles treat radio-electronic combat as an arm integrated at brigade level rather than a specialist attachment, and this is what that looks like on the ground.",
    crew: null,
    service: "In service",
    sort: 3,
  },
  {
    slug: "rb-531b-infauna",
    blockSlug: "ew",
    name: "RB-531B Infauna",
    aka: "Infauna",
    imageUrl: "/images/items/rb-531b-infauna.jpg",
    imageCredit: "CC BY 4.0 — The Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:RB-531B_Infauna_01.jpg",
    armament: null,
    rangeText: "Protects the column it travels with, not an area",
    cues: [
      "BTR-80 hull, eight wheels and a boat bow — but no turret",
      "Tall square box structure standing well above the roof",
      "Small mast antennas at the rear deck rather than one central mast",
      "Reads as a BTR-80 that has grown a shed",
    ],
    placements: [
      "EW units supporting convoys and march columns",
      "Attached forward rather than held at district level",
    ],
    doctrineNote:
      "Protective rather than offensive: it suppresses the radio links used to fire roadside charges, and screens the column optically. Its presence in a column says the route is not considered secure.",
    crew: null,
    service: "In service",
    sort: 4,
  },
  {
    slug: "rtut-bm",
    blockSlug: "ew",
    name: "1L262 Rtut-BM",
    aka: "Mercury",
    imageUrl: "/images/items/rtut-bm.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:1L262E_Army-2016.jpg",
    armament: null,
    rangeText: "Protects an area of roughly 50 hectares around itself",
    cues: [
      "MT-LB hull under a large open lattice antenna frame",
      "Frame is a broad horizontal array of thin rods, not a dish",
      "Array sits on a short mast directly above the hull",
      "Tented shelter often rigged over the rear deck",
    ],
    placements: [
      "EW units protecting troop concentrations and command posts",
      "Sited among the thing it is protecting, not forward of it",
    ],
    doctrineNote:
      "Defeats artillery by attacking the shell rather than the gun: it triggers or suppresses radio proximity fuzes so rounds burst harmlessly high or fail to burst at all. In an artillery-led war on both sides, that is a counter-artillery measure in its own right.",
    crew: null,
    service: "In service",
    sort: 5,
  },
];
