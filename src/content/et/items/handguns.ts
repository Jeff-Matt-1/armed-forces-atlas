import type { ItemTranslation } from "@/content/translations";

/** Block 02 — Püstolid. Designations stay; everything descriptive is translated. */
export const etHandguns: Record<string, ItemTranslation> = {
  pm: {
    aka: "Pistolet Makarova, 9x18 mm",
    armament: "9x18 mm PM, 8-padrunine salv",
    rangeText: "Efektiivne kuni 50 m",
    cues: [
      "Lühike lukk ümara suudmeotsaga",
      "Väljas löökkukk, väikesed fikseeritud sihikud",
      "Kaitseriiv luku küljes",
      "Ühetükiline ümbritsev käepide tärni või rihmaaasaga",
    ],
    placements: [
      "Ohvitseride, meeskondade ja tagalapersonali pärandpüstol",
      "Endiselt laialdaselt kasutusel politseis ja sisevägedes",
    ],
    doctrineNote:
      "Pigem üldlevinud kui tähtis. Selle olemasolu viitab vanemale või teise liini varustuskomplektile.",
    crew: "1",
    service: "Pärand, endiselt kasutuses",
  },
  "mp-443": {
    aka: "Pistolet Jarõgina",
    armament: "9x19 mm, 17/18-padrunine salv",
    rangeText: "Efektiivne kuni 50 m",
    cues: [
      "PM-ist pikem ja kandilisem lukk",
      "Kaherealine salv, käepide selgelt jämedam",
      "Raami küljes kaitseriiv ja kandiline päästikukaar",
      "Selged kolme valge punktiga sihikud",
    ],
    placements: [
      "Relvajõudude standardpüstol alates 2003. aastast",
      "Ohvitserid, sõidukimeeskonnad, spetsialistid",
    ],
    doctrineNote:
      "Mõeldud PM-i universaalseks asendajaks; selle väljastamine märgib moderniseeritud varustuskomplekti.",
    crew: "1",
    service: "Praegune standard",
  },
  "gsh-18": {
    armament: "9x19 mm (sh soomustläbistav 7N31), 18-padrunine salv",
    rangeText: "Efektiivne kuni 50 m",
    cues: [
      "Väga kerge polümeerraam, tahuliste külgedega lukk",
      "Välist löökkukke ei ole — löögitihvtiga",
      "Iseloomulikud lühikesed haardesooned ainult luku tagaosas",
      "Sirge, kandiline profiil",
    ],
    placements: ["Väljastatud valitud armee-, siseministeeriumi ja eriüksustele MP-443 kõrval"],
    doctrineNote: "Võetud kasutusele lähedalt kuulivesti läbistava võime tõttu.",
    crew: "1",
    service: "Kasutuses, piiratud koguses",
  },
  aps: {
    aka: "Avtomatitšeski Pistolet Stetškina",
    armament: "9x18 mm, 20-padrunine salv, valikuline tulerežiim",
    rangeText: "Efektiivne 50 m (õlatoega 200 m)",
    cues: [
      "Ebatavaliselt pikk käepide 20-padrunise salvega",
      "Tulerežiimi valits luku küljes",
      "Kabuur toimib õlatoena",
      "Tervikuna suurem kui ükski teine Vene teenistuspüstol",
    ],
    placements: [
      "Eriotstarbelised ja luureüksused",
      "Ajalooliselt sõiduki- ja suurtükiväemeeskonnad",
    ],
    doctrineNote:
      "Automaatpüstol seal, kus soovitakse kompaktset automaatrelva — luuregrupid, ihukaitse.",
    crew: "1",
    service: "Pärand / eriotstarbeline",
  },
  "sr-1mp": {
    aka: "Vektor / SPS",
    armament: "9x21 mm soomustläbistav, 18-padrunine salv",
    rangeText: "Efektiivne 50 m; läbistab kuulivesti kuni 50 m",
    cues: [
      "Kaasaegne kandiline polümeerraam lisaseadmete siiniga",
      "Käepideme seljal pigistuskaitse",
      "Paks lukk eesmiste haardesoontega",
      "Tavapärast välist kaitseriivi ei ole",
    ],
    placements: ["FSB, FSO ja armee eriotstarbelised (spetsnaz) üksused"],
    doctrineNote:
      "Kuulivesti läbistamiseks mõeldud püstol; selle olemasolu viitab eriotstarbelisele või ihukaitseüksusele, mitte liinijalaväele.",
    crew: "1",
    service: "Kasutuses, eriüksused",
  },
  pss: {
    aka: "Pistolet Spetsialnõi Samozarjadnõi",
    armament: "7.62x42 mm SP-4 suletud kolviga padrun, 6 lasku",
    rangeText: "Efektiivne kuni 25 m",
    cues: [
      "Summutitoru ei ole — püstol näeb tavaline välja, kuid on vaikne",
      "Kandiline tahuline lukk, väga lihtsad jooned",
      "Lühike raud, suue ei ulatu välja",
      "Väike 6-padrunine salv, peenike käepide",
    ],
    placements: ["Ainult eriotstarbeline luure ja riikliku julgeoleku üksused"],
    doctrineNote:
      "Vaikus tuleb padrunist, mitte summutist. See ei ole kunagi olnud üldväljastusrelv.",
    crew: "1",
    service: "Eriüksused",
  },
  udav: {
    armament: "9x21 mm, 18-padrunine salv",
    rangeText: "Efektiivne kuni 100 m",
    cues: [
      "Pikk kaasaegne lukk täispika siiniga",
      "Mõlemakäelised juhtnupud ja ümberpööratav salvivabasti",
      "Kandiline päästikukaar sõrmesüvendiga",
      "Osal relvadest keermestatud raud summuti jaoks",
    ],
    placements: ["Võetakse kasutusele MP-443 järglasena kogu relvajõududes"],
    doctrineNote:
      "Kasutuselevõtt on järkjärguline; selle ilmumine viitab hiljuti ümberrelvastatud üksusele.",
    crew: "1",
    service: "Kasutuselevõtmisel",
  },
  "ak-74m": {
    aka: "Kalašnikov 5,45",
    armament: "5,45x39 mm, 30-padrunine salv",
    rangeText: "Efektiivne kuni umbes 500 m",
    cues: [
      "Must polümeerkate seal, kus AKM-il on puit",
      "Küljele klapitav päraosa, mida fikseeritud päraga AK-74-l ei ole",
      "Pikk kaldus avaga suudmepidur — AK-74 perekonna tunnus",
      "Salv on vähem kumer kui 7,62 AKM-il, sest padrun on väiksem",
    ],
    placements: [
      "Motolaskur- ja õhudessantüksuste standardrelv",
      "Endiselt maavägede arvukaim relv",
    ],
    doctrineNote:
      "Relv, mida enamik Vene sõdureid tegelikult kannab. Tema kohalolek ei ütle iseenesest midagi — tema puudumine ütleb: AK-12-tega üksus on ümber varustatud, puidust laesäärega AKM-idega mitte.",
    service: "Kasutuses",
  },
  "ak-12": {
    armament: "5,45x39 mm, 30-padrunine salv",
    rangeText: "Efektiivne kuni umbes 500 m",
    cues: [
      "Kinnitussiin kulgeb üle kogu lukukoja ja selle kaane — ühelgi varasemal AK-l seda ei ole",
      "Teleskoopiline ja klapitav päraosa, mitte fikseeritud ega küljele klapitav",
      "Käsikaitse on kandiline ja siinidega, mitte ümar puit- või polümeerkate",
      "Siinide all endiselt selgelt Kalašnikov: sama gaasitoru, sama salv",
    ],
    placements: [
      "Alates 2010. aastate keskpaigast ümber varustatud üksused, veel mitte kõikjal",
      "Antakse esmalt koosseisudele, kellelt oodatakse lahingut, mitte positsioonide hoidmist",
    ],
    doctrineNote:
      "Moderniseeritud Kalašnikov, mitte uus relv ja tema väärtus tuvastajale on ajaline: AK-12-te leidmine ütleb, et üksus on läbinud ümbervarustuse, mis paigutab ta järjekorda ka kõige muu jaoks, mis sellega kaasneb.",
    service: "Kasutuses",
  },
  svd: {
    aka: "Dragunov",
    armament: "7,62x54R, 10-padrunine salv",
    rangeText: "Efektiivne kuni umbes 800 m",
    cues: [
      "Pikk raud ja skeletipära — päras on ava läbi",
      "Sihik PSO-1 istub kõrgel külgsiinil, nihutatud vasakule",
      "Peenike käsikaitse kahe pika õhuavaga mõlemal küljel",
      "Pikem ja peenem kui ükski Kalašnikov ja seda on näha",
    ],
    placements: [
      "Üks motolaskurjao kohta, määratud laskuri relv",
      "Ei ole snaiprirelv lääne mõistes: ta kuulub jaole",
    ],
    doctrineNote:
      "Antakse jaole, mitte ei hoita spetsialistide käes ja see ongi doktriini mõte: Vene jagu kannab oma täpsustuld kuni 800 m kaasas, selle asemel et seda mujalt kutsuda. Ühe leidmine ei ütle üksuse kohta midagi erilist, sest igal jaol on see olemas.",
    service: "Kasutuses",
  },
  "vss-vintorez": {
    aka: "Keermelõikur",
    armament: "9x39 mm allahelikiiruse padrun, 10- või 20-padrunine salv",
    rangeText: "Efektiivne kuni umbes 400 m",
    cues: [
      "Jäme sisseehitatud summuti üle suurema osa raua pikkusest — mitte külgekruvitud",
      "Tervikuna lühike, sihikust hoolimata palju lühem kui SVD",
      "Tavaversioonil puidust skeletipära",
      "Salv on lühike ja vaid kergelt kumer, jämeda allahelikiiruse padruni jaoks",
    ],
    placements: ["Eriotstarbelised luure- ja julgestusüksused", "Mitte kunagi liinijalaväe relv"],
    doctrineNote:
      "Vaikne suudme juures seetõttu, et padrun on allahelikiiruse, mitte lihtsalt summutatud. Tema kohalolek ütleb selles õppetükis kõige rohkem: VSS pildil paigutab üksuse eriotstarbeliseks luureks, mida ülejäänud pilt ka ei vihjaks.",
    service: "Kasutuses",
  },
};
