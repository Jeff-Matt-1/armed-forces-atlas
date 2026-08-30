import type { Item } from "@/content/types";

/**
 * Block 04 — Light vehicles.
 *
 * Protected and unprotected mobility below the APC. Recognition works off hull
 * shape and glass: a slab-sided armoured box with small thick windows is a
 * Tigr or Typhoon, a soft-top with large windows is a UAZ.
 */
export const lightVehicles: Item[] = [
  {
    slug: "gaz-2975-tigr",
    blockSlug: "light-vehicles",
    name: "GAZ-2975 Tigr",
    aka: "Tiger",
    imageUrl: "/images/items/gaz-2975-tigr.jpg",
    imageCredit: "CC BY-SA 3.0 — Евгений Катышев",
    imagePage: "https://commons.wikimedia.org/wiki/File:GAZ-2975_Tigr.jpg",
    armament: "Roof ring or remote mount: 7.62mm PKT, 12.7mm Kord or AGS-17",
    rangeText: "Mounted MG effective to 2,000 m",
    cues: [
      "Squared armoured bonnet with a near-vertical windscreen",
      "Four large wheels with prominent arches, no bonnet overhang",
      "Small thick side windows set high in the doors",
      "Roof hatch with a ring mount above the cab",
    ],
    placements: [
      "Reconnaissance companies of motor rifle and tank brigades",
      "Special-purpose and airborne units as a patrol vehicle",
    ],
    doctrineNote:
      "Mobility for reconnaissance and command rather than assault. Grau & Bartles stress the weight of Russian reconnaissance effort; the Tigr is what much of it rides in.",
    crew: "2 + 7",
    service: "In service",
    sort: 0,
  },
  {
    slug: "uaz-469",
    blockSlug: "light-vehicles",
    name: "UAZ-469",
    aka: "Bobik",
    imageUrl: "/images/items/uaz-469.jpg",
    imageCredit: "CC BY-SA 4.0 — Hons084",
    imagePage: "https://commons.wikimedia.org/wiki/File:2014_Suchum,_UAZ_469.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Small boxy jeep with a canvas or thin metal top",
      "Round headlights set in a flat vertical grille",
      "Large glass area and no armour",
      "Spare wheel commonly on the rear or bonnet",
    ],
    placements: [
      "Command and liaison across all ground formations",
      "Widely used by territorial and second-line units",
    ],
    doctrineNote:
      "Unprotected utility transport. Its presence forward usually indicates a staff or liaison function rather than a fighting sub-unit.",
    crew: "1 + 6",
    service: "In service, being replaced",
    sort: 1,
  },
  {
    slug: "uaz-3163-patriot",
    blockSlug: "light-vehicles",
    name: "UAZ Patriot",
    aka: "UAZ-3163",
    imageUrl: "/images/items/uaz-3163-patriot.jpg",
    imageCredit: "CC BY-SA 3.0 — Zaporozhetz_Blue_03.jpg: NVO derivative work: ZZZico",
    imagePage: "https://commons.wikimedia.org/wiki/File:UAZ_3163_Patriot.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Civilian SUV lines, rounded compared with the UAZ-469",
      "Full-height side windows and body-coloured pillars",
      "Five-door body with a side-hinged rear door",
      "No firing ports or armour plating",
    ],
    placements: ["Staff transport and military police", "Rear-area logistics and liaison"],
    doctrineNote:
      "A civilian design in military service. Seeing one forward is a strong indicator of an administrative rather than tactical task.",
    crew: "1 + 4",
    service: "In service",
    sort: 2,
  },
  {
    slug: "kamaz-63968-typhoon",
    blockSlug: "light-vehicles",
    name: "KamAZ-63968 Typhoon-K",
    aka: "Typhoon",
    imageUrl: "/images/items/kamaz-63968-typhoon.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:KamAZ-63968_Typhoon_-_Engineering_technologies_2012_(1).jpg",
    armament: "Remote weapon station with 12.7mm MG or 30mm grenade launcher",
    rangeText: "RWS effective to 2,000 m",
    cues: [
      "Very tall 6x6 hull with a flat V-shaped underbelly",
      "Cab and troop compartment form one continuous armoured box",
      "Small armoured window shutters, often closed",
      "Access by a rear ramp or door, high off the ground",
    ],
    placements: [
      "MRAP transport for engineer and assault units",
      "Convoy escort in areas threatened by mines and IEDs",
    ],
    doctrineNote:
      "Mine-protected transport, not a fighting vehicle. Its use signals a route-clearance or rear-area security task.",
    crew: "2 + 14",
    service: "In service",
    sort: 3,
  },
  {
    slug: "gaz-233114-tigr-m",
    blockSlug: "light-vehicles",
    name: "Tigr-M SpN",
    aka: "GAZ-233114 / Tigr-M",
    imageUrl: "/images/items/gaz-233114-tigr-m.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:GAZ_233114_Tigr-M_Arbalet-DM.jpg",
    armament: "Arbalet-DM remote weapon station, 12.7mm Kord",
    rangeText: "Effective to 2,000 m",
    cues: [
      "Tigr hull with a low remote turret rather than an open ring",
      "Optics block on the weapon station instead of an exposed gunner",
      "Additional applique panels on doors and flanks",
      "Antenna cluster at the rear of the roof",
    ],
    placements: [
      "Special-purpose (SpN) and reconnaissance detachments",
      "Airborne assault units as a fire-support vehicle",
    ],
    doctrineNote:
      "The armed reconnaissance variant. A remote station instead of an open hatch means the crew expect to fight buttoned up.",
    crew: "2 + 5",
    service: "In service",
    sort: 4,
  },
  {
    slug: "iveco-lmv-rys",
    blockSlug: "light-vehicles",
    name: "Rys",
    aka: "Iveco LMV / Lynx",
    imageUrl: "/images/items/iveco-lmv-rys.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:Iveco_LMV_Lynx_photo002.jpg",
    armament: "Roof ring mount, 7.62mm or 12.7mm MG",
    rangeText: "Mounted MG effective to 2,000 m",
    cues: [
      "Noticeably lower and more rounded than a Tigr",
      "Sloped bonnet with headlights recessed into the wings",
      "Four doors with small square armoured windows",
      "Western proportions — an Italian design built under licence",
    ],
    placements: [
      "Limited issue to reconnaissance and airborne units",
      "Command and liaison in selected formations",
    ],
    doctrineNote:
      "Bought in small numbers and never widely fielded; its rarity makes it a useful marker for specific units.",
    crew: "1 + 4",
    service: "Limited service",
    sort: 5,
  },
  {
    slug: "typhoon-u",
    blockSlug: "light-vehicles",
    name: "Ural-63095 Typhoon-U",
    aka: "Typhoon",
    imageUrl: "/images/items/typhoon-u.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ural_63095_right_side.jpg",
    armament: "Remote weapon station or a roof ring, when fitted",
    rangeText: null,
    cues: [
      "Very tall slab-sided armoured body on a 6x6 truck chassis",
      "Bonnet ahead of the cab — the KamAZ Typhoon-K is cab-over and has none",
      "Row of small thick windows high along the troop compartment",
      "V-shaped hull underneath, visible in the ground clearance",
    ],
    placements: [
      "Protected mobility for motor rifle units on mined routes",
      "Moves people along roads, not across country with the assault",
    ],
    doctrineNote:
      "Built against mines and roadside charges rather than against direct fire. The height that makes it conspicuous is the ground clearance keeping a blast away from the floor — a trade a force that has to use roads is willing to make.",
    crew: null,
    service: "In service",
    sort: 6,
  },
  {
    slug: "linza",
    blockSlug: "light-vehicles",
    name: "KamAZ-53949 Linza",
    aka: "Lens",
    imageUrl: "/images/items/linza.jpg",
    imageCredit: "CC BY 4.0 — General Staff of the Armed Forces of Ukraine",
    imagePage: "https://commons.wikimedia.org/wiki/File:Abandoned_Russian_Linza_ambulance_01.jpg",
    armament: null,
    rangeText: null,
    cues: [
      "Short 4x4 armoured truck, much smaller than a Typhoon",
      "Tall box body behind a separate armoured cab",
      "Red cross markings on the medical version, often painted over",
      "Single rear door with steps, for stretchers rather than dismounts",
    ],
    placements: [
      "Medical evacuation for motor rifle and airborne units",
      "Also fielded as a plain protected carrier without the medical fit",
    ],
    doctrineNote:
      "A protected ambulance rather than a fighting vehicle, and its presence marks a casualty collection point or an evacuation route. Recognising it is worth more for what it says about a position than for what it can do.",
    crew: null,
    service: "In service",
    sort: 7,
  },
];
