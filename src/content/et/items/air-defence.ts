import type { ItemTranslation } from "@/content/translations";

/** Block 14 — Õhutõrjesüsteemid. */
export const etAirDefence: Record<string, ItemTranslation> = {
  "zsu-23-4-shilka": {
    aka: "Šilka",
    armament: "4 × 23 mm automaatkahur AZP-23",
    rangeText: "Efektiivne kuni umbes 2500 m",
    cues: [
      "Neli peenikest kahuritoru ühel alusel, paarikaupa üksteise peal",
      "Suur kandiline torn täidab suurema osa madalast roomikkerest",
      "Ümar taldrikradar torni taha alla klapitud",
      "Masinal ei ole ühtegi raketti",
    ],
    placements: [
      "Motolaskur- ja tankirügementide õhutõrjepatareid",
      "Laialt kasutusel ka maasihtmärkide vastu",
    ],
    doctrineNote:
      "Ainult kahurid, ja üha enam kasutatakse teda hoonete, mitte lennukite tulistamiseks. Tema tulekiirus metsaserva vastu on põhjus, miks ta on teenistuses ammu pärast seda, kui radar lennukite vastu piisavaks lakkas olemast.",
    crew: "4",
    service: "Kasutuses",
  },
  "strela-10": {
    aka: "Gopher; SA-13",
    armament: "4 × infrapunajuhtimisega raketti 9M333",
    rangeText: "Tabab kuni umbes 5 km, kõrgusel kuni 3500 m",
    cues: [
      "MT-LB kere — madal, lame, roomikutel, teistest õppetükkidest juba tuttav",
      "Neli raketti lahtiselt siinidel, kaks mõlemal pool keskset alust",
      "Raketid on lühikesed ja jässakad, mitte suletud konteinerites",
      "Kahurit ei ole ja suurt radaritaldrikut ei ole",
    ],
    placements: [
      "Motolaskur- ja tankipataljonide õhutõrjerühmad",
      "Liigub koos üksustega, keda ta kaitseb",
    ],
    doctrineNote:
      "Infrapunajuhtimine tähendab, et ta ei kiirga midagi, nii et teda on raske avastada ja raske segada — kuid ta saab tabada ainult seda, mida operaator näeb. Ta kaitseb üksust, mitte piirkonda.",
    crew: "3",
    service: "Kasutuses",
  },
  "osa-akm": {
    aka: "Herilane; SA-8",
    armament: "6 × radarjuhtimisega raketti 9M33",
    rangeText: "Tabab kuni umbes 10 km",
    cues: [
      "Ratastel, mitte roomikutel — kuuerattaline ujuv kere",
      "Kuus raketti suletud konteinerites, kolm mõlemal pool keskset radarit",
      "Suur ümar jälgimisradar raketirühmade vahel",
      "Kogu heitja ja radari sõlm pöörleb ühe tervikuna",
    ],
    placements: [
      "Motolaskur- ja tankidiviiside õhutõrjerügemendid",
      "Rügemendi tasandi kate eesliinipataljonide taga",
    ],
    doctrineNote:
      "Radarjuhtimisega, seega suudab tabada seda, mida meeskond ei näe — ja kiirgab, seega on leitav. See on esimene aste, kus õhutõrje lakkab olemast üksuse enda kaitse ja muutub piirkonnasüsteemiks.",
    crew: "5",
    service: "Kasutuses",
  },
  tunguska: {
    aka: "Grison; SA-19",
    armament: "2 × 30 mm automaatkahur 2A38, 8 × raketti 9M311",
    rangeText: "Kahurid 4 km, raketid 8 km",
    cues: [
      "Kahurid ja raketid koos — kaks kahuritoru, raketikonteinerid väljaspool",
      "Neli suletud raketikasti torni mõlemal küljel",
      "Roomikkere suure radaritaldrikuga torni tagaosas",
      "Torn on Šilka omast palju kõrgem",
    ],
    placements: [
      "Motolaskur- ja tankirügementide õhutõrjepatareid",
      "Asendas Šilka esimese liini allüksustes",
    ],
    doctrineNote:
      "Vastus Šilka probleemile: kahurid selle vastu, mis tuleb lähedale ja kiiresti, raketid selle vastu, mis püsib eemal. Mõlema kandmine tähendab, et masin ei pea valima enne, kui sihtmärk ilmub.",
    crew: "4",
    service: "Kasutuses",
  },
  "pantsir-s1": {
    aka: "Hurt; SA-22",
    armament: "2 × 30 mm automaatkahur 2A38M, 12 × raketti 57E6",
    rangeText: "Kahurid 4 km, raketid 20 km",
    cues: [
      "Ratastel: KamAZ 8x8 veoauto, samas kui Tunguska on roomikutel",
      "Kuus raketitoru plokis keskse kahurialuse mõlemal küljel",
      "Lame paneeljälgimisradar raketiplokkide vahel",
      "Eraldi pöörlev otsinguradar torni taga",
    ],
    placements: [
      "Kõrge väärtusega objektide, lennuväljade ja staapide punktkaitse",
      "Kaitseb kaugmaa raketipatareisid selle eest, mis neist läbi pääseb",
    ],
    doctrineNote:
      "Tunguska idee ratastel järglane ja üha enam kõige olulisem kiht: just tema tabab droone ja tiibrakette, mis on tema taga seisvate strateegiliste süsteemide jaoks liiga väikesed ja liiga madalal.",
    crew: "3",
    service: "Kasutuses",
  },
  "tor-m2": {
    aka: "Gauntlet; SA-15",
    armament: "16 × raketti 9M338, püststart",
    rangeText: "Tabab kuni umbes 16 km",
    cues: [
      "Ühtegi raketti ei ole näha — need seisavad püsti torni sees",
      "Kandiline torn lameda paneelradariga esiküljel",
      "Teine radar tõstetud alusel torni katuse kohal",
      "Roomikkere, kus torn domineerib masina üle",
    ],
    placements: [
      "Diviiside ja armee tasandi brigaadide õhutõrjerügemendid",
      "Katab manöövriallüksusi täppisrelvade eest",
    ],
    doctrineNote:
      "Püststart on see, mis ta ära annab: midagi ei ulatu välja, nii et masin saab tabada igas suunas ilma enne pöördumata. Ehitatud spetsiaalselt juhitava laskemoona, mitte seda välja lastavate lennukite tõrjumiseks.",
    crew: "3",
    service: "Kasutuses",
  },
  "buk-m2": {
    aka: "Grizzly; SA-17",
    armament: "4 × raketti 9M317",
    rangeText: "Tabab kuni umbes 45 km, kõrgusel kuni 25 km",
    cues: [
      "Neli pikka saledat raketti lahtiselt lamedal pöörleval heitjal",
      "Raketid on palju suuremad kui Strela-10 jässakad laskemoonad",
      "Roomikšassii, pikem ja raskem kui Toril",
      "Laskemasinal radaritaldrik heitjasõlme esiosas",
    ],
    placements: [
      "Armee tasandi õhutõrjebrigaadid",
      "Töötab patareina eraldi heitja-, radari- ja juhtimismasinatest",
    ],
    doctrineNote:
      "Keskmaa kate allüksusele, mitte üksusele, ja esimene süsteem siin, mis üksi võidelda ei saa — heitja, radar ja juhtimispunkt on eraldi masinad, mis tuleb leida koos.",
    crew: "4",
    service: "Kasutuses",
  },
  "s-400": {
    aka: "Growler; SA-21",
    armament: "4 × raketikonteinerit, mitu raketitüüpi",
    rangeText: "Tabab olenevalt raketist kuni 400 km",
    cues: [
      "Neli väga suurt silindrilist konteinerit tõstetakse laskmiseks püsti",
      "Sõidul lebavad konteinerid lamedalt 8x8 veoautol",
      "Heitjal endal radarit ei ole — see on eraldi masin",
      "Palju suurem kui miski muu selles õppetükis",
    ],
    placements: [
      "Õhutõrjerügemendid strateegiliste alade ja taristu kaitseks",
      "Ringkonna ja riigi tasandi vahend, mitte allüksuse oma",
    ],
    doctrineNote:
      "Kõige välimine kiht ja sama palju poliitiline objekt kui sõjaline. Ta ei kaitse kontaktis olevaid vägesid, vaid keelab õhuruumi terve piirkonna kohal — seepärast ütleb ühe leidmine rohkem selle kohta, mis on liini taga, kui selle kohta, mis on liinil.",
    service: "Kasutuses",
  },
};
