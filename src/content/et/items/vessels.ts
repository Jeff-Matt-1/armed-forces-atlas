import type { ItemTranslation } from "@/content/translations";

/** Block 16 — Sõjalaevad ja alused. Class names take the Estonian "klass". */
export const etVessels: Record<string, ItemTranslation> = {
  "pyotr-velikiy": {
    aka: "Kirovi klass; projekt 1144 Orlan",
    armament: "P-700 Granit raketid, S-300F, 130 mm kahurid",
    rangeText: "Tuumajõul — praktiliselt piiramatu autonoomsus",
    cues: [
      "Hiiglaslik: umbes 250 m, tema kõrval näib iga saatelaev väike",
      "Kõrge kandiline pealisehitus keskel, radareid täis",
      "Pikk lame vööritekk siledate püststardiluukide kohal",
      "Tuumajõul, seega korstnasuitsu ega selget väljalaset ei ole",
    ],
    placements: ["Põhjalaevastiku lipulaeva klassi pealveelaev", "Töökorras on alles üks"],
    doctrineNote:
      "Ehitatud ähvardama lennukikandjate rühmi massilise laevatõrjeraketi salvega. Ta on sama palju ulatuse avaldus kui sõjalaev, ja üksainus kere moodustab suure osa Vene pealveelaevastiku löögijõust.",
    crew: "Umbes 700",
    service: "Kasutuses",
  },
  moskva: {
    aka: "Projekt 1164 Atlant; Moskva",
    armament: "16 × P-500/P-1000 raketti, S-300F, 130 mm kaksikkahur",
    rangeText: "Laevatõrjeraketid kuni umbes 550 km",
    cues: [
      "Kaheksa paari hiiglaslikke raketitorusid kaldu piki mõlemat külge",
      "Torud on iga Vene laeva kõige iseloomulikum tunnus",
      "Suur püramiidjas pealisehitus kuppelradariga tipus",
      "130 mm kaksikkahuri torn vööritekil",
    ],
    placements: [
      "Musta mere ja Vaikse ookeani laevastiku lipulaev",
      "Nimilaev hukkus 2022. aastal",
    ],
    doctrineNote:
      "Nähtavad raketitorud on kogu konstruktsiooni filosoofia: kõik on pandud ühele massilisele salvele. Merel midagi ümber ei laadita, nii et laeva väärtus on kulutatud hetkel, mil ta tulistab.",
    crew: "Umbes 480",
    service: "Kasutuses",
  },
  udaloy: {
    aka: "Projekt 1155 Fregat",
    armament: "Metel allveelaevatõrjeraketid, 2 × 100 mm kahurit, torpeedod",
    rangeText: "Allveelaevatõrjeraketid kuni umbes 50 km",
    cues: [
      "Kaks eraldi korstnat, teineteisest kaugel — selles õppetükis ebatavaline",
      "Kaks üksikut 100 mm kahuritorni vööris, üks teise taga",
      "Kopterihangaar ja -tekk hõivavad kogu ahtri",
      "Suuri kaldu raketitorusid külgedel ei ole",
    ],
    placements: [
      "Põhja- ja Vaikse ookeani laevastiku allveelaevatõrjehävitajad",
      "Suuremate pealveelaevagruppide saatelaev",
    ],
    doctrineNote:
      "Spetsialiseerunud allveelaevade jahtimisele, ja seepärast on ahter antud helikopteritele, mitte rakettidele. Ta saadab, mitte ei löö.",
    crew: "Umbes 300",
    service: "Kasutuses",
  },
  "admiral-gorshkov": {
    aka: "Projekt 22350",
    armament: "Kalibr ja Oniks püstšahtides, 130 mm kahur, Poliment-Redut",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Sile tahuline pealisehitus kaldus külgedega — ehitatud radarikaja vähendama",
      "Kinnine mast lamedate radaripaneelidega, mitte lahtine võrestik",
      "Nähtavaid raketitorusid ei ole: heitjad on siledad šahtid tekis",
      "Üks 130 mm kahur ümaras varjatud tornis vööris",
    ],
    placements: [
      "Vene mereväe kaasaegne esimese järgu fregatt",
      "Põhjalaevastik, jätkuehitused käivad",
    ],
    doctrineNote:
      "Esimene kaasaegne Vene pealveelaev, mis on ehitatud püststardi ümber, nii et tema relvastus on nähtamatu kuni tulistamiseni. Sile korrastatud profiil on korraga tuvastustunnus ja konstruktsiooni eesmärk.",
    crew: "Umbes 210",
    service: "Kasutuses",
  },
  "admiral-grigorovich": {
    aka: "Projekt 11356R",
    armament: "Kalibr püstšahtides, 100 mm kahur, Štil õhutõrje",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Tavapärane nurgeline pealisehitus — vähem silutud kui Gorškovil",
      "Lahtine võrestikmast eraldi radariantennidega",
      "Üks 100 mm kahur vööris, väiksem kui Gorškovi 130 mm",
      "Kopteritekk ahtris, hangaar pealisehitusse ehitatud",
    ],
    placements: [
      "Musta mere laevastiku fregatid",
      "Ehitatud ekspordiprojekti alusel, kohandatud Vene teenistuseks",
    ],
    doctrineNote:
      "Fregatt, mis saadi kiiresti kätte juba ekspordiks tootmises olnud kere kohandamisega. Ta kannab sama maasihtmärkide raketti kui Gorškov, ja just see teeb vanema välimusega laevast tänase ohu.",
    crew: "Umbes 200",
    service: "Kasutuses",
  },
  steregushchiy: {
    aka: "Projekt 20380",
    armament: "100 mm kahur, Redut õhutõrje, allveelaevatõrjetorpeedod",
    rangeText: "Ranniku- ja lähimereoperatsioonid",
    cues: [
      "Väike — tunduvalt alla poole Slava pikkusest",
      "Tahuliste külgedega pealisehitus jookseb üle suurema osa kere pikkusest",
      "Ümar kinnine mast, mis peidab radariantennid",
      "Kopteritekk ahtris, laeva pikkuse kohta ülemõõduline",
    ],
    placements: [
      "Korvetid ranniku- ja lähimerekaitseks",
      "Läänemere, Musta mere ja Vaikse ookeani laevastik",
    ],
    doctrineNote:
      "Kui Nõukogude merevägi ehitas ookeanilaevu, siis see on ehitatud Venemaad vahetult ümbritsevatele meredele. Suurus on korraga tunnus ja doktriin: merekeeld lähedal, mitte jõu projitseerimine kaugele.",
    crew: "Umbes 100",
    service: "Kasutuses",
  },
  "buyan-m": {
    aka: "Projekt 21631",
    armament: "8 × Kalibr püstšahtides, 100 mm kahur",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Väga väike — suurtükipaadi mõõtu kere, õppetüki väikseim laev",
      "Kandiline pealisehitus selgelt ees, ahtritekk jääb vabaks",
      "Kopteritekki ega hangaari ei ole",
      "Madal süvis: ta tegutseb ka jõgedel ja Kaspia merel, mitte üksnes merel",
    ],
    placements: [
      "Kaspia flotill, Musta mere ja Läänemere laevastik",
      "Väikesed raketilaevad, mitte korvetid",
    ],
    doctrineNote:
      "Kogu mõte on ebaproportsioonis: laev, mis mahub jõkke, kannab rakette, mis ulatuvad 1500 km sisemaale. Strateegiline mõju on lahutatud laeva suurusest, ja seepärast loeb siinne väikseim kere sama palju kui suurim.",
    crew: "Umbes 50",
    service: "Kasutuses",
  },
  ropucha: {
    aka: "Projekt 775",
    armament: "Ainult kerged kahurid ja raketiheitjad",
    rangeText: "Kannab umbes 10 tanki või 340 meest",
    cues: [
      "Nüri vöör koos vööriväravatega — kere lõpeb kandiliselt, mitte teravalt",
      "Pikk lame katkematu tekk ilma raketitorude ja kahuritornideta vööris",
      "Pealisehitus lükatud päris ahtrisse, ahtri kohale",
      "Istub iga lahingulaevaga võrreldes kõrgel ja kandiliselt",
    ],
    placements: [
      "Kõigi laevastike dessantlaevad",
      "Kasutatakse ka kiire sõjaväetranspordina teatrite vahel",
    ],
    doctrineNote:
      "Vööriväravad on korraga tuvastustunnus ja eesmärk. Laev, mis suudab randuda ja soomuse otse maha laadida, teeb dessandiohu usutavaks — ja teeb neist keredest sadamas eelissihtmärgid.",
    crew: "Umbes 95",
    service: "Kasutuses",
  },
};
