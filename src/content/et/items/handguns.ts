import type { ItemTranslation } from "@/content/translations";

/** Block 02 — Püstolid. Designations stay; everything descriptive is translated. */
export const etHandguns: Record<string, ItemTranslation> = {
  pm: {
    aka: "Pistolet Makarova, 9x18 mm",
    armament: "9x18 mm PM, 8-padrunine salv",
    rangeText: "Mõjus kuni 50 m",
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
    rangeText: "Mõjus kuni 50 m",
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
    rangeText: "Mõjus kuni 50 m",
    cues: [
      "Väga kerge polümeerraam, tahuliste külgedega lukk",
      "Välist löökkukke ei ole — löögitihvtiga",
      "Iseloomulikud lühikesed haardesooned ainult luku tagaosas",
      "Sirge, kandiline profiil",
    ],
    placements: ["Väljastatud valitud armee-, siseministeeriumi ja eriüksustele MP-443 kõrval"],
    doctrineNote: "Võetud kasutusele soomustläbistava võime tõttu kuulivesti vastu lähedalt.",
    crew: "1",
    service: "Kasutuses, piiratud koguses",
  },
  aps: {
    aka: "Avtomatitšeski Pistolet Stetškina",
    armament: "9x18 mm, 20-padrunine salv, valikuline tulerežiim",
    rangeText: "Mõjus 50 m (õlatoega 200 m)",
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
    rangeText: "Mõjus 50 m; läbistab kuulivesti kuni 50 m",
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
    rangeText: "Mõjus kuni 25 m",
    cues: [
      "Summutitoru ei ole — püstol näeb tavaline välja, kuid on vaikne",
      "Kandiline tahuline lukk, väga lihtsad jooned",
      "Lühike raud, suue ei ulatu välja",
      "Väike 6-padrunine salv, peenike käepide",
    ],
    placements: ["Ainult eriotstarbeline luure ja riikliku julgeoleku üksused"],
    doctrineNote:
      "Vaikus tuleb padrunist, mitte summutist. Kunagi ei ole see üldväljastuses olnud relv.",
    crew: "1",
    service: "Eriüksused",
  },
  udav: {
    armament: "9x21 mm, 18-padrunine salv",
    rangeText: "Mõjus kuni 100 m",
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
};
