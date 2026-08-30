import type { Item } from "@/content/types";

/**
 * Block 20 — missile systems.
 *
 * Operational-tactical, coastal and strategic. These are not artillery: they
 * belong to missile brigades and coastal troops, are released at army level or
 * above, and reach targets the formation in front of you never sees.
 */
export const missiles: Item[] = [
  {
    slug: "iskander-m",
    blockSlug: "missiles",
    name: "9K720 Iskander-M",
    aka: "SS-26 Stone",
    imageUrl: "/images/items/iskander-m.jpg",
    imageCredit: "CC BY-SA 4.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:9P78-1_TEL_Iskander-M.JPG",
    armament: "Two 9M723 quasi-ballistic missiles, carried openly",
    rangeText: "Roughly 500 km",
    cues: [
      "Two missiles lying side by side on an open cradle, no canisters",
      "Eight-wheel MZKT chassis with a long armoured cab",
      "Missiles have small strakes running their length, unlike a smooth canister",
      "The Iskander-K carries two cylindrical cruise-missile canisters instead",
    ],
    placements: [
      "Missile brigades held at army and district level",
      "Released from above the formation it fires for, never by it",
    ],
    doctrineNote:
      "The deep-strike weapon of a Russian army: headquarters, airfields, air defence and ammunition, hundreds of kilometres behind the line. Its arrival in a sector is a statement about what that sector is worth to the level that owns it, which is a larger fact than anything a gun tells you.",
    crew: "3",
    service: "In service",
    sort: 0,
  },
  {
    slug: "tochka-u",
    blockSlug: "missiles",
    name: "9K79-1 Tochka-U",
    aka: "SS-21 Scarab",
    imageUrl: "/images/items/tochka-u.jpg",
    imageCredit: "CC BY-SA 4.0 — Nikolai Bulykin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%A1%D0%B0%D0%BC%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B5_%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D1%8B,_%D0%A2%D0%BE%D1%87%D0%BA%D0%B0-%D0%A3.jpg",
    armament: "One 9M79M ballistic missile on a tilting rail",
    rangeText: "Roughly 120 km",
    cues: [
      "A single missile, not two — the quickest separation from an Iskander",
      "Six wheels on a boat-shaped amphibious hull, not a truck chassis",
      "Missile lies under a long clamshell cover and tilts up to fire",
      "Much shorter and lower overall than any of the newer systems",
    ],
    placements: [
      "Missile battalions of older formations, being replaced by the Iskander",
      "Army-level asset, like the system replacing it",
    ],
    doctrineNote:
      "The Soviet-era predecessor of the Iskander, with a quarter of the reach and none of its accuracy. Finding one says a formation is fighting with what it has rather than what it is meant to have, which is itself worth reporting.",
    crew: "4",
    service: "Being replaced",
    sort: 1,
  },
  {
    slug: "bastion-p",
    blockSlug: "missiles",
    name: "K-300P Bastion-P",
    aka: "SSC-5 Stooge",
    imageUrl: "/images/items/bastion-p.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:K-300P_Bastion-P.jpg",
    armament: "Two P-800 Oniks anti-ship missiles in canisters",
    rangeText: "Roughly 300 km against shipping",
    cues: [
      "Two long canisters carried flat, raised almost vertical to fire",
      "Six-wheel MZKT chassis, shorter than an Iskander's eight",
      "Canisters are smooth tubes with blunt ends, no fins showing",
      "Works with a separate command vehicle on the same chassis",
    ],
    placements: [
      "Coastal missile brigades of the fleets",
      "Sited inland and moved between prepared positions near the coast",
    ],
    doctrineNote:
      "Closes a sea area from the land. A battery hidden a few tens of kilometres inland denies shipping a stretch of coast without a ship of its own being present, which is why coastal defence is a naval problem solved by a vehicle you find in a forest.",
    crew: null,
    service: "In service",
    sort: 2,
  },
  {
    slug: "bal",
    blockSlug: "missiles",
    name: "3K60 Bal",
    aka: "SSC-6 Sennight",
    imageUrl: "/images/items/bal.jpg",
    imageCredit: "CC0 — Pliskin",
    imagePage: "https://commons.wikimedia.org/wiki/File:BAL-E003.jpg",
    armament: "Eight Kh-35 anti-ship missiles in a boxed block",
    rangeText: "Roughly 120–260 km depending on missile",
    cues: [
      "One squared block of eight tubes, not two separate canisters",
      "Block tilts back as a single unit, unlike the Bastion's pair",
      "MZKT chassis again, so the wheels do not separate it from a Bastion",
      "Shorter missiles, so the load looks stubbier than a Bastion's",
    ],
    placements: [
      "Coastal missile brigades of the fleets, alongside the Bastion",
      "Covers straits and approaches the longer-ranged system does not need to",
    ],
    doctrineNote:
      "The lighter half of coastal defence: more missiles, less reach, and salvo weight rather than range. A Bastion denies a sea area; a Bal saturates a narrow one, which is why the two are found together and why telling them apart matters more than it looks.",
    crew: null,
    service: "In service",
    sort: 3,
  },
  {
    slug: "topol-m",
    blockSlug: "missiles",
    name: "RT-2PM2 Topol-M",
    aka: "SS-27 Sickle B",
    imageUrl: "/images/items/topol-m.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:19-03-2012-Parade-rehearsal_-_Topol-M.jpg",
    armament: "One intercontinental ballistic missile in a canister",
    rangeText: "Roughly 11,000 km",
    cues: [
      "Enormous — eight axles, and the canister runs the whole length",
      "One smooth tube far thicker than any tactical missile",
      "Cab is small relative to the load, dwarfed by what sits behind it",
      "Travels with a large escort, never alone",
    ],
    placements: [
      "Missile regiments of the Strategic Rocket Forces",
      "Not a formation asset in any sense — it answers to the national level",
    ],
    doctrineNote:
      "Included so it is never confused with anything tactical. Nothing about it belongs to the battle in front of you: it is a strategic system on patrol, and the only useful recognition fact is that its size rules out every other missile vehicle in this block.",
    crew: null,
    service: "In service",
    sort: 4,
  },
];
