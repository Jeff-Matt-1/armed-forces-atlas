import type { Item } from "@/content/types";

/**
 * Block 11 — C2 Systems.
 *
 * Command vehicles are built to be unremarkable, so recognition works by
 * subtraction: a familiar hull with the weapon missing and antennas in its
 * place. What separates them from each other is the chassis, which climbs a
 * ladder of echelon — a box-bodied truck well to the rear, a wheeled carrier
 * with the manoeuvre units, a tracked hull that can follow the assault, and
 * finally a handheld terminal in a trench.
 *
 * Two entries deliberately share a base with items in other blocks. That is
 * the lesson rather than a flaw: the same BTR-80 hull carries an APC, an EW
 * station and a command post, and only the roof tells you which.
 */
export const c2: Item[] = [
  {
    slug: "r-142n",
    blockSlug: "c2",
    name: "R-142N",
    aka: "R-142NSA",
    imageUrl: "/images/items/r-142n.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:R-142N_command_vehicle.jpg",
    armament: null,
    rangeText: "HF and VHF nets across a formation's area",
    cues: [
      "GAZ-66 4x4 with a bonnet, carrying a square box body",
      "Whip antennas clustered above the cab and the box roof",
      "Windows cut into the side of the box body",
      "Cables running out to the ground when it is working",
    ],
    placements: [
      "Command-staff vehicle at regiment and battalion level",
      "Rear of a formation rather than with the leading units",
    ],
    doctrineNote:
      "Unarmoured, so it works from cover well behind the line. The chassis is shared with dozens of unrelated box-bodied vehicles — the antenna fit is the only thing that identifies it, which is exactly how it is meant to look.",
    crew: null,
    service: "In service",
    sort: 0,
  },
  {
    slug: "r-145bm",
    blockSlug: "c2",
    name: "R-145BM",
    aka: "Chaika",
    imageUrl: "/images/items/r-145bm.jpg",
    imageCredit: "CC BY-SA 4.0 — Vitaly V. Kuzmin",
    imagePage: "https://commons.wikimedia.org/wiki/File:R-145BM_command_vehicle_on_BTR-60_base.jpg",
    armament: null,
    rangeText: "Several radio nets worked simultaneously",
    cues: [
      "BTR-60 hull — eight wheels, pointed boat bow, no side doors",
      "No turret where a BTR-60PB would carry one",
      "Multiple whip antennas along the hull roof",
      "Roof raised into a low box over the working compartment",
    ],
    placements: [
      "Command-staff vehicle of Soviet-era establishments",
      "Reserve and second-line formations",
    ],
    doctrineNote:
      "The armoured command post of the previous generation, on the hull whose weakness the APC block explains. It puts the commander with his units rather than behind them, which is the whole reason for armouring a radio station.",
    crew: null,
    service: "Limited service",
    sort: 1,
  },
  {
    slug: "r-149ma1",
    blockSlug: "c2",
    name: "R-149MA1",
    aka: "Kushetka-B",
    imageUrl: "/images/items/r-149ma1.jpg",
    imageCredit: "CC BY-SA 3.0 — Mike1979 Russia",
    imagePage:
      "https://commons.wikimedia.org/wiki/File:R-149MA1_command_vehicle_at_Engineering_Technologies_2012.jpg",
    armament: null,
    rangeText: "Radio, radio-relay and satellite links",
    cues: [
      "BTR-80 hull, eight wheels, with the turret entirely absent",
      "Boxy raised superstructure with a small observation cupola",
      "Several tall whip antennas standing clear of the roof",
      "Equipment boxes bolted along the upper hull sides",
    ],
    placements: [
      "Command-staff vehicle of brigade and battalion headquarters",
      "Moves with the formation it commands",
    ],
    doctrineNote:
      "The modern armoured command post. Because the hull is a BTR-80, a column containing one looks unremarkable until you notice the missing turret — which is the point.",
    crew: null,
    service: "In service",
    sort: 2,
  },
  {
    slug: "bmp-1ksh",
    blockSlug: "c2",
    name: "BMP-1KSh",
    aka: "Potok-2",
    imageUrl: "/images/items/bmp-1ksh.jpg",
    imageCredit: "CC BY-SA 3.0 — ShinePhantom",
    imagePage: "https://commons.wikimedia.org/wiki/File:BMP-1KSh_in_TLT_-_4553.JPG",
    armament: null,
    rangeText: "Radio-relay links, extended by the telescopic mast",
    cues: [
      "BMP-1 hull and six roadwheels, but no gun turret",
      "Long tube lying horizontally along the hull — the stowed mast",
      "Flat deck with a small cupola in place of the turret",
      "Mast telescopes upward once the vehicle has stopped",
    ],
    placements: [
      "Command and radio-relay vehicle of tank and motor rifle formations",
      "Artillery and air defence command variants on the same hull",
    ],
    doctrineNote:
      "Tracked, so it keeps up with the assault echelon rather than following it. The mast is the compromise: the vehicle can move anywhere its parent unit can, but it has to stop and raise the mast before it can command anything.",
    crew: null,
    service: "In service",
    sort: 3,
  },
  {
    slug: "strelets",
    blockSlug: "c2",
    name: "Strelets KRUS",
    aka: "Sagittarius",
    imageUrl: "/images/items/strelets.jpg",
    imageCredit: "CC BY 4.0 — Ministry of Defence of the Russian Federation",
    imagePage: "https://commons.wikimedia.org/wiki/File:Strelets_Recce.jpg",
    armament: null,
    rangeText: "Passes target data back to the guns in minutes",
    cues: [
      "Not a vehicle — recognise the scene, not a silhouette",
      "Dug-in observation post with a tripod-mounted sighting device",
      "Soldier working a handheld terminal rather than a map",
      "Rangefinder and terminal together mark an artillery observer, not a rifleman",
    ],
    placements: [
      "Reconnaissance and artillery observation parties",
      "Issued as part of the Ratnik soldier equipment set",
    ],
    doctrineNote:
      "The bottom rung of the command chain and the one that matters most. Grau & Bartles describe reconnaissance-fires linkage as the core of the Russian system; this is the device that closes it, turning what an observer sees into a fire mission without a voice conversation.",
    crew: null,
    service: "In service",
    sort: 4,
  },
];
