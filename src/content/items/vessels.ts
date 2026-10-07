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
 * Ordered from the largest hull down to the smallest, because that is the
 * order in which the readings stop working: length separates a cruiser from a
 * frigate at a glance, and below corvette size everything is small, so the
 * answer moves to where the gun sits and what is on the forecastle.
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
    imageCredit: "CC BY 4.0 — Igor Zarembo, Presidential Press and Information Office",
    imagePage: "https://commons.wikimedia.org/wiki/File:Tactical_exercises_of_the_Russian_Navy.jpg",
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
    imagePage: "https://commons.wikimedia.org/wiki/File:Project_1164_Moskva_2009_G2.jpg",
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
    imageCredit: "Public domain — Mass Communications Specialist 2nd Class Jason R. Zalasky",
    imagePage: "https://commons.wikimedia.org/wiki/File:AdmiralVinogradov2009.jpg",
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
    imagePage: "https://commons.wikimedia.org/wiki/File:Admiral_Gorshkov_frigate_02.jpg",
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
    imageCredit: "CC BY 4.0 — Ministry of Defence of Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%A4%D1%80%D0%B5%D0%B3%D0%B0%D1%82_%22%D0%90%D0%B4%D0%BC%D0%B8%D1%80%D0%B0%D0%BB_%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%22_2016.jpg",
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
    slug: "neustrashimy",
    blockSlug: "vessels",
    name: "Neustrashimy class",
    aka: "Project 11540 Yastreb",
    imageUrl: "/images/items/neustrashimy.jpg",
    imageCredit: "Public domain — PH2 George Sisting, Usn",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Portside_view_of_the_Russian_Frigate_NEUSTRASHIMYY_(712)_(DN-SD-05-02976).jpg",
    armament: "100 mm gun, Kinzhal air defence, anti-submarine torpedoes",
    rangeText: "Air defence to about 12 km",
    cues: [
      "Flush deck: the line runs unbroken from bow to stern with no step down aft",
      "Long clear foredeck, with the bridge set unusually far back",
      "Single 100 mm gun forward and nothing else on the deck ahead of it",
      "Hangar and flight deck aft, and no missile tubes along the sides",
    ],
    placements: ["Baltic Fleet frigates", "Only two ships were completed"],
    doctrineNote:
      "A planned series that stopped at two hulls, both of them in the Baltic. That makes it a frigate a NATO navy in those waters meets more often than its numbers suggest.",
    crew: "About 210",
    service: "In service",
    sort: 5,
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
    sort: 6,
  },
  {
    slug: "parchim",
    blockSlug: "vessels",
    name: "Parchim class",
    aka: "Project 1331M",
    imageUrl: "/images/items/parchim.jpg",
    imageCredit: "CC BY-SA 3.0 — Eduardo Raboso",
    imagePage: "https://commons.wikimedia.org/wiki/File:Kazanets.jpg",
    armament: "76 mm gun, anti-submarine rocket launchers, torpedoes",
    rangeText: "Rocket launchers reach about 6 km",
    cues: [
      "Short hull, about 75 m, with a large white radome high on the lattice mast",
      "Everything is forward: the gun and two squat rocket launchers crowd the forecastle",
      "Low uncluttered stern, with no helicopter deck and no hangar",
      "Nothing stands on the forecastle ahead of the gun but the rocket launchers",
    ],
    placements: [
      "Baltic Fleet small anti-submarine ships",
      "Harbour approaches and coastal patrol",
    ],
    doctrineNote:
      "Built in East German yards for the Soviet Baltic Fleet and never sent anywhere else. It is the hull most often met in the Baltic approaches, which makes it worth knowing better than any cruiser.",
    crew: "About 60",
    service: "In service",
    sort: 7,
  },
  {
    slug: "grisha",
    blockSlug: "vessels",
    name: "Grisha class",
    aka: "Project 1124 Albatros",
    imageUrl: "/images/items/grisha.jpg",
    imageCredit: "CC BY-SA 2.0 — Kevin Fox",
    imagePage: "https://commons.wikimedia.org/wiki/File:Suzdalets2009Istanbul.jpg",
    armament: "76 mm gun, Osa-M air defence, anti-submarine rockets and torpedoes",
    rangeText: "Air defence to about 15 km",
    cues: [
      "The gun is aft, behind the superstructure — the reverse of most small warships",
      "Air-defence missile bin on the forecastle, forward of the bridge",
      "Short hull, about 70 m, with a sharply flared bow and a long forecastle",
      "Flat rotating radar aerial on a lattice mast, and no helicopter deck",
    ],
    placements: [
      "Small anti-submarine ships in every fleet",
      "Also operated by the Coast Guard of the Border Service",
    ],
    doctrineNote:
      "The most numerous Soviet submarine hunter of all, and the layout follows the task: the forecastle is given to the missile bin and the rocket launchers, so the gun goes aft. Gun position alone separates it from a Parchim.",
    crew: "About 70",
    service: "In service",
    sort: 8,
  },
  {
    slug: "nanuchka",
    blockSlug: "vessels",
    name: "Nanuchka class",
    aka: "Project 1234 Ovod",
    imageUrl: "/images/items/nanuchka.jpg",
    imageCredit: "Public domain — US military",
    imagePage: "https://commons.wikimedia.org/wiki/File:Nanuchka_class_corvette.JPG",
    armament: "6 × P-120 Malakhit missiles, Osa-M air defence, 76 mm gun",
    rangeText: "Anti-ship missiles to about 150 km",
    cues: [
      "Two banks of three missile tubes, angled outboard on each side",
      "Very large spherical radome dominating a broad blocky superstructure",
      "Missile bin on the forecastle and the gun right aft — nothing forward",
      "Small: about 60 m, roughly a quarter of a Kirov's length",
    ],
    placements: ["Small missile ships built for coastal strike", "Black Sea and Pacific Fleets"],
    doctrineNote:
      "A hull small enough to build in numbers carrying a salvo sized for a destroyer. The bet is that six heavy missiles fired from close inshore are worth more than the ship carrying them.",
    crew: "About 60",
    service: "In service",
    sort: 9,
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
      "Very small — a gunboat-sized hull, the smallest warship in the block",
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
    sort: 10,
  },
  {
    slug: "tarantul",
    blockSlug: "vessels",
    name: "Tarantul class",
    aka: "Project 1241 Molniya",
    imageUrl: "/images/items/tarantul.jpg",
    imageCredit: "CC BY 4.0 — George Chernilevsky",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ivanovets_corvette_2012_G1.jpg",
    armament: "4 × anti-ship missiles, 76 mm gun, close-in guns",
    rangeText: "Anti-ship missiles to about 120 km",
    cues: [
      "Very low freeboard and a long sleek hull, about 56 m",
      "Two pairs of large cylindrical missile canisters amidships, angled outboard",
      "76 mm gun on the forecastle, well forward of the bridge",
      "Open lattice mast carrying a spherical radome above the bridge",
    ],
    placements: ["Missile boats for fast attack from harbour", "Baltic and Black Sea Fleets"],
    doctrineNote:
      "A hull with no endurance, no air defence worth the name and four heavy anti-ship missiles. It is meant to leave harbour, fire and return, so its threat is a function of how close it is based rather than how far it can go.",
    crew: "About 40",
    service: "In service",
    sort: 11,
  },
  {
    slug: "ropucha",
    blockSlug: "vessels",
    name: "Ropucha class",
    aka: "Project 775",
    imageUrl: "/images/items/ropucha.jpg",
    imageCredit:
      "CC BY-SA 3.0 — José María Casanova Colorado, Cartagena from Los Barcos de Eugenio - Eugenio´s Warships",
    imagePage: "https://commons.wikimedia.org/wiki/File:Kaliningrad2004Cartagena.jpg",
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
    sort: 12,
  },
  {
    slug: "dyugon",
    blockSlug: "vessels",
    name: "Dyugon class",
    aka: "Project 21820",
    imageUrl: "/images/items/dyugon.jpg",
    imageCredit: "CC BY 4.0 — Alexey Kitayev",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%C2%AB%D0%9C%D0%B8%D1%87%D0%BC%D0%B0%D0%BD_%D0%9B%D0%B5%D1%80%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%C2%BB.jpg",
    armament: "Two close-in gun mounts only",
    rangeText: "Carries about 140 tonnes — three tanks or five armoured vehicles",
    cues: [
      "Small, about 45 m, and fast for a craft carrying armour",
      "Open cargo deck over most of the length, with the vehicles in plain view",
      "Only a low deckhouse aft, not a multi-deck superstructure",
      "Blunt bow with a ramp, and no gun turret forward",
    ],
    placements: [
      "Landing craft of the Baltic Fleet and the Caspian Flotilla",
      "Carries armour from ship to shore",
    ],
    doctrineNote:
      "Where a Ropucha beaches a company, this runs three vehicles ashore at nearly twice the speed. It is the last leg of a landing rather than the whole of one.",
    crew: "About 6",
    service: "In service",
    sort: 13,
  },
];
