import type { ItemTranslation } from "@/content/translations";

/**
 * Block 01 — Auastmed.
 *
 * The name stays as the transliterated Russian rank, because that is what is
 * being recognised. The aka carries the Estonian Defence Forces equivalent,
 * which is the point of the block: knowing that a polkovnik is a kolonel.
 *
 * Two Russian ranks have no Estonian counterpart. Starshiy Leytenant sits
 * between leitnant and kapten, a step the Estonian ladder does not have, and
 * the naval michman is given both its Estonian loan form and a gloss.
 */
const LADDER_GROUND =
  "Üldväe auastmeredel — maavägi, õhu- ja kosmosevägi, strateegilised raketiväed, õhudessantväed";
const LADDER_NAVY =
  "Mereväe auastmeredel — merevägi; merejalavägi ja rannikuväed kasutavad üldväe redelit";
const RANK = "Auaste";

function ground(aka: string, cue: string): ItemTranslation {
  return { aka, cues: [cue], placements: [LADDER_GROUND], service: RANK };
}

function navy(aka: string, cue: string): ItemTranslation {
  return { aka, cues: [cue], placements: [LADDER_NAVY], service: RANK };
}

export const etRanks: Record<string, ItemTranslation> = {
  "rank-ryadovoy": ground(
    "Reamees",
    "Laskur jaos. Madalaim sõduri auaste maa- ning õhu- ja kosmoseväes.",
  ),
  "rank-yefreytor": ground("Kapral", "Kogenud sõdur, sageli jao asejuht või erialaspetsialist."),
  "rank-mladshiy-serzhant": ground("Nooremseersant", "Jaoülem või jao asejuht."),
  "rank-serzhant": ground("Seersant", "Jaoülem; juhib BMP või BTR meeskonda ja selle dessanti."),
  "rank-starshiy-serzhant": ground("Vanemseersant", "Rühmaülema asetäitja."),
  "rank-starshina": ground(
    "Veebel",
    "Kompanii vanem allohvitser; vastutab varustuse ja distsipliini eest.",
  ),
  "rank-praporshchik": ground(
    "Vanemveebel",
    "Tehnika- ja varustusspetsialist: relvaladu, autopark, laod.",
  ),
  "rank-starshiy-praporshchik": ground(
    "Staabiveebel",
    "Pataljoni tasandi vanem tehnikaspetsialist.",
  ),
  "rank-mladshiy-leytenant": ground(
    "Nooremleitnant",
    "Noorem rühmaülem, tavaliselt värskelt ohvitseriks saanud.",
  ),
  "rank-leytenant": ground("Leitnant", "Rühmaülem."),
  "rank-starshiy-leytenant": ground(
    "Vanemleitnant (Eesti redelis vastet ei ole)",
    "Vanem rühmaülem või kompaniiülema asetäitja.",
  ),
  "rank-kapitan": ground("Kapten", "Kompaniiülem."),
  "rank-mayor": ground("Major", "Pataljoniülema asetäitja või staabiohvitser."),
  "rank-podpolkovnik": ground(
    "Kolonelleitnant",
    "Pataljoniülem; juhib pataljoni taktikalist grupeeringut.",
  ),
  "rank-polkovnik": ground("Kolonel", "Rügemendi- või brigaadiülem."),
  "rank-general-mayor": ground("Kindralmajor", "Diviisiülem või armee ülema asetäitja."),
  "rank-general-leytenant": ground("Kindralleitnant", "Üldväearmee ülem."),
  "rank-general-polkovnik": ground("Kindralkolonel", "Sõjaväeringkonna või väegrupeeringu ülem."),

  "rank-navy-matros": navy("Madrus", "Reamehe vaste mereväes."),
  "rank-navy-starshina-2-stati": navy("Nooremmaat", "Nooremseersandi vaste mereväes."),
  "rank-navy-michman": navy("Miitsman (mereväe vanemveebel)", "Praporštšiku vaste mereväes."),
  "rank-navy-kapitan-leytenant": navy(
    "Kaptenleitnant",
    "Majori vaste mereväes; sõjalaeva osakonnaülem.",
  ),
  "rank-navy-kapitan-3-ranga": navy(
    "3. järgu kapten",
    "Kolonelleitnandi vaste mereväes; juhib korvetti.",
  ),
  "rank-navy-kapitan-2-ranga": navy(
    "2. järgu kapten",
    "Koloneli vaste mereväes; juhib fregatti või allveelaeva.",
  ),
  "rank-navy-kapitan-1-ranga": navy(
    "1. järgu kapten",
    "Juhib suurt pealveelaeva või strateegilist allveelaeva.",
  ),
  "rank-navy-kontr-admiral": navy("Kontradmiral", "Kindralmajori vaste mereväes; juhib flotilli."),
  "rank-navy-vitse-admiral": navy(
    "Viitseadmiral",
    "Kindralleitnandi vaste mereväes; laevastiku ülema asetäitja.",
  ),
  "rank-navy-admiral": {
    cues: ["Laevastiku ülem."],
    placements: [LADDER_NAVY],
    service: RANK,
  },
};
