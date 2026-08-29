import type { ItemTranslation } from "@/content/translations";

/** Block 08 — Soomustransportöörid. */
export const etApc: Record<string, ItemTranslation> = {
  "btr-60pb": {
    aka: "BTR-60",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT mõjus umbes 2000 m",
    cues: [
      "Kaheksa ratast teraval paadikerel, ühtlaste vahedega",
      "Väike kooniline torn lühikese jämeda 14.5 mm kahuriga",
      "Küljeuksi ei ole üldse — dessant väljub katuseluukidest",
      "Kaks bensiinimootorit, seega taga kaks väljalasketoru",
    ],
    placements: [
      "Reservi ja teise liini motolaskurüksused",
      "Juhtimis- ja eriotstarbelised variandid endiselt kasutuses",
    ],
    doctrineNote:
      "Ainult katuse kaudu väljumine on määrav nõrkus: jalavägi peab ronima üle pealmise osa, kaitseta. Iga hilisem BTR on katse seda probleemi lahendada.",
    crew: "2 + 8",
    service: "Piiratud kasutuses, peamiselt reservis",
  },
  "btr-70": {
    aka: "GAZ-4905",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT mõjus umbes 2000 m",
    cues: [
      "Väikesed madalad luugid teise ja kolmanda telje vahel",
      "Ümar nina, pehmem kui BTR-60 terav vöör",
      "Sama kooniline 14.5 mm torn kui BTR-60-l ja BTR-80-l",
      "Endiselt kaks bensiinimootorit — BTR-80-l on üks diisel",
    ],
    placements: ["Teise liini motolaskurüksused", "Siseväed ja eriotstarbelised variandid"],
    doctrineNote:
      "Poollahendus väljumisprobleemile: luugid on rataste vahel ja nii väikesed, et tule all väljumine on ikka aeglane. BTR-80 täisuks on lahendus, mis jäi püsima.",
    crew: "2 + 9",
    service: "Piiratud kasutuses",
  },
  "btr-80": {
    aka: "GAZ-5903",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT mõjus umbes 2000 m",
    cues: [
      "Suur kaheosaline küljeuks teise ja kolmanda telje vahel",
      "Ukse ülemine pool avaneb ette, alumine langeb astmeks",
      "Üks diiselmootor, seega üks väljalasketoru kahe asemel",
      "Kooniline torn lühikese jämeda 14.5 mm toruga",
    ],
    placements: ["Motolaskurpataljonid kogu maaväes", "Merejalavägi ja õhudessantrünnakuüksused"],
    doctrineNote:
      "Uks on kogu konstruktsiooni mõte ja kiireim viis teda BTR-70-st eristada. See on maaväe põhiline ratastel vedaja.",
    crew: "3 + 7",
    service: "Kasutuses",
  },
  "btr-82a": {
    aka: "BTR-82",
    armament: "30 mm automaatkahur 2A72, 7.62 mm PKT",
    rangeText: "Automaatkahur mõjus umbes 2000 m",
    cues: [
      "Pikk peenike 30 mm toru seal, kus BTR-80-l on lühike jäme",
      "Kõrgem, kandilisem torn kui BTR-80 koonus",
      "All sama BTR-80 kere ja küljeuks",
      "Sageli lattsoomus ja lisaplaadid",
    ],
    placements: ["Praeguse standardi järgi ümberrelvastatud motolaskurbrigaadid", "Merejalavägi"],
    doctrineNote:
      "Kahur hägustab piiri, millele see õppetükk on ehitatud: vedaja, mis on relvastatud nagu lahingumasin. Tal puudub siiski BMP raketirelvastus ja kaitse, nii et ta viib jalaväe lahingusse, mitte läbi selle.",
    crew: "3 + 7",
    service: "Kasutuses",
  },
  "mt-lb": {
    aka: "Mitmeotstarbeline kerge soomustraktor",
    armament: "7.62 mm PKT väikeses tornis",
    cues: [
      "Roomikutel ja märkimisväärselt madal — vaevu kõrgem kui mehed tema kõrval",
      "Pikk lame katus peaaegu ilma pealisehituseta",
      "Väike kuulipildujatorn ees paremal või puudub üldse",
      "Kuus väikest tugiratast, tagasijooksurullikuid ei ole",
    ],
    placements: [
      "Suurtükiväe veduk ja laskemoonavedaja",
      "Kandja miinipildujate, õhutõrje ja pioneerivariantidele",
      "Kasutatud hädapäraselt ka jalaväevedajana",
    ],
    doctrineNote:
      "Rohkem šassii kui masin: 2S1 ja tosina eriotstarbelise ümberehituse alus. Ühe tuvastamine ei ütle midagi enne, kui loed, mis on tema katusele kruvitud.",
    crew: "2 + 11",
    service: "Kasutuses",
  },
  "btr-d": {
    aka: "Objekt 925",
    armament: "Kaks kere ette paigaldatud 7.62 mm PKT-d; torni ei ole",
    cues: [
      "Roomikutel, madal ja tavaliselt ilma igasuguse tornita",
      "Pikem kere kui BMD-2-l — kuus tugiratast viie asemel",
      "Hüdropneumaatiline vedrustus, sama mis BMD-perekonnal",
      "Kannab lahtisel katusel sageli miinipildujat, õhutõrjeraketimeeskonda või sidevarustust",
    ],
    placements: [
      "Õhudessantväe (VDV) üksused vedajana BMD-1 ja BMD-2 kõrval",
      "Alusmasin õhudessantväe juhtimis-, miinipilduja- ja õhutõrjevariantidele",
    ],
    doctrineNote:
      "Õhudessantväe vaste MT-LB-le: langevarjuga heidetav lameplatvorm, mis veab kaasa kõike, mida vaja. Puuduv torn on tuvastustunnus.",
    crew: "3 + 10",
    service: "Kasutuses",
  },
  "btr-mdm-rakushka": {
    aka: "Merekarp",
    armament: "7.62 mm PKT",
    cues: [
      "Kõrge kandiline pealisehitus õhudessantväe roomikkerel",
      "Viis tugiratast, samad mis tema kõrval teenival BMD-4M-il",
      "Palju kõrgem katusejoon kui BTR-D-l, korralik dessandiruum",
      "Automaatkahurit ei ole — kohene erinevus BMD-4M-ist",
    ],
    placements: [
      "BMD-4M kõrval ümberrelvastatud õhudessantväe üksused",
      "Alus õhudessantväe juhtimis- ja meditsiinivariantidele",
    ],
    doctrineNote:
      "Käib paaris BMD-4M-iga ühisel šassiil, nii et moderniseeritud õhudessantpataljon peab ühte varuosakomplekti. Rakuška kolonnis tähendab, et BMD-4M-id on temaga kaasas.",
    crew: "2 + 13",
    service: "Kasutuses",
  },
};
