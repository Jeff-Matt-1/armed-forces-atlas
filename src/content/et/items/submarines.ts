import type { ItemTranslation } from "@/content/translations";

/** Block 17 — Allveelaevad. */
export const etSubmarines: Record<string, ItemTranslation> = {
  borei: {
    aka: "Projekt 955; Dolgoruki",
    armament: "16 × ballistilist raketti Bulava",
    rangeText: "Raketid kuni umbes 8000 km",
    cues: [
      "Pikk madal küür jookseb tornist ahtri poole — raketisektsioon",
      "Torn on siledalt kerre sulandatud, järsku astet ei ole",
      "Torn asub tublisti ees, umbes kolmandiku peal",
      "Kere aheneb puhtalt ahtri poole, väliseid gondleid ei ole",
    ],
    placements: [
      "Põhja- ja Vaikse ookeani laevastiku strateegilised raketiallveelaevad",
      "Merepõhise heidutuse praegune selgroog",
    ],
    doctrineNote:
      "Tuumatriaadi mereosa ja selle osa, mida on kõige raskem leida ja seega kõige raskem esimesena hävitada. Ellujäävaks teevad ta patrullipiirkonnad, mitte relvad.",
    crew: "Umbes 107",
    service: "Kasutuses",
  },
  "delta-iv": {
    aka: "Projekt 667BDRM Delfin",
    armament: "16 × ballistilist raketti R-29RMU Sineva",
    rangeText: "Raketid kuni umbes 8300 km",
    cues: [
      "Väga kõrge raketiküür seisab tornist taga kerest tublisti kõrgemal",
      "Aste torni ja kere vahel on järsk, mitte Borei kombel sulandatud",
      "Vanem, nurgelisem torn kandilise ülaosaga",
      "Küür jookseb peaaegu ahtrini",
    ],
    placements: [
      "Põhjalaevastiku strateegilised raketiallveelaevad",
      "Asendatakse järk-järgult Borei klassiga",
    ],
    doctrineNote:
      "Põlvkond, mille Borei asendab, ja selgeim näide tuvastusreeglist: mida kõrgem ja järsem on küür, seda vanem on laev.",
    crew: "Umbes 135",
    service: "Kasutuses",
  },
  typhoon: {
    aka: "Projekt 941 Akula",
    armament: "20 × ballistilist raketti R-39",
    rangeText: "Raketid kuni umbes 8300 km",
    cues: [
      "Erakordselt lai — tunnus on laius, mitte pikkus",
      "Raketitorud asuvad tornist eespool, mis on siin ainulaadne",
      "Torn tublisti tagapool, umbes kere keskel",
      "Lai lame pealisehitus ümara kereülaosa asemel",
    ],
    placements: [
      "Strateegilisest patrullülesandest välja arvatud",
      "Viimast laeva kasutati enne kasutusest kõrvaldamist katsetusteks",
    ],
    doctrineNote:
      "Lisatud sellepärast, et ta on eksimatu ja esineb pildimaterjalis endiselt. Kaks paralleelset survekeret ühe välise kere sees on põhjus, miks ta nii lai on ja miks miski muu tema moodi välja ei näe.",
    crew: "Umbes 160",
    service: "Kasutusest väljas",
  },
  "oscar-ii": {
    aka: "Projekt 949A Antei",
    armament: "24 × tiibraketti P-700 Granit, torpeedod",
    rangeText: "Raketid kuni umbes 550 km",
    cues: [
      "Väga lai kere, kuid tornist taga raketiküüru ei ole",
      "Laius tuleb survekere kõrval asuvatest raketitorudest",
      "Pikk paralleelsete külgedega pealisehitus laia lameda ülaosaga",
      "Torn on kõrge, kitsas ja tublisti ees",
    ],
    placements: [
      "Põhja- ja Vaikse ookeani laevastiku tiibraketiallveelaevad",
      "Suunatud lennukikandjate rühmade vastu",
    ],
    doctrineNote:
      "Lai ilma küüruta on kogu diagnoos: raketid on kere kõrval, mitte torni taga. Ehitatud sama töö jaoks mis Kirov, ainult altpoolt.",
    crew: "Umbes 107",
    service: "Kasutuses",
  },
  akula: {
    aka: "Projekt 971 Štšuka-B",
    armament: "Torpeedod ja torpeedotorude kaudu tiibraketid",
    cues: [
      "Puhas kere ilma küüruta ja ilma ebatavalise laiuseta — torpeedolaev",
      "Iseloomulik pisarakujuline gondel püstiroolil",
      "Pikk madal torn siledalt pealisehitusse sulandatud",
      "Selgelt saledam kui ükski raketiallveelaev siin",
    ],
    placements: [
      "Põhja- ja Vaikse ookeani laevastiku tuumatorpeedoallveelaevad",
      "Jahivad teisi allveelaevu ja varjavad pealveelaevagruppe",
    ],
    doctrineNote:
      "Gondel roolil on usaldusväärne tunnus ja seal on veetav sonarikett. Torpeedolaev kannab oma relvi sisemuses, nii et puhas siluett ongi tuvastus.",
    crew: "Umbes 73",
    service: "Kasutuses",
  },
  kilo: {
    aka: "Projekt 636.3 Varšavjanka",
    armament: "Torpeedod ja tiibraketid Kalibr",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Palju väiksem kui iga tuumalaev selles õppetükis",
      "Lühike jässakas kere selgelt pisarakujulise vormiga",
      "Madal torn lühikese pealisehituse esiosas",
      "Diisel-elektriline, seepärast nähakse teda sageli pinnal või periskoobisügavusel",
    ],
    placements: [
      "Musta mere, Läänemere ja Vaikse ookeani laevastik",
      "Ranniku- ja lähimerepatrull ning maasihtmärkide löömine",
    ],
    doctrineNote:
      "Akudel sõites vaikne ja piisavalt odav, et ehitada arvuliselt. Kalibri kandmine muudab rannikukaitse allveelaeva maasihtmärkide löögiplatvormiks, ja seepärast on suurus siin ohu kohta halb juhis.",
    crew: "Umbes 52",
    service: "Kasutuses",
  },
};
