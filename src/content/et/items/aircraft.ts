import type { ItemTranslation } from "@/content/translations";

/** Block 19 — Sõjalennukid. */
export const etAircraft: Record<string, ItemTranslation> = {
  "su-25": {
    aka: "Gratš; Frogfoot",
    armament: "30 mm GSh-30-2, raketid ja pommid kümnel püloonil",
    rangeText: "Lahingraadius umbes 375 km",
    cues: [
      "Sirge noolutuseta tiib — ainus selline õppetükis",
      "Kaks mootorit kastides tihedalt kere külgede vastu",
      "Lühike nüri nina tugevalt raamitud kabiiniga",
      "Istub kõrgel pikkadel telikutel, ehitatud lihtsatele lennuväljadele",
    ],
    placements: [
      "Rünnaklennuväe rügemendid maavägede toetuseks",
      "Töötab madalal ja toetatavate üksuste lähedal",
    ],
    doctrineNote:
      "Lähiõhutoetus otseses mõttes: aeglaselt, soomustatult ja madalalt, rünnates sihtmärke, mida maaväeülem näeb. Suurtükiväekeskses süsteemis täidab ta lünki, kuhu kahurid kiiresti ei ulatu.",
    crew: "1",
    service: "Kasutuses",
  },
  "su-34": {
    aka: "Fullback",
    armament: "30 mm GSh-30-1, juhitavad pommid ja raketid",
    rangeText: "Lahingraadius umbes 1100 km",
    cues: [
      "Lai lapik nina — meeskond istub kõrvuti, mitte üksteise taga",
      "Nina profiil on toonud hüüdnime „nokkloom”",
      "Pikk sabaastel ulatub mootoritest kaugele taha",
      "Flankeri tiivad ja kaks kiilu teistsuguse esiosa all",
    ],
    placements: ["Pommituslennuväe rügemendid", "Vene standardne taktikaline ründelennuk"],
    doctrineNote:
      "Hävitaja kerele ehitatud ründelennuk, mille meeskond istub pikkade lendude jaoks koos. Ta viib läbi sügavlööke, kuhu suurtükivägi ei ulatu.",
    crew: "2",
    service: "Kasutuses",
  },
  "su-35s": {
    aka: "Flanker-E",
    armament: "30 mm GSh-30-1, õhk-õhk-raketid kaheteistkümnel püloonil",
    rangeText: "Lahingraadius umbes 1600 km",
    cues: [
      "Klassikaline Flankeri kuju: pikk sulanduv kere, kaks kiilu, kaks kaugel asetsevat mootorit",
      "Terav ninakoonus ja üheistmeline kabiinikate",
      "Esitiivakesi ei ole, erinevalt mõnest varasemast Flankeri variandist",
      "Sügav vahe mootorigondlite vahel kere all",
    ],
    placements: ["Hävituslennuväe rügemendid", "Võimekaim Vene hävitaja"],
    doctrineNote:
      "Lennuk, mis kõige tõenäolisemalt saadab löögigruppe. Flankeri perekond jagab seda siluetti, nii et teda eristavad Su-34-st või Su-30-st nina ja kabiin.",
    crew: "1",
    service: "Kasutuses",
  },
  "su-57": {
    aka: "Felon",
    armament: "30 mm kahur, relvad sisemistes relvaruumides",
    rangeText: "Lahingraadius umbes 1500 km",
    cues: [
      "Tahulised nurgelised pinnad seal, kus Flanker on ümar",
      "Kaks kiilu väljapoole kaldu, mitte püsti",
      "Lame lai kere sulandub tiiba ilma terava ühenduseta",
      "Väliseid relvi ei ole — need kantakse sees",
    ],
    placements: [
      "Hävituslennuväe rügemendid, väikeses koguses",
      "Võetakse aeglaselt kasutusele ja teda nähakse harva",
    ],
    doctrineNote:
      "Kujundatud radarikaja vähendama ja just selle vastu hoitakse teenistuses õppetüki 12 meeterlaine radareid. Arvud on endiselt nii väikesed, et operatiivne mõju jääb piiratuks.",
    crew: "1",
    service: "Kasutuses",
  },
  "mig-31": {
    aka: "Foxhound",
    armament: "Kaugmaa raketid R-33 ja R-37M; osal lennukitel Kinžal",
    rangeText: "Lahingraadius umbes 720 km; tõrjelennud ulatuvad palju kaugemale",
    cues: [
      "Suured kandilised õhuvõtuavad teravate nurgeliste servadega",
      "Tiib on peaaegu sirgeservaline, mitte Flankeri kombel kumer",
      "Kaks meest üksteise taga eraldi kabiinikatete all",
      "Suur ja raske — kujult nähtavalt vähem väle kui hävitaja",
    ],
    placements: [
      "Tõrjehävitajate rügemendid põhja- ja idasuundade katmiseks",
      "Osa lennukeid on kohandatud kandma Kinžali raketti",
    ],
    doctrineNote:
      "Tõrjehävitaja, mitte lähivõitleja: ehitatud lendama kiiresti ja kaugele, et kohata pommitajaid ja tiibrakette tühja territooriumi kohal. Kandilised õhuvõtuavad on kiireim viis teda kaugelt Flankerist eristada.",
    crew: "2",
    service: "Kasutuses",
  },
  "tu-95ms": {
    aka: "Bear-H",
    armament: "Tiibraketid Kh-55 ja Kh-101",
    rangeText: "Lennukaugus umbes 15 000 km; raketid lisavad 2500 km või rohkem",
    cues: [
      "Neli turbopropellermootorit vastupidiselt pöörlevate propelleritega",
      "Teravalt noolutatud tiivad, propellerlennuki kohta ebatavaline",
      "Klaasitud nina ja pikk sale kere",
      "Propellerid teevad ta tuvastatavaks ka heli järgi",
    ],
    placements: [
      "Raskepommituslennuväe rügemendid",
      "Laseb tiibrakette väljastpoolt kaitstud õhuruumi",
    ],
    doctrineNote:
      "Vana ja tema ülesande jaoks ebaoluline: ta ei sisene kunagi kaitstud õhuruumi, vaid vabastab raketid sadu kilomeetreid eemal. Noolutatud tiivad propellerlennukil on kombinatsioon, mis on ainuomane sellele tüübile.",
    crew: "7",
    service: "Kasutuses",
  },
  "tu-160": {
    aka: "Valge luik; Blackjack",
    armament: "Tiibraketid Kh-55 ja Kh-101 sisemistes relvaruumides",
    rangeText: "Lennukaugus umbes 12 300 km",
    cues: [
      "Muudetava noolutusega tiivad, mis lennus tahapoole liiguvad",
      "Väga pikk sile kere sulandub tiivajuurde",
      "Neli mootorit paarikaupa kahes kastis tiiva keskosa all",
      "Tavaliselt valgeks värvitud, mis on lahingulennuki kohta ebatavaline",
    ],
    placements: ["Raskepommituslennuväe rügemendid", "Strateegiline löök ja kaugpatrull"],
    doctrineNote:
      "Suurim ja raskeim lahingulennuk maailmas. Nagu Tu-95 on ka tema raketikandja, mitte pommitaja otseses mõttes ja tema väärtus on ulatus ja nähtavus, mitte kohaletoimetatud tonnaaž.",
    crew: "4",
    service: "Kasutuses",
  },
  "il-76": {
    aka: "Candid",
    rangeText: "Veab umbes 50 tonni ligikaudu 4000 km kaugusele",
    cues: [
      "Neli reaktiivmootorit püloonidel kõrge tiiva all",
      "T-saba, stabilisaator kiilu otsas",
      "Klaasitud navigaatorikoht nina all",
      "Tagalaadimisramp ja jäme ülespoole tõusev sabaosa",
    ],
    placements: ["Sõjaväetranspordilennuvägi", "Alusplatvorm tankuritele ja radarluurelennukitele"],
    doctrineNote:
      "Just tema teeb võimalikuks õppetükkide 07 ja 08 õhudessantväed: BMD-4M ja BTR-MDM on mõõdetud tema rambi järgi. Piiri sellele, mida tegelikult heita saab, seab transpordilennukite park, mitte masinad ise.",
    crew: "5",
    service: "Kasutuses",
  },
  "mig-29": {
    aka: "Fulcrum",
    armament: "30 mm GSh-30-1, õhk-õhk raketid R-73 ja R-27",
    rangeText: "Lahingraadius umbes 700 km",
    cues: [
      "Kaks mootorit laialt paigutatud, nende vahel sügav valgusest läbipaistev tunnel",
      "Tiivajuured sulanduvad kerre pika kaarja üleminekuga",
      "Kaks väljapoole kaldu kiilu, väiksemad kui Flankeril",
      "Märgatavalt lühem ja jässakam kui ükski Su-27 tuletis",
    ],
    placements: [
      "Rindeõhukaitseks määratud hävitajarügemendid",
      "Lühikese tegevusraadiusega juba disainilt: kaitseb piirkonda, kus ta baseerub",
    ],
    doctrineNote:
      "Ehitatud hoidma õhuruumi lahingu kohal, mitte ulatuma sellest kaugemale — seepärast on tema kütusevaru ja radar tagasihoidlikud ja väledus mitte. Kui Flanker tähendab ulatust, siis Fulcrum tähendab õhuruumi otse selle allüksuse kohal, keda sa jälgid.",
    crew: "1",
    service: "Kasutuses",
  },
  "su-27": {
    aka: "Flanker",
    armament: "30 mm GSh-30-1, õhk-õhk raketid R-27 ja R-73",
    rangeText: "Lahingraadius umbes 1300 km",
    cues: [
      "Suur kahemootoriline hävitaja pika kaarja tiivajuure eesservaga",
      "Iseloomulik sabaastel, mis ulatub mootoritest kaugele tahapoole",
      "Kaks kiilu mootoritest väljaspool, mitte nende peal",
      "Igas mõõtmes suurem kui MiG-29 — perekondlik sarnasus ongi lõks",
    ],
    placements: [
      "Hävitajarügemendid, kelle ülesanne on õhukaitse kaugusel",
      "Lennukikere, millest on välja venitatud kõik hilisemad selle õppetüki Flankerid",
    ],
    doctrineNote:
      "Perekonna alusmasin: Su-30, Su-33, Su-34 ja Su-35 on kõik seesama lennuk, mida on rolli järgi muudetud. Su-27 esimesena selgeks õppimine ongi see, mis teeb ülejäänud eristatavaks, sest erinevused on ninas, kabiinis ja esitiivakestes, mitte üldkujus.",
    crew: "1",
    service: "Kasutuses",
  },
  "su-30sm": {
    aka: "Flanker-H",
    armament: "30 mm GSh-30-1, õhk-õhk ja juhitavad õhk-maa relvad",
    rangeText: "Lahingraadius umbes 1500 km",
    cues: [
      "Flankeri kuju, tiivajuurte ees esitiivakesed",
      "Kaks istet üksteise taga ühe pika kabiinikatte all",
      "Ninaprofiil kõrgem kui üheistmelisel Flankeril",
      "Esitiivakesed koos kahe istmega ongi see paar, mis eristab teda Su-35-st",
    ],
    placements: [
      "Õhu- ja kosmoseväe ning mereväelennuväe mitmeotstarbelised rügemendid",
      "Lendab seal, kus ühelt lennukilt oodatakse nii õhulahingut kui löögiülesandeid",
    ],
    doctrineNote:
      "Kaheistmeline mitmeotstarbeline Flanker: teine mees töötab sensorite ja relvadega, samal ajal kui piloot lendab — ja just see teeb temast eelistatud masina keerukate löögiülesannete, mitte puhta õhutõrje jaoks.",
    crew: "2",
    service: "Kasutuses",
  },
  "su-33": {
    aka: "Flanker-D",
    armament: "30 mm GSh-30-1, õhk-õhk raketid R-27 ja R-73",
    rangeText: "Lahingraadius umbes 1000 km",
    cues: [
      "Flanker esitiivakeste ja ühe istmega — Su-30-l on esitiivakesed ja kaks istet",
      "Tiivad ja sabapind klapivad, väljaspool on hingejooned näha",
      "Pidurikonks sabaastla all",
      "Pikendatud ninatelik ja tugevdatud telik tekile maandumiseks",
    ],
    placements: [
      "Mereväelennuvägi, laeval või rannikubaasis",
      "Ainus Vene teenistuses olev hävitaja, mis on ehitatud tekilt opereerima",
    ],
    doctrineNote:
      "Ehitatud lennukikandjale, mis on harva merel, nii et teda leiab enamasti maalt. Tema tuvastusväärtus on peamiselt eitav: klappivad tiivad ja konks tähendavad mereväelennuväge, mis paigutab pigem üksuse kui lennuki.",
    crew: "1",
    service: "Kasutuses",
  },
};
