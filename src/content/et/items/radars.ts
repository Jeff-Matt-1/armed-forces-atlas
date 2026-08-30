import type { ItemTranslation } from "@/content/translations";

/** Block 12 — Radarid. */
export const etRadars: Record<string, ItemTranslation> = {
  "p-18": {
    aka: "Terek; Spoon Rest D",
    rangeText: "Avastab lennukid kuni umbes 250 km",
    cues: [
      "Lai võrestik pikkadest horisontaalsetest varrastest üksteise kohal ridades",
      "Massiiv Urali veoautol, kabiini jaoks teine veoauto",
      "Vardad on hõredalt — meeterlaine vajab suuri hajusaid elemente",
      "Massiiv pöörleb tervikuna masina kohal mastil",
    ],
    placements: [
      "Raadiotehnilised väed õhuseireks",
      "Varajane hoiatus ja sihtmärkide leidmine õhutõrjeüksustele",
    ],
    doctrineNote:
      "Vana ja väärtuslik just vanuse tõttu: meeterlaine annab kaja kujudelt, mis on optimeeritud palju lühemate lainete vastu, nii et selles vanuses jaam jääb varjatud lennukitele ebamugavaks.",
    service: "Kasutuses",
  },
  "nebo-m": {
    aka: "Taevas-M",
    rangeText: "Avastab lennukid kuni umbes 600 km",
    cues: [
      "Tohutu ristkülikuline massiiv, mitu rida sügav ja masinast palju laiem",
      "Massiiv tõstetud võrestikutornile, ei istu katusel",
      "BAZ 8x8 šassii, kabiin tornist tublisti eespool",
      "Mitu masinat töötavad koos ühe süsteemina",
    ],
    placements: [
      "Ringkonna tasandi raadiotehnilised väed",
      "Toidab kaugmaa õhutõrjeraketisüsteeme",
    ],
    doctrineNote:
      "P-18 taoliste jaamade kaasaegne järglane, mis ühendab mitu lainevahemikku, nii et see, mida ühes on raske näha, on teises nähtav. Tegemist on strateegilise sensoriga: ühe leidmine tähendab teda teenindava õhutõrjevõrgu leidmist.",
    service: "Kasutuses",
  },
  "kasta-2e2": {
    aka: "Flat Face E",
    rangeText: "Avastab lennukid kuni umbes 150 km",
    cues: [
      "Üksainus terviklik ristkülikuline paneel, mitte lahtine varrastevõrestik",
      "Paneel kõrgel peenikesel mastil masinast tublisti kõrgemal",
      "Märgatavalt väiksem kui Nebo-M massiiv",
      "Kõrvale seatud haagiskabiin ja generaator",
    ],
    placements: [
      "Madalate sihtmärkide õhuseire õhutõrjeüksustele",
      "Täidab lünka pikema ulatusega jaamade katvuse all",
    ],
    doctrineNote:
      "Ehitatud nägema seda, mis lendab madalalt — helikoptereid, tiibrakette, droone — ja seepärast läheb antenn masti otsa. Maad ligi hoidva sihtmärgi vastu ostab katvust kõrgus, mitte võimsus.",
    service: "Kasutuses",
  },
  "zoopark-1": {
    aka: "Loomaaed",
    rangeText: "Määrab tulistavad kahurid 20 km, raketiheitjad 35 km kauguselt",
    cues: [
      "Roomikutel MT-LB perekonna kere lameda ristkülikulise paneeliga tagumisel tekil",
      "Paneel tõuseb kaldu ja skaneerib sektorit, ei pöörle täisringi",
      "Paneel klapitakse sõiduks lamedalt kerele",
      "Tervikuna madal — mitte midagi õhuseirejaama masti kõrgusest",
    ],
    placements: [
      "Suurtükiväe luureüksuste vastupatareiradar",
      "Paigutatakse liini lähedale taha, et sektor kataks vastase kahuripiirkonnad",
    ],
    doctrineNote:
      "Jälgib mürske lennus ja arvutab tagasi kahurini, mis need välja saatis. Sõjas, mida peetakse mõlemal pool suurtükiväega, on ta lahinguvälja väärtuslikemaid sihtmärke — sellest roomikud, madal profiil ja positsiooni vahetamine kohe pärast kiirgamist.",
    service: "Kasutuses",
  },
  "snar-10": {
    aka: "Leopard",
    armament: "7.62 mm PKT",
    rangeText: "Avastab sõidukid kuni 20 km, liikuvad inimesed 10 km",
    cues: [
      "MT-LB kere väikese pöörleva trummelantenniga",
      "Antenn ümara katte sees, mitte lahtine massiiv",
      "Istub lühikesel alusel vahetult tagumise teki kohal",
      "Kaugelt väikseim antenn kogu õppetükis",
    ],
    placements: [
      "Lahinguvälja seire suurtükiväe luurepatareides",
      "Jälgib liikumist maapinnal, mitte õhuruumis",
    ],
    doctrineNote:
      "Suunatud maapinnale, mitte taeva poole: ta leiab vastase tagalas liikuvaid sõidukeid ja inimesi ning suudab mürskude langemist jälgides suurtükituld sihile juhtida. Väike antenn on tunnus, et tegemist on lähimaa maasensoriga.",
    service: "Kasutuses",
  },
};
