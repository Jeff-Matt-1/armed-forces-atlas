import type { Item } from "@/content/types";

/**
 * Block 21 — helicopters.
 *
 * Read the rotor first. Two stacked rotors and no tail rotor is a Ka-52 and
 * nothing else; after that the question is whether there is a cabin behind the
 * cockpit, which separates the gunship that carries troops from the ones that
 * do not.
 */
export const helicopters: Item[] = [
  {
    slug: "mi-24",
    blockSlug: "helicopters",
    name: "Mi-24",
    aka: "Hind",
    imageUrl: "/images/items/mi-24.jpg",
    imageCredit: "CC BY-SA 4.0 — Jakub Hałun",
    imagePage: "https://commons.wikimedia.org/wiki/File:20110827_Mi-24_Radom_Air_Show_8611.jpg",
    armament: "12.7 mm or 30 mm gun, rockets, Shturm or Ataka missiles",
    rangeText: "Combat radius roughly 160 km",
    cues: [
      "Stepped tandem cockpit — two separate bubble canopies, one above and behind the other",
      "Stub wings that carry weapons and are angled sharply down at the tips",
      "A cabin behind the cockpit: it carries troops, which no other gunship here does",
      "Retractable undercarriage, unusual on a helicopter",
    ],
    placements: [
      "Army aviation regiments supporting ground formations",
      "Also used to insert small groups, which the newer gunships cannot",
    ],
    doctrineNote:
      "A gunship that is also a carrier, which is a Soviet idea no one else pursued. The cabin is the recognition key and the doctrinal one at once: finding one says the operation may involve putting people on the ground, not only shooting at it.",
    crew: "2 + 8",
    service: "In service",
    sort: 0,
  },
  {
    slug: "mi-28",
    blockSlug: "helicopters",
    name: "Mi-28N",
    aka: "Havoc",
    imageUrl: "/images/items/mi-28.jpg",
    imageCredit: "CC BY-SA 2.0 — Alan Wilson",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Mil_Mi-28N_Havoc_(c_n_34012843262)_(8584312973).jpg",
    armament: "30 mm 2A42 in a chin turret, rockets, Ataka missiles",
    rangeText: "Combat radius roughly 200 km",
    cues: [
      "Narrow gunship with two stepped cockpits and no cabin behind them",
      "Single main rotor and a conventional tail rotor",
      "Chin turret under the nose with one long cannon",
      "Radar ball above the rotor head on the N variant",
    ],
    placements: [
      "Attack helicopter regiments of army aviation",
      "Works in pairs with a scout, not alone",
    ],
    doctrineNote:
      "A dedicated gunship with nothing to carry, unlike the Hind it replaces. Its arrival in a sector means anti-armour work is expected rather than transport, and the radar above the rotor means it can fight from behind cover.",
    crew: "2",
    service: "In service",
    sort: 1,
  },
  {
    slug: "ka-52",
    blockSlug: "helicopters",
    name: "Ka-52",
    aka: "Alligator",
    imageUrl: "/images/items/ka-52.jpg",
    imageCredit: "CC BY-SA 4.0 — Роман Дергунов",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ka-52_at_an_air_show_in_Voronezh_2014.jpg",
    armament: "30 mm 2A42 on the side, rockets, Vikhr or Ataka missiles",
    rangeText: "Combat radius roughly 250 km",
    cues: [
      "Two rotors stacked on one mast turning opposite ways — no tail rotor at all",
      "Side-by-side seating, so the cockpit is wide rather than stepped",
      "Cannon mounted on the fuselage side, not in a chin turret",
      "Stubby and broad compared with the narrow Mi-28",
    ],
    placements: [
      "Attack helicopter regiments, often as the scout of a pair",
      "Carried on assault ships as well as flown from land",
    ],
    doctrineNote:
      "The coaxial rotor is the whole identification: nothing else in Russian service has two stacked rotors and no tail rotor. Side-by-side seating lets the second crewman direct other aircraft, which is why it leads pairs and hunts for the Mi-28 as much as it shoots.",
    crew: "2",
    service: "In service",
    sort: 2,
  },
  {
    slug: "mi-8",
    blockSlug: "helicopters",
    name: "Mi-8/Mi-17",
    aka: "Hip",
    imageUrl: "/images/items/mi-8.jpg",
    imageCredit: "CC BY-SA 3.0 — Igor Dvurekov",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Russian_Air_Force_Mil_Mi-8MT_Dvurekov-3.jpg",
    armament: "Door guns, rocket pods on outriggers when fitted",
    rangeText: "Roughly 450 km with standard fuel",
    cues: [
      "Large round-nosed cabin with a row of round windows down the side",
      "Clamshell rear doors, and often an external fuel tank along each flank",
      "Five-blade main rotor and a tall tail boom",
      "By far the most numerous helicopter you will see — assume Hip until told otherwise",
    ],
    placements: [
      "Transport regiments of army aviation, and almost every other role",
      "Command, casualty evacuation, jamming and mine-laying variants all use this airframe",
    ],
    doctrineNote:
      "The workhorse that everything else is bolted to. Recognising it matters less for the airframe than for what has been hung on it, because the same cabin carries troops, a command post, an electronic warfare fit or a minelayer.",
    crew: "3 + 24",
    service: "In service",
    sort: 3,
  },
  {
    slug: "mi-26",
    blockSlug: "helicopters",
    name: "Mi-26",
    aka: "Halo",
    imageUrl: "/images/items/mi-26.jpg",
    imageCredit: "CC BY-SA 2.0 — Alan Wilson",
    imagePage: "https://commons.wikimedia.org/wiki/File:Mil_Mi-26_Halo_88_blue_(8594011266).jpg",
    armament: null,
    rangeText: "Carries roughly 20 tonnes",
    cues: [
      "Enormous — the largest helicopter in service anywhere, and it looks it",
      "Eight main rotor blades, more than anything else here",
      "Deep boxy fuselage with a rear loading ramp",
      "Fixed undercarriage on tall legs to clear the ramp",
    ],
    placements: [
      "Heavy transport regiments held at district level",
      "Moves what road transport cannot reach or cannot carry",
    ],
    doctrineNote:
      "Lifts vehicles, guns and downed aircraft. It is rare enough that seeing one says a specific heavy move is under way rather than routine resupply, and it is slow and unarmed, so it flies where the air is thought to be safe.",
    crew: "5",
    service: "In service",
    sort: 4,
  },
  {
    slug: "ka-27",
    blockSlug: "helicopters",
    name: "Ka-27",
    aka: "Helix-A",
    imageUrl: "/images/items/ka-27.jpg",
    imageCredit: "CC BY-SA 2.0 — Rob Schleiffert from Holland",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ka-27_Russian_Navy_(17611939075).jpg",
    armament: "Torpedoes, depth charges and sonobuoys in a ventral bay",
    rangeText: "Combat radius roughly 200 km",
    cues: [
      "Coaxial rotors and no tail rotor — the Kamov signature, shared with the Ka-52",
      "Twin fins on a very short tail boom, unlike the Ka-52's single boom",
      "Deep boxy fuselage sitting high on four legs, built around an internal weapons bay",
      "Rotors and fins fold, because it lives on a ship",
    ],
    placements: [
      "Naval aviation, embarked on destroyers and frigates",
      "One or two aircraft per ship rather than a squadron ashore",
    ],
    doctrineNote:
      "The fleet's submarine hunter, and the reason a Russian warship's flight deck exists at all. A ship that carries one can search far beyond its own sonar, so finding the helicopter tells you the ship is hunting rather than transiting.",
    crew: "3",
    service: "In service",
    sort: 5,
  },
  {
    slug: "ka-29",
    blockSlug: "helicopters",
    name: "Ka-29",
    aka: "Helix-B",
    imageUrl: "/images/items/ka-29.jpg",
    imageCredit: "CC BY-SA 2.0 — Alan Wilson from Stilton, Peterborough, Cambs, UK",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Kamov_Ka-29_%E2%80%9916_yellow%E2%80%99_(24221036478).jpg",
    armament: "Rocket pods, gun pods and a fixed machine gun; carries up to 16 troops",
    rangeText: "Combat radius roughly 200 km",
    cues: [
      "Wide flat-fronted cockpit with three windscreen panels, not the Ka-27's rounded nose",
      "Stub wings carrying pylons, which the Ka-27 does not have",
      "Same coaxial rotors and twin fins as the Ka-27 underneath",
      "Cabin windows along the side: it carries troops",
    ],
    placements: [
      "Naval infantry support, flown from assault ships",
      "Works alongside the Ka-27 from the same decks",
    ],
    doctrineNote:
      "The naval infantry's own gunship and carrier at once, which is the Hind idea moved to sea. Its appearance beside a landing ship means troops are meant to go ashore, not that submarines are being hunted.",
    crew: "2 + 16",
    service: "In service",
    sort: 6,
  },
  {
    slug: "ka-31",
    blockSlug: "helicopters",
    name: "Ka-31",
    aka: "Helix",
    imageUrl: "/images/items/ka-31.jpg",
    imageCredit: "CC BY-SA 3.0 — parfaits",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Kamov_Ka-31,_Russia_-_Air_Force_AN1258376.jpg",
    armament: null,
    rangeText: "Detects aircraft at roughly 100–150 km, ships at roughly 250 km",
    cues: [
      "Large flat radar antenna folded flat under the fuselage — it swings down and rotates in flight",
      "No weapons and no sonar: the airframe carries a radar and fuel",
      "Undercarriage retracts upward to leave the antenna clear, unlike the Ka-27's fixed legs",
      "Coaxial rotors and twin fins mark it as the same family",
    ],
    placements: [
      "Naval aviation, providing early warning for a ship group",
      "Rare: only a handful are in service",
    ],
    doctrineNote:
      "Lifts the fleet's radar horizon above the mast, which is the only way a ship sees a sea-skimming missile in time. It is the naval equivalent of the ground forces' surveillance radars, and just as valuable a target.",
    crew: "2",
    service: "In service",
    sort: 7,
  },
];
