import type { ItemTranslation } from "@/content/translations";

/** Block 06 — Suurtükivägi ja reaktiivsuurtükivägi. */
export const etArtillery: Record<string, ItemTranslation> = {
  "d-30": {
    armament: "122 mm haubits 2A18",
    rangeText: "15,4 km tavamürsuga, 21,9 km reaktiivmürsuga",
    cues: [
      "Kolm jalga 120° nurga all laiali — ainus nii ehitatud Vene suurtükk",
      "Pöördub täisringi ilma jalgu nihutamata",
      "Kaitsekilpi ei ole, nii et meeskond on luku ümber nähtav",
      "Veetakse suue ees, toru on üle lafeti tahapoole pööratud",
    ],
    placements: [
      "Motolaskurbrigaadide veetava haubitsa divisjonid",
      "Õhudessantväe ja rannikukaitse suurtükivägi",
    ],
    doctrineNote:
      "Odavaim viis patarei maapinnale saada. Grau ja Bartles kirjeldavad süsteemi, kus tulemaht loeb rohkem kui täpsus, ja D-30 on olemas selleks, et torusid juurde anda.",
    crew: "6",
    service: "Kasutuses",
  },
  "2a65-msta-b": {
    aka: "Msta-B",
    armament: "152 mm haubits",
    rangeText: "24,7 km tavamürsuga, 28,9 km reaktiivmürsuga",
    cues: [
      "Kaks jagatud lafetijalga, mitte kolm — kohene erinevus D-30-st",
      "Suur kaitsekilp püsti toru taga",
      "Pikk toru pipraterakujulise suudmepiduriga",
      "Rattad tõusevad maast, kui jalad on kinnitatud",
    ],
    placements: [
      "Brigaadi ja armee tasandi veetava suurtükiväe divisjonid",
      "2S19 veetav vaste samades tuleüksustes",
    ],
    doctrineNote:
      "Sama mürsk ja peaaegu sama laskekaugus kui liikuval 2S19-l murdosa hinnaga. Kus allüksus roomikuid endale lubada ei saa, saab ta ikkagi 152 mm tuld.",
    crew: "8",
    service: "Kasutuses",
  },
  "2s1-gvozdika": {
    aka: "Nelk",
    armament: "122 mm haubits 2A31",
    rangeText: "15,2 km tavamürsuga, 21,9 km reaktiivmürsuga",
    cues: [
      "Väike ümar torn tahapoole nihutatud madalal roomikkerel",
      "Seitse tugiratast — rohkem kui ühelgi teisel Vene liikursuurtükil",
      "Lühike 122 mm toru kahekambrilise suudmepiduriga",
      "Paadikujuline vöör: ta ujub ja kere näitab seda",
    ],
    placements: [
      "Motolaskurrügementide liikurhaubitsadivisjonid",
      "Vanemates koosseisudes diviisi suurtükivägi",
    ],
    doctrineNote:
      "Piisavalt kerge, et ületada veetõkkeid koos masinatega, keda ta toetab. Mõte ei ole mürsu kaalus, vaid selles, et patarei püsib manöövriüksuste tempos.",
    crew: "4",
    service: "Kasutuses",
  },
  "2s3-akatsiya": {
    aka: "Akaatsia",
    armament: "152 mm haubits 2A33",
    rangeText: "18,5 km tavamürsuga, 24 km reaktiivmürsuga",
    cues: [
      "Suur tahuliste külgedega torn lamedate püstiste külgedega kere keskel",
      "Kuus ühtlaste vahedega tugiratast kõrge kandilise kere all",
      "Kaks ümmargust laskemoonaluuki torni tagaosas",
      "Toru on 2S1 omast selgelt pikem ja jämedam",
    ],
    placements: [
      "Diviisi ja brigaadi tasandi liikursuurtükiväe divisjonid",
      "Üha enam teine liin 2S19-ga varustatud üksuste taga",
    ],
    doctrineNote:
      "Nõukogudeaegne 152 mm standard, endiselt laialt kasutusel. Selle nägemine 2S19-de kõrval märgib tavaliselt ümberrelvastumise poole peal olevat allüksust, mitte moderniseeritud üksust.",
    crew: "4",
    service: "Kasutuses",
  },
  "2s19-msta-s": {
    armament: "152 mm haubits 2A64, 12.7 mm NSVT",
    rangeText: "24,7 km tavamürsuga, 29 km reaktiivmürsuga",
    cues: [
      "Suur kaldu torn täislaiuse pikendusega taga",
      "T-80 käiguosa — kuus tugiratast tankisuurusel kerel",
      "Väga pikk toru, mille keskosas on suitsuärastaja",
      "Kaugjuhitav 12.7 mm kuulipilduja ülema kupli peal",
    ],
    placements: [
      "Tanki- ja motolaskurbrigaadide liikursuurtükiväe divisjonid",
      "Armee tasandi suurtükiväebrigaadid",
    ],
    doctrineNote:
      "Kaasaegse Vene torusuurtükiväe selgroog, mida ikka veel uuendatakse — Msta-SM ja 2S19M2 kannavad sama äratuntava kere peal uuendatud tulejuhtimist. Grau ja Bartles väidavad, et Vene allüksused võitlevad oma kahurite, mitte tankide ümber, mistõttu suur osa lahingukorrast on üles ehitatud just seda masinat teenima.",
    crew: "5",
    service: "Kasutuses",
  },
  "2s7-pion": {
    aka: "Pojeng",
    armament: "203 mm kahur 2A44",
    rangeText: "37,5 km tavamürsuga, 47,5 km reaktiivmürsuga",
    cues: [
      "Torni ei ole üldse — kahur seisab lahtiselt tagumisel tekil",
      "Hiiglaslik toru kantakse sõidul üle meeskonnakabiini ette",
      "Raske toetuslabidas lastakse enne laskmist taga maasse",
      "Seitse tugiratast ja kandiline esikabiin T-80-l põhineval šassiil",
    ],
    placements: [
      "Armee ja ringkonna tasandil hoitavad raske suurtükiväe brigaadid",
      "Ei kuulu manöövribrigaadide koosseisu",
    ],
    doctrineNote:
      "Reserveeritud sihtmärkidele, mis õigustavad 203 mm mürsku — kindlustused, laod, juhtimispunktid. Selle ilmumine ütleb midagi löögi tellinud juhtimistasandi, mitte kontaktis oleva üksuse kohta.",
    crew: "7",
    service: "Kasutuses",
  },
  "bm-21-grad": {
    aka: "Rahe",
    armament: "40 × 122 mm raketti",
    rangeText: "20 km, pikendatud laskekaugusega rakettidega kuni 40 km",
    cues: [
      "Nelikümmend toru tihedas neli korda kümme plokis — rohkem torusid kui millelgi muul siin",
      "All mootorikattega Urali 6x6 veoauto, mootor kabiini ees",
      "Torud on nii kitsad, et plokk loeb kaugelt tervikliku plaadina",
      "Enne laskmist alla lastud kaitsekilbid esiklaasi ees",
    ],
    placements: [
      "Motolaskur- ja tankibrigaadide reaktiivsuurtükiväe divisjonid",
      "Arvukaim raketisüsteem Vene teenistuses",
    ],
    doctrineNote:
      "Pindala küllastamine, mitte täpsus. Grau ja Bartles kirjeldavad reaktiivsuurtükiväge kui vahendit ruudu kiireks katmiseks; üks masin annab sekunditega patarei jagu torutuld ja peab siis enne vastupatareituld positsiooni vahetama.",
    crew: "3",
    service: "Kasutuses",
  },
  "bm-27-uragan": {
    aka: "Orkaan",
    armament: "16 × 220 mm raketti",
    rangeText: "35 km",
    cues: [
      "Kuusteist jämedat toru — selgelt vähem ja laiemad kui Gradi nelikümmend",
      "ZIL-135 8x8 šassii, teljed rühmitatud kaks ette ja kaks taha",
      "Pikk vahe keskel kahe rattarühma vahel",
      "Kabiin heitjast tublisti eespool, vahel laadimistekk",
    ],
    placements: [
      "Armee tasandi reaktiivsuurtükiväe divisjonid",
      "Manöövribrigaadide koosseisus ei ole",
    ],
    doctrineNote:
      "Reaktiivsuurtükiväe keskmine aste ja sama palju puistatavate miinide kui lõhkemürskude vahend. Ühe leidmine viitab armee tasandi tuleplaneerimisele, mitte brigaadilahingule.",
    crew: "4",
    service: "Kasutuses",
  },
  "bm-30-smerch": {
    aka: "Tromb",
    armament: "12 × 300 mm raketti",
    rangeText: "70 km, uuemate rakettidega kuni 120 km",
    cues: [
      "Kaksteist väga suurt toru kahes kuueses reas — jämedaimad torud teenistuses",
      "MAZ-543 8x8 šassii nelja ühtlaste vahedega teljega",
      "Iseloomulik kaksikkabiin, juht ja ülem eraldi akendega",
      "Heitjaplokk on nii pikk, et ulatub šassii tagant üle",
    ],
    placements: [
      "Armee ja ringkonna tasandi raske reaktiivsuurtükiväe brigaadid",
      "Sügavtule vahend, mitte brigaadirelv",
    ],
    doctrineNote:
      "Piisavalt kaugele ulatuv, et tabada vastase suurtükiväge ja logistikat, mitte tema eesliiniüksusi. Grau ja Bartles käsitlevad seda suurtükiväesüsteemi vastupatarei- ja sügavlöögikihina.",
    crew: "4",
    service: "Kasutuses",
  },
  "tos-1a": {
    aka: "Leegitsev päike",
    armament: "24 × 220 mm termobaarilist raketti",
    rangeText: "6 km — palju lühem kui ükski teine raketisüsteem siin",
    cues: [
      "Roomikud, mitte rattad: heitja istub T-72 tankišassiil",
      "Kandiline madal toruplokk seal, kus oleks tankitorn",
      "Kahuritoru ei ole üldse, mis eristab teda kohe tankist",
      "Heitjaplokk on eest taha palju lühem kui Gradil",
    ],
    placements: [
      "Kiirgus-, keemia- ja bioloogiakaitseväed, mitte suurtükivägi",
      "Antakse ette rünnaku vahetuks toetamiseks",
    ],
    doctrineNote:
      "Kuus kilomeetrit tähendab, et ta laseb manöövrilahingu seest, mitte selle tagant, nii et ta ilmub eesliini lähedale ja saatemasinatega. Tema kohalolek märgib rünnakut ettevalmistatud positsioonidele.",
    crew: "3",
    service: "Kasutuses",
  },
  "2s43-malva": {
    aka: "Kassinaeris",
    armament: "152 mm haubits 2A64",
    rangeText: "Tavamürsuga umbes 24 km",
    cues: [
      "Kaheksa ratast, mitte roomikud — ainus 152 mm Vene teenistuses veoautošassiil",
      "Kahur seisab taga lahtiselt, torni ega kilpi ei ole",
      "Kaks suurt tugilabidat klapivad tagarataste taha alla",
      "Soomustatud kabiin kaugel ees, kabiini ja kahuri vahel pikk lame plats",
    ],
    placements: [
      "Uut tehnikat saavad suurtükiväebrigaadid",
      "Valitakse sinna, kus teed lubavad kiirust eelistada maastikuläbivusele",
    ],
    doctrineNote:
      "Msta kahur ratastel roomikute asemel: odavam, teel kiirem ja tulepositsioonilt kiiremini lahkuv, kuid ei lähe sinna, kuhu roomikud lähevad. Tema ilmumine ütleb, et üksust varustatakse ümber, mitte ei tugevdata.",
    crew: "5",
    service: "Kasutuses",
  },
  "2b16-nona-k": {
    armament: "120 mm vintraudne kahur-miiniheitja",
    rangeText: "Tavamürsuga umbes 8,8 km, reaktiivmürsuga kaugemale",
    cues: [
      "Lühike jäme toru suure suudmepiduriga, palju kobakam kui 122 mm kahuril",
      "Veetav lahkuvatel jalgadel ja väga madal",
      "Toru tõuseb palju kõrgemale kui väliksuurtükil",
      "Väikesed rattad ja kerge lafett, mõeldud õhu teel heitmiseks",
    ],
    placements: [
      "Õhudessant- ja mäeüksused, kes vajavad suurtükiväge, millega koos maanduda",
      "Pataljoni tasandi tuli seal, kuhu haubits ei pääse",
    ],
    doctrineNote:
      "Üks toru kolme töö jaoks: miinid, haubitsamürsud ja otsetuli. Just seepärast kannavad seda õhudessant- ja mäeüksused — üks relv katab rollid, mille jaoks teedeta allüksus ei saa kolme eraldi kahurit kaasa võtta.",
    crew: "5",
    service: "Kasutuses",
  },
  "2a36-giatsint-b": {
    aka: "Hüatsint",
    armament: "152 mm kahur 2A36",
    rangeText: "Umbes 28 km, reaktiivmürsuga kaugemale",
    cues: [
      "Väga pikk peenike toru — pikim ükskõik millisel Vene veetaval kahuril",
      "Mitmekambriline suudmepidur toru otsas",
      "Lahkuvad jalad ja lafetil väike abijõuallikas",
      "Kilpi ei ole, erinevalt D-30-st ja Msta-B-st",
    ],
    placements: [
      "Armee tasandi suurtükiväebrigaadide kahurisuurtükivägi",
      "Paigutatakse kaugele taha, ulatudes sihtmärkideni, kuhu teised veetavad kahurid ei ulatu",
    ],
    doctrineNote:
      "Kahur, mitte haubits: lame lennutrajektoor, pikk ulatus, ja teda kasutatakse vastupatareituleks ja sügavate sihtmärkide vastu, mitte rünnaku otsetoetuseks. Ühe leidmine ütleb, et kavandatav tuli kuulub armeele, mitte brigaadile.",
    crew: "8",
    service: "Kasutuses",
  },
  "2s31-vena": {
    aka: "Viin",
    armament: "120 mm kahur-miiniheitja 2A80",
    rangeText: "Reaktiivmürsuga umbes 13 km",
    cues: [
      "BMP-3 kere suure ümara torniga, mille toru on lühike ja jäme",
      "Toru palju kobakam kui ükski tankikahur sarnasel kerel",
      "Torn istub kõrgel ja tekil kaugel taga",
      "Ujuv, taga BMP-3 veejoad",
    ],
    placements: [
      "Õhudessant- ja merejalaväeüksuste liikurmiinipildujapatareid",
      "Tulistab manööverüksuse seest, mitte selle taga olevalt kahuriliinilt",
    ],
    doctrineNote:
      "Nona töö tornis lahingumasina kerel: miiniheitja, haubits ja otsetuli masinast, mis peab sammu jalaväega, keda ta toetab. Tema kohalolek tähendab, et üksus kannab oma kaudtuld kaasas, mitte ei kutsu seda mujalt.",
    crew: "4",
    service: "Kasutuses",
  },
  "2s9-nona-s": {
    aka: "Nona",
    armament: "120 mm kahur-miiniheitja 2A51",
    rangeText: "Umbes 8,8 km, reaktiivmürsuga kaugemale",
    cues: [
      "BTR-D kere — roomikutel, madal, kuus väikest tugiratast",
      "Väike torn väga lühikese jämeda toruga",
      "Toru tõuseb palju kõrgemale kui ükski tanki- või rünnakukahur",
      "Õhu teel heidetav ja ujuv, erinevalt 2S31-st tema BMP-3 kerel",
    ],
    placements: [
      "Õhudessantrügementide liikursuurtükiväe patareid",
      "Õhudessantväe vastus haubitsapatareile, heidetakse koos üksusega alla",
    ],
    doctrineNote:
      "Seesama kahur-miiniheitja, mida Nona-K veab, pandud kerele, mis on piisavalt kerge langevarjuga heitmiseks. See annab õhudessantrügemendile oma kaudtule kohe maandumisest alates, ja just see on vahe eesmärgi hoidmise ja pelgalt sinna jõudmise vahel.",
    crew: "4",
    service: "Kasutuses",
  },
  "2s4-tyulpan": {
    aka: "Tulp",
    armament: "240 mm miiniheitja 2B8",
    rangeText: "Umbes 9,6 km, reaktiivmiiniga umbes 20 km",
    cues: [
      "Hiiglaslik miiniheitjatoru kantakse tagatekil kokkuklapitult, mitte tornis",
      "Toru pöördub alla ja taha ning tulistab maapinnal olevalt alusplaadilt",
      "Roomikkere ilma tornita, suuruselt lähedane 2S7-le",
      "Miinid on mehekõrgused ja laaditakse tagant raamilt",
    ],
    placements: [
      "Armee tasandil hoitavad rasked miinipildujapatareid",
      "Rakendatakse kindlustuste vastu, mitte rünnaku toetuseks",
    ],
    doctrineNote:
      "Suurim teenistuses olev miiniheitja maailmas, ja ta ei ole mõeldud lagedal oleva elavjõu vastu: ta on hoonete, punkrite ja ettevalmistatud positsioonide jaoks, mida haubits ei murra. Ühe nägemine ütleb, et kindlustatud maastikule valmistatakse ette kavakohast rünnakut ja et otsus on tehtud tublisti kõrgemal kui kontaktis olev üksus.",
    crew: "5",
    service: "Kasutuses",
  },
};
