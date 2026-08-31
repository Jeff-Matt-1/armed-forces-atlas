import type { ItemTranslation } from "@/content/translations";

/** Block 05 — Veoautod. */
export const etTrucks: Record<string, ItemTranslation> = {
  "ural-4320": {
    aka: "Ural",
    cues: [
      "6x6 mootorikattega kabiini ees",
      "Ümar mootorikate, iluvõre tagapool",
      "Presenttent puidust või metallist veokasti kohal",
      "Suured üksikrattad ees ja taga, topeltrattaid taga ei ole",
    ],
    placements: [
      "Brigaadide ja rügementide materiaalse toetuse pataljonid",
      "Veduk veetavale suurtükiväele ja BM-21 šassii perekonnale",
    ],
    doctrineNote:
      "Vene logistika tööhobune. Grau ja Bartles rõhutavad, et Vene allüksustel on oma veovõimekust vähe, mistõttu veoautopark on tegelik piirang sellele, kui kaugel raudteesõlmest saab jõud tegutseda.",
    crew: "1 + 2",
    service: "Kasutuses",
  },
  "kamaz-5350": {
    aka: "Mustang",
    cues: [
      "6x6 kabiin mootori peal — lame esiosa, mootorikatet ei ole",
      "Suur esiklaas, vanematel kabiinidel keskmise postiga jaotatud",
      "Esipuhvrisse lõigatud astmed kabiini pääsemiseks",
      "Kandilised esituledeplokid madalal puhvris",
    ],
    placements: [
      "Üldtransport kõigis väeliikides",
      "Kandja juhtimispunktidele, elektroonilise sõjapidamise kabiinidele ja radarite varjualustele",
    ],
    doctrineNote:
      "Kaasaegne standardne taktikaline veoauto. Kuna nii paljud süsteemid on sellel šassiil, ei ütle kabiin üksi koorma kohta midagi — loe veokasti.",
    crew: "1 + 2",
    service: "Kasutuses",
  },
  "kamaz-4310": {
    cues: [
      "Kabiin mootori peal, 6x6, 5350-st vanem ja kandilisem",
      "Ümmargused esituled lamedas esipaneelis",
      "Veokast eemaldatavate külglaudade ja presenttendiga",
      "Varuratas kabiini taga",
    ],
    placements: [
      "Teise liini transport ja õppeasutused",
      "Veduk kergematele veetavatele süsteemidele",
    ],
    doctrineNote:
      "Vanem põlvkond, mis on endiselt laialt olemas. Selle ilmumine uuemate tüüpide kõrval on mobiliseeritud või segakoosseisuga üksuse tavapärane tunnus.",
    crew: "1 + 2",
    service: "Kasutuses, vananev",
  },
  "kraz-255": {
    aka: "Lapot",
    cues: [
      "Väga suur mootorikattega 6x6 hiiglaslike madalrõhurehvidega",
      "Punnis ümar mootorikate — hüüdnimi tähendab niinejalatsit",
      "Istub Uralist märgatavalt kõrgemal",
      "Sageli koos pioneeride silla- või pontoonkoormaga",
    ],
    placements: ["Pioneeriüksused silla- ja pontoonikandjana", "Raskeevakuatsioon ja tehnika vedu"],
    doctrineNote:
      "Suure kandevõimega ja suures osas välja vahetatud, kuid alles hoitud pioneeriülesannetes, kus tema kandevõime on endiselt oluline.",
    crew: "1 + 2",
    service: "Reservis ja pioneerikasutuses",
  },
  "kamaz-63501": {
    aka: "Mustang 8x8",
    cues: [
      "Kaheksa ratast — neli telge, kõik vedavad",
      "Kabiin mootori peal, sama paigutus kui 5350 perekonnas",
      "Pikk veokast vastavalt pikendatud šassiile",
      "Kannab tavaliselt raketi-, radari- või pioneeripealisehitust",
    ],
    placements: [
      "Heitja- ja radarišassii õhutõrjesüsteemidele",
      "Raskelogistika armee tasandi materiaalse toetuse üksustes",
    ],
    doctrineNote:
      "8x8 šassii varjualuse või heitja all viitab tavaliselt kõrge väärtusega süsteemile: õhutõrje, elektrooniline sõjapidamine või reaktiivsuurtükivägi, mitte tavaline veos.",
    crew: "1 + 2",
    service: "Kasutuses",
  },
  "gaz-66": {
    aka: "Šišiga",
    cues: [
      "Väike 4x4, kabiin mootori peal, nüri peaaegu ruudukujuline nina",
      "Ainult kaks telge — palju lühem kui Ural või KamAZ",
      "Ümmargused esituled kabiini esiosas kõrgel",
      "Lühike presenttendiga veokast",
    ],
    placements: [
      "Õhudessantüksused, kuna on langevarjuga heidetav",
      "Kergtransport teise liini ja territoriaalüksustes",
    ],
    doctrineNote:
      "Langevarjuga heidetav suurus sidus ta õhudessantvägedega. Suures osas välja vahetatud, kuid endiselt märk õhudessant- või vanemast koosseisust.",
    crew: "1 + 2",
    service: "Reservis",
  },
  "dt-30": {
    aka: "Rüütel",
    cues: [
      "Kaks roomikkeret liigendiga ühendatud — liigendmasin, mitte üks sõiduk",
      "Mõlemad sektsioonid roomikutel, roomikud väga laiad ja madala survega",
      "Kabiin esisektsioonil, veosekere tagumisel",
      "Istub kõrgel käiguosal ja ujub ilma ettevalmistuseta",
    ],
    placements: [
      "Arktika- ja põhjaüksused seal, kuhu rattad ei pääse",
      "Kannab šassiina ka teisi süsteeme, mitte üksnes veost",
    ],
    doctrineNote:
      "Ehitatud pinnasele, mis muud ei kanna — lumi, soo, tundra. Liigendpaar jaotab raskuse nii hõredalt, et ta läbib kohti, kus roomikmasin vajub, ja just seepärast on põhjapoolsed allüksused varustatud tema, mitte veoautode ümber.",
    service: "Kasutuses",
  },
};
