import type { Item } from "@/content/types";

/**
 * Block 03 — Heavy, squad and specialised weapons.
 *
 * The crew-served layer between the rifle squad's small arms and the artillery
 * park: machine guns, grenade launchers, anti-tank guided missiles and
 * thermobaric systems. Recognition here is mostly about mount, feed and tube
 * diameter rather than silhouette.
 */
export const heavyWeapons: Item[] = [
  {
    slug: "pkp-pecheneg",
    blockSlug: "heavy-weapons",
    name: "PKP Pecheneg",
    aka: "6P41",
    imageUrl: "/images/items/pkp-pecheneg.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:PKP_Pecheneg_machine_gun_-_RaceofHeroes-part2-19.jpg",
    armament: "7.62x54mmR general-purpose machine gun, belt-fed",
    rangeText: "Effective 1,500 m on bipod; 1,900 m from a tripod",
    cues: [
      "Heavy ribbed barrel shroud running the full barrel length",
      "No quick-change barrel, unlike the PKM it replaced",
      "Carrying handle mounted forward above the shroud",
      "Belt box hangs under the receiver",
    ],
    placements: [
      "Machine gunner of each motor rifle squad",
      "Weapons platoon of motor rifle companies",
    ],
    doctrineNote:
      "The squad's base of fire. Grau & Bartles note Russian infantry fixes and suppresses with organic automatic fire while artillery does the killing.",
    crew: "1–2",
    service: "In service",
    sort: 0,
  },
  {
    slug: "kord",
    blockSlug: "heavy-weapons",
    name: "Kord",
    aka: "6P50 / NSV successor",
    imageUrl: "/images/items/kord.jpg",
    imageCredit: "CC BY-SA 3.0 — Sergeev Pavel",
    imagePage: "https://commons.wikimedia.org/wiki/File:Kord_6P50.jpg",
    armament: "12.7x108mm heavy machine gun",
    rangeText: "Effective 2,000 m; 1,500 m against light armour",
    cues: [
      "Very heavy barrel with prominent muzzle brake",
      "Mounted on a low 6T7 tripod or a vehicle ring mount",
      "Side-mounted belt feed with large links",
      "Spade grips at the rear, no shoulder stock on tripod mounts",
    ],
    placements: [
      "Heavy machine gun sections of motor rifle battalions",
      "Commander's mount on tanks and armoured vehicles",
    ],
    doctrineNote:
      "Used against light vehicles, crew-served positions and low-flying aircraft — the heaviest direct-fire weapon organic to the infantry.",
    crew: "2",
    service: "In service",
    sort: 1,
  },
  {
    slug: "ags-17",
    blockSlug: "heavy-weapons",
    name: "AGS-17 Plamya",
    aka: "Flame",
    imageUrl: "/images/items/ags-17.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:AGS-17_grenade_launcher_-_RaceofHeroes-part2-15.jpg",
    armament: "30mm automatic grenade launcher, belt-fed",
    rangeText: "Up to 1,700 m",
    cues: [
      "Short fat barrel with a distinctive round drum magazine on the right",
      "Mounted on a low tripod with a padded seat for the gunner",
      "Optical sight offset to the left",
      "Fires in bursts with a visible arcing trajectory",
    ],
    placements: [
      "Grenade launcher platoon of motor rifle battalions",
      "Vehicle and helicopter mountings",
    ],
    doctrineNote:
      "Area suppression against dismounted infantry in cover — a battalion's own indirect fire when the artillery is busy elsewhere.",
    crew: "2–3",
    service: "In service",
    sort: 2,
  },
  {
    slug: "rpg-7",
    blockSlug: "heavy-weapons",
    name: "RPG-7",
    aka: "Rocket-propelled grenade",
    imageUrl: "/images/items/rpg-7.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:RPG-7V1_grenade_launcher_-_RaceofHeroes-part2-22.jpg",
    armament: "Reloadable 40mm launcher firing oversize rocket grenades",
    rangeText: "Effective 200 m moving, 500 m static",
    cues: [
      "Tube with a distinctive flared blast cone at the rear",
      "Wooden or polymer heat guards around the middle",
      "Warhead noticeably wider than the tube it sits on",
      "Optical sight on the left side",
    ],
    placements: [
      "Grenadier in every motor rifle squad",
      "Widely carried by airborne and naval infantry",
    ],
    doctrineNote:
      "The squad's answer to armour, bunkers and buildings. Ubiquity matters more than performance: every squad has one.",
    crew: "1",
    service: "In service",
    sort: 3,
  },
  {
    slug: "rpo-a-shmel",
    blockSlug: "heavy-weapons",
    name: "RPO-A Shmel",
    aka: "Bumblebee",
    imageUrl: "/images/items/rpo-a-shmel.jpg",
    imageCredit: "Public domain — User Megapixie on en.wikipedia",
    imagePage: "https://commons.wikimedia.org/wiki/File:RPO-A_missile_and_launcher.jpg",
    armament: "93mm disposable thermobaric rocket launcher",
    rangeText: "Effective 600 m; maximum 1,000 m",
    cues: [
      "Smooth cylindrical disposable tube, no flared cone",
      "Usually carried and fired as a paired set",
      "Simple flip-up iron sight",
      "Shorter and fatter than an RPG-7 tube",
    ],
    placements: [
      "Flamethrower units of the NBC protection troops",
      "Attached to motor rifle units for assault tasks",
    ],
    doctrineNote:
      "Held by NBC protection troops rather than the infantry, which is itself a recognition clue: their presence signals a deliberate assault on fortified positions.",
    crew: "1",
    service: "In service",
    sort: 4,
  },
  {
    slug: "kornet",
    blockSlug: "heavy-weapons",
    name: "9M133 Kornet",
    aka: "AT-14 Spriggan",
    imageUrl: "/images/items/kornet.jpg",
    imageCredit: "CC BY-SA 3.0 — Mike1979 Russia",
    imagePage: "https://commons.wikimedia.org/wiki/File:9M133_Kornet.JPG",
    armament: "Laser beam-riding anti-tank guided missile, tandem HEAT warhead",
    rangeText: "100–5,500 m; up to 8,000 m for later variants",
    cues: [
      "Large launch tube on a tripod with a prominent sight block",
      "Gunner sits or lies behind the sight rather than shouldering it",
      "Often mounted in pairs on light vehicles",
      "Missile tube noticeably longer than a Metis or Fagot",
    ],
    placements: [
      "Anti-tank platoons of motor rifle battalions",
      "Anti-tank batteries at brigade level",
    ],
    doctrineNote:
      "The anti-tank reserve. Grau & Bartles describe ATGM sub-units being positioned to cover likely armour approaches rather than accompanying the assault.",
    crew: "2",
    service: "In service",
    sort: 5,
  },
  {
    slug: "2b14-podnos",
    blockSlug: "heavy-weapons",
    name: "2B14 Podnos",
    aka: "Tray",
    imageUrl: "/images/items/2b14-podnos.jpg",
    imageCredit: "CC BY-SA 3.0 — Nockson",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:2B14_Podnos_at_%22Engineering_Technologies_2010%22_forum.jpg",
    armament: "82mm smoothbore mortar, muzzle-loaded",
    rangeText: "85–4,270 m",
    cues: [
      "Simple tube, bipod and rectangular baseplate",
      "Broken down into three man-portable loads",
      "No recoil mechanism or shield",
      "Sight unit clamped to the left of the tube",
    ],
    placements: [
      "Mortar battery of motor rifle battalions",
      "Airborne and mountain units where vehicles cannot follow",
    ],
    doctrineNote:
      "The battalion commander's own artillery — responsive fire that does not require permission from the artillery group.",
    crew: "4",
    service: "In service",
    sort: 6,
  },
];
