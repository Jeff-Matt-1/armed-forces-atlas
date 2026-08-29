import type { Item } from "@/content/types";

/**
 * Block 14 — Air Defence Systems.
 *
 * One question separates most of this block: guns, missiles, or both. After
 * that, read the launcher. Missiles carried in sealed box canisters belong to
 * short-range systems that ride with the manoeuvre units; missiles carried
 * openly on a rail or raised in large tubes belong to the long-range systems
 * held behind them.
 *
 * Height of coverage tracks size of vehicle almost perfectly here, so the
 * ladder from a tracked gun carriage to an 8x8 with four erected tubes is also
 * the ladder from a few kilometres to a few hundred.
 */
export const airDefence: Item[] = [
  {
    slug: "zsu-23-4-shilka",
    blockSlug: "air-defence",
    name: "ZSU-23-4 Shilka",
    aka: "Shilka",
    imageUrl: "/images/items/zsu-23-4-shilka.jpg",
    imageCredit: "CC BY-SA 4.0 — Acabashi",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:ZSU_23-4_%27Shilka%27_mobile_anti-aircraft_vehicle_-_Museum_of_Army_Flying,_Hampshire,_England.jpg",
    armament: "4 × 23 mm AZP-23 autocannon",
    rangeText: "Effective to about 2,500 m",
    cues: [
      "Four thin gun barrels in one mount, stacked in pairs",
      "Large boxy turret filling most of a low tracked hull",
      "Round dish radar folded down behind the turret",
      "No missiles anywhere on the vehicle",
    ],
    placements: [
      "Air defence batteries of motor rifle and tank regiments",
      "Widely used against ground targets as well",
    ],
    doctrineNote:
      "Guns only, and increasingly used to shoot at buildings rather than aircraft. Its rate of fire against a treeline is the reason it survives in service long after its radar stopped being adequate against aircraft.",
    crew: "4",
    service: "In service",
    sort: 0,
  },
  {
    slug: "strela-10",
    blockSlug: "air-defence",
    name: "9K35 Strela-10",
    aka: "Gopher; SA-13",
    imageUrl: "/images/items/strela-10.jpg",
    imageCredit: "Attribution — Łukasz Golowanow & Maciek Hypś, Konflikty.pl",
    imagePage: "https://commons.wikimedia.org/wiki/File:9K35_Strie%C5%82a-10_Dar%C5%82owo.JPG",
    armament: "4 × 9M333 infrared-guided missiles",
    rangeText: "Engages to about 5 km, up to 3,500 m altitude",
    cues: [
      "MT-LB hull — low, flat, tracked, already familiar from other blocks",
      "Four missiles carried openly on rails, two either side of a central mount",
      "Missiles are short and stubby, not in sealed boxes",
      "No gun and no large radar dish",
    ],
    placements: [
      "Air defence platoons of motor rifle and tank battalions",
      "Moves with the units it protects",
    ],
    doctrineNote:
      "Infrared guidance means it emits nothing, so it is hard to detect and hard to jam — but it can only engage what its operator can see. It protects a unit, not an area.",
    crew: "3",
    service: "In service",
    sort: 1,
  },
  {
    slug: "osa-akm",
    blockSlug: "air-defence",
    name: "9K33 Osa-AKM",
    aka: "Wasp; SA-8",
    imageUrl: "/images/items/osa-akm.jpg",
    imageCredit: "CC BY-SA 4.0 — Dmitry Ivanov.",
    imagePage: "https://commons.wikimedia.org/wiki/File:9K33M3_Osa-AKM_in_VDNKh.jpg",
    armament: "6 × 9M33 radar-guided missiles",
    rangeText: "Engages to about 10 km",
    cues: [
      "Wheeled, not tracked — a six-wheeled amphibious hull",
      "Six missiles in sealed box canisters, three each side of a central radar",
      "Large round tracking radar between the missile groups",
      "Whole launcher-and-radar assembly rotates as one unit",
    ],
    placements: [
      "Air defence regiments of motor rifle and tank divisions",
      "Regimental-level cover behind the forward battalions",
    ],
    doctrineNote:
      "Radar-guided, so it can engage what the crew cannot see — and radiates, so it can be found. It is the first rung where air defence stops being a unit's own protection and becomes an area system.",
    crew: "5",
    service: "In service",
    sort: 2,
  },
  {
    slug: "tunguska",
    blockSlug: "air-defence",
    name: "2K22 Tunguska",
    aka: "2S6M; Grison, SA-19",
    imageUrl: "/images/items/tunguska.jpg",
    imageCredit: "CC BY-SA 3.0 de — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:2S6M1_Tunguska_M1_at_ARMY-2016.JPG",
    armament: "2 × 30 mm 2A38 autocannon, 8 × 9M311 missiles",
    rangeText: "Guns to 4 km, missiles to 8 km",
    cues: [
      "Guns and missiles together — two cannon barrels with missile tubes outboard",
      "Four sealed missile boxes on each side of the turret",
      "Tracked hull with a large radar dish at the turret rear",
      "Turret much taller than a Shilka's",
    ],
    placements: [
      "Air defence batteries of tank and motor rifle regiments",
      "Replaced the Shilka in first-line formations",
    ],
    doctrineNote:
      "The answer to the Shilka's problem: guns for what comes in close and fast, missiles for what stands off. Carrying both means the vehicle does not have to choose before the target appears.",
    crew: "4",
    service: "In service",
    sort: 3,
  },
  {
    slug: "pantsir-s1",
    blockSlug: "air-defence",
    name: "96K6 Pantsir-S1",
    aka: "Greyhound; SA-22",
    imageUrl: "/images/items/pantsir-s1.jpg",
    imageCredit: "CC BY-SA 4.0 — Alexxx1979",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Astrakhan_Victory_Day_Parade_(May_9_2015)_Pantsir-S1_P5090721_2185.jpg",
    armament: "2 × 30 mm 2A38M autocannon, 12 × 57E6 missiles",
    rangeText: "Guns to 4 km, missiles to 20 km",
    cues: [
      "Wheeled: a KamAZ 8x8 truck, where a Tunguska is tracked",
      "Six missile tubes in a block on each side of a central gun mount",
      "Flat panel tracking radar between the missile blocks",
      "Separate rotating search radar behind the turret",
    ],
    placements: [
      "Point defence of high-value sites, airfields and headquarters",
      "Protects the long-range missile batteries from what gets past them",
    ],
    doctrineNote:
      "The wheeled successor to the Tunguska idea, and increasingly the layer that matters most: it is what engages drones and cruise missiles too small and too low for the strategic systems standing behind it.",
    crew: "3",
    service: "In service",
    sort: 4,
  },
  {
    slug: "tor-m2",
    blockSlug: "air-defence",
    name: "9K332 Tor-M2",
    aka: "Gauntlet; SA-15",
    imageUrl: "/images/items/tor-m2.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Tor-M2U_Army-2016.jpg",
    armament: "16 × 9M338 missiles, launched vertically",
    rangeText: "Engages to about 16 km",
    cues: [
      "No visible missiles at all — they sit vertically inside the turret",
      "Squared-off turret with a flat panel radar on the front face",
      "Second radar on a raised mount above the turret roof",
      "Tracked hull, with the turret dominating the vehicle",
    ],
    placements: [
      "Air defence regiments of divisions and army-level brigades",
      "Covers the manoeuvre formations against precision attack",
    ],
    doctrineNote:
      "Vertical launch is what gives it away: nothing protrudes, so the vehicle can engage in any direction without turning first. Built specifically to defeat guided munitions rather than the aircraft that release them.",
    crew: "3",
    service: "In service",
    sort: 5,
  },
  {
    slug: "buk-m2",
    blockSlug: "air-defence",
    name: "9K37 Buk-M2",
    aka: "Grizzly; SA-17",
    imageUrl: "/images/items/buk-m2.jpg",
    imageCredit: "CC BY-SA 3.0 — piligrims74 (Anton)",
    imagePage: "https://commons.wikimedia.org/wiki/File:Buk-M2,_2009_Victory_parade.JPG",
    armament: "4 × 9M317 missiles",
    rangeText: "Engages to about 45 km, up to 25 km altitude",
    cues: [
      "Four long slim missiles lying openly on a flat rotating launcher",
      "Missiles are far larger than the stubby rounds on a Strela-10",
      "Tracked chassis, longer and heavier than a Tor's",
      "Radar dish at the front of the launcher assembly on the firing vehicle",
    ],
    placements: [
      "Air defence brigades at army level",
      "Works as a battery of separate launcher, radar and command vehicles",
    ],
    doctrineNote:
      "Medium-range cover for a formation rather than a unit, and the first system here that cannot fight alone — the launcher, the radar and the command post are separate vehicles that have to be found together.",
    crew: "4",
    service: "In service",
    sort: 6,
  },
  {
    slug: "s-400",
    blockSlug: "air-defence",
    name: "S-400 Triumf",
    aka: "Growler; SA-21",
    imageUrl: "/images/items/s-400.jpg",
    imageCredit: "CC BY 3.0 — Droni4ch",
    imagePage: "https://commons.wikimedia.org/wiki/File:S-400_Triumf_launch_vehicle.JPG",
    armament: "4 × missile canisters, several missile types",
    rangeText: "Engages to 400 km depending on missile",
    cues: [
      "Four very large cylindrical canisters raised vertically to fire",
      "Canisters lie flat along an 8x8 truck when travelling",
      "No radar on the launcher itself — it is a separate vehicle",
      "Far bigger than anything else in the block",
    ],
    placements: [
      "Air defence regiments protecting strategic areas and infrastructure",
      "District and national-level assets, not formation assets",
    ],
    doctrineNote:
      "The outermost layer, and a political object as much as a military one. It does not protect troops in contact; it denies airspace over a region, which is why finding one says more about what is behind the line than what is on it.",
    crew: null,
    service: "In service",
    sort: 7,
  },
];
