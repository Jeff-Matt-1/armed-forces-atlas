import type { ItemTranslation } from "@/content/translations";

/** Block 04 — Kergsõidukid. */
export const etLightVehicles: Record<string, ItemTranslation> = {
  "gaz-2975-tigr": {
    aka: "Tiiger",
    armament: "Turell või kaugjuhitav alus: 7.62 mm PKT, 12.7 mm Kord või AGS-17",
    rangeText: "Paigaldatud kuulipilduja efektiivne kuni 2000 m",
    cues: [
      "Kandiline soomustatud mootorikate peaaegu püstise esiklaasiga",
      "Neli suurt ratast selgete kaartega, mootorikate ei ulatu üle",
      "Väikesed paksud külgaknad ustes kõrgel",
      "Katuseluuk rõngasalusega kabiini kohal",
    ],
    placements: [
      "Motolaskur- ja tankibrigaadide luurekompaniid",
      "Eriotstarbelised ja õhudessantüksused patrullsõidukina",
    ],
    doctrineNote:
      "Liikuvus luureks ja juhtimiseks, mitte rünnakuks. Grau ja Bartles rõhutavad Vene luure mahtu; suur osa sellest liigub just Tigris.",
    crew: "2 + 7",
    service: "Kasutuses",
  },
  "uaz-469": {
    aka: "Bobik",
    cues: [
      "Väike kandiline maastur presendist või õhukesest plekist katusega",
      "Ümmargused esituled lamedas püstises iluvõres",
      "Suur klaaspind ja soomust ei ole",
      "Varuratas tavaliselt taga või mootorikattel",
    ],
    placements: [
      "Juhtimine ja side kõigis maaväe allüksustes",
      "Laialt kasutusel territoriaal- ja teise liini üksustes",
    ],
    doctrineNote:
      "Kaitsmata abitransport. Selle olemasolu eesliinil viitab tavaliselt staabi- või sidefunktsioonile, mitte lahinguallüksusele.",
    crew: "1 + 6",
    service: "Kasutuses, asendamisel",
  },
  "uaz-3163-patriot": {
    aka: "UAZ-3163",
    cues: [
      "Tsiviilmaasturi jooned, UAZ-469-ga võrreldes ümaram",
      "Täiskõrgusega külgaknad ja kerevärvi postid",
      "Viieukseline kere külgedele avaneva tagauksega",
      "Laskeavasid ega soomusplaate ei ole",
    ],
    placements: ["Staabitransport ja sõjaväepolitsei", "Tagala logistika ja side"],
    doctrineNote:
      "Tsiviilkonstruktsioon sõjaväeteenistuses. Selle nägemine eesliinil viitab tugevalt haldus-, mitte taktikalisele ülesandele.",
    crew: "1 + 4",
    service: "Kasutuses",
  },
  "kamaz-63968-typhoon": {
    aka: "Tüfoon-K",
    armament: "Kaugjuhitav relvasüsteem 12.7 mm kuulipilduja või 30 mm granaadiheitjaga",
    rangeText: "Relvasüsteem efektiivne kuni 2000 m",
    cues: [
      "Väga kõrge 6x6 kere lameda V-kujulise põhjaga",
      "Kabiin ja dessandiruum moodustavad ühe pideva soomuskasti",
      "Väikesed soomustatud aknaluugid, sageli suletud",
      "Sissepääs tagarambi või -ukse kaudu, maapinnast kõrgel",
    ],
    placements: [
      "Miinikaitsega transport pioneeri- ja rünnakuüksustele",
      "Kolonni saatmine miinide ja isetehtud lõhkekehade ohuga aladel",
    ],
    doctrineNote:
      "Miinikaitsega transport, mitte lahingumasin. Selle kasutamine märgib teeraivamise või tagalajulgeoleku ülesannet.",
    crew: "2 + 14",
    service: "Kasutuses",
  },
  "gaz-233114-tigr-m": {
    aka: "GAZ-233114 / Tigr-M",
    armament: "Kaugjuhitav relvasüsteem Arbalet-DM, 12.7 mm Kord",
    rangeText: "Efektiivne kuni 2000 m",
    cues: [
      "Tigri kere madala kaugjuhitava torniga avatud rõnga asemel",
      "Relvasüsteemil optikaplokk, laskur ei ole väljas",
      "Ustel ja külgedel lisasoomuse paneelid",
      "Antennialus katuse tagaosas",
    ],
    placements: [
      "Eriotstarbelised (SpN) ja luureüksused",
      "Õhudessantrünnakuüksused tuletoetussõidukina",
    ],
    doctrineNote:
      "Relvastatud luurevariant. Kaugjuhitav relvasüsteem avatud luugi asemel tähendab, et meeskond arvestab suletud luukidega võitlemisega.",
    crew: "2 + 5",
    service: "Kasutuses",
  },
  "iveco-lmv-rys": {
    aka: "Iveco LMV / Ilves",
    armament: "Turell, 7.62 mm või 12.7 mm kuulipilduja",
    rangeText: "Paigaldatud kuulipilduja efektiivne kuni 2000 m",
    cues: [
      "Tigrist märgatavalt madalam ja ümaram",
      "Kaldu mootorikate, esituled tiibadesse süvistatud",
      "Neli ust väikeste kandiliste soomusakendega",
      "Lääne proportsioonid — litsentsi alusel ehitatud Itaalia konstruktsioon",
    ],
    placements: [
      "Piiratud koguses luure- ja õhudessantüksustele",
      "Juhtimine ja side valitud allüksustes",
    ],
    doctrineNote:
      "Osteti väikeses koguses ja laialdaselt kasutusele ei võetud; haruldus teeb sellest kasuliku märgi konkreetsete üksuste kohta.",
    crew: "1 + 4",
    service: "Piiratud kasutuses",
  },
  "typhoon-u": {
    aka: "Taifuun",
    armament: "Kaugjuhitav relvasüsteem või turell, kui paigaldatud",
    cues: [
      "Väga kõrge tahulise küljega soomuskere 6x6 veoautošassiil",
      "Mootorikate kabiini ees — KamAZi Typhoon-K on kabiin-mootori-peal ja katet ei ole",
      "Rida väikesi paksusid aknaid kõrgel dessantruumi küljel",
      "All V-kujuline põhi, mida on näha kliirensist",
    ],
    placements: [
      "Kaitstud liikuvus motolaskurüksustele mineeritud marsruutidel",
      "Veab inimesi mööda teid, ei liigu koos rünnakuga maastikul",
    ],
    doctrineNote:
      "Ehitatud miinide ja teeäärsete laengute, mitte otsetule vastu. Kõrgus, mis teeb ta silmatorkavaks, ongi see kliirens, mis hoiab plahvatuse põrandast eemal — vahetus, mille üksus, kes peab teid kasutama, on nõus tegema.",
    service: "Kasutuses",
  },
  linza: {
    aka: "Lääts",
    cues: [
      "Lühike 4x4 soomusveok, palju väiksem kui Typhoon",
      "Kõrge kastikere eraldi soomuskabiini taga",
      "Meditsiiniversioonil punase risti märgid, sageli üle värvitud",
      "Üks tagauks astmetega, kanderaamide, mitte dessandi jaoks",
    ],
    placements: [
      "Motolaskur- ja õhudessantüksuste meditsiiniline evakuatsioon",
      "Kasutusel ka lihtsa kaitstud vedajana ilma meditsiinivarustuseta",
    ],
    doctrineNote:
      "Kaitstud kiirabiauto, mitte lahingumasin, ja tema kohalolek märgib haavatute kogumispunkti või evakuatsioonimarsruuti. Tema äratundmine annab rohkem teadmist positsiooni kohta kui masina enda võimekuse kohta.",
    service: "Kasutuses",
  },
};
