import type { ItemTranslation } from "@/content/translations";

/** Block 18 — Mehitamata süsteemid. */
export const etDrones: Record<string, ItemTranslation> = {
  "orlan-10": {
    aka: "Merikotkas",
    rangeText: "Umbes 120 km operaatorist, õhus kuni 16 tundi",
    cues: [
      "Väike: tiibade siruulatus umbes kolm meetrit, kahe mehe kanda",
      "Üks tõukepropeller lühikese kerekapsli taga",
      "Start katapuldisiinilt, maandumine langevarjuga",
      "Sirge kõrgel asetsev tiib, sabapoome ei ole",
    ],
    placements: [
      "Suurtükiväe ja luureüksused brigaadi tasandil ja allpool",
      "Arvukaim Vene droon teenistuses",
    ],
    doctrineNote:
      "Tööhobune, mis sulgeb luure-tule-ahela: ta leiab sihtmärgi, jälgib mürskude langemist ja korrigeerib tuld. Grau ja Bartles väidavad, et Vene suurtükivägi on täpselt nii hea kui tema vaatlus, ja täna on suurem osa sellest vaatlusest siin.",
    service: "Kasutuses",
  },
  "eleron-3": {
    aka: "Aileron-3SV",
    rangeText: "Umbes 25 km, õhus umbes 2 tundi",
    cues: [
      "Lendav tiib — eraldi saba ei ole ja kerest ei saa õieti rääkida",
      "Väikesed ülespööratud tiivaotsad kiilu asemel",
      "Üks tõukepropeller keskkeha taga",
      "Väiksem kui Orlan-10, stardib käest või katapuldilt",
    ],
    placements: ["Pataljoni ja kompanii luure", "Eriüksused ja õhudessantväed"],
    doctrineNote:
      "Nii lühikese ulatuse ja nii odav, et väikesed üksused saavad teda vabalt kasutada. Kui Orlan teenib brigaadi kahureid, siis see teenib kompaniiülema enda silmi.",
    service: "Kasutuses",
  },
  forpost: {
    aka: "Searcher II",
    armament: "Relvastatud variant kannab kergeid juhitavaid relvi",
    rangeText: "Umbes 250 km, õhus umbes 18 tundi",
    cues: [
      "Kaks sabapoomi jooksevad taha keskkerest",
      "Kõrge sirge tiib tõukepropelleriga poomide vahel",
      "Orlanist palju suurem — umbes väikelennuki mõõtu",
      "Sensoritorn nina all",
    ],
    placements: [
      "Armee tasandi luureüksused",
      "Ehitatud litsentsi alusel Iisraeli konstruktsioonist, hiljem iseseisvalt",
    ],
    doctrineNote:
      "Samm üksuse luurelt teatri luurele: ta ringleb piisavalt kaua, et koostada pilt, mitte teenindada üht sihtmärki. Kaks poomi on kiireim viis teda kõigest muust siin eristada.",
    service: "Kasutuses",
  },
  "orion-uav": {
    aka: "Inohodets; Pacer",
    armament: "Juhitavad pommid ja raketid tiibade all olevatel pülonitel",
    rangeText: "Umbes 250 km, õhus kuni 24 tundi",
    cues: [
      "Üks kere V-sabaga, mitte kahe poomiga",
      "Pikk sale kõrgel asetsev tiib, purilennuki proportsioonidega",
      "Tõukepropeller päris kere sabas",
      "Tiibade all pülonid — esimene relvastatud droon selles õppetükis",
    ],
    placements: [
      "Armee tasandi löögi- ja luureüksused",
      "Esimene Vene relvastatud keskkõrgusdroon teenistuses",
    ],
    doctrineNote:
      "Kaotab viivituse sihtmärgi leidmise ja ründamise vahel, sest sama lennuk teeb mõlemat. V-saba Forposti kahe poomi vastu on tunnus, mida tasub õppida.",
    service: "Kasutuses",
  },
  lancet: {
    aka: "Izdelije 51",
    armament: "Sisseehitatud lõhkepea — lennuk ise on relv",
    rangeText: "Umbes 40 km",
    cues: [
      "Kaks X-kujulist ristitiiba, ees ja taga",
      "Väike torukujuline kere propelleriga sabas",
      "Maandumisteldreid ei ole üldse — ta lastakse välja ja tagasi ei tule",
      "Palju väiksem kui ükski luuredroon siin",
    ],
    placements: [
      "Suurtükiväe ja eriluure üksused",
      "Kasutatakse suurtükiväe, radarite ja õhutõrjesüsteemide vastu",
    ],
    doctrineNote:
      "Laskemoon, mis ringleb, nii et ta surub luure-tule-ahela kokku üheks objektiks. Teda kasutatakse just nende kõrge väärtusega süsteemide vastu, mida see atlas sind tuvastama õpetab — vastupatareiradarid, liikursuurtükid, õhutõrjemasinad.",
    service: "Kasutuses",
  },
  "uran-9": {
    aka: "Uran-9 maarobot",
    armament: "30 mm automaatkahur 2A72, Ataka raketid, Šmel heitjad",
    rangeText: "Juhitakse kuni umbes 3 km kauguselt",
    cues: [
      "Roomikmasin, kuid meeskonna jaoks palju liiga väike",
      "Torn on selle all oleva kere kohta ebaproportsionaalselt suur",
      "Kusagil ei ole luuke, vaatlusprismasid ega kuplit",
      "Sensorimast torni katuse kohal",
    ],
    placements: [
      "Katselised ja piiratud väljastusega robootikaüksused",
      "Mõeldud linnarünnakuks ja tulega luureks",
    ],
    doctrineNote:
      "Meeskonnavarustuse puudumine on tuvastustunnus: luukide puudumine tähendab, et sees ei ole kedagi. Lahingukatsetused näitasid, kui palju juhtimisulatust ja olukorrateadlikkust selline masin kaotab, ja seepärast on ta endiselt haruldane.",
    service: "Piiratud kasutuses",
  },
};
