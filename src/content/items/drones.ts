import type { Item } from "@/content/types";

/**
 * Block 18 — Drones.
 *
 * Sort by what the thing is for, because size follows from it. A hand-sized
 * airframe launched from a catapult is looking for targets; a large twin-boom
 * or single-engine aircraft is watching an area for hours and may be armed;
 * something small with cruciform wings and a warhead is a munition rather than
 * an aircraft at all. Ground robots belong here too, and are recognised as
 * tracked vehicles with no room for a crew.
 */
export const drones: Item[] = [
  {
    slug: "orlan-10",
    blockSlug: "drones",
    name: "Orlan-10",
    aka: "Orlan",
    imageUrl: "/images/items/orlan-10.jpg",
    imageCredit: "CC BY-SA 4.0 — Mike1979 Russia",
    imagePage: "https://commons.wikimedia.org/wiki/File:Orlan-10_UAV_Army-2022_2022-08-20_2287.jpg",
    armament: null,
    rangeText: "Roughly 120 km from the operator, up to 16 hours aloft",
    cues: [
      "Small: a wingspan of about three metres, carried by two people",
      "Single pusher propeller behind a stubby fuselage pod",
      "Launched from a catapult rail, recovered by parachute",
      "Straight high-mounted wing with no tail boom structure",
    ],
    placements: [
      "Artillery and reconnaissance units at brigade level and below",
      "The most numerous Russian drone in service",
    ],
    doctrineNote:
      "The workhorse that closes the reconnaissance-fires loop: it finds the target, watches the fall of shot and corrects it. Grau & Bartles frame Russian artillery as only as good as its observation, and this is now most of that observation.",
    crew: null,
    service: "In service",
    sort: 0,
  },
  {
    slug: "eleron-3",
    blockSlug: "drones",
    name: "Eleron-3",
    aka: "Aileron-3SV",
    imageUrl: "/images/items/eleron-3.jpg",
    imageCredit: "CC BY-SA 4.0 — Mike1979 Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:ENICS_Eleron-3_UAV_Army-2022_2022-08-20_2212.jpg",
    armament: null,
    rangeText: "Roughly 25 km, about 2 hours aloft",
    cues: [
      "Flying wing — no separate tail and no fuselage to speak of",
      "Small upturned winglets at the tips instead of a fin",
      "Single pusher propeller at the rear of the centre body",
      "Smaller than an Orlan-10 and hand- or catapult-launched",
    ],
    placements: ["Battalion and company reconnaissance", "Special forces and airborne units"],
    doctrineNote:
      "Short-ranged and disposable enough to be used freely by small units. Where the Orlan serves a brigade's guns, this serves the company commander's own eyes.",
    crew: null,
    service: "In service",
    sort: 1,
  },
  {
    slug: "forpost",
    blockSlug: "drones",
    name: "Forpost",
    aka: "Forpost-R; Searcher II",
    imageUrl: "/images/items/forpost.jpg",
    imageCredit: "CC BY-SA 3.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Forpost_UAV_ARMY-2022.jpg",
    armament: "Light guided weapons on the armed variant",
    rangeText: "Roughly 250 km, about 18 hours aloft",
    cues: [
      "Twin tail booms running back from a central fuselage pod",
      "High straight wing with a pusher propeller between the booms",
      "Far larger than an Orlan — roughly the size of a light aircraft",
      "Sensor turret under the nose",
    ],
    placements: [
      "Army-level reconnaissance units",
      "Licence-built from an Israeli design, later produced independently",
    ],
    doctrineNote:
      "The step from unit reconnaissance to theatre reconnaissance: it loiters long enough to build a picture rather than to service one target. The twin booms are the fastest way to separate it from everything else here.",
    crew: null,
    service: "In service",
    sort: 2,
  },
  {
    slug: "orion-uav",
    blockSlug: "drones",
    name: "Orion",
    aka: "Inokhodets; Pacer",
    imageUrl: "/images/items/orion-uav.jpg",
    imageCredit: "CC BY-SA 3.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Kronstadt_Orion_left_side_ARMY-2022.jpg",
    armament: "Guided bombs and missiles on underwing pylons",
    rangeText: "Roughly 250 km, up to 24 hours aloft",
    cues: [
      "Single fuselage with a V-tail, not twin booms",
      "Long slender high-mounted wing, glider-like in proportion",
      "Pusher propeller at the very tail of the fuselage",
      "Underwing pylons — the first armed drone in this block",
    ],
    placements: [
      "Army-level strike and reconnaissance units",
      "The first Russian armed medium-altitude drone in service",
    ],
    doctrineNote:
      "Removes the delay between finding a target and attacking it, because the same aircraft does both. The V-tail against the Forpost's twin booms is the cue worth learning.",
    crew: null,
    service: "In service",
    sort: 3,
  },
  {
    slug: "lancet",
    blockSlug: "drones",
    name: "Lancet",
    aka: "ZALA Lancet",
    imageUrl: "/images/items/lancet.jpg",
    imageCredit: "CC BY 4.0 — Mztourist",
    imagePage: "https://commons.wikimedia.org/wiki/File:ZALA_Lancet_at_IDEX_2025.jpg",
    armament: "Integral warhead — the aircraft is the weapon",
    rangeText: "Roughly 40 km",
    cues: [
      "Two sets of X-shaped cruciform wings, front and rear",
      "Small tubular fuselage with a propeller at the tail",
      "No landing gear at all — it is launched and not recovered",
      "Far smaller than any reconnaissance drone here",
    ],
    placements: [
      "Artillery and special reconnaissance units",
      "Used against artillery, radars and air defence systems",
    ],
    doctrineNote:
      "A munition that loiters, so it collapses the reconnaissance-fires loop into a single object. It is used against precisely the high-value systems this atlas teaches you to recognise — counter-battery radars, self-propelled guns, air defence vehicles.",
    crew: null,
    service: "In service",
    sort: 4,
  },
  {
    slug: "uran-9",
    blockSlug: "drones",
    name: "Uran-9",
    aka: "Uran-9 UGV",
    imageUrl: "/images/items/uran-9.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:%D0%91%D0%BE%D0%B5%D0%B2%D0%BE%D0%B9_%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%A3%D1%80%D0%B0%D0%BD-9_-_%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%84%D0%BE%D1%80%D1%83%D0%BC%D0%B0_%D0%90%D0%A0%D0%9C%D0%98%D0%AF-2016_01.jpg",
    armament: "30 mm 2A72 autocannon, Ataka missiles, Shmel launchers",
    rangeText: "Controlled from up to about 3 km",
    cues: [
      "Tracked vehicle, but far too small to hold a crew",
      "Turret disproportionately large for the hull beneath it",
      "No hatches, no vision blocks, no cupola anywhere",
      "Sensor mast standing above the turret roof",
    ],
    placements: [
      "Experimental and limited-issue robotic combat units",
      "Intended for urban assault and reconnaissance by fire",
    ],
    doctrineNote:
      "The absence of crew fittings is the recognition cue: no hatches means nobody is inside. Its combat trials exposed how much control range and situational awareness such a vehicle loses, which is why it remains rare.",
    crew: null,
    service: "Limited service",
    sort: 5,
  },
];
