import type { ItemTranslation } from "@/content/translations";

/** Block 03 — Rasked, jao- ja eriotstarbelised relvad. */
export const etHeavyWeapons: Record<string, ItemTranslation> = {
  "pkp-pecheneg": {
    armament: "7.62x54mmR üldotstarbeline kuulipilduja, lintsöötmega",
    rangeText: "Efektiivne kahejalal 1500 m; kolmjalalt 1900 m",
    cues: [
      "Raske ribiline rauakate kogu raua ulatuses",
      "Kiirvahetatavat rauda ei ole, erinevalt asendatud PKM-ist",
      "Kandesang katte kohal ees",
      "Lindikast ripub lukukoja all",
    ],
    placements: ["Iga motolaskurjao kuulipildur", "Motolaskurkompaniide relvarühm"],
    doctrineNote:
      "Jao tulealus. Grau ja Bartles märgivad, et Vene jalavägi seob ja surub alla oma automaattulega, samal ajal kui hävitustöö teeb suurtükivägi.",
    crew: "1–2",
    service: "Kasutuses",
  },
  kord: {
    armament: "12.7x108mm raskekuulipilduja",
    rangeText: "Efektiivne 2000 m; kerge soomuse vastu 1500 m",
    cues: [
      "Väga raske raud selge suudmepiduriga",
      "Paigaldatud madalale 6T7 kolmjalale või sõiduki rõngasalusele",
      "Külgmine lintsöötmine suurte lülidega",
      "Taga labidkäepidemed, kolmjalal õlatuge ei ole",
    ],
    placements: [
      "Motolaskurpataljonide raskekuulipildujajaod",
      "Ülema alus tankidel ja soomukitel",
    ],
    doctrineNote:
      "Kasutatakse kergsõidukite, meeskonnarelvade positsioonide ja madalalt lendavate õhusõidukite vastu — raskeim otsetulerelv jalaväe koosseisus.",
    crew: "2",
    service: "Kasutuses",
  },
  "ags-17": {
    aka: "Leek",
    armament: "30 mm automaatgranaadiheitja, lintsöötmega",
    rangeText: "Kuni 1700 m",
    cues: [
      "Lühike jäme raud iseloomuliku ümara trumliga paremal",
      "Madalal kolmjalal, laskuri jaoks pehmendatud iste",
      "Optiline sihik vasakule nihutatud",
      "Laseb valangutega, lennutrajektoor on nähtavalt kaarjas",
    ],
    placements: ["Motolaskurpataljonide granaadiheitjarühm", "Sõidukite ja helikopterite alused"],
    doctrineNote:
      "Pindalatuli varjes oleva jalaväe vastu — pataljoni oma kaudtuli siis, kui suurtükivägi on mujal hõivatud.",
    crew: "2–3",
    service: "Kasutuses",
  },
  "rpg-7": {
    aka: "Reaktiivgranaadiheitja",
    armament: "Korduvkasutatav 40 mm heitja ülemõõduliste raketgranaatidega",
    rangeText: "Efektiivne liikuva sihtmärgi vastu 200 m, paikse vastu 500 m",
    cues: [
      "Toru iseloomuliku laieneva lehtriga taga",
      "Puidust või polümeerist kuumakaitsed keskosas",
      "Lõhkepea on selgelt laiem kui toru, millel ta istub",
      "Optiline sihik vasakul küljel",
    ],
    placements: [
      "Granaadiheitja igas motolaskurjaos",
      "Laialt kasutusel õhudessantvägedes ja merejalaväes",
    ],
    doctrineNote:
      "Jao vastus soomukitele, punkritele ja hoonetele. Levik loeb rohkem kui jõudlus: see on igal jaol olemas.",
    crew: "1",
    service: "Kasutuses",
  },
  "rpo-a-shmel": {
    aka: "Kimalane",
    armament: "93 mm ühekordne termobaariline raketiheitja",
    rangeText: "Efektiivne 600 m; maksimaalne 1000 m",
    cues: [
      "Sile silindriline ühekordne toru, laienevat lehtrit ei ole",
      "Kantakse ja lastakse tavaliselt paarikaupa",
      "Lihtne ülestõstetav mehaaniline sihik",
      "Lühem ja jämedam kui RPG-7 toru",
    ],
    placements: [
      "Kiirgus-, keemia- ja bioloogiakaitseväe leegiheitjaüksused",
      "Antakse motolaskurüksustele rünnakuülesanneteks",
    ],
    doctrineNote:
      "Kuulub kaitseväe RKB-üksustele, mitte jalaväele, ja see ise on tuvastustunnus: nende kohalolek märgib ettevalmistatud positsioonide vastu suunatud rünnakut.",
    crew: "1",
    service: "Kasutuses",
  },
  kornet: {
    aka: "AT-14 Spriggan",
    armament: "Laserkiirt mööda juhitav tankitõrjerakett, tandem-kumulatiivlõhkepea",
    rangeText: "100–5500 m; hilisematel variantidel kuni 8000 m",
    cues: [
      "Suur stardikonteiner kolmjalal koos selge sihikuplokiga",
      "Laskur istub või lamab sihiku taga, ei võta relva õlale",
      "Sageli paigaldatud paarikaupa kergsõidukitele",
      "Konteiner on selgelt pikem kui Metisel või Fagotil",
    ],
    placements: ["Motolaskurpataljonide tankitõrjerühmad", "Brigaadi tasandi tankitõrjepatareid"],
    doctrineNote:
      "Tankitõrjereserv. Grau ja Bartles kirjeldavad, kuidas tankitõrjeallüksused paigutatakse katma tõenäolisi soomukite lähenemisteid, mitte rünnakuga kaasa minema.",
    crew: "2",
    service: "Kasutuses",
  },
  "2b14-podnos": {
    aka: "Kandik",
    armament: "82 mm sileraudne miinipilduja, suudmelaadimisega",
    rangeText: "85–4270 m",
    cues: [
      "Lihtne toru, kahejalg ja ristkülikukujuline alusplaat",
      "Jaguneb kolmeks kantavaks koormaks",
      "Tagasilöögimehhanismi ega kilpi ei ole",
      "Sihik kinnitatud toru vasakule küljele",
    ],
    placements: [
      "Motolaskurpataljonide miinipildujapatarei",
      "Õhudessant- ja mäeüksused, kuhu sõidukid ei pääse",
    ],
    doctrineNote:
      "Pataljoniülema oma suurtükivägi — reageeriv tuli, mis ei vaja suurtükiväegrupilt luba.",
    crew: "4",
    service: "Kasutuses",
  },
  "2b9-vasilek": {
    aka: "Rukkilill",
    armament: "82 mm automaatmiiniheitja",
    rangeText: "Umbes 4,3 km",
    cues: [
      "Ei näe välja nagu miiniheitja — madal rattalafett peaaegu horisontaalse toruga",
      "Neljalasuline salv söödab küljelt, nii et tuli käib valangutena",
      "Laskub lamedaks ka otsetule jaoks, mitte ainult järsu nurga alla",
      "Sageli MT-LB katusele kinnitatud, mitte veetav",
    ],
    placements: [
      "Motolaskur- ja õhudessantüksuste miinipildujapatareid",
      "MT-LB peal seal, kus pinnas veetavat relva ei kanna",
    ],
    doctrineNote:
      "Miiniheitja, mis tulistab valangut ühe miini asemel, nii et neli lasku jõuavad sihtmärgini enne, kui esimest kuulda on. Ta on ka lametule relv, mistõttu teda kasutatakse lagedal oleva elavjõu ja kergsõidukite vastu sama palju kui positsioonide vastu.",
    crew: "4",
    service: "Kasutuses",
  },
  "khrizantema-s": {
    aka: "Krüsanteem",
    armament: "Kaks 9M123 raketti sissetõmmataval stardiseadmel",
    rangeText: "Umbes 6 km, radari- või laserjuhtimisega",
    cues: [
      "BMP-3 kere, torni üldse ei ole",
      "Kaksikstardiseade tõuseb tekilt üles ja klapib sõiduks tasapinda",
      "Radariantenn stardiseadme kõrval — ühelgi teisel tankitõrjemasinal seda ei ole",
      "Lame tühi tekk seal, kus lahingumasinal oleks lahinguruum",
    ],
    placements: [
      "Motolaskurallüksuste tankitõrjeüksused",
      "Hoitakse tagavaras soomusläbimurde sulgemiseks, ei liigu koos rünnakuga",
    ],
    doctrineNote:
      "Juhib radari, mitte laskuri silma järgi, nii et suits, tolm ja pimedus teda ei peata — needsamad tingimused, mida soomus rünnakuks eelistab. Grau ja Bartles kirjeldavad tankitõrjereservi, mida hoitakse läbimurde sulgemiseks; see on seesama reserv, millele on antud igailmasilmad.",
    crew: "2",
    service: "Kasutuses",
  },
  "shturm-s": {
    aka: "Rünnak",
    armament: "9M114 või 9M120 raketid sissetõmmataval stardiseadmel",
    rangeText: "Umbes 5 km, raadiokäskjuhtimisega",
    cues: [
      "MT-LB kere ühe stardiseadme õlaga torni asemel",
      "Stardiseade tõmbub kerre ja tekk näib tühi",
      "Kaksteist raketti kere sees, laetakse katuse kaudu",
      "Madalam ja kergem kui Khrizantema, mis kasutab BMP-3 keret",
    ],
    placements: [
      "Motolaskur- ja õhudessantallüksuste tankitõrjepatareid",
      "Hoitakse tagavaras soomusläbimurde sulgemiseks, ei liigu koos rünnakuga",
    ],
    doctrineNote:
      "Tankitõrjereservi vanem pool, kerel, mis läheb sinna, kuhu jalavägi. Juhitakse raadiokäskudega, mitte radariga, nii et ta peab sihtmärki nägema ja suitsus tuli seisab — just see lünk, mille sulgemiseks Khrizantema ehitati.",
    crew: "2",
    service: "Kasutuses",
  },
};
