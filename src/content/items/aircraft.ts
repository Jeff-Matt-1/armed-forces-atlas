import type { Item } from "@/content/types";

/**
 * Block 19 — Warplanes.
 *
 * Count engines, then read the wing. One engine and a straight wing is an
 * attack aircraft; two engines and a swept wing is a fighter; four engines is
 * a bomber or a transport, and the tail tells you which. After that the fine
 * separations are nose shape and tail arrangement — the Flanker family in
 * particular is one airframe stretched into several aircraft, and only the
 * nose reliably tells them apart.
 *
 * The block uses imageFit "contain": an aircraft is identified by wingspan and
 * tail, and a crop that clips either removes the cue.
 */
export const aircraft: Item[] = [
  {
    slug: "su-25",
    blockSlug: "aircraft",
    name: "Su-25",
    aka: "Grach; Frogfoot",
    imageUrl: "/images/items/su-25.jpg",
    imageCredit: "CC BY-SA 2.0 — Fedor Leukhin",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_(8683076150).jpg",
    armament: "30 mm GSh-30-2, rockets and bombs on ten pylons",
    rangeText: "Combat radius about 375 km",
    cues: [
      "Straight, unswept wing — the only one in the block",
      "Two engines in boxes tucked against the fuselage sides",
      "Short blunt nose with a heavily framed cockpit",
      "Sits high on long legs, built for rough strips",
    ],
    placements: [
      "Assault aviation regiments supporting ground forces",
      "Works low and close to the troops it supports",
    ],
    doctrineNote:
      "Close air support in the literal sense: slow, armoured and low, attacking targets the ground commander can see. In an artillery-led system it fills the gaps the guns cannot reach quickly.",
    crew: "1",
    service: "In service",
    sort: 0,
  },
  {
    slug: "su-34",
    blockSlug: "aircraft",
    name: "Su-34",
    aka: "Fullback",
    imageUrl: "/images/items/su-34.jpg",
    imageCredit: "CC BY-SA 2.0 — Anna Zvereva",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Russian_Air_Force,_RF-81857,_Sukhoi_Su-34_(51525365450).jpg",
    armament: "30 mm GSh-30-1, guided bombs and missiles",
    rangeText: "Combat radius about 1,100 km",
    cues: [
      "Wide flattened nose — the crew sit side by side, not in tandem",
      "Nose profile earns it the nickname platypus",
      "Long tail sting extending well behind the engines",
      "Flanker wings and twin fins under an entirely different front end",
    ],
    placements: ["Bomber aviation regiments", "The standard Russian tactical strike aircraft"],
    doctrineNote:
      "A strike aircraft built on a fighter's airframe, with the crew seated together for long missions. It carries out the deep attacks the artillery cannot reach.",
    crew: "2",
    service: "In service",
    sort: 1,
  },
  {
    slug: "su-35s",
    blockSlug: "aircraft",
    name: "Su-35S",
    aka: "Flanker-E",
    imageUrl: "/images/items/su-35s.jpg",
    imageCredit: "CC BY-SA 3.0 — Oleg Belyakov",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Russian_Air_Force_Sukhoi_Su-35_Belyakov.jpg",
    armament: "30 mm GSh-30-1, air-to-air missiles on twelve pylons",
    rangeText: "Combat radius about 1,600 km",
    cues: [
      "Classic Flanker shape: long blended body, twin fins, two widely spaced engines",
      "Pointed radome and a single-seat canopy",
      "No canards, unlike some earlier Flanker variants",
      "Deep space between the engine nacelles under the fuselage",
    ],
    placements: [
      "Fighter aviation regiments",
      "The most capable Russian fighter in widespread service",
    ],
    doctrineNote:
      "Air superiority, and the aircraft most likely to be escorting the strike packages. The Flanker family shares this silhouette, so the nose and the cockpit are what separate this from an Su-34 or Su-30.",
    crew: "1",
    service: "In service",
    sort: 2,
  },
  {
    slug: "su-57",
    blockSlug: "aircraft",
    name: "Su-57",
    aka: "Felon",
    imageUrl: "/images/items/su-57.jpg",
    imageCredit: "CC BY-SA 3.0 — Boevaya mashina",
    imagePage: "https://commons.wikimedia.org/wiki/File:Sukhoi_Su-57_RF-81775_Army-2022.jpg",
    armament: "30 mm cannon, weapons carried in internal bays",
    rangeText: "Combat radius about 1,500 km",
    cues: [
      "Faceted, angular surfaces where a Flanker is rounded",
      "Twin fins canted outward rather than standing vertical",
      "Flat, wide fuselage blending into the wing with no sharp join",
      "No external weapons — they are carried internally",
    ],
    placements: ["Fighter aviation regiments, in small numbers", "Fielded slowly and rarely seen"],
    doctrineNote:
      "Shaped to reduce radar return, which is exactly what the metre-band radars in block 12 are kept in service to counter. Numbers remain small enough that its operational effect is limited.",
    crew: "1",
    service: "In service",
    sort: 3,
  },
  {
    slug: "mig-31",
    blockSlug: "aircraft",
    name: "MiG-31",
    aka: "Foxhound",
    imageUrl: "/images/items/mig-31.jpg",
    imageCredit: "Public domain — Unknown author",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Right_side_view_of_a_Soviet_MiG-31_Foxhound_2.jpg",
    armament: "R-33 and R-37M long-range missiles; Kinzhal on some aircraft",
    rangeText: "Combat radius about 720 km; intercepts far beyond that",
    cues: [
      "Large boxy engine intakes with sharp square lips",
      "Wing is nearly straight-edged, not curved like a Flanker's",
      "Two crew in tandem under separate canopies",
      "Big and heavy — visibly less agile in shape than a fighter",
    ],
    placements: [
      "Interceptor regiments covering northern and eastern approaches",
      "Some aircraft modified to carry the Kinzhal missile",
    ],
    doctrineNote:
      "An interceptor, not a dogfighter: built to fly fast and far to meet bombers and cruise missiles over empty territory. The square intakes are the quickest way to tell it from a Flanker at distance.",
    crew: "2",
    service: "In service",
    sort: 4,
  },
  {
    slug: "tu-95ms",
    blockSlug: "aircraft",
    name: "Tu-95MS",
    aka: "Bear-H",
    imageUrl: "/images/items/tu-95ms.jpg",
    imageCredit: "CC BY-SA 4.0 — Роман Дергунов",
    imagePage: "https://commons.wikimedia.org/wiki/File:Tu-95_at_an_Air_show_in_Voronezh_2014.jpg",
    armament: "Kh-55 and Kh-101 cruise missiles",
    rangeText: "Range about 15,000 km; missiles add 2,500 km or more",
    cues: [
      "Four turboprops with contra-rotating propellers — nothing else looks like it",
      "Sharply swept wings, unusual on a propeller aircraft",
      "Glazed nose and a long slender fuselage",
      "Propellers make it identifiable by sound as well as shape",
    ],
    placements: [
      "Heavy bomber aviation regiments",
      "Launches cruise missiles from outside defended airspace",
    ],
    doctrineNote:
      "Old, and irrelevant to its purpose: it never enters defended airspace, but releases missiles hundreds of kilometres out. Swept wings on a propeller aircraft is a combination unique to this type.",
    crew: "7",
    service: "In service",
    sort: 5,
  },
  {
    slug: "tu-160",
    blockSlug: "aircraft",
    name: "Tu-160",
    aka: "White Swan; Blackjack",
    imageUrl: "/images/items/tu-160.jpg",
    imageCredit: "CC BY-SA 3.0 — Alex Beltyukov",
    imagePage: "https://commons.wikimedia.org/wiki/File:Tupolev_Tu-160_overflying_Moscow_fix.jpg",
    armament: "Kh-55 and Kh-101 cruise missiles in internal bays",
    rangeText: "Range about 12,300 km",
    cues: [
      "Variable-geometry wings that sweep back in flight",
      "Very long smooth fuselage blending into the wing root",
      "Four engines paired in two boxes under the wing centre",
      "Usually painted white, which is unusual for a combat aircraft",
    ],
    placements: ["Heavy bomber aviation regiments", "Strategic strike and long-range patrol"],
    doctrineNote:
      "The largest and heaviest combat aircraft in service anywhere. Like the Tu-95 it is a missile carrier rather than a bomber in the direct sense, and its value is reach and visibility rather than tonnage delivered.",
    crew: "4",
    service: "In service",
    sort: 6,
  },
  {
    slug: "il-76",
    blockSlug: "aircraft",
    name: "Il-76",
    aka: "Candid",
    imageUrl: "/images/items/il-76.jpg",
    imageCredit: "CC BY-SA 4.0 — Schmidy87",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:Ilyushin_Il-76_Russian_Air_Force_at_Zurich_Airport.jpg",
    armament: null,
    rangeText: "Carries about 50 tonnes some 4,000 km",
    cues: [
      "Four jet engines slung on pylons beneath a high wing",
      "T-tail, with the tailplane mounted on top of the fin",
      "Glazed navigator's station beneath the nose",
      "Rear loading ramp and a fat upswept tail section",
    ],
    placements: [
      "Military transport aviation",
      "Base airframe for tankers and airborne early warning variants",
    ],
    doctrineNote:
      "What makes the airborne forces in blocks 07 and 08 possible: BMD-4Ms and BTR-MDMs are sized to fit through its ramp. The transport fleet, not the vehicles, sets the limit on what can actually be dropped.",
    crew: "5",
    service: "In service",
    sort: 7,
  },
];
