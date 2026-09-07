import type { ItemTranslation } from "@/content/translations";

/** Block 12 — Radarid. */
export const etRadars: Record<string, ItemTranslation> = {
  "p-18": {
    aka: "Terek; Spoon Rest D",
    rangeText: "Avastab lennukeid kuni umbes 250 km kaugusel",
    cues: [
      "Lai võrestik pikkadest horisontaalsetest varrastest üksteise kohal ridades",
      "Antennivõre ühel Urali veoautol, juhtimiskabiin teisel",
      "Vardad on hõredalt — meeterlaine vajab suuri hajusaid elemente",
      "Antennivõre pöörleb tervikuna masina kohal mastil",
    ],
    placements: [
      "Raadiotehnilised väed õhuseireks",
      "Eelhoiatus ja sihtmärkide leidmine õhutõrjeüksustele",
    ],
    doctrineNote:
      "Vana ja just vanuse tõttu väärtuslik. Varglennuki kuju on kavandatud petma sentimeetrilainet, mida kasutab enamik kaasaegseid radareid; P-18 töötab meetripikkustel lainetel, mille vastu see kuju palju ei aita. Täpsust raketi juhtimiseks ta ei anna, kuid ütleb, et midagi on õhus — ja seepärast hoitakse vana jaama teenistuses.",
    service: "Kasutuses",
  },
  "nebo-m": {
    aka: "Taevas-M",
    rangeText: "Avastab lennukeid kuni umbes 600 km kaugusel",
    cues: [
      "Tohutu ristkülikuline antennivõre, mitu rida sügav ja masinast palju laiem",
      "Antennivõre tõstetud võrestikutornile, mitte katusele",
      "BAZ 8x8 šassii, kabiin tornist selgelt eespool",
      "Mitu masinat töötavad koos ühe süsteemina",
    ],
    placements: [
      "Ringkonna tasandi raadiotehnilised väed",
      "Toetab kaugmaa õhutõrjeraketisüsteeme",
    ],
    doctrineNote:
      "P-18 taoliste jaamade kaasaegne järglane, mis ühendab mitu lainevahemikku, nii et see, mida ühes on raske näha, on teises nähtav. Tegemist on strateegilise sensoriga: ühe leidmine tähendab teda teenindava õhutõrjevõrgu leidmist.",
    service: "Kasutuses",
  },
  "kasta-2e2": {
    aka: "Flat Face E",
    rangeText: "Avastab lennukeid kuni umbes 150 km kaugusel",
    cues: [
      "Üksainus terviklik ristkülikuline paneel, mitte lahtine varrastevõrestik",
      "Paneel kõrgel peenikesel mastil masinast tunduvalt kõrgemal",
      "Märgatavalt väiksem kui Nebo-M antennivõre",
      "Kõrvale seatud haagiskabiin ja generaator",
    ],
    placements: [
      "Madalate sihtmärkide õhuseire õhutõrjeüksustele",
      "Täidab lünka pikema ulatusega jaamade katvuse all",
    ],
    doctrineNote:
      "Ehitatud nägema seda, mis lendab madalalt — helikoptereid, tiibrakette, droone — ja seepärast läheb antenn masti otsa. Maad ligi hoidva sihtmärgi vastu annab katvust kõrgus, mitte võimsus.",
    service: "Kasutuses",
  },
  "zoopark-1": {
    aka: "Loomaaed",
    rangeText: "Määrab laskvad kahurid 20 km, raketiheitjad 35 km kauguselt",
    cues: [
      "Roomikutel MT-LB perekonna kere lameda ristkülikulise paneeliga tagumisel tekil",
      "Paneel tõuseb kaldu ja skaneerib sektorit, ei pöörle täisringi",
      "Paneel klapitakse sõiduks kerele",
      "Tervikuna madal — mitte midagi õhuseirejaama masti kõrgusest",
    ],
    placements: [
      "Suurtükiväe luureüksuste kaudtuleradar",
      "Paigutatakse liini lähedale taha, et sektor kataks vastase kahuripiirkonnad",
    ],
    doctrineNote:
      "Jälgib mürske lennus ja arvutab tagasi kahurini, mis need välja saatis. Sõjas, mida peetakse mõlemal pool suurtükiväega, on ta lahinguvälja väärtuslikemaid sihtmärke — sellest roomikud, madal profiil ja positsiooni vahetamine kohe pärast kiirgamist.",
    service: "Kasutuses",
  },
  "ark-1": {
    aka: "Ilves",
    rangeText:
      "Avastab miinipildujaid kuni umbes 10 km ja raketiheitjaid kuni umbes 20 km kaugusel",
    cues: [
      "Ümmargune peegelantenn alusel — Zoopark asetseb samal kerel lameda ristkülikukujulise paneeliga",
      "Antenn klapitakse sõiduks tagatekile alla",
      "Pikk MT-LBu kere, seitse tugiratast, torni ei ole",
      "Kandiline seadmekast antenni ja juhikoha vahel",
    ],
    placements: [
      "Suurtükiväeluure üksuste kaudtuleradar",
      "Paigutatakse rindejoone taha nii, et sektor katab vastase suurtükipositsioone",
    ],
    doctrineNote:
      "Vanem kaudtuleradar, mis on endiselt kasutuses kõrvuti Zoopargiga, mis pidi ta välja vahetama. Mõlemad sõidavad samal kerel, nii et kogu tuvastus on antenn — siin peegelantenn, seal lame paneel. Kumbki neist ütleb, et suurtükiväeluure üksus töötab.",
    service: "Kasutuses",
  },
  "snar-10": {
    aka: "Leopard; Big Fred",
    armament: "7,62 mm PKT",
    rangeText: "Avastab sõidukeid kuni 20 km ja liikuvaid inimesi 10 km kaugusel",
    cues: [
      "MT-LB kere, kandiline torn otse taga",
      "Lame kandiline antenn lühikesel mastil torni kohal",
      "Antenn klapitakse sõiduks piki keret alla",
      "Lühem kere kui Zoopargil ja ARK-1-l, mis kasutavad pikendatud MT-LBu-d",
    ],
    placements: [
      "Lahinguvälja seire suurtükiväe luurepatareides",
      "Jälgib liikumist maapinnal, mitte õhuruumis",
    ],
    doctrineNote:
      "Suunatud maapinnale, mitte taeva poole: ta leiab vastase tagalas liikuvaid sõidukeid ja inimesi ning suudab mürskude langemist jälgides suurtükituld sihile juhtida. Ta jagab kereperekonda kaudtuleradaritega, nii et just lühem kere ütleb, et see masin jälgib liikumist, mitte ei jahi kahureid.",
    service: "Kasutuses",
  },
};
