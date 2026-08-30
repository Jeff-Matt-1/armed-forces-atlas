import type { ItemTranslation } from "@/content/translations";

/** Block 07 — Jalaväe lahingumasinad. */
export const etIfv: Record<string, ItemTranslation> = {
  "bmp-1": {
    armament: "73 mm 2A28 Grom, 7.62 mm PKT, 9M14 Maljutka siin",
    rangeText: "Kahur mõjus umbes 800 m",
    cues: [
      "Väga madal lame kere teravalt terava vööriga",
      "Väike kooniline üheinimesetorn keskkohast eespool",
      "Lühike jäme 73 mm toru punnis otsaga — pikka peenikest kahurit ei ole",
      "Raketisiin kahuritoru kohal",
    ],
    placements: [
      "Vanemate ja reservkoosseisude motolaskurpataljonid",
      "Laialdaselt varudest taaskasutusse võetud",
    ],
    doctrineNote:
      "Masin, mis lõi kogu kategooria: jalavägi, kes võitleb oma veokilt ja selle kõrval, mitte ei tule kaugel maas. Tema madalrõhukahur ei olnud kunagi mõeldud tankidega võitlemiseks, vaid hoonete ja kaevikute avamiseks.",
    crew: "3 + 8",
    service: "Kasutuses",
  },
  "bmp-2": {
    armament: "30 mm automaatkahur 2A42, 7.62 mm PKT, 9M113 Konkurs",
    rangeText: "Automaatkahur mõjus umbes 2000 m",
    cues: [
      "Kõrgem kaheinimesetorn, BMP-1 omast tahapoole nihutatud",
      "Pikk peenike 30 mm toru, mis tõuseb järsult — selgeim erinevus BMP-1-st",
      "Raketiheitja torni katusel, mitte toru kohal",
      "All sama kuue tugiratta ja madala kerega kui BMP-1",
    ],
    placements: [
      "Motolaskurpataljonid kogu maaväes",
      "Levinuim Vene jalaväe lahingumasin teenistuses",
    ],
    doctrineNote:
      "30 mm kahur ja suur tõstenurk vastasid korraga kahele Afganistani õppetunnile: vajadusele suruda alla kaugelt ja vajadusele lasta ülespoole. See on endiselt standardne jalaväemasin.",
    crew: "3 + 7",
    service: "Kasutuses",
  },
  "bmp-3": {
    armament: "100 mm kahur 2A70, 30 mm 2A72, 7.62 mm PKT",
    rangeText: "100 mm kahur 4000 m; juhitav tankitõrjerakett 5500 m",
    cues: [
      "Kaks relva ühes tornis — jäme 100 mm toru ja selle kõrval peenike 30 mm",
      "Mootor taga, nii et jalavägi astub väljumisel üle jõuseadme",
      "Kere on BMP-1-st ja BMP-2-st märgatavalt laiem ja kõrgem",
      "Juht istub ees keskel, mõlemal pool teda laskur",
    ],
    placements: ["Uuema standardi järgi varustatud motolaskurbrigaadid", "Merejalavägi"],
    doctrineNote:
      "Tagumine mootor on korraga tuvastustunnus ja taktikaline probleem: see annab masinale tankikaliibriga kahuri, kuid sunnib dessanti väljuma üle mootoriteki, mitte otse tagant.",
    crew: "3 + 7",
    service: "Kasutuses",
  },
  "bmd-2": {
    armament: "30 mm automaatkahur 2A42, 7.62 mm PKT, 9M113 Konkurs",
    rangeText: "Automaatkahur mõjus umbes 2000 m",
    cues: [
      "Palju väiksem kui ükski BMP — suurus on esimene tunnus",
      "Viis väikest tugiratast BMP kuue suurema vastu",
      "Hüdropneumaatiline vedrustus: kere kõrgus muutub nähtavalt",
      "Väike üheinimese 30 mm torn, mitte BMP-2 kaheinimesetorn",
    ],
    placements: ["Õhudessantväe (VDV) üksused", "Õhudessantrünnakuallüksused"],
    doctrineNote:
      "Kõik selle juures on kompromiss langevarjuga heidetavuse nimel. Grau ja Bartles märgivad, et õhudessantvägi võitleb eraldi väeliigina oma masinatega; BMD nägemine BMP asemel ütleb, millise väeliigiga on tegemist.",
    crew: "2 + 5",
    service: "Kasutuses",
  },
  "bmd-4m": {
    aka: "Sadovnitsa",
    armament: "100 mm kahur 2A70, 30 mm 2A72, 7.62 mm PKT",
    rangeText: "100 mm kahur 4000 m; juhitav tankitõrjerakett 5500 m",
    cues: [
      "BMP-3 relvastus — 100 mm ja 30 mm koos — poole väiksemal kerel",
      "Viis tugiratast lühikesel madalal õhudessantkerel",
      "Torn tundub teda kandva masina kohta ülemõõduline",
      "Jagab käiguosa samades üksustes oleva BTR-MDM-iga",
    ],
    placements: [
      "Praeguse standardi järgi ümberrelvastatud õhudessantväe üksused",
      "Paaris BTR-MDM vedajatega samades pataljonides",
    ],
    doctrineNote:
      "Annab õhudessantüksustele BMP-3-ga sama tulejõu langevarjuga heidetavas paketis. See on selgeim märk moderniseeritud, mitte pärandkoosseisuga õhudessantallüksusest.",
    crew: "2 + 5",
    service: "Kasutuses",
  },
};
