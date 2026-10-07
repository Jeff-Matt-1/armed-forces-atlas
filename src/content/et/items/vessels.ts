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
      "Ehitatud heidutama lennukikandjate rühmi massilise laevatõrjeraketi salvoga. Ta on sama palju ulatuse avaldus kui sõjalaev ja üksainus kere moodustab suure osa Vene pealveelaevastiku löögijõust.",
    crew: "Umbes 700",
    service: "Kasutuses",
  },
  moskva: {
    name: "Slava klass",
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
      "Nähtavad raketitorud on kogu konstruktsiooni filosoofia: kõik on pandud ühele massilisele salvole. Merel midagi ümber ei laadita, nii et laeva väärtus on kulutatud hetkel, mil ta laseb.",
    crew: "Umbes 480",
    service: "Kasutuses",
  },
  udaloy: {
    name: "Udaloy klass",
    aka: "Projekt 1155 Fregat",
    armament: "Metel allveelaevatõrjeraketid, 2 × 100 mm kahurit, torpeedod",
    rangeText: "Allveelaevatõrjeraketid kuni umbes 50 km",
    cues: [
      "Kaks eraldi korstnat, teineteisest kaugel — selles õppetükis ebatavaline",
      "Kaks üksikut 100 mm kahuritorni vööris, üks teise taga",
      "Kopteriangaar ja -tekk hõivavad kogu ahtri",
      "Suuri kaldu raketitorusid külgedel ei ole",
    ],
    placements: [
      "Põhja- ja Vaikse ookeani laevastiku allveelaevatõrje hävitajad",
      "Suuremate pealveelaevagruppide saatelaev",
    ],
    doctrineNote:
      "Spetsialiseerunud allveelaevade jahtimisele ja seepärast on ahter antud helikopteritele, mitte rakettidele. Ta saadab, mitte ei löö.",
    crew: "Umbes 300",
    service: "Kasutuses",
  },
  "admiral-gorshkov": {
    name: "Admiral Gorshkovi klass",
    aka: "Projekt 22350",
    armament: "Kalibr ja Oniks püstšahtides, 130 mm kahur, Poliment-Redut",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Sile tahuline pealisehitus kaldus külgedega — ehitatud radari peegeldust vähendama",
      "Kinnine mast lamedate radaripaneelidega, mitte lahtine võrestik",
      "Nähtavaid raketitorusid ei ole: heitjad on siledad šahtid tekis",
      "Üks 130 mm kahur ümaras vargtornis vööris",
    ],
    placements: [
      "Vene mereväe kaasaegne esimese järgu fregatt",
      "Põhjalaevastik, jätkuehitused käivad",
    ],
    doctrineNote:
      "Esimene kaasaegne Vene pealveelaev, mis on ehitatud püststardi ümber, nii et tema relvastus on nähtamatu kuni laskmiseni. Sile korrastatud profiil on korraga tuvastustunnus ja konstruktsiooni eesmärk.",
    crew: "Umbes 210",
    service: "Kasutuses",
  },
  "admiral-grigorovich": {
    name: "Admiral Grigorovichi klass",
    aka: "Projekt 11356R",
    armament: "Kalibr püstšahtides, 100 mm kahur, Shtil õhutõrje",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Tavapärane nurgeline pealisehitus — vähem silutud kui Gorshkovil",
      "Lahtine võrestikmast eraldi radariantennidega",
      "Üks 100 mm kahur vööris, väiksem kui Gorshkovi 130 mm",
      "Kopteritekk ahtris, angaar pealisehitusse ehitatud",
    ],
    placements: [
      "Musta mere laevastiku fregatid",
      "Ehitatud ekspordiprojekti alusel, kohandatud Vene teenistuseks",
    ],
    doctrineNote:
      "Fregatt, mis saadi kiiresti kätte juba ekspordiks tootmises olnud kere kohandamisega. Ta kannab sama maasihtmärkide raketti kui Gorshkov ja just see teeb vanema välimusega laevast tänase ohu.",
    crew: "Umbes 200",
    service: "Kasutuses",
  },
  neustrashimy: {
    name: "Neustrashimy klass",
    aka: "Projekt 11540 Yastreb",
    armament: "100 mm kahur, Kinzhal õhutõrje, allveelaevatõrjetorpeedod",
    rangeText: "Õhutõrje kuni umbes 12 km",
    cues: [
      "Ühtlane tekk: joon jookseb vöörist ahtrini katkematult, astet ahtri poole ei ole",
      "Pikk vaba vööritekk, komandosild on ebatavaliselt kaugel taga",
      "Üks 100 mm kahur vööris ja tekil selle ees ei ole midagi muud",
      "Angaar ja kopteritekk ahtris, raketitorusid külgedel ei ole",
    ],
    placements: ["Läänemere laevastiku fregatid", "Valmis ehitati ainult kaks laeva"],
    doctrineNote:
      "Kavandatud seeria jäi kahe kere juurde ja mõlemad teenivad Läänemerel. Just seal kohtab NATO merevägi Vene fregatti kõige tõenäolisemalt.",
    crew: "Umbes 210",
    service: "Kasutuses",
  },
  steregushchiy: {
    name: "Steregushchiy klass",
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
  parchim: {
    name: "Parchim klass",
    aka: "Projekt 1331M",
    armament: "76 mm kahur, allveelaevatõrje raketiheitjad, torpeedod",
    rangeText: "Raketiheitjate ulatus umbes 6 km",
    cues: [
      "Lühike kere, umbes 75 m, suur valge radarikuppel kõrgel võrestikmastil",
      "Kõik on ees: kahur ja kaks madalat raketiheitjat täidavad vööriteki",
      "Madal tühi ahter, kopteritekki ega angaari ei ole",
      "Vööritekil kahuri ees ei ole midagi peale raketiheitjate",
    ],
    placements: [
      "Läänemere laevastiku väikesed allveelaevatõrje laevad",
      "Sadamate sissesõidud ja rannikupatrull",
    ],
    doctrineNote:
      "Ehitatud Ida-Saksamaa tehastes Nõukogude Läänemere laevastikule ja mujale neid ei saadetud. See on kere, mida Läänemere sissesõitudes kõige sagedamini kohtab ja mida tasub seetõttu tunda paremini kui ühtki ristlejat.",
    crew: "Umbes 60",
    service: "Kasutuses",
  },
  grisha: {
    name: "Grisha klass",
    aka: "Projekt 1124 Albatros",
    armament: "76 mm kahur, Osa-M õhutõrje, allveelaevatõrje raketid ja torpeedod",
    rangeText: "Õhutõrje kuni umbes 15 km",
    cues: [
      "Kahur on ahtris, pealisehituse taga — vastupidi enamikule väikelaevadele",
      "Õhutõrjeraketi heitja vööritekil, komandosillast eespool",
      "Lühike kere, umbes 70 m, terav laienev vöör ja pikk vööritekk",
      "Lame pöörlev radariantenn võrestikmastil, kopteritekki ei ole",
    ],
    placements: [
      "Väikesed allveelaevatõrje laevad kõigis laevastikes",
      "Kasutuses ka piirivalve rannikuvalves",
    ],
    doctrineNote:
      "Kõige arvukam Nõukogude allveelaevade jahtija ja paigutus tuleneb ülesandest: vööritekk on antud raketiheitjatele, nii et kahur läheb ahtrisse. Kahuri asukoht üksi eristab teda Parchimist.",
    crew: "Umbes 70",
    service: "Kasutuses",
  },
  nanuchka: {
    name: "Nanuchka klass",
    aka: "Projekt 1234 Ovod",
    armament: "6 × P-120 Malakhit raketti, Osa-M õhutõrje, 76 mm kahur",
    rangeText: "Laevatõrjeraketid kuni umbes 150 km",
    cues: [
      "Kaks kolmese raketitoru plokki, kummalgi küljel kaldu väljapoole",
      "Väga suur kerajas radarikuppel laia kandilise pealisehituse kohal",
      "Raketiheitja vööritekil ja kahur päris ahtris — ees kahurit ei ole",
      "Väike: umbes 60 m, ligikaudu veerand Kirovi pikkusest",
    ],
    placements: [
      "Väikesed raketilaevad rannikulöögi jaoks",
      "Musta mere ja Vaikse ookeani laevastik",
    ],
    doctrineNote:
      "Kere, mida saab väiksuse tõttu arvukalt ehitada, kannab hävitaja mõõtu salvot. Panus on selles, et kuus rasket raketti rannikult lastuna on väärt rohkem kui laev, mis neid kannab.",
    crew: "Umbes 60",
    service: "Kasutuses",
  },
  "buyan-m": {
    name: "Buyan-M klass",
    aka: "Projekt 21631",
    armament: "8 × Kalibr püstšahtides, 100 mm kahur",
    rangeText: "Kalibr maasihtmärkide vastu kuni umbes 1500 km",
    cues: [
      "Väga väike — suurtükipaadi mõõtu kere, õppetüki väikseim sõjalaev",
      "Kandiline pealisehitus selgelt ees, ahtritekk jääb vabaks",
      "Kopteritekki ega angaari ei ole",
      "Madal süvis: ta tegutseb ka jõgedel ja Kaspia merel, mitte üksnes merel",
    ],
    placements: [
      "Kaspia flotill, Musta mere ja Läänemere laevastik",
      "Väikesed raketilaevad, mitte korvetid",
    ],
    doctrineNote:
      "Kogu mõte on ebaproportsioonis: laev, mis mahub jõkke, kannab rakette, mis ulatuvad 1500 km sisemaale. Strateegiline mõju on lahutatud laeva suurusest ja seepärast loeb siinne väikseim kere sama palju kui suurim.",
    crew: "Umbes 50",
    service: "Kasutuses",
  },
  tarantul: {
    name: "Tarantul klass",
    aka: "Projekt 1241 Molniya",
    armament: "4 × laevatõrjeraketti, 76 mm kahur, lähitõrjekahurid",
    rangeText: "Laevatõrjeraketid kuni umbes 120 km",
    cues: [
      "Väga madal vabaparras ja pikk sihvakas kere, umbes 56 m",
      "Kaks paari suuri silindrilisi raketikonteinereid keskel, kaldu väljapoole",
      "76 mm kahur vööritekil, komandosillast tublisti eespool",
      "Lahtine võrestikmast keraja radarikupliga komandosilla kohal",
    ],
    placements: ["Raketikaatrid kiireks löögiks sadamast", "Läänemere ja Musta mere laevastik"],
    doctrineNote:
      "Kere, millel ei ole autonoomsust ega nimetamisväärset õhutõrjet, kannab nelja rasket laevatõrjeraketti. Ta on mõeldud sadamast väljuma, laskma ja tagasi tulema, nii et oht sõltub sellest, kui lähedal ta baseerub, mitte sellest, kui kaugele ta jõuab.",
    crew: "Umbes 40",
    service: "Kasutuses",
  },
  ropucha: {
    name: "Ropucha klass",
    aka: "Projekt 775",
    armament: "Ainult kerged kahurid ja raketiheitjad",
    rangeText: "Kannab umbes 10 tanki või 340 meest",
    cues: [
      "Nüri vöör koos vööriväravatega — kere lõpeb kandiliselt, mitte teravalt",
      "Pikk lame katkematu tekk ilma raketitorude ja kahuritornideta vööris",
      "Pealisehitus lükatud ahtrisse, ahtri kohale",
      "Kõrgem ja kandilisem kui ükski lahingulaev",
    ],
    placements: [
      "Kõigi laevastike dessantlaevad",
      "Kasutatakse ka kiire sõjaväetranspordina teatrite vahel",
    ],
    doctrineNote:
      "Vööriväravad on korraga tuvastustunnus ja eesmärk. Laev, mis suudab randuda ja soomuse otse maha laadida, teeb dessandiohu usutavaks — ja teeb neist eelissihtmärgid.",
    crew: "Umbes 95",
    service: "Kasutuses",
  },
  dyugon: {
    name: "Dyugon klass",
    aka: "Projekt 21820",
    armament: "Ainult kaks lähitõrjekahurit",
    rangeText: "Kannab umbes 140 tonni — kolm tanki või viis soomukit",
    cues: [
      "Väike, umbes 45 m ja soomust kandva aluse kohta kiire",
      "Lahtine lastitekk üle suurema osa pikkusest, sõidukid on näha",
      "Ahtris on ainult madal tekiehitis, mitte mitmekorruseline pealisehitus",
      "Nüri vöör rambiga, kahuritorni ees ei ole",
    ],
    placements: [
      "Läänemere laevastiku ja Kaspia flotilli dessantkaatrid",
      "Veab soomust laevalt kaldale",
    ],
    doctrineNote:
      "Kui Ropucha maabutab kompanii, siis see viib kaldale kolm sõidukit peaaegu kaks korda kiiremini. Ta on dessandi viimane etapp, mitte kogu dessant.",
    crew: "Umbes 6",
    service: "Kasutuses",
  },
};
