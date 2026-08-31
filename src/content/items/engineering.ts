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
      "Massive launcher assembly over the rear of the hull, its cover hinged upward",
      "Open rectangular compartment holding the line charges",
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
  {
    slug: "bat-2",
    blockSlug: "engineering",
    name: "BAT-2",
    aka: "Path-layer",
    imageUrl: "/images/items/bat-2.jpg",
    imageCredit: "CC BY 4.0 — Павла Герасимова (Pavel Gerasimov)",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%91%D0%90%D0%A2-2_-_%D0%A4%D0%B8%D0%BD%D0%B0%D0%BB_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81%D0%B0_%C2%AB%D0%91%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%C2%BB_01.jpg",
    armament: null,
    rangeText: "Cuts route at roughly 10 km/h in easy going, far slower in earth",
    cues: [
      "Very wide dozer blade that folds in the middle, taller than a man",
      "Crane jib folded along the side of the hull",
      "Tall glazed cab with several windows — unusual on a tracked vehicle",
      "Long heavy tracked chassis, wider and higher than a tank",
    ],
    placements: [
      "Engineer units opening routes for a formation on the move",
      "Works ahead of the column rather than with it",
    ],
    doctrineNote:
      "Makes a road where there is none, which is what lets a formation move off the few roads that exist. Slow and conspicuous, so it works before the move rather than during it — finding one tells you a route is being prepared and roughly where the advance means to go.",
    crew: "2",
    service: "In service",
    sort: 7,
  },
  {
    slug: "zemledeliye",
    blockSlug: "engineering",
    name: "ISDM Zemledeliye",
    aka: "Agriculture",
    imageUrl: "/images/items/zemledeliye.jpg",
    imageCredit: "CC BY-SA 3.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:ISDM_Zemledeliye_at_Army-2022.jpg",
    armament: "Two blocks of 122 mm tubes firing mine-laying rockets",
    rangeText: "Sows minefields at roughly 5–15 km",
    cues: [
      "KamAZ 8x8 with an armoured cab, built like a heavy rocket launcher",
      "Two square tube blocks side by side, usually under covers",
      "Blocks sit level and low rather than raked up like a Grad",
      "Travels with a separate control vehicle on the same chassis",
    ],
    placements: [
      "Engineer units laying obstacles at range",
      "Held at army level rather than with the brigade",
    ],
    doctrineNote:
      "Mines a place without sending sappers to it. A minefield can be put across a road, a crossing or a landing site in minutes and from a distance, which turns obstacle laying from an engineering task into a fire mission.",
    crew: null,
    service: "In service",
    sort: 8,
  },
  {
    slug: "pts-4",
    blockSlug: "engineering",
    name: "PTS-4",
    aka: "Tracked amphibious transporter",
    imageUrl: "/images/items/pts-4.jpg",
    imageCredit: "CC BY-SA 4.0 — Kirill Borisenko",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Floating_%D1%81rawler_conveyor_PTS-4_during_the_%22Armiya_2021%22_exhibition_(side_view).jpg",
    armament: "12.7 mm remote weapon station",
    rangeText: "Carries roughly 18 tonnes on water",
    cues: [
      "Large flat open cargo deck with low sides, taking up most of the vehicle",
      "Boat-shaped hull that is obviously built to float, not merely to wade",
      "Cab well forward on the left, deck behind it",
      "Propellers under the rear, not water jets",
    ],
    placements: [
      "Engineer crossing units moving vehicles and guns over water",
      "Works at the crossing site, not with the leading echelon",
    ],
    doctrineNote:
      "Ferries what cannot swim: guns, trucks and stores across a river before a bridge exists. It is the reason a water obstacle delays a Russian formation by hours rather than days, and it is at its most vulnerable exactly where it is most useful.",
    crew: "2",
    service: "In service",
    sort: 9,
  },
  {
    slug: "bmr-3m",
    blockSlug: "engineering",
    name: "BMR-3M",
    aka: "Armoured mine-clearing vehicle",
    imageUrl: "/images/items/bmr-3m.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:Engineering_Technologies_-_2012_(5-38).jpg",
    armament: "12.7 mm remote weapon station",
    rangeText: null,
    cues: [
      "Tank hull with no turret, carrying a wide roller assembly ahead of it",
      "Two heavy roller banks on arms, one in front of each track",
      "Tall boxy crew cabin where the turret would sit",
      "Mine-clearing charge launchers sometimes fitted behind the cabin",
    ],
    placements: [
      "Engineer units breaching minefields for an advancing formation",
      "Leads the column through a suspected belt, then hands over",
    ],
    doctrineNote:
      "Sets off mines with weight instead of finding them. It clears a lane wide enough for what follows, which makes it the vehicle at the head of a column on a mined route — and the one the defender most wants to stop first.",
    crew: "2",
    service: "In service",
    sort: 10,
  },
  {
    slug: "eov-3523",
    blockSlug: "engineering",
    name: "EOV-3523",
    aka: "Military excavator",
    imageUrl: "/images/items/eov-3523.jpg",
    imageCredit: "CC BY-SA 4.0 — Kirill Borisenko",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:EOV-3523_excavator_on_KamAZ-53501_chassis_during_the_%22Armiya_2020%22_exhibition_(side_view).jpg",
    armament: null,
    rangeText: null,
    cues: [
      "An ordinary excavator arm on a military KamAZ truck chassis",
      "Slewing platform behind the cab, bucket stowed over the body",
      "Outrigger legs fold down at the rear when working",
      "Unarmoured — a works vehicle in uniform",
    ],
    placements: [
      "Engineer units digging positions, shelters and vehicle scrapes",
      "Works behind the line where digging can be done under cover",
    ],
    doctrineNote:
      "Digs the positions that make artillery survivable. A defence that has been prepared with machinery rather than shovels looks different from the air and takes far longer to reduce, so finding one says the ground ahead is being fortified rather than merely occupied.",
    crew: null,
    service: "In service",
    sort: 11,
  },
  {
    slug: "mtu-90",
    blockSlug: "engineering",
    name: "MTU-90",
    aka: "T-90 bridgelayer",
    imageUrl: "/images/items/mtu-90.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:MTU-90_1.jpg",
    armament: null,
    rangeText: "Spans a gap of up to 25 m",
    cues: [
      "T-90 hull under a bridge carried flat along the top",
      "Bridge lays out in three folding sections, not two",
      "Longer load than the MT-55 carries, overhanging both ends",
      "No turret; a small cupola forward on the left",
    ],
    placements: [
      "Engineer units supporting tank and motor rifle formations",
      "Moves with the leading echelon, not behind it",
    ],
    doctrineNote:
      "The modern replacement for the MT-55, on a hull that can keep up with the tanks it bridges for and survive the same fire. A longer span means it crosses obstacles that would have stopped the older vehicle, which widens the ground a formation can treat as passable.",
    crew: "2",
    service: "In service",
    sort: 12,
  },
];
