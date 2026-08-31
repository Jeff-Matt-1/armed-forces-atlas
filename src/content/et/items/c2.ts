import type { ItemTranslation } from "@/content/translations";

/** Block 11 — Juhtimissüsteemid. */
export const etC2: Record<string, ItemTranslation> = {
  "r-142n": {
    aka: "R-142NSA",
    rangeText: "Lühi- ja ultralainevõrgud üle allüksuse vastutusala",
    cues: [
      "GAZ-66 4x4 mootorikattega, kannab kandilist kastkeret",
      "Vardantennid kobaras kabiini ja kastkere katuse kohal",
      "Kastkere küljel aknad",
      "Töötamise ajal jooksevad kaablid maha",
    ],
    placements: [
      "Juhtimis- ja staabimasin rügemendi ja pataljoni tasandil",
      "Allüksuse tagalas, mitte eesliiniüksuste juures",
    ],
    doctrineNote:
      "Soomustamata, seega töötab varjes kaugel liinist tagapool. Šassii on ühine kümnete omavahel mitteseotud kastkeremasinatega — teda tuvastab ainult antennikomplekt, ja just nii ta olema peabki.",
    service: "Kasutuses",
  },
  "r-145bm": {
    aka: "Kajakas",
    rangeText: "Mitu raadiovõrku korraga",
    cues: [
      "BTR-60 kere — kaheksa ratast, terav paadivöör, küljeuksi ei ole",
      "Torni ei ole seal, kus BTR-60PB seda kannaks",
      "Mitu vardantenni piki kere katust",
      "Katus tõstetud madalaks kastiks tööruumi kohal",
    ],
    placements: [
      "Nõukogudeaegsete koosseisude juhtimis- ja staabimasin",
      "Reservi ja teise liini allüksused",
    ],
    doctrineNote:
      "Eelmise põlvkonna soomustatud juhtimispunkt kerel, mille nõrkust selgitab soomustransportööride õppetükk. Ta paneb ülema oma üksuste juurde, mitte nende taha, ja just selleks raadiojaama soomustataksegi.",
    service: "Piiratud kasutuses",
  },
  "r-149ma1": {
    aka: "Kušetka-B",
    rangeText: "Raadio-, raadiorelee- ja satelliitside",
    cues: [
      "BTR-80 kere, kaheksa ratast, torn on täielikult puudu",
      "Kandiline tõstetud pealisehitus väikese vaatluskupliga",
      "Mitu kõrget vardantenni katusest kõrgemal",
      "Varustuskastid kere ülaosa külgedel",
    ],
    placements: [
      "Brigaadi ja pataljoni staapide juhtimis- ja staabimasin",
      "Liigub koos allüksusega, mida ta juhib",
    ],
    doctrineNote:
      "Kaasaegne soomustatud juhtimispunkt. Kuna kere on BTR-80, näeb teda sisaldav kolonn tavaline välja seni, kuni märkad puuduvat torni — ja see ongi mõte.",
    service: "Kasutuses",
  },
  "bmp-1ksh": {
    aka: "Potok-2",
    rangeText: "Raadioreleeside, mida pikendab teleskoopmast",
    cues: [
      "BMP-1 kere ja kuus tugiratast, kuid kahuritorni ei ole",
      "Pikk toru piki keret horisontaalselt — kokkupandud mast",
      "Lame tekk väikese kupliga torni asemel",
      "Mast tõuseb teleskoopselt üles alles pärast peatumist",
    ],
    placements: [
      "Tanki- ja motolaskurallüksuste juhtimis- ja raadioreleemasin",
      "Samal kerel suurtükiväe ja õhutõrje juhtimisvariandid",
    ],
    doctrineNote:
      "Roomikutel, nii et ta püsib rünnakuešeloni tempos, mitte ei järgne sellele. Mast on kompromiss: masin pääseb kõikjale, kuhu tema emaüksus, kuid peab enne juhtimise alustamist peatuma ja masti tõstma.",
    service: "Kasutuses",
  },
  strelets: {
    aka: "Ambur",
    rangeText: "Edastab sihtmärgiandmed kahuritele mõne minutiga",
    cues: [
      "Ei ole sõiduk — tunne ära olukord, mitte siluett",
      "Sisse kaevatud vaatluspunkt kolmjalal sihtimisseadmega",
      "Sõdur, kes kasutab kaardi asemel käeshoitavat terminali",
      "Kaugusmõõtja ja terminal koos märgivad suurtükiväe vaatlejat, mitte laskurit",
    ],
    placements: [
      "Luure- ja suurtükiväe vaatlusgrupid",
      "Väljastatakse Ratniku varustuskomplekti osana",
    ],
    doctrineNote:
      "Juhtimisahela alumine aste ja kõige olulisem. Grau ja Bartles kirjeldavad luure ja tule sidumist kui Vene süsteemi tuuma; see on seade, mis selle ahela sulgeb, muutes vaatleja nähtu tulekäsuks ilma häälsideta.",
    service: "Kasutuses",
  },
};
