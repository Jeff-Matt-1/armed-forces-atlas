import type { ItemTranslation } from "@/content/translations";

/** Block 13 — Pioneerimasinad. */
export const etEngineering: Record<string, ItemTranslation> = {
  "imr-3m": {
    aka: "Lahingupioneerimasin",
    cues: [
      "Pikk liigendpuomi kere kohale tahapoole kokku pandud",
      "Lai buldooserisahk masina ees",
      "Tankikere ilma tornita ja ilma kahurita",
      "Väike operaatorikuppel tublisti ees",
    ],
    placements: [
      "Pioneeriüksused soomusallüksustele marsruutide raivamiseks",
      "Kasutatakse tõkete murdmiseks ja rusude koristamiseks",
    ],
    doctrineNote:
      "Ehitatud töötama tule all, ja seepärast tehakse ekskavaatori tööd tankikerel. Selle olemasolu ees tähendab, et allüksus arvestab endale ise marsruudi rajamisega, mitte olemasoleva kasutamisega.",
    crew: "2",
    service: "Kasutuses",
  },
  "mt-55": {
    aka: "Sillapanek MTU-55",
    rangeText: "Ületab kuni 18 m laiuse lõhe",
    cues: [
      "Kokku klapitud käärsild kere peal",
      "Sillapooled avanevad hingedel ja pannakse ninaga ette",
      "All T-55 tankikere, tornita",
      "Masin istub koorma tõttu märgatavalt kõrgel",
    ],
    placements: [
      "Pioneeriüksused tanki- ja motolaskurallüksuste toetuseks",
      "Liigub esimeses ešelonis, mitte selle taga",
    ],
    doctrineNote:
      "Tankišassii sellepärast, et sild peab jõudma sinna, kus on tankid, ja teekonna üle elama. Ta ostab ühe ületuskoha kiiresti ja tuleb siis tagasi tuua — seepärast võtab mitme lõhkega arvestav allüksus kaasa hoopis pontoonid.",
    crew: "2",
    service: "Kasutuses",
  },
  "brem-1": {
    aka: "Soomustatud evakuatsioonimasin",
    armament: "12.7 mm NSVT",
    cues: [
      "Kraana pool kere paremal küljel kokku pandud",
      "Buldooserisahk ees, kasutusel toetuslabidana",
      "T-72 kere lameda tekiga seal, kus oleks torn",
      "Pukseerimisvarustus ja varuroomik kere esiosal",
    ],
    placements: [
      "Tanki- ja motolaskurbrigaadide remondi- ja evakuatsioonikompaniid",
      "Üks või rohkem iga tankipataljoni kohta",
    ],
    doctrineNote:
      "Toob kahjustatud masinad lahinguväljalt ära, et neid saaks parandada, mitte maha kanda. Kuna Vene allüksustel on asendusvarusid vähe, hoiab suure osa tankipataljoni koosseisust üleval just evakuatsioonimasin.",
    crew: "3",
    service: "Kasutuses",
  },
  "gmz-3": {
    aka: "Roomikutel miinipanija",
    rangeText: "Paneb mõne minutiga mitmesaja meetri pikkuse miiniväila",
    cues: [
      "Täielikult suletud kandiline pealisehitus üle kogu kere",
      "Miinirenn ja adervarustus taga",
      "Roomikšassii, ühine 2S3 ja teiste raskete masinatega",
      "Puomi, sahka ega silda ei ole — suletud kast roomikutel",
    ],
    placements: [
      "Pioneeriüksused kaitse- ja tõkestusmiiniväljade rajamiseks",
      "Kasutatakse tiiva kiireks sulgemiseks pealetungi ajal",
    ],
    doctrineNote:
      "Miinid ründavas kasutuses: pannakse liikumiselt, et sulgeda pealetungi tiib või blokeerida vasturünnaku marsruut, mitte kaevata paikseks tõkkeks.",
    crew: "3",
    service: "Kasutuses",
  },
  "ur-77": {
    aka: "Zmei Gorõnõtš",
    rangeText: "Raivab umbes 90 m pika ja 6 m laiuse käigu",
    cues: [
      "Suur lame heitjakaas kere esiosas hingedel üles tõstetud",
      "Selle taga lahtine ristkülikuline ruum laengutega",
      "2S1-l põhinev roomikkere seitsme tugirattaga",
      "Torni ei ole, sahka ei ole, puomi ei ole",
    ],
    placements: [
      "Pioneeriüksused miiniväljade murdmiseks enne rünnakut",
      "Kasutatakse kindlustuste ja hoonete vastu linnalahingus",
    ],
    doctrineNote:
      "Laseb raketi, mis veab lõhkeainevooliku üle miinivälja ja detoneerib selle, raivates plahvatusega käigu. Sama laeng piki tänavat on laastav, ja just nii teda tänapäeval enamasti kasutataksegi.",
    crew: "2",
    service: "Kasutuses",
  },
  pmp: {
    aka: "Pontoonsillapark",
    rangeText: "Täiskomplekt sillutab umbes 220 m jõge",
    cues: [
      "Kokkuklapitavad pontoonlülid, üks iga veoauto kohta",
      "Lülid avanevad vee peal lamedaks sõiduteeks",
      "Sild istub madalal, peaaegu veepinnaga tasa",
      "Tunne ära pigem kolonnis olevad veoautod kui sild ise",
    ],
    placements: [
      "Armee tasandi pontoonsillarügemendid ja -pataljonid",
      "Tuuakse ette ettevalmistatud jõeületuseks",
    ],
    doctrineNote:
      "Jõeületus on Vene planeerimises ettevalmistatud operatsioon ja pontoonpark on see, mis ta võimalikuks teeb. Ettepoole liikuv kolonn neist on üks selgemaid kättesaadavaid kavatsuse märke.",
    service: "Kasutuses",
  },
  "tmm-3": {
    aka: "Raske mehhaniseeritud sild",
    rangeText: "Iga masin kannab 10,5 m ava; komplekt ületab 42 m",
    cues: [
      "Sillaava kokku pandud ratastel veoauto peal, mitte tankikerel",
      "KrAZ 6x6 šassii, ava ulatub kabiini kohale",
      "Toetusjalad ava alla kokku klapitud",
      "Mitu masinat kasutatakse koos, iga annab ühe lüli",
    ],
    placements: [
      "Pioneeriüksused kuivade lõhede ja väikeste ojade sillutamiseks",
      "Tee- ja marsruudi tugi, mitte rünnakuületus",
    ],
    doctrineNote:
      "Ratastel, seega järgib marsruuti, ei raja seda. Kui MT-55 viib tanki tule all üle lõhe, siis see ehitab pealetungi taga tee üles, et kõik ülejäänu järele pääseks.",
    service: "Kasutuses",
  },
  "bat-2": {
    aka: "Teerajaja",
    rangeText: "Rajab teed kergel pinnal umbes 10 km/h, mullas kordades aeglasemalt",
    cues: [
      "Väga lai sahk, mis keskelt kokku klapib ja on mehest kõrgem",
      "Kraanapoom kere külje peale kokku klapitud",
      "Kõrge klaasitud kabiin mitme aknaga — roomikmasina kohta ebatavaline",
      "Pikk raske roomikšassii, tankist laiem ja kõrgem",
    ],
    placements: [
      "Pioneeriüksused, mis avavad teid liikuvale allüksusele",
      "Töötab kolonni ees, mitte koos sellega",
    ],
    doctrineNote:
      "Teeb tee sinna, kus seda ei ole, ja just see lubab allüksusel liikuda väljaspool neid üksikuid teid, mis olemas on. Aeglane ja silmatorkav, seega töötab enne liikumist, mitte selle ajal — ühe leidmine ütleb, et marsruuti valmistatakse ette, ja umbkaudu ka seda, kuhu pealetung kavatseb minna.",
    crew: "2",
    service: "Kasutuses",
  },
  zemledeliye: {
    aka: "Põllundus",
    armament: "Kaks 122 mm torude plokki, mis tulistavad miine paigaldavaid rakette",
    rangeText: "Külvab miiniväljasid umbes 5–15 km kaugusele",
    cues: [
      "KamAZ 8x8 soomustatud kabiiniga, ehitatud nagu raske raketiheitja",
      "Kaks kandilist torude plokki kõrvuti, enamasti katete all",
      "Plokid seisavad madalal ja loodis, mitte üles kallutatud nagu Gradil",
      "Liigub koos eraldi juhtimismasinaga samal šassiil",
    ],
    placements: [
      "Pioneeriüksused, mis rajavad tõkkeid kaugelt",
      "Hoitakse armee tasandil, mitte brigaadi juures",
    ],
    doctrineNote:
      "Mineerib koha, saatmata sinna sapööre. Miinivälja saab panna teele, ülekäigule või maandumisalale minutitega ja kaugelt, mis muudab tõkete rajamise pioneeriülesandest tuleülesandeks.",
    service: "Kasutuses",
  },
};
