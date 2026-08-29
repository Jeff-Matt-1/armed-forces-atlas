import type { Item } from "@/content/types";

/**
 * Block 08 — APCs.
 *
 * The BTR line is eight wheels and a boat hull throughout, so the family is
 * separated by details rather than silhouette: where the side door is, how big
 * it is, and what sits in the turret. The tracked carriers are a different
 * problem — they are read by how low and flat they sit, since none of them
 * carries a gun worth using as a cue.
 *
 * An APC carries infantry to the fight; an IFV fights alongside them. That
 * distinction, not the wheel count, is what puts a vehicle in this block.
 */
export const apc: Item[] = [
  {
    slug: "btr-60pb",
    blockSlug: "apc",
    name: "BTR-60PB",
    aka: "BTR-60",
    imageUrl: "/images/items/btr-60pb.jpg",
    imageCredit: "Public domain — Unknown author",
    imagePage: "https://commons.wikimedia.org/wiki/File:BTR-60PB_DA-ST-89-06597.jpg",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT effective to about 2,000 m",
    cues: [
      "Eight wheels on a pointed boat hull, evenly spaced",
      "Small conical turret with the stubby 14.5 mm gun",
      "No side doors at all — the troops leave through roof hatches",
      "Two petrol engines, so twin exhausts at the rear",
    ],
    placements: [
      "Reserve and second-line motor rifle units",
      "Command and specialist variants still in service",
    ],
    doctrineNote:
      "The roof-only exit is the defining weakness: infantry have to climb out over the top, exposed. Every later BTR is an attempt to solve that problem.",
    crew: "2 + 8",
    service: "Limited service, largely reserve",
    sort: 0,
  },
  {
    slug: "btr-70",
    blockSlug: "apc",
    name: "BTR-70",
    aka: "GAZ-4905",
    imageUrl: "/images/items/btr-70.jpg",
    imageCredit:
      "Attribution — Правительство Приднестровской Молдавской Республики (Government of the Pridnestrovian Moldavian Republic)",
    imagePage: "https://commons.wikimedia.org/wiki/File:BTR-70_APCs,_Tiraspol_2015.JPG",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT effective to about 2,000 m",
    cues: [
      "Small low hatches cut between the second and third axles",
      "Rounded nose, softer than the BTR-60's point",
      "Same conical 14.5 mm turret as the BTR-60 and BTR-80",
      "Still twin petrol engines — a BTR-80 has one diesel",
    ],
    placements: ["Second-line motor rifle units", "Internal troops and specialist variants"],
    doctrineNote:
      "A half-solution to the exit problem: the hatches are between the wheels and small enough that leaving under fire is still slow. The BTR-80's full door is the answer that stuck.",
    crew: "2 + 9",
    service: "Limited service",
    sort: 1,
  },
  {
    slug: "btr-80",
    blockSlug: "apc",
    name: "BTR-80",
    aka: "GAZ-5903",
    imageUrl: "/images/items/btr-80.jpg",
    imageCredit: "CC BY-SA 3.0 — Vitaliy Ragulin",
    imagePage: "https://commons.wikimedia.org/wiki/File:Russian_BTR-80_APC.jpg",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT effective to about 2,000 m",
    cues: [
      "Large two-part side door between the second and third axles",
      "Upper half of the door swings forward, lower half drops as a step",
      "Single diesel, so one exhaust rather than two",
      "Conical turret with the short thick 14.5 mm barrel",
    ],
    placements: [
      "Motor rifle battalions across the ground forces",
      "Naval infantry and airborne assault units",
    ],
    doctrineNote:
      "The door is the whole point of the design and the fastest way to tell it from a BTR-70 at a glance. It is the baseline wheeled carrier of the ground forces.",
    crew: "3 + 7",
    service: "In service",
    sort: 2,
  },
  {
    slug: "btr-82a",
    blockSlug: "apc",
    name: "BTR-82A",
    aka: "BTR-82",
    imageUrl: "/images/items/btr-82a.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:BTR-82A_of_the_Western_Military_District_-_June_2023.jpg",
    armament: "30 mm 2A72 autocannon, 7.62 mm PKT",
    rangeText: "Autocannon effective to about 2,000 m",
    cues: [
      "Long thin 30 mm barrel where a BTR-80 has a short thick one",
      "Taller, more angular turret than the BTR-80's cone",
      "Same BTR-80 hull and side door underneath",
      "Often carries bar armour and additional appliqué panels",
    ],
    placements: ["Motor rifle brigades re-equipped to the current standard", "Naval infantry"],
    doctrineNote:
      "The gun blurs the line this block is built on: a carrier armed like an IFV. It still lacks the missile armament and the protection of a BMP, so it carries infantry to a fight rather than through one.",
    crew: "3 + 7",
    service: "In service",
    sort: 3,
  },
  {
    slug: "mt-lb",
    blockSlug: "apc",
    name: "MT-LB",
    aka: "Multi-purpose light armoured tractor",
    imageUrl: "/images/items/mt-lb.jpg",
    imageCredit: "Public domain — DON S. Montgomery, U.S. Navy (Ret.)",
    imagePage: "https://commons.wikimedia.org/wiki/File:Soviet_MT-LB.JPEG",
    armament: "7.62 mm PKT in a small turret",
    rangeText: null,
    cues: [
      "Tracked and remarkably low — barely taller than the men beside it",
      "Long flat roof with almost no superstructure",
      "Tiny machine-gun turret at the front right, or none at all",
      "Six small roadwheels with no return rollers",
    ],
    placements: [
      "Artillery prime mover and ammunition carrier",
      "Carrier for mortars, air defence and engineer variants",
      "Pressed into service as an infantry carrier",
    ],
    doctrineNote:
      "More chassis than vehicle: the hull underneath the 2S1 and a dozen specialist conversions. Identifying one tells you little until you read what has been bolted to its roof.",
    crew: "2 + 11",
    service: "In service",
    sort: 4,
  },
  {
    slug: "btr-d",
    blockSlug: "apc",
    name: "BTR-D",
    aka: "Obyekt 925",
    imageUrl: "/images/items/btr-d.jpg",
    imageCredit: "CC BY-SA 2.0 — Xabier Eskisabel",
    imagePage: "https://commons.wikimedia.org/wiki/File:BTR-D.jpg",
    armament: "Two bow-mounted 7.62 mm PKT; no turret",
    rangeText: null,
    cues: [
      "Tracked, low, and usually with no turret at all",
      "Longer hull than a BMD-2 — six roadwheels instead of five",
      "Hydropneumatic suspension, the same as the BMD family",
      "Often carries a mortar, MANPADS team or radio fit on the open roof",
    ],
    placements: [
      "Airborne (VDV) units as the carrier alongside BMD-1 and BMD-2",
      "Base vehicle for VDV command, mortar and air defence variants",
    ],
    doctrineNote:
      "The airborne answer to the MT-LB: a droppable flatbed that carries whatever the VDV needs to bring with it. The absent turret is the recognition cue.",
    crew: "3 + 10",
    service: "In service",
    sort: 5,
  },
  {
    slug: "btr-mdm-rakushka",
    blockSlug: "apc",
    name: "BTR-MDM Rakushka",
    aka: "Shell",
    imageUrl: "/images/items/btr-mdm-rakushka.jpg",
    imageCredit: "CC BY-SA 4.0 — Kirill Borisenko",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Armored_personnel_carrier_%22Rakushka%22_during_the_%22Armiya_2020%22_exhibition.jpg",
    armament: "7.62 mm PKT",
    rangeText: null,
    cues: [
      "Tall boxy superstructure over an airborne tracked hull",
      "Five roadwheels, shared with the BMD-4M it serves alongside",
      "Much higher roofline than a BTR-D, with a proper troop compartment",
      "No autocannon — the immediate split from a BMD-4M",
    ],
    placements: [
      "Airborne (VDV) units re-equipped alongside the BMD-4M",
      "Base for VDV command and medical variants",
    ],
    doctrineNote:
      "Pairs with the BMD-4M on a common chassis so a modernised VDV battalion runs one set of spares. A Rakushka in the column implies BMD-4Ms are with it.",
    crew: "2 + 13",
    service: "In service",
    sort: 6,
  },
];
