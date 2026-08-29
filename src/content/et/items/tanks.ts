import type { ItemTranslation } from "@/content/translations";

/** Block 09 — Tankid. */
export const etTanks: Record<string, ItemTranslation> = {
  "t-62m": {
    aka: "Objekt 166M",
    armament: "115 mm sileraudne U-5TS; 12.7 mm NSVT",
    rangeText: "Kahur 1600–2000 m; tankitõrjerakett Šeksna 4000 m",
    cues: [
      "Viis tugiratast, kolmanda ja neljanda vahel selge lai vahe",
      "Ümar torn punnis hoburaua-kujulise BDD-soomusplokiga ees",
      "Automaatlaadurit ei ole — torni tagumine pikendus puudub",
      "115 mm toru, peenem kui 125 mm perekonnal",
    ],
    placements: [
      "Taaskasutusse võetud varud teise liini ja territoriaalkoondistele",
      "Kasutatakse otsetuletoetuseks, mitte tankiduellideks",
    ],
    doctrineNote:
      "Taaskasutusse võetud mass. Grau ja Bartlesi raamistik kehtib: hulk taastab suurtükiväge toetava otsetulekomponendi ka siis, kui kvaliteet on vananenud.",
    crew: "4",
    service: "Taaskasutusse võetud pärand",
  },
  "t-72b3": {
    aka: "Obr. 2011",
    armament: "125 mm sileraudne 2A46M-5, automaatlaadur; 12.7 mm NSVT",
    rangeText: "Kahur 2500–3000 m; tankitõrjerakett Svir/Refleks 4000–5000 m",
    cues: [
      "Kuus ühtlaste vahedega väikest tugiratast, vahesid ei ole",
      "Kummist külgekraanid iseloomuliku kaldu esiklapiga",
      "Sosna-U sihikuplokk torni katusel vasakul",
      "Kontakt-1 reaktiivsoomuse plokid, mitte sisseehitatud Relikt-paneelid",
    ],
    placements: ["Arvukaim tank motolaskur- ja tankibrigaadide tankipataljonides"],
    doctrineNote:
      "Tööhobune. Iga Vene tankipataljon on kõige tõenäolisemalt varustatud mõne T-72B3 variandiga.",
    crew: "3",
    service: "Praegune standard",
  },
  "t-72b3m": {
    armament: "125 mm 2A46M-5; 12.7 mm kaugjuhitav relvajaam",
    rangeText: "Kahur kuni 3000 m; tankitõrjerakett 5000 m",
    cues: [
      "Relikt-reaktiivsoomuse paneelid Kontakt-1 plokkide asemel kere ja torni esiosal",
      "Latt- või võrekaitse mootoriteki ja torni tagaosa kohal",
      "Laiemad, kandilisemad külgekraanid",
      "Raskem ülema sihikusõlm",
    ],
    placements: ["Moderniseeritud tankipataljonid; esimese liini tankiüksused"],
    doctrineNote: "Uuendustee, mitte uus tank: parem optika ja kaitse samal kerel.",
    crew: "3",
    service: "Praegune, moderniseeritud",
  },
  "t-80u": {
    aka: "Objekt 219AS",
    armament: "125 mm 2A46M-1; 12.7 mm NSVT",
    rangeText: "Kahur 2500–3000 m; tankitõrjerakett Refleks 5000 m",
    cues: [
      "Gaasiturbiin: lai lame tagumine tekk suure keskse väljalaskevõrega",
      "Kuus tugiratast, kuid selgelt teistsugune, kandilisem kere tagaosa",
      "Sisseehitatud Kontakt-5 annab tornile kiilja näo",
      "Videos kõrge turbiini vingumine",
    ],
    placements: [
      "Tankiüksused lääne ja põhja operatsioonisuundadel",
      "Koondised, kellelt oodatakse tegutsemist külmades oludes",
    ],
    doctrineNote:
      "Turbiin annab spurdikiiruse suure kütusekulu hinnaga — see on väekoondise tasandi logistiline tunnus.",
    crew: "3",
    service: "Kasutuses",
  },
  "t-80bvm": {
    aka: "T-80BV moderniseeritud variant",
    armament: "125 mm 2A46M-4; 12.7 mm NSVT",
    rangeText: "Kahur kuni 3000 m; tankitõrjerakett Refleks-M 5000 m",
    cues: [
      "Relikt-reaktiivsoomus suurte ristkülikuliste paneelidena üle torni esiosa",
      "Lame turbiini tagumine tekk keskse väljalaskega",
      "Sosna-U sihikuplokk, sarnane T-72B3M-iga",
      "Lattsoomus mootoriteki kohal",
    ],
    placements: ["Põhjalaevastiku ja valitud esimese liini brigaadide tankipataljonid"],
    doctrineNote: "Moderniseeritud turbiintank; koondatud, mitte laiali jaotatud.",
    crew: "3",
    service: "Praegune, moderniseeritud",
  },
  "t-90a": {
    aka: "Vladimir",
    armament: "125 mm 2A46M-5; 12.7 mm kaugjuhitav jaam; Štora",
    rangeText: "Kahur 3000 m; tankitõrjerakett Refleks 5000 m",
    cues: [
      "Keevistorn sirgete püstiste külgedega (varasemal T-90 valatud)",
      "Štora infrapunapimestid — kaks „punast silma” kahuri mõlemal pool",
      "T-72 stiilis kuue tugirattaga käiguosa",
      "Kontakt-5 reaktiivsoomus torni esiossa integreeritud",
    ],
    placements: ["Valitud esimese liini brigaadide ja diviiside tankipataljonid"],
    doctrineNote: "Viimistletud T-72 liini tank; Štora kiirgurid on kiireim tuvastustunnus.",
    crew: "3",
    service: "Kasutuses",
  },
  "t-90m": {
    aka: "Proryv-3",
    armament: "125 mm 2A46M-5; 7.62 mm ja 12.7 mm kaugjuhitav relvajaam",
    rangeText: "Kahur 3000 m; tankitõrjerakett Refleks-M 5000 m",
    cues: [
      "Suur kandiline varustusrest torni tagaosas",
      "Relikt-paneelid ja võrekaitse taga",
      "Kaugjuhitav relvajaam ülema kupli peal — avatud 12.7 mm alust ei ole",
      "Štora pimesteid ei ole",
    ],
    placements: ["Võimekaim tank esimese liini tankipataljonides; väljastatud piiratud koguses"],
    doctrineNote: "Eelisvarustus. Selle olemasolu näitab koondist, mida juhatus peab põhirõhuks.",
    crew: "3",
    service: "Praegune, eelisväljastus",
  },
  "t-14": {
    aka: "Objekt 148",
    armament: "125 mm 2A82-1M mehitamata tornis; 12.7 mm kaugjuhitav jaam",
    rangeText: "Kahur üle 4000 m; tankitõrjerakett kuni 8000 m (väidetavalt)",
    cues: [
      "Mehitamata kandiline tahuliste külgedega torn ilma meeskonnaluukideta",
      "Seitse tugiratast — üks rohkem kui T-72/T-90-l",
      "Meeskonnakapsel kere esiosas, luugid esisoomusel",
      "Panoraamsensorite mastid torni katusel",
    ],
    placements: ["Katse- ja hindamispartiid; brigaadide üldkasutuses ei ole"],
    doctrineNote:
      "Doktriinis reklaamitud, operatiivselt marginaalne. Tunne ta ära, kuid ära oota teda liiniüksusest.",
    crew: "3",
    service: "Katsetustel / piiratud",
  },
  bmpt: {
    aka: "Objekt 199 Ramka",
    armament: "Kaks 30 mm 2A42; 4 Ataka tankitõrjeraketti; 2 AG-17D granaadiheitjat",
    rangeText: "30 mm 4000 m; Ataka 6000 m; granaadiheitja 1700 m",
    cues: [
      "Kaks 30 mm toru kõrvuti — Vene teenistuses ainulaadne",
      "Kaks tankitõrjeraketi konteinerit torni mõlemal küljel väljaspool",
      "T-72 kere ja käiguosa",
      "Väga madal lai torn ilma peakahurita",
    ],
    placements: ["Valitud tankirügementidele allutatud tankitoetuskompaniid"],
    doctrineNote:
      "Ehitatud linna- ja kinnisele maastikule, kus tankidel jääb puudu tõstenurgast ja tulemahust.",
    crew: "5",
    service: "Piiratud kasutuses",
  },
};
