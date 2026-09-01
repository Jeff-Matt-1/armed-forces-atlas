import type { Item } from "@/content/types";

/**
 * Block 16 — Warships and Vessels.
 *
 * Ships are recognised by profile, and the profile is built from three
 * readings: length relative to anything nearby, where the superstructure sits,
 * and what stands on the deck. Missile ships carry their armament visibly —
 * angled launcher tubes along the sides, or flush vertical hatches forward —
 * so the deck layout separates the classes faster than the hull ever will.
 *
 * The block uses imageFit "contain": a warship's identity lives in its full
 * length, and a crop that removes the bow or the stern removes the answer.
 */
export const vessels: Item[] = [
  {
    slug: "pyotr-velikiy",
    blockSlug: "vessels",
    name: "Pyotr Velikiy",
    aka: "Kirov class; Project 1144 Orlan",
    imageUrl: "/images/items/pyotr-velikiy.jpg",
    imageCredit: "OGL v1.0 — Royal Navy",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:HMS_Dragon_with_Kirov_Class_%27Pyotr_Velikiy%27_MOD_45157551.jpg",
    armament: "P-700 Granit missiles, S-300F, 130 mm guns",
    rangeText: "Nuclear powered — effectively unlimited endurance",
    cues: [
      "Enormous: roughly 250 m, dwarfing any escort alongside it",
      "Tall blocky superstructure amidships, crowded with radars",
      "Long flat foredeck covering flush vertical missile hatches",
      "Nuclear powered, so no funnel smoke and no obvious exhaust",
    ],
    placements: ["Northern Fleet flagship-class surface ship", "Only one remains operational"],
    doctrineNote:
      "Built to threaten carrier groups with massed anti-ship missiles. It is as much a statement of reach as a warship, and a single hull represents a large fraction of Russian surface striking power.",
    crew: "About 700",
    service: "In service",
    sort: 0,
  },
  {
    slug: "moskva",
    blockSlug: "vessels",
    name: "Slava class",
    aka: "Project 1164 Atlant; Moskva",
    imageUrl: "/images/items/moskva.jpg",
    imageCredit: "Public domain — George Chernilevsky",
    imagePage: "https://commons.wikimedia.org/wiki/File:Project_1164_Moskva_2012_G2.jpg",
    armament: "16 × P-500/P-1000 missiles, S-300F, 130 mm twin gun",
    rangeText: "Anti-ship missiles to about 550 km",
    cues: [
      "Eight pairs of huge missile tubes angled up along both sides",
      "Tubes are the single most distinctive feature of any Russian ship",
      "Large pyramid superstructure with a dome radar on top",
      "Twin 130 mm gun turret on the foredeck",
    ],
    placements: [
      "Fleet flagship for the Black Sea and Pacific Fleets",
      "The name ship was lost in 2022",
    ],
    doctrineNote:
      "The visible missile tubes are the whole design philosophy: everything is committed to one massed salvo. Nothing reloads at sea, so the ship's value is spent the moment it fires.",
    crew: "About 480",
    service: "In service",
    sort: 1,
  },
  {
    slug: "udaloy",
    blockSlug: "vessels",
    name: "Udaloy class",
    aka: "Project 1155 Fregat",
    imageUrl: "/images/items/udaloy.jpg",
    imageCredit: "Public domain — U.S. Navy",
    imagePage: "https://commons.wikimedia.org/wiki/File:Soviet_destroyer_Udaloy_underway_c1981.jpg",
    armament: "Metel anti-submarine missiles, 2 × 100 mm guns, torpedoes",
    rangeText: "Anti-submarine missiles to about 50 km",
    cues: [
      "Two separate funnels, well apart — unusual in this block",
      "Two single 100 mm gun turrets forward, one behind the other",
      "Helicopter hangar and flight deck occupying the whole stern",
      "No large angled missile tubes along the sides",
    ],
    placements: [
      "Anti-submarine destroyers of the Northern and Pacific Fleets",
      "Escort for larger surface groups",
    ],
    doctrineNote:
      "Specialised for hunting submarines, which is why the stern is given over to helicopters rather than missiles. It escorts rather than strikes.",
    crew: "About 300",
    service: "In service",
    sort: 2,
  },
  {
    slug: "admiral-gorshkov",
    blockSlug: "vessels",
    name: "Admiral Gorshkov class",
    aka: "Project 22350",
    imageUrl: "/images/items/admiral-gorshkov.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:Admiral_Gorshkov_frigate_03.jpg",
    armament: "Kalibr and Oniks in vertical cells, 130 mm gun, Poliment-Redut",
    rangeText: "Kalibr to about 1,500 km against land targets",
    cues: [
      "Smooth faceted superstructure with sloped sides — built to reduce radar return",
      "Enclosed mast with flat radar panels, not an open lattice",
      "No visible missile tubes: launchers are flush cells in the deck",
      "Single 130 mm gun in a rounded stealth turret forward",
    ],
    placements: [
      "The modern first-rank frigate of the Russian Navy",
      "Northern Fleet, with further hulls building",
    ],
    doctrineNote:
      "The first modern Russian surface ship designed around vertical launch, so its armament is invisible until it fires. A smooth, uncluttered profile is the recognition cue and the design intent at once.",
    crew: "About 210",
    service: "In service",
    sort: 3,
  },
  {
    slug: "admiral-grigorovich",
    blockSlug: "vessels",
    name: "Admiral Grigorovich class",
    aka: "Project 11356R",
    imageUrl: "/images/items/admiral-grigorovich.jpg",
    imageCredit: "CC BY 4.0 — Пресс-служба Западного военного округа",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%90%D0%B4%D0%BC%D0%B8%D1%80%D0%B0%D0%BB_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87.jpg",
    armament: "Kalibr vertical cells, 100 mm gun, Shtil air defence",
    rangeText: "Kalibr to about 1,500 km against land targets",
    cues: [
      "Conventional angular superstructure — less smoothed than a Gorshkov",
      "Open lattice mast carrying separate radar aerials",
      "Single 100 mm gun forward, smaller than a Gorshkov's 130 mm",
      "Helicopter deck aft with a hangar built into the superstructure",
    ],
    placements: [
      "Black Sea Fleet frigates",
      "Built on an export design adapted for Russian service",
    ],
    doctrineNote:
      "A frigate delivered quickly by adapting a hull already in production for export. It carries the same land-attack missiles as a Gorshkov, which is what makes an older-looking ship a current threat.",
    crew: "About 200",
    service: "In service",
    sort: 4,
  },
  {
    slug: "steregushchiy",
    blockSlug: "vessels",
    name: "Steregushchiy class",
    aka: "Project 20380",
    imageUrl: "/images/items/steregushchiy.jpg",
    imageCredit: "Public domain — Tungsten",
    imagePage: "https://commons.wikimedia.org/wiki/File:Corvette_Steregushchiy.jpg",
    armament: "100 mm gun, Redut air defence, anti-submarine torpedoes",
    rangeText: "Coastal and near-sea operations",
    cues: [
      "Small — well under half the length of a Slava",
      "Slab-sided superstructure running most of the hull length",
      "Rounded enclosed mast that hides the radar aerials",
      "Helicopter deck aft, oversized for the ship's length",
    ],
    placements: [
      "Corvettes for littoral and coastal defence",
      "Baltic, Black Sea and Pacific Fleets",
    ],
    doctrineNote:
      "Where the Soviet navy built ocean-going ships, this is built for the seas immediately around Russia. Its size is the cue and the doctrine: sea denial close in, rather than power projection far out.",
    crew: "About 100",
    service: "In service",
    sort: 5,
  },
  {
    slug: "buyan-m",
    blockSlug: "vessels",
    name: "Buyan-M class",
    aka: "Project 21631",
    imageUrl: "/images/items/buyan-m.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%C2%AB%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%A3%D1%81%D1%82%D1%8E%D0%B3%C2%BB.jpg",
    armament: "8 × Kalibr in vertical cells, 100 mm gun",
    rangeText: "Kalibr to about 1,500 km against land targets",
    cues: [
      "Very small — a gunboat-sized hull, the smallest ship in the block",
      "Boxy superstructure well forward, leaving a clear afterdeck",
      "No helicopter deck and no hangar",
      "Shallow draught: it operates on rivers and the Caspian as well as at sea",
    ],
    placements: [
      "Caspian Flotilla, Black Sea and Baltic Fleets",
      "Small missile ships rather than corvettes",
    ],
    doctrineNote:
      "The point of it is disproportion: a ship small enough for a river carrying missiles that reach 1,500 km inland. Strategic effect is decoupled from ship size, which is why the smallest hull here matters as much as the largest.",
    crew: "About 50",
    service: "In service",
    sort: 6,
  },
  {
    slug: "ropucha",
    blockSlug: "vessels",
    name: "Ropucha class",
    aka: "Project 775",
    imageUrl: "/images/items/ropucha.jpg",
    imageCredit: "Public domain — George Chernilevsky",
    imagePage: "https://commons.wikimedia.org/wiki/File:Project_775M_AZOV_2008_G2.jpg",
    armament: "Light guns and rocket launchers only",
    rangeText: "Carries roughly 10 tanks or 340 troops",
    cues: [
      "Blunt bow doors — the hull ends square rather than pointed",
      "Long flat unbroken deck with no missile tubes and no gun turrets forward",
      "Superstructure pushed right aft, above the stern",
      "Sits high and boxy compared with any combatant",
    ],
    placements: [
      "Landing ships of every fleet",
      "Also used as fast military transport between theatres",
    ],
    doctrineNote:
      "The bow doors are the recognition cue and the purpose. A ship that can beach and unload armour directly is what makes an amphibious threat credible — and what makes these hulls priority targets in harbour.",
    crew: "About 95",
    service: "In service",
    sort: 7,
  },
];
