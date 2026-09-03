import type { ItemTranslation } from "@/content/translations";

/** Block 21 — kopterid. */
export const etHelicopters: Record<string, ItemTranslation> = {
  "mi-24": {
    aka: "Hind",
    armament: "12.7 mm või 30 mm relv, raketid, Šturmi või Ataka raketid",
    rangeText: "Lahingraadius umbes 160 km",
    cues: [
      "Astmeline kabiin — kaks eraldi mullikatet, üks teisest kõrgemal ja taga",
      "Tiivatüükad relvade jaoks, otsad järsult allapoole kaldu",
      "Kabiini taga dessantruum: ta veab meeskonda, mida ükski teine siinne ründekopter ei tee",
      "Sissetõmmatav telik, kopteri kohta ebatavaline",
      "Pildil Tšehhi tähistustega — seda tüüpi lendab palju kasutajariike",
    ],
    placements: [
      "Maaväe lennuväerügemendid maaüksuste toetuseks",
      "Kasutatakse ka väikeste rühmade sisseviimiseks, mida uuemad ründekopterid ei suuda",
    ],
    doctrineNote:
      "Ründekopter, kes on ühtlasi vedaja — nõukogude mõte, mida keegi teine edasi ei arendanud. Dessantruum on korraga tuvastuse ja doktriini võti: ühe leidmine ütleb, et operatsioon võib hõlmata inimeste maapinnale viimist, mitte ainult sinna tulistamist.",
    crew: "2 + 8",
    service: "Kasutuses",
  },
  "mi-28": {
    aka: "Havoc",
    armament: "30 mm 2A42 lõuatornis, raketid, Ataka raketid",
    rangeText: "Lahingraadius umbes 200 km",
    cues: [
      "Kitsas ründekopter kahe astmelise kabiiniga, nende taga dessantruumi ei ole",
      "Üks peatiivik ja tavapärane sabatiivik",
      "Lõuatorn nina all ühe pika kahuriga",
      "N-variandil radarikuppel tiivikupea kohal",
    ],
    placements: ["Maaväe lennuväe ründekopterirügemendid", "Töötab paaris luurajaga, mitte üksi"],
    doctrineNote:
      "Puhtalt ründekopter, kellel ei ole midagi vedada — erinevalt Hindist, keda ta asendab. Tema ilmumine lõiku tähendab, et oodatakse tankitõrjetööd, mitte transporti ja radar tiiviku kohal tähendab, et ta suudab võidelda varje tagant.",
    crew: "2",
    service: "Kasutuses",
  },
  "ka-52": {
    aka: "Alligator",
    armament: "30 mm 2A42 küljel, raketid, Vihri või Ataka raketid",
    rangeText: "Lahingraadius umbes 250 km",
    cues: [
      "Kaks tiivikut ühel mastil vastassuundades — sabatiivikut ei ole üldse",
      "Istmed kõrvuti, nii et kabiin on lai, mitte astmeline",
      "Kahur kere küljel, mitte lõuatornis",
      "Jässakas ja lai võrreldes kitsa Mi-28-ga",
    ],
    placements: [
      "Ründekopterirügemendid, sageli paari luurajana",
      "Kantakse ka dessantlaevadel, mitte ainult maalt lendamas",
    ],
    doctrineNote:
      "Koaksiaaltiivik ongi kogu tuvastus: mitte millelgi muul Vene teenistuses ei ole kahte kohakuti tiivikut ja puuduvat sabatiivikut. Kõrvuti istmed lubavad teisel mehel juhtida teisi õhusõidukeid ja just seepärast juhib ta paare ja otsib Mi-28-le sihtmärke sama palju, kui ise tulistab.",
    crew: "2",
    service: "Kasutuses",
  },
  "mi-8": {
    aka: "Hip",
    armament: "Ukserelvad, vajadusel raketikonteinerid külgtaladel",
    rangeText: "Tavakütusega umbes 450 km",
    cues: [
      "Suur ümara ninaga kabiin, küljel rida ümmargusi aknaid",
      "Kaheosalised tagauksed ja sageli välised kütusepaagid mõlemal küljel",
      "Viielabaline peatiivik ja kõrge sabapoom",
      "Kaugelt kõige arvukam kopter, keda näed — eelda Hipi, kuni ei ole öeldud teisiti",
    ],
    placements: [
      "Maaväe lennuväe transpordirügemendid ja peaaegu iga muu roll",
      "Juhtimis-, sanitaar-, segamis- ja mineerimisvariandid kasutavad kõik sedasama kere",
    ],
    doctrineNote:
      "Tööhobune, mille külge kõik muu kruvitakse. Tema äratundmine loeb vähem kere enda kui selle pärast, mis talle külge on riputatud, sest seesama kabiin veab dessanti, juhtimispunkti, elektroonilise sõjapidamise varustust või miinipaigaldajat.",
    crew: "3 + 24",
    service: "Kasutuses",
  },
  "mi-26": {
    aka: "Halo",
    rangeText: "Kannab umbes 20 tonni",
    cues: [
      "Hiiglaslik — suurim teenistuses olev kopter maailmas",
      "Kaheksa peatiiviku laba, rohkem kui millelgi muul siin",
      "Sügav kandiline kere tagumise laadimisrambiga",
      "Fikseeritud telik kõrgetel jalgadel, et ramp vabaks jääks",
    ],
    placements: [
      "Ringkonna tasandil hoitavad raske transpordi rügemendid",
      "Viib seda, milleni maantee ei ulatu või mida see kanda ei jaksa",
    ],
    doctrineNote:
      "Tõstab sõidukeid, kahureid ja allakukkunud õhusõidukeid. Ta on piisavalt haruldane, et tema nägemine ütleks, et käib konkreetne raske vedu, mitte tavapärane varustamine — ja ta on aeglane ning relvastamata, nii et ta lendab seal, kus õhku peetakse ohutuks.",
    crew: "5",
    service: "Kasutuses",
  },
  "ka-27": {
    aka: "Helix-A",
    armament: "Torpeedod, süvaveepommid ja poid kere all olevas relvaruumis",
    rangeText: "Lahingraadius umbes 200 km",
    cues: [
      "Koaksiaaltiivikud ja sabatiivikut ei ole — Kamovi tunnus, sama mis Ka-52-l",
      "Kaks kiilu väga lühikesel sabapoomil, erinevalt Ka-52 ühest poomist",
      "Sügav kandiline kere neljal kõrgel jalal, ehitatud sisemise relvaruumi ümber",
      "Tiivikud ja kiilud klapivad kokku, sest ta elab laeva peal",
    ],
    placements: [
      "Mereväelennuvägi, pardal hävitajatel ja fregattidel",
      "Üks või kaks masinat laeva kohta, mitte eskadrill maal",
    ],
    doctrineNote:
      "Laevastiku allveelaevakütt ja põhjus, miks Vene sõjalaeval üldse lennutekk on. Laev, kes teda kannab, otsib palju kaugemale kui oma sonar ulatub, nii et kopteri leidmine ütleb, et laev jahib, mitte ei liigu läbi.",
    crew: "3",
    service: "Kasutuses",
  },
  "ka-29": {
    aka: "Helix-B",
    armament: "Raketikonteinerid, relvakonteinerid ja püsikuulipilduja; veab kuni 16 meest",
    rangeText: "Lahingraadius umbes 200 km",
    cues: [
      "Lai lameda esiküljega kabiin kolme klaasipaneeliga, mitte Ka-27 ümar nina",
      "Tiivatüükad kandurite jaoks, mida Ka-27-l ei ole",
      "All samad koaksiaaltiivikud ja kaks kiilu nagu Ka-27-l",
      "Küljel dessantruumi aknad: ta veab meeskonda",
    ],
    placements: [
      "Merejalaväe toetus, lendab dessantlaevadelt",
      "Töötab koos Ka-27-ga samadelt tekkidelt",
    ],
    doctrineNote:
      "Merejalaväe oma ründekopter ja vedaja korraga — Hindi mõte merele viiduna. Tema ilmumine dessantlaeva kõrvale tähendab, et maale kavatsetakse mehi viia, mitte et jahitakse allveelaevu.",
    crew: "2 + 16",
    service: "Kasutuses",
  },
  "ka-31": {
    aka: "Helix",
    rangeText: "Avastab õhusõidukid umbes 100–150 km, laevad umbes 250 km kauguselt",
    cues: [
      "Suur lame radariantenn kere alla lamedaks klapitud — lennul pöördub alla ja hakkab pöörlema",
      "Relvi ega sonarit ei ole: kere kannab radarit ja kütust",
      "Telik tõmbub üles, et antenn vabaks jääks, erinevalt Ka-27 fikseeritud jalgadest",
      "Koaksiaaltiivikud ja kaks kiilu näitavad sama perekonda",
    ],
    placements: [
      "Mereväelennuvägi, varajane hoiatus laevagrupile",
      "Haruldane: teenistuses on vaid mõni üksik",
    ],
    doctrineNote:
      "Tõstab laevastiku radarihorisondi masti kohale, ja see on ainus viis, kuidas laev jõuab merepinna lähedal lendava raketi õigel ajal näha. Ta on maaväe seireradarite mereline vaste ja sama väärtuslik sihtmärk.",
    crew: "2",
    service: "Kasutuses",
  },
};
