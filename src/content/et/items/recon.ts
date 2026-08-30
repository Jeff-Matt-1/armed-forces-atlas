import type { ItemTranslation } from "@/content/translations";

/** Block 15 — Luuresüsteemid. */
export const etRecon: Record<string, ItemTranslation> = {
  "brdm-2": {
    aka: "BRDM-2M",
    armament: "14.5 mm KPVT, 7.62 mm PKT",
    rangeText: "KPVT mõjus umbes 2000 m",
    cues: [
      "Neli ratast, mitte kaheksa — väiksem kui ükski BTR",
      "Kaks paari kõhurattaid telgede vahel, lastakse alla pehmel pinnasel",
      "Väike kooniline torn, sama mis BTR-60PB-l",
      "Terav paadikere madala ümara profiiliga",
    ],
    placements: [
      "Motolaskur- ja tankirügementide luurekompaniid",
      "Alusmasin kiirgus- ja keemialuure ning tankitõrjeraketi variantidele",
    ],
    doctrineNote:
      "Kiire, ujuv ja kergelt soomustatud — mõeldud vaatama, mitte võitlema. Grau ja Bartles rõhutavad, kui suure jõupingutuse Vene allüksused luurele pühendavad, ja traditsiooniliselt kandis seda just see masin.",
    crew: "4",
    service: "Kasutuses",
  },
  "brm-1k": {
    armament: "73 mm 2A28 Grom, 7.62 mm PKT",
    rangeText: "Seireradar avastab sõidukid umbes 7 km kauguselt",
    cues: [
      "BMP-1 kere ja kuus tugiratast, kuid suurem kaheinimesetorn",
      "Torn on BMP-1 omast tagapool ja raketisiini ei ole",
      "Väike seireradar, mis klapitakse torni taha üles",
      "Lisavardantennid luure sidevarustuse jaoks",
    ],
    placements: [
      "Motolaskur- ja tankibrigaadide luurekompaniid",
      "Töötab ees nende üksuste jaoks, kellele ta ette kannab",
    ],
    doctrineNote:
      "BMP, mis vahetab oma raketi sensorite ja raadiote vastu. Kuna siluett on peaaegu BMP-1 oma, peidab ta end tavalise kolonni sisse — suurem torn ja kokkupandud radar on ainsad asjad, mis ta ära annavad.",
    crew: "6",
    service: "Kasutuses",
  },
  "prp-4a-argus": {
    aka: "Liikuv luurepunkt",
    armament: "7.62 mm PKT",
    rangeText: "Avastab ja määrab sihtmärgid kuni umbes 10 km",
    cues: [
      "BMP kere torniga, millel on kaks suurt kuplikujulist luuki",
      "Sensori- ja optikakorpused seal, kus istuks kahur — pearelva ei ole",
      "Kõrged vardantennid tornist tublisti kõrgemal",
      "Torn loeb pigem varustusest tiheda kui relvastatuna",
    ],
    placements: [
      "Suurtükiväe luurepatareid",
      "Leiab ja määrab sihtmärgid kahuritele, kellega ta töötab",
    ],
    doctrineNote:
      "See on suurtükiväe silm: ta leiab sihtmärgi, fikseerib selle asukoha ja annab tulejuhtimisvõrku. Süsteemis, kus lahingu otsustavad kahurid, on nende sihtmärke leidev masin väärtuslikum objekt kui enamik tanke.",
    crew: "5",
    service: "Kasutuses",
  },
  "rkhm-6": {
    aka: "Kiirgus- ja keemialuure masin",
    armament: "7.62 mm PKT",
    cues: [
      "BTR-80 kere, kaheksa ratast, proovivõtuvarustus taga",
      "Märgistuslippude heitjad kere tagaosas",
      "Väike kuulipildujatorn, mitte BTR-80 14.5 mm koonus",
      "Sageli nähakse meeskonda väljas kaitseülikondades töötamas",
    ],
    placements: [
      "Kiirgus-, keemia- ja bioloogiakaitseväed (RKhBZ)",
      "Uurib marsruute ja alasid enne allüksuse sinna liikumist",
    ],
    doctrineNote:
      "Maastiku, mitte vastase luure: ta võtab õhu- ja pinnaseproove, märgistab saastunud alad ja teatab, kas marsruut on kasutatav. Lipuheitjad on selgeim tunnus ja seletavad kogu tema ülesande.",
    crew: "4",
    service: "Kasutuses",
  },
};
