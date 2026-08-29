import type { ItemTranslation } from "@/content/translations";

/** Block 04 — Kergsõidukid. */
export const etLightVehicles: Record<string, ItemTranslation> = {
  "gaz-2975-tigr": {
    aka: "Tiiger",
    armament: "Katuserõngas või kaugjuhitav alus: 7.62 mm PKT, 12.7 mm Kord või AGS-17",
    rangeText: "Paigaldatud kuulipilduja mõjus kuni 2000 m",
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
    armament: "Standardvarustuses puudub",
    cues: [
      "Väike kandiline maastur presendist või õhukesest plekist katusega",
      "Ümmargused esituled lamedas püstises iluvõres",
      "Suur klaaspind ja soomust ei ole",
      "Varuratas tavaliselt taga või mootorikattel",
    ],
    placements: [
      "Juhtimine ja side kõigis maaväekoondistes",
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
    armament: "Kaugjuhitav relvajaam 12.7 mm kuulipilduja või 30 mm granaadiheitjaga",
    rangeText: "Relvajaam mõjus kuni 2000 m",
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
    armament: "Kaugjuhitav relvajaam Arbalet-DM, 12.7 mm Kord",
    rangeText: "Mõjus kuni 2000 m",
    cues: [
      "Tigri kere madala kaugjuhitava torniga avatud rõnga asemel",
      "Relvajaamal optikaplokk, laskur ei ole väljas",
      "Ustel ja külgedel lisasoomuse paneelid",
      "Antennipundar katuse tagaosas",
    ],
    placements: [
      "Eriotstarbelised (SpN) ja luureüksused",
      "Õhudessantrünnakuüksused tuletoetussõidukina",
    ],
    doctrineNote:
      "Relvastatud luurevariant. Kaugjuhitav relvajaam avatud luugi asemel tähendab, et meeskond arvestab suletud luukidega võitlemisega.",
    crew: "2 + 5",
    service: "Kasutuses",
  },
  "iveco-lmv-rys": {
    aka: "Iveco LMV / Ilves",
    armament: "Katuserõngas, 7.62 mm või 12.7 mm kuulipilduja",
    rangeText: "Paigaldatud kuulipilduja mõjus kuni 2000 m",
    cues: [
      "Tigrist märgatavalt madalam ja ümaram",
      "Kaldu mootorikate, esituled tiibadesse süvistatud",
      "Neli ust väikeste kandiliste soomusakendega",
      "Lääne proportsioonid — litsentsi alusel ehitatud Itaalia konstruktsioon",
    ],
    placements: [
      "Piiratud koguses luure- ja õhudessantüksustele",
      "Juhtimine ja side valitud väekoondistes",
    ],
    doctrineNote:
      "Osteti väikeses koguses ja laialdaselt kasutusele ei võetud; haruldus teeb sellest kasuliku märgi konkreetsete üksuste kohta.",
    crew: "1 + 4",
    service: "Piiratud kasutuses",
  },
};
