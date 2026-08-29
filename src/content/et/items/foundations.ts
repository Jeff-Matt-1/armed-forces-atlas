import type { ItemTranslation } from "@/content/translations";

/** Block 00 — Alused. Category names, so the name itself is translated. */
export const etFoundations: Record<string, ItemTranslation> = {
  "concept-mbt": {
    name: "Põhilahingutank (PLT)",
    aka: "OBT (osnovnoi bojevoi tank)",
    armament: "Suurekaliibriline suure algkiirusega kahur täispöörlevas tornis, paarikuulipilduja",
    rangeText: "Kahuriga laskmine tavaliselt 2000–3000 m",
    cues: [
      "Roomikud, mitte rattad",
      "Üksainus suur kahur 360° pöörlevas tornis",
      "Paks kaldu või plokkidena lisasoomus",
      "Madal kere laiuse kohta",
    ],
    placements: [
      "Tanki- ja motolaskurbrigaadide ning -rügementide tankipataljonid",
      "Üldväepataljonidele allutatud tankikompaniid",
    ],
    doctrineNote:
      "Tank on üldväegrupeeringu kaitstud otsetulelöök. Ta liigub siis, kui suurtükivägi on eesmärgi alla surunud.",
    crew: "3–4",
    service: "Kategooria",
  },
  "concept-ifv": {
    name: "Jalaväe lahingumasin (JLM)",
    aka: "BMP (bojevaja mašina pehotõ)",
    armament: "Automaatkahur (tavaliselt 30 mm), tankitõrjerakett, paarikuulipilduja",
    rangeText: "Automaatkahur 2000–4000 m; tankitõrjerakett 4000–5500 m",
    cues: [
      "Veab dessanti JA võitleb: kahur ning laskeavad või tagauksed",
      "Torn on kere kohta väike",
      "Enamasti roomikutel ja ujuv",
      "Tanki kõrval õhuke soomus",
    ],
    placements: [
      "BMP-dega varustatud pataljonide motolaskurkompaniid",
      "Õhudessantüksused (VDV) kasutavad BMD-perekonda",
    ],
    doctrineNote:
      "Jalaväe lahingumasin toimetab jao eesmärgile ja toetab teda seejärel kahuritulega. Ta ei ole kerge tank.",
    crew: "3 + 7–8 dessanti",
    service: "Kategooria",
  },
  "concept-apc": {
    name: "Soomustransportöör (STR)",
    aka: "BTR (bronetransportjor)",
    armament: "Raskekuulipilduja või kerge automaatkahur väikeses tornis",
    rangeText: "Kuulipilduja 1500–2000 m; 30 mm kuni 4000 m",
    cues: [
      "Enamasti 8x8 ratastel, ühtlaste vahedega",
      "Paadikujuline ujuv kere",
      "Väike torn, tankitõrjeraketti ei ole",
      "Küljeluugid, mitte suur tagaramp",
    ],
    placements: [
      "BTR-idega varustatud pataljonide motolaskurkompaniid",
      "Laialt kasutusel merejalaväes ja sisevägedes",
    ],
    doctrineNote:
      "Soomustransportöör on kaitstud lahinguvälja takso; tema tulejõud toetab mahatulnud jalaväge, mitte ei juhi rünnakut.",
    crew: "3 + 7 dessanti",
    service: "Kategooria",
  },
  "concept-spg": {
    name: "Liikursuurtükk",
    aka: "SAU (samohodnaja artilleriiskaja ustanovka)",
    armament: "152 mm haubits",
    rangeText: "Tavamürsuga 24–29 km; reaktiivmürsuga kuni ~40 km",
    cues: [
      "Väga suur torn pika toru ja suudmepiduriga",
      "Roomikšassii, kõrge kandiline kere",
      "Toru on sõidul lukustatud üle tagumise teki",
      "Reaktiivsoomuse plokke ei ole",
    ],
    placements: [
      "Brigaadide ja diviiside liikursuurtükiväe divisjonid",
      "Üldväearmeede suurtükiväebrigaadid",
    ],
    doctrineNote:
      "Grau ja Bartles: tuli on peamine hävitusvahend. Enamikus Vene taktikalistes tegevustes on põhirõhk liikursuurtükiväe divisjonil, mitte tankikompaniil.",
    crew: "4–5",
    service: "Kategooria",
  },
  "concept-mlrs": {
    name: "Raketiheitja",
    aka: "RSZO (reaktiivnaja sistema zalpovogo ognja)",
    armament: "12–40 torust koosnev raketiplokk",
    rangeText: "20–40 km (122 mm); kuni 70–90 km suuremate kaliibritega",
    cues: [
      "Toru- või siiniplokk veoauto šassiil",
      "Torni ei ole, soomust ei ole",
      "Kabiini ees kaitsekilbid",
      "Tõstetav heitjaplokk",
    ],
    placements: [
      "Brigaadide reaktiivsuurtükiväe divisjonid",
      "Armee tasandi reaktiivsuurtükiväe brigaadid",
    ],
    doctrineNote:
      "Massiline pindalatuli allasurumiseks ja miinide külvamiseks: antakse kiiresti ja siis vahetatakse positsiooni, et vältida vastupatareitult.",
    crew: "3",
    service: "Kategooria",
  },
  "concept-sam": {
    name: "Õhutõrjeraketisüsteem",
    aka: "ZRK (zenitnõi raketnõi kompleks)",
    armament: "Püstised või kaldu raketikonteinerid, radarjuhtimine",
    rangeText: "Lähiõhutõrje 10–20 km; kaugmaa 200–400 km",
    cues: [
      "Kahuri asemel suured konteinertorud",
      "Eraldi radarimasinad läheduses",
      "Tõstetav heitja raskeveokil või roomikšassiil",
      "Positsioonil kaablid ja generaatorid",
    ],
    placements: [
      "Manöövribrigaadide koosseisulised õhutõrjedivisjonid",
      "Strateegiliste süsteemide puhul õhu- ja kosmoseväe rügemendid",
    ],
    doctrineNote:
      "Kihilist õhutõrjet käsitletakse manöövri võimaldajana: see ostab maaväele vabaduse koonduda.",
    crew: "3–4",
    service: "Kategooria",
  },
  "concept-ship": {
    name: "Pinnalahingulaev",
    aka: "NK (nadvodnõi korabl)",
    armament: "Laevakahur, püststardiraketišahtid, lähikaitsesüsteemid",
    rangeText: "Tiibraketid üle 1500 km",
    cues: [
      "Üks peakahur komandosilla ees",
      "Siledad püststardiluugid vööritekil",
      "Kinnine mast paneelradaritega",
      "Suurematel üksustel kopteritekk ahtris",
    ],
    placements: ["Nelja laevastiku ja Kaspia flotilli pinnalaevagrupid"],
    doctrineNote:
      "Kaasaegseid Vene pinnalaevu hinnatakse eelkõige liikuvate stardiplatvormidena kaugtäppislöökide andmiseks.",
    crew: "Erinev",
    service: "Kategooria",
  },
  "concept-uav": {
    name: "Mehitamata õhusõiduk (MÕS)",
    aka: "BLA (bespilotnõi letatelnõi aparaat)",
    armament: "Enamasti relvastamata luureks; ringlevad tüübid kannavad lõhkepead",
    rangeText: "Taktikalise mehitamata õhusõiduki raadius 100–120 km",
    cues: [
      "Väike kere, tõukepropeller taga",
      "Kõrgel asetsev sirge tiib",
      "Kabiiniklaasi ei ole",
      "Start katapuldilt või käest, maandumine langevarjuga",
    ],
    placements: [
      "Manöövribrigaadide mehitamata õhusõidukite kompaniid",
      "Suurtükiväeüksused tule korrigeerimiseks",
    ],
    doctrineNote:
      "Grau ja Bartles tõstavad esile drooni ja suurtükiväe paari: droon on sensor, mis sulgeb luure-tule-ahela mõne minutiga.",
    crew: "0 (2–3 operaatorit)",
    service: "Kategooria",
  },
  "concept-ew": {
    name: "Elektroonilise sõjapidamise süsteem",
    aka: "REB (radioelektronnaja borba)",
    armament: "Mittekineetiline: segamine ja suunamääramine",
    rangeText: "Strateegilistel tüüpidel segamisefekt 150–300 km",
    cues: [
      "Relvade asemel suur taldrik-, paneel- või mastantenn",
      "Raskeveoki šassii kandilise operaatorikabiiniga",
      "Positsioonil välja lastud tugitallad",
      "Kahurit ei ole, raketikonteinereid ei ole",
    ],
    placements: [
      "Manöövribrigaadide elektroonilise sõjapidamise kompaniid",
      "Armee tasandi iseseisvad elektroonilise sõjapidamise brigaadid",
    ],
    doctrineNote:
      "Elektrooniline sõjapidamine kaitseb oma jõudu ja pimestab vastase luure-löögi-ahelat; seda käsitletakse tulena teiste vahenditega.",
    crew: "3–4",
    service: "Kategooria",
  },
  "concept-recon": {
    name: "Luuremasin",
    aka: "BRM (bojevaja razvedõvatelnaja mašina)",
    armament: "Automaatkahur ja kuulipilduja; põhikoormaks on sensorid",
    rangeText: "Sensorite avastuskaugus 10–25 km",
    cues: [
      "Näeb välja nagu jalaväe lahingumasin, kuid kannab lisaantenne ja mastisensoreid",
      "Vähem dessandiluuke",
      "Maaseireradari kuppel või mast",
      "Töötab sageli koos droonimeeskondadega",
    ],
    placements: ["Brigaadide luurekompaniid ja -pataljonid", "Suurtükiväe luurepatareid"],
    doctrineNote:
      "Luure on olemas selleks, et toita tuld. Enamasti käivitab avastamine suurtükitule, mitte manöövrilahingu.",
    crew: "4–6",
    service: "Kategooria",
  },
};
