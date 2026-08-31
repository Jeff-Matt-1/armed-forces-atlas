import type { ItemTranslation } from "@/content/translations";

/** Block 10 — Elektroonilise sõjapidamise süsteemid. */
export const etEw: Record<string, ItemTranslation> = {
  "krasukha-4": {
    rangeText: "Efektiivne õhus olevate radarite vastu kuni umbes 300 km",
    cues: [
      "Mitu ümarat paraboolantenni koos ühel kokkupandaval alusel",
      "KamAZ-63501 8x8 varjualusega kabiini taga",
      "Antennisõlm klapitakse sõiduks lamedalt katusele",
      "Mingit relva ei ole — alusel, kus oleks kahur, on taldrikud",
    ],
    placements: [
      "Ringkonna ja armee tasandil hoitavad elektroonilise sõjapidamise brigaadid ja kompaniid",
      "Paigutatakse katma allüksust, mitte üksust",
    ],
    doctrineNote:
      "Suunatud ülespoole: õhus olevate tulejuhtimisradarite, radarsatelliitide ja droonide andmesidelinkide vastu. Ta ei võitle vastasega enda ees, vaid sensoritega, mis muidu näeksid allüksust, keda ta kaitseb.",
    service: "Kasutuses",
  },
  "krasukha-2": {
    rangeText: "Efektiivne õhus olevate radarite vastu kuni umbes 250 km",
    cues: [
      "Üksainus väga suur taldrik, mitte Krasuha-4 väiksemate kogum",
      "BAZ 8x8 šassii esikabiini ja pika lameda tekiga",
      "Taldrik tõuseb masina tagaosas ja domineerib siluetis",
      "Positsioonil nurkadesse lastud tugitallad",
    ],
    placements: [
      "Ringkonna tasandi elektroonilise sõjapidamise brigaadid",
      "Paaris Krasuha-4-ga samades allüksustes",
    ],
    doctrineNote:
      "Ehitatud just õhus olevate varajase hoiatuse lennukite pimestamiseks. Kui Krasuha-4 katab hulga õhukiirgureid, siis see keskendub sellele, mis näeb kõige kaugemale.",
    service: "Kasutuses",
  },
  "r-330zh-zhitel": {
    aka: "Elanik",
    rangeText: "Surub satelliitnavigatsiooni alla umbes 25–30 km raadiuses",
    cues: [
      "Laotub lagedale laiali, ei ole üks masin",
      "Tõmmitsatega teleskoopmast, tipus väikeste horisontaalsete elementide kroon",
      "Kõrval haagismoodul veel kahe kõrge tõmmitsatega mastiga",
      "Kandjaks KamAZ 6x6 varjualusega",
    ],
    placements: [
      "Brigaadide elektroonilise sõjapidamise kompaniid ja armee tasandi pataljonid",
      "Paigutatakse katma piirkonda, mitte üksusega kaasa minema",
    ],
    doctrineNote:
      "Ründab satelliitnavigatsiooni ja satelliittelefone ning ulatub ka mobiilside- ja V/UHF-sagedustele — nii katkestab ta nii drooni juhtimislingi kui ka satelliitnavigatsiooni, mille järgi see lendab, ja mobiilsidevõrgu, millele üksus oma raadiote kadudes taandub. Tõmmitsad on korraga äratundmismärk ja nõrkus: ülesseadmine võtab aega ja kiiresti ümber paigutuda ei saa.",
    service: "Kasutuses",
  },
  "borisoglebsk-2": {
    aka: "Borisoglebsk-2",
    rangeText: "Taktikaliste raadiovõrkude vastu tavaliselt kümneid kilomeetreid",
    cues: [
      "Roomikutel MT-LB kere — madal, lame ja palju väiksem kui veokipõhised segajad",
      "Üksainus teleskoopmast katuse keskelt",
      "Kandilised varustusküljekastid mõlemal pool keret",
      "Meeskond töötab masti tõstmiseks katusel, nii et teda nähakse sageli hõivatuna",
    ],
    placements: [
      "Motolaskur- ja tankibrigaadide koosseisulised elektroonilise sõjapidamise kompaniid",
      "Töötab ees koos allüksusega, kuhu ta kuulub",
    ],
    doctrineNote:
      "Brigaadi enda segaja, piisavalt väike, et lahinguga kaasa liikuda. Grau ja Bartles käsitlevad raadioelektroonilist võitlust brigaadi tasandil koosseisulise, mitte ülalt juurde antud väeliigina ja maapinnal näeb see välja just nii.",
    service: "Kasutuses",
  },
  "rb-531b-infauna": {
    aka: "Infauna",
    rangeText:
      "Raadio teel lõhatavate laengute ja taktikaliste raadiovõrkude vastu, mõnesaja meetri ulatuses ümber kolonni",
    cues: [
      "BTR-80 kere, kaheksa ratast ja paadivöör — kuid torni ei ole",
      "Kõrge kandiline kastikujuline ehitis, mis ulatub katusest tunduvalt kõrgemale",
      "Väikesed mastantennid tagumisel tekil, mitte üks keskne mast",
      "Näeb välja nagu BTR-80 kõrge kastikujulise pealisehitusega",
    ],
    placements: [
      "Elektroonilise sõjapidamise üksused kolonnide ja rännakute toetuseks",
      "Antakse ette, mitte ei hoita ringkonna tasandil",
    ],
    doctrineNote:
      "Pigem kaitsev kui ründav: ta surub alla raadiolinke, millega lõhatakse teeäärseid laenguid, ja katab kolonni optiliselt. Tema olemasolu kolonnis ütleb, et marsruuti ei peeta turvaliseks.",
    service: "Kasutuses",
  },
  "rtut-bm": {
    aka: "Elavhõbe",
    rangeText: "Kaitseb enda ümber umbes 50 hektarit",
    cues: [
      "MT-LB kere suure avatud võrestikantenni all",
      "Raam on lai horisontaalne peenikeste varraste massiiv, mitte taldrik",
      "Massiiv istub lühikesel mastil otse kere kohal",
      "Tagumisele tekile on sageli püstitatud telkvarjualune",
    ],
    placements: [
      "Elektroonilise sõjapidamise üksused väekoondumiste ja juhtimispunktide kaitseks",
      "Paigutatakse kaitstava sisse, mitte sellest ettepoole",
    ],
    doctrineNote:
      "Võidab suurtükiväge mürsku, mitte kahurit rünnates: ta käivitab või summutab sensorsütikud, nii et mürsud lõhkevad kahjutult kõrgel või ei lõhke üldse. Sõjas, kus mõlemal pool domineerib suurtükivägi, on see omaette vastupatareimeede.",
    service: "Kasutuses",
  },
};
