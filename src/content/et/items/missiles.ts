import type { ItemTranslation } from "@/content/translations";

/** Block 20 — raketisüsteemid. */
export const etMissiles: Record<string, ItemTranslation> = {
  "iskander-m": {
    aka: "SS-26 Stone",
    armament: "Kaks kvaasiballistilist raketti 9M723, kantakse lahtiselt",
    rangeText: "Umbes 500 km",
    cues: [
      "Kaks raketti kõrvuti lahtisel hällil, konteinereid ei ole",
      "Kaheksarattaline MZKT šassii pika soomuskabiiniga",
      "Rakettidel jooksevad piki keret väikesed ribid, erinevalt siledast konteinerist",
      "Iskander-K kannab selle asemel kahte silindrilist tiibraketikonteinerit",
    ],
    placements: [
      "Armee ja ringkonna tasandil hoitavad raketibrigaadid",
      "Vabastatakse kõrgemalt kui allüksus, kelle heaks ta tulistab — mitte kunagi selle enda poolt",
    ],
    doctrineNote:
      "Vene armee sügavlöögirelv: juhtimispunktid, lennuväljad, õhutõrje ja laskemoon sadade kilomeetrite kaugusel rindejoone taga. Tema ilmumine lõiku on väide selle kohta, kui palju see lõik on väärt tasandile, kellele ta kuulub — ja see on suurem fakt kui miski, mida ükski kahur ütleb.",
    crew: "3",
    service: "Kasutuses",
  },
  "tochka-u": {
    aka: "SS-21 Scarab",
    armament: "Üks ballistiline rakett 9M79M kallutataval siinil",
    rangeText: "Umbes 120 km",
    cues: [
      "Üks rakett, mitte kaks — kiireim eristus Iskanderist",
      "Kuus ratast paadikujulisel ujuval kerel, mitte veoautošassiil",
      "Rakett lebab pika kaheosalise katte all ja tõuseb tulistamiseks üles",
      "Tervikuna palju lühem ja madalam kui ükski uuematest süsteemidest",
    ],
    placements: [
      "Vanemate allüksuste raketidivisjonid, mida asendatakse Iskanderiga",
      "Armee tasandi vahend, nagu ka teda asendav süsteem",
    ],
    doctrineNote:
      "Iskanderi nõukogudeaegne eelkäija, veerandi ulatusega ja ilma tema täpsuseta. Ühe leidmine ütleb, et allüksus võitleb sellega, mis tal on, mitte sellega, mis tal olema peaks — ja seegi on ettekandmist väärt.",
    crew: "4",
    service: "Väljavahetamisel",
  },
  "bastion-p": {
    aka: "SSC-5 Stooge",
    armament: "Kaks laevatõrjeraketti P-800 Oniks konteinerites",
    rangeText: "Laevade vastu umbes 300 km",
    cues: [
      "Kaks pikka konteinerit kantakse lamedalt, tulistamiseks tõstetakse peaaegu püsti",
      "Kuuerattaline MZKT šassii, lühem kui Iskanderi kaheksarattaline",
      "Konteinerid on siledad nürjade otstega torud, tiibu näha ei ole",
      "Töötab koos eraldi juhtimismasinaga samal šassiil",
    ],
    placements: [
      "Laevastike rannikuraketibrigaadid",
      "Paigutatakse sisemaale ja liigutatakse ranniku lähedal ettevalmistatud positsioonide vahel",
    ],
    doctrineNote:
      "Sulgeb merepiirkonna maalt. Paarikümne kilomeetri kaugusele sisemaale peidetud patarei keelab laevaliikluse rannikulõigul, ilma et tal endal oleks ainsatki laeva — ja just seepärast on rannikukaitse mereväeline probleem, mille lahendab masin, kelle leiad metsast.",
    service: "Kasutuses",
  },
  bal: {
    aka: "SSC-6 Sennight",
    armament: "Kaheksa laevatõrjeraketti Kh-35 kastikujulises plokis",
    rangeText: "Umbes 120–260 km sõltuvalt raketist",
    cues: [
      "Üks kandiline kaheksa toruga plokk, mitte kaks eraldi konteinerit",
      "Plokk kallutub tervikuna taha, erinevalt Bastioni paarist",
      "Jälle MZKT šassii, nii et rattad teda Bastionist ei erista",
      "Lühemad raketid, nii et koorem näib Bastioni omast kobakam",
    ],
    placements: [
      "Laevastike rannikuraketibrigaadid koos Bastioniga",
      "Katab väinu ja lähenemisteid, mida pikema ulatusega süsteem katma ei pea",
    ],
    doctrineNote:
      "Rannikukaitse kergem pool: rohkem rakette, vähem ulatust, ja salve kaal ulatuse asemel. Bastion keelab merepiirkonna, Bal küllastab kitsa — seepärast leiab neid koos ja seepärast on nende eristamine olulisem, kui esmapilgul paistab.",
    service: "Kasutuses",
  },
  "topol-m": {
    aka: "SS-27 Sickle B",
    armament: "Üks mandritevaheline ballistiline rakett konteineris",
    rangeText: "Umbes 11 000 km",
    cues: [
      "Hiiglaslik — kaheksa telge, ja konteiner ulatub kogu masina pikkuses",
      "Üks sile toru, palju jämedam kui ükski taktikaline rakett",
      "Kabiin on koorma kõrval väike, taga olev jätab ta varju",
      "Liigub suure saatemeeskonnaga, kunagi mitte üksi",
    ],
    placements: [
      "Strateegiliste raketivägede raketirügemendid",
      "Ei ole mingis mõttes allüksuse vahend — ta allub riiklikule tasandile",
    ],
    doctrineNote:
      "Lisatud selleks, et teda ei aetaks kunagi segamini millegi taktikalisega. Miski temas ei kuulu sinu ees toimuvasse lahingusse: ta on patrullil olev strateegiline süsteem, ja ainus kasulik tuvastusfakt on see, et tema mõõtmed välistavad kõik ülejäänud selle õppetüki raketimasinad.",
    service: "Kasutuses",
  },
};
