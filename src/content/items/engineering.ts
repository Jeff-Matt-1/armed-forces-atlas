import type { Item } from "@/content/types";

/**
 * Block 13 — Engineering Vehicles.
 *
 * Almost everything here is a tank hull with the turret removed and a tool put
 * in its place, so recognition is a matter of reading the tool: an arm, a
 * blade, a folded bridge, a launcher ramp, a chute at the back. Where the tool
 * is a bridge, the next question is what carries it — a tank hull goes where
 * tanks go, a truck does not.
 *
 * None of these can fight. Every one of them is unarmed or nearly so, which is
 * itself the first cue that you are looking at an engineer vehicle rather than
 * a combat one.
 */
export const engineering: Item[] = [
  {
    slug: "imr-3m",
    blockSlug: "engineering",
    name: "IMR-3M",
    aka: "Combat engineer vehicle",
    imageUrl: "/images/items/imr-3m.jpg",
    imageCredit: "CC BY-SA 3.0 — Mike1979 Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:IMR-3M_armoured_engineering_vehicle_at_Engineering_Technologies_2012.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Long jointed crane arm folded back over the hull",
      "Wide dozer blade across the front of the vehicle",
      "Tank hull with no turret and no gun",
      "Small operator cupola set well forward",
    ],
    placements: [
      "Engineer units clearing routes for armoured formations",
      "Used for obstacle breaching and rubble clearance",
    ],
    doctrineNote:
      "Built to work under fire, which is why an excavator's job is done on a tank hull. Its presence forward means a formation is expecting to have to make its own route rather than use an existing one.",
    crew: "2",
    service: "In service",
    sort: 0,
  },
  {
    slug: "mt-55",
    blockSlug: "engineering",
    name: "MT-55",
    aka: "MTU-55 bridgelayer",
    imageUrl: "/images/items/mt-55.jpg",
    imageCredit: "CC BY-SA 3.0 — ShinePhantom",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:MT-55_bridgelayer_in_Technical_museum_Togliatti.jpg",
    armament: null,
    rangeText: "Spans a gap of up to 18 m",
    cues: [
      "Folded scissors bridge carried on top of the hull",
      "Bridge halves hinge open and are laid nose-first",
      "T-55 tank hull underneath, with no turret",
      "Vehicle sits noticeably tall because of its load",
    ],
    placements: [
      "Engineer units supporting tank and motor rifle formations",
      "Moves with the leading echelon, not behind it",
    ],
    doctrineNote:
      "A tank chassis because the bridge has to arrive where the tanks are and survive the trip. It buys one crossing quickly, then must be recovered — which is why a formation that expects several gaps brings pontoons instead.",
    crew: "2",
    service: "In service",
    sort: 1,
  },
  {
    slug: "brem-1",
    blockSlug: "engineering",
    name: "BREM-1",
    aka: "Armoured recovery vehicle",
    imageUrl: "/images/items/brem-1.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:BREM-1_armoured_recovery_vehicle_(1).jpg",
    armament: "12.7 mm NSVT",
    rangeText: null,
    cues: [
      "Crane jib folded along the right-hand side of the hull",
      "Dozer blade at the front, used as a stabilising spade",
      "T-72 hull with a flat deck where the turret would be",
      "Towing gear and spare track stowed across the hull front",
    ],
    placements: [
      "Repair and recovery companies of tank and motor rifle brigades",
      "One or more per tank battalion",
    ],
    doctrineNote:
      "Recovers casualties from the battlefield so they can be repaired rather than written off. Because Russian formations hold limited replacement stocks, the recovery vehicle is a large part of what keeps a tank battalion's strength up.",
    crew: "3",
    service: "In service",
    sort: 2,
  },
  {
    slug: "gmz-3",
    blockSlug: "engineering",
    name: "GMZ-3",
    aka: "Tracked minelayer",
    imageUrl: "/images/items/gmz-3.jpg",
    imageCredit: "CC BY-SA 3.0 — Mike1979 Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:GMZ-3_minelayer_vehicle_at_Engineering_Technologies_2012.jpg",
    armament: null,
    rangeText: "Lays a minefield several hundred metres long in minutes",
    cues: [
      "Fully enclosed boxy superstructure covering the whole hull",
      "Mine chute and plough gear at the rear",
      "Tracked chassis shared with the 2S3 and other heavy vehicles",
      "No arm, no blade, no bridge — a sealed box on tracks",
    ],
    placements: [
      "Engineer units laying protective and blocking minefields",
      "Used to close a flank quickly during an advance",
    ],
    doctrineNote:
      "Mines used offensively: laid on the move to seal the flank of an advance or block a counter-attack route, rather than dug in as a static barrier.",
    crew: "3",
    service: "In service",
    sort: 3,
  },
  {
    slug: "ur-77",
    blockSlug: "engineering",
    name: "UR-77 Meteorit",
    aka: "Zmey Gorynych",
    imageUrl: "/images/items/ur-77.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:UR-77_Meteorit_being_renovated_inside_Tatarstan_military-industrial_complex_-_July_2023_03.jpg",
    armament: null,
    rangeText: "Clears a lane roughly 90 m long and 6 m wide",
    cues: [
      "Large flat launcher cover hinged upward at the front of the hull",
      "Open rectangular compartment behind it holding the charges",
      "2S1-derived tracked hull with seven roadwheels",
      "No turret, no blade, no arm",
    ],
    placements: [
      "Engineer units breaching minefields ahead of an assault",
      "Used against fortified positions and buildings in urban fighting",
    ],
    doctrineNote:
      "Fires a rocket that drags an explosive hose across a minefield and detonates it, clearing a lane by blast. The same charge laid along a street is devastating, which is how it is now most often used.",
    crew: "2",
    service: "In service",
    sort: 4,
  },
  {
    slug: "pmp",
    blockSlug: "engineering",
    name: "PMP pontoon bridge",
    aka: "Pontoon bridge park",
    imageUrl: "/images/items/pmp.jpg",
    imageCredit:
      "CC BY 2.5 — No machine-readable author provided. Bukvoed assumed (based on copyright claims).",
    imagePage: "https://commons.wikimedia.org/wiki/File:PMP-Pontoon-Bridge-latrun-2.jpg",
    armament: null,
    rangeText: "A full set bridges roughly 220 m of river",
    cues: [
      "Folding pontoon sections carried one per truck",
      "Sections unfold on the water into a flat roadway",
      "Bridge sits low, almost level with the surface",
      "Recognise the trucks in column as much as the bridge itself",
    ],
    placements: [
      "Pontoon bridge regiments and battalions at army level",
      "Brought forward for a deliberate river crossing",
    ],
    doctrineNote:
      "River crossing is a set-piece operation in Russian planning, and the pontoon park is what makes it possible. A column of these moving forward is one of the clearest indicators of intent available.",
    crew: null,
    service: "In service",
    sort: 5,
  },
  {
    slug: "tmm-3",
    blockSlug: "engineering",
    name: "TMM-3",
    aka: "Heavy mechanised bridge",
    imageUrl: "/images/items/tmm-3.jpg",
    imageCredit:
      "CC BY 2.5 — No machine-readable author provided. Bukvoed assumed (based on copyright claims).",
    imagePage: "https://commons.wikimedia.org/wiki/File:TMM-Bridge-latrun-1.jpg",
    armament: null,
    rangeText: "Each vehicle carries a 10.5 m span; a set spans 42 m",
    cues: [
      "Bridge span folded on the back of a wheeled truck, not a tank hull",
      "KrAZ 6x6 chassis with the span overhanging the cab",
      "Supporting trestle legs folded under the span",
      "Several vehicles used together, each adding one section",
    ],
    placements: [
      "Engineer units bridging dry gaps and small streams",
      "Road and route support rather than assault crossing",
    ],
    doctrineNote:
      "Wheeled, so it follows the route rather than making one. Where an MT-55 gets a tank across a gap under fire, this rebuilds the road behind the advance so everything else can follow.",
    crew: null,
    service: "In service",
    sort: 6,
  },
];
