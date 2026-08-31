import type { BlockTranslation } from "@/content/translations";

/**
 * Estonian block titles, subtitles, briefs and doctrinal notes.
 *
 * Military vocabulary follows Militerm, the Estonian Defence Forces
 * terminology base: soomustransportöör for APC, jalaväe lahingumasin for IFV,
 * liikurhaubits for a self-propelled howitzer, õhutõrje for air defence,
 * pioneer- for engineer, luure for reconnaissance.
 */
export const etBlocks: Record<string, BlockTranslation> = {
  foundations: {
    title: "Alused",
    subtitle: "Tuvastamise sõnavara enne riigipõhist õpet",
    brief:
      "Enne kui hakkad eristama üksikuid masinaid, pead teadma, millist liiki masinaga on tegemist. Iga kirje siin on kategooria, mitte konkreetne sõiduk: mille poolest erineb jalaväe lahingumasin soomustransportöörist, mille poolest liikursuurtükk veetavast suurtükist. Need eristused ei tulene välimusest, vaid ülesandest — ja just ülesanne määrab, mida masina kohalolek lahinguväljal tähendab.",
    doctrineNote:
      "Kogu ülejäänud õppevara toetub sellele sõnavarale. Kui kategooria on selge, taandub konkreetse masina tuvastamine mõnele üksikule tunnusele; kui kategooria on segane, ei aita ka kõige täpsem tunnuste loend.",
  },
  ranks: {
    title: "Auastmed",
    subtitle: "Maa-, mere- ja õhuväe auastmeredelid",
    brief:
      "Auastmeid loetakse õlakutelt: tärnide arv ja suurus, triipude arv ja laius. Vene süsteemis kasvavad tärnid auastme tõustes nii arvult kui mõõdult ja kindralite õlakud loobuvad triipudest hoopis. Mereväe redel on eraldi ja seda ei saa maaväe omaga segi ajada.",
    doctrineNote:
      "Auastme äratundmine ütleb, kellega on tegemist ja millise otsustusõigusega. Vene süsteemis on praporštšiku ja ohvitseri vahe suurem kui lääne armeedes, mistõttu õlakute lugemine ütleb üksuse juhtimise kohta rohkem kui pelk isikukoosseis.",
  },
  handguns: {
    title: "Käsitulirelvad",
    subtitle: "Maavägede ja eriüksuste automaadid ning püstolid",
    brief:
      "Kõik, mida sõdur käes kannab. Erista kõigepealt automaadid: kumer salv ja gaasitoru raua kohal tähendab Kalašnikovi ja selle perekonna sees dateerib relva laesäär — puit on AKM, must polümeer AK-74M, siinid ja teleskoopiline päraosa AK-12. Pikk raud koos sihikuga ja skelettpäraga on SVD; lühike jämeda sisseehitatud summutiga VSS. Püstolid tulevad pärast ja seal on küsimused luku kuju, käepideme nurk ja salve mahutavus.",
    doctrineNote:
      "Automaadi järgi saab hinnata üksuse põlvkonda, püstoli järgi pigem kandja ametikohta. Jagu, kes kannab veel puidust laesäärega AKM-e, ei ole sama koosseis kui see, kellel on AK-12; summutiga VSS või PSS pildil viitab eriotstarbelisele luurele, mitte motolaskurjaole.",
  },
  "heavy-weapons": {
    title: "Rasked, jao- ja eriotstarbelised relvad",
    subtitle: "Kuulipildujad, granaadiheitjad, tankitõrjeraketid, leegirelvad",
    brief:
      "Kõik, mida jalavägi kannab ja mis on raskem kui vintpüss, kuid kergem kui suurtükipatarei. Tuvastamine käib alusel, lindil ja toru läbimõõdul, mitte üldsiluetil: külgmine lint ja raske raud tähendab kuulipildujat, trummel ja lühike toru automaatgranaadiheitjat, lehtrikujuline suue tagasilöögita heitjat. Õpi, milline relv millisel tasandil asub — see ütleb, kui suurt üksust sa vaatad.",
    doctrineNote:
      "Need on allasurumis-, mitte hävitusrelvad. Grau ja Bartles kirjeldavad, kuidas Vene jalavägi kasutab oma automaattuld vastase paigalhoidmiseks, et suurtükivägi saaks ta hävitada; meeskonnarelvade kiht on olemas selleks, et vastane paigal püsiks.",
  },
  "light-vehicles": {
    title: "Kergsõidukid",
    subtitle: "Tigr, Rys, UAZ ja kaitstud liikuvus",
    brief:
      "Kõik ratastel sõidukid soomustransportöörist allpool. Esimene eristus on kaitstus: tahulise kerega ja väikeste paksude akendega masin on soomustatud, suure klaasi ja presentkatusega masin ei ole. Teine on suurus — loe telgesid ja vaata kõrgust, sest Tüfoon kõrgub Tigri kohal ja UAZ on veel väiksem. Siin loeb vähem see, mida masin kannab, kui see, kes sees istub.",
    doctrineNote:
      "Need on luure-, juhtimis- ja sidemasinad, mitte rünnakutransport. Grau ja Bartles rõhutavad, kui suure osa jõupingutusest Vene allüksused luurele pühendavad; suur osa sellest liigub Tigris, mistõttu ühe leidmine eesliinil ütleb midagi kavatsuse kohta.",
  },
  trucks: {
    title: "Veoautod",
    subtitle: "Ural, KamAZ, KrAZ ja logistikašassiid",
    brief:
      "Šassii, mis veab kõike ülejäänut. Tuvastamine käib kolme küsimuse kaudu: mitu telge, kas mootorikate on kabiini ees või istub kabiin mootori peal ja mis on veokastis. Viimane loeb enim — sama KamAZi kabiin on nii veose, juhtimispunkti, elektroonilise sõjapidamise kabiini kui radari varjualuse all, nii et veoauto ise ei ütle kunagi, millise süsteemiga on tegemist.",
    doctrineNote:
      "Grau ja Bartles märgivad, et Vene allüksustel on oma veovõimekust vähe ja nad toetuvad tugevalt raudteele. Veoautopark on seetõttu tegelik piirang sellele, kui kaugele raudteesõlmest üksus võitlema suudab minna, mistõttu logistikamasinate lugemine on viis ulatuse hindamiseks.",
  },
  artillery: {
    title: "Suurtükivägi ja reaktiivsuurtükivägi",
    subtitle: "Veetav, liikur- ja raketiheitjad",
    brief:
      "Väeliik, mille ümber kogu ülejäänu on ehitatud. Kõigepealt erista kolm kuju: veetav suurtükk seisab jalgadel ja tal ei ole mootorit, liikursuurtükil on torn roomikutel ja raketiheitja on torude plokk sellel šassiil, mis teda kannab. Seejärel on küsimused kitsad — mitu jalga, kus torn kere peal asub, mitu toru ja kui jämedad. Kaliiber tuleneb vastusest, seda ei loeta otse.",
    doctrineNote:
      "Grau ja Bartles kirjeldavad suurtükiväekeskset süsteemi: manöövriüksused leiavad ja seovad vastase, et suurtükivägi ta hävitaks. See pöörab ümber lääne harjumuse kohelda suurtükiväge toetusena. Patarei tuvastamine ütleb allüksuse kavatsuse kohta rohkem kui tema tankide lugemine.",
  },
  ifv: {
    title: "Jalaväe lahingumasinad",
    subtitle: "BMP ja BMD perekonnad",
    brief:
      "Roomikmasinad, mis veavad jalaväge ja võitlevad koos temaga. Kaks perekonda ja eristus on suurus: BMP-l on kuus tugiratast, BMD-l viis ja ta on dessantmasin. Perekonna sees teeb töö relv — lühike jäme 73 mm tähendab BMP-1, pikk peenike 30 mm BMP-2 ja mõlemad ühes tornis BMP-3 või BMD-4M. Mootori asukoht on ainus struktuurne erinevus, mida tasub teada.",
    doctrineNote:
      "Erinevus soomustransportöörist on doktriinist, mitte välimusest. Jalaväe lahingumasin peab võitlema ajal, mil jalavägi on veel pardal — seepärast on tal kahur ja raketid. Masin on osa rünnakust, mitte takso, mis ta kohale tõi.",
  },
  apc: {
    title: "Soomustransportöörid",
    subtitle: "BTR-perekond ja roomiktransportöörid",
    brief:
      "Vedajad, mitte lahingumasinad. Ratastel BTR-liin näeb kaugelt ühesugune välja — kaheksa ratast, paadikere, väike torn — nii et tuvastamine taandub kahele detailile: kas küljeuks on olemas ja mis tornis istub. Ust ei ole tähendab BTR-60, väikesed luugid BTR-70, suur kaheosaline uks BTR-80 ja pikk peenike toru selle ukse kohal BTR-82A. Roomiktransportööre eristab see, kui madalal nad istuvad.",
    doctrineNote:
      "Need toovad jalaväe kohale ja lähevad siis eest ära. Grau ja Bartles märgivad, et Vene motolaskurüksused ootavad mahatulekut lähedal; vedaja ülesanne on üle elada lähenemine, mitte rünnak ja seepärast on tema relvastus kaitsev.",
  },
  tanks: {
    title: "Tankid",
    subtitle: "Põhilahingutankid ja õhudessantvägede kergtank",
    brief:
      "Domineerib kolm perekonda: T-72 (ja tema järglane T-90), gaasiturbiiniga T-80 ning taaskasutusse võetud T-62/T-55. Kõigil on 125 mm sileraudne kahur automaatlaaduri ja kolmeliikmelise meeskonnaga, välja arvatud T-62 (115 mm, neli meest). Tuvastamine käib torni kuju, reaktiivsoomuse mustri, tugirataste vahekauguse ja väljalaske asukoha järgi.",
    doctrineNote:
      "Tankid ei ole Vene süsteemi keskmes; nad on löögielement suurtükiväekeskses lahingus. Grau ja Bartles rõhutavad, et Vene tankiallüksused manööverdavad tule ärakasutamiseks, mitte tankiduellide otsimiseks.",
  },
  ew: {
    title: "Elektroonilise sõjapidamise süsteemid",
    subtitle: "Segamine, suunamääramine ja kaitse",
    brief:
      "Šassii lakkab siin aitamast. Need sõidavad samadel KamAZi, BAZi, BTR-80 ja MT-LB keredel, mis on varasemates õppetükkides läbitud, nii et kogu tuvastusülesanne on antenn: üks taldrik või mitu, avatud võre või kinnine paneel, katusel või tõmmitsatega maas kõrval. Teine tunnus on jalajälg — sadu kilomeetreid ulatuv segaja laotab mastid ja tõmmitsad lagedale, oma masinat kaitsev hoiab kõik katusel.",
    doctrineNote:
      "Grau ja Bartles käsitlevad raadioelektroonilist võitlust omaette väeliigina, mis on brigaadi tasandil orgaaniline, mitte ülalt juurde antud. Selle ülesanne on katkestada side vastase sensorite ja tema suurtükiväe vahel — sama side, millele Vene süsteem ise toetub.",
  },
  c2: {
    title: "Juhtimissüsteemid",
    subtitle: "Juhtimispunktid, Strelets, juhtimisautomaatika",
    brief:
      "Juhtimismasinad on ehitatud silmatorkamatuks, nii et tuvastamine käib lahutamise teel: tuttav kere, millelt relv puudub ja mille asemel on antennid. Neid eristab šassii ja šassii järgib tasandit — kastkerega veoauto tagalas, ratastel vedaja koos manöövriüksustega, roomikkere, mis suudab rünnakule järgneda, ja päris all käes hoitav terminal kaevikus.",
    doctrineNote:
      "Juhtimispunkti leidmine on viis suurtükiväekeskse jõu halvamiseks ja mõlemad pooled teavad seda. Kõik siin on selle järgi kujundatud: masinad peidavad end tavaliste kolonnide sisse ja ahela kõige tähtsam sõlm on seade luuraja käes, mitte miski soomustatu.",
  },
  radars: {
    title: "Radarid",
    subtitle: "Seire, vastupatareituli ja sihtmärkide leidmine",
    brief:
      "Loe antenni ja radar on käes. Mõõt käib koos lainepikkuse ja ulatusega: kahe veoauto laiune pikkade varraste võre on meeterlaine jaam, mis otsib lennukeid sadade kilomeetrite kauguselt, samas kui väike trummel roomikkerel otsib mõne kilomeetri pealt sõidukeid või mürske. Seejärel küsi, mida ta jahib — õhuseirejaamad seisavad kõrgel mastil ja pöörlevad ringi, lahinguvälja- ja vastupatareijaamad istuvad madalal ja skaneerivad kitsast sektorit.",
    doctrineNote:
      "Kõige olulisemad on siin vastupatareijaamad. Nad jälgivad mürsku lennus ja arvutavad tagasi kahurini, mis teeb neist ühed väärtuslikumad sihtmärgid lahinguväljal, kus tulemuse otsustab suurtükivägi — sellest roomikud, madal profiil ja kohe pärast kiirgamist positsiooni vahetamine.",
  },
  engineering: {
    title: "Pioneerimasinad",
    subtitle: "Sillutamine, miinidest läbipääsu rajamine, pinnasetööd",
    brief:
      "Peaaegu kõik siin on tankikere, millelt on torn maha võetud ja asemele pandud tööriist, nii et tuvastamine tähendab tööriista lugemist: liigendiga kraanapoom, buldooserisahk, kokkupandud sild, hingedel heitjakaas, renn taga. Kui tööriist on sild, küsi, mis teda kannab — tankikere läheb sinna, kuhu tankid, veoauto järgib teed. Kõige esimene tunnus on aga see, et ükski neist ei suuda võidelda.",
    doctrineNote:
      "Liikuvust käsitletakse lahingufunktsiooni, mitte toetusena. Eriti jõe ületamine on ettevalmistatud operatsioon, mistõttu ettepoole liikuv pontoonkolonn on üks selgemaid märke kavatsusest, mille allüksus endast välja annab.",
  },
  "air-defence": {
    title: "Õhutõrjesüsteemid",
    subtitle: "Lähiõhutõrjest strateegiliste rakettideni",
    brief:
      "Enamiku sellest õppetükist eraldab üks küsimus: kahurid, raketid või mõlemad. Seejärel loe heitjat. Kinnistes konteinerites või tornis peidus raketid kuuluvad lähimaa süsteemidele, mis liiguvad koos manöövriüksustega; lahtiselt siinidel või püsti tõstetud torudes raketid kuuluvad kaugmaa süsteemidele nende taga. Mõõt käib ulatusega peaaegu täpselt kokku, nii et redel roomikutel kahurikandjast kuni kaheksarattalise neljatorulise heitjani on ühtlasi redel kahest kilomeetrist neljasajani.",
    doctrineNote:
      "Vene õhutõrje on kihiline, mitte tsentraliseeritud: igal tasandil on oma kate, nii et allüksus seisab mitme kattuva ulatusega süsteemi all, mitte ühe. Selle järgi, millist kihti sa vaatad, saab öelda, milline tasand seda maad valdab.",
  },
  reconnaissance: {
    title: "Luuresüsteemid",
    subtitle: "Maa-, suurtükiväe- ja eriluure",
    brief:
      "Luuremasinad näevad välja nagu lahingumasinad, millest nad on ehitatud, sest nad peavad üle elama seal, kuhu nad saadetakse. Tunnus on alati katusel: sensor seal, kus peaks olema relv, lisakuppel, kokkupandud radar, antennialus. See on teadlikult lühike õppetükk — radarid õppetükis 12, vaatluspunktid õppetükis 11 ja droonid õppetükis 18 teevad suurt osa samast tööst ja on seal käsitletud.",
    doctrineNote:
      "Grau ja Bartles kirjeldavad luuret kui luure-tule-süsteemi esimest poolt, mitte eesmärki omaette: selle toode on sihtmärk suurtükiväele. Seetõttu on suurtükiväe oma luuremasin väärtuslikum sihtmärk kui enamik tanke.",
  },
  vessels: {
    title: "Sõjalaevad ja alused",
    subtitle: "Pealveelaevad, patrull- ja abilaevad",
    brief:
      "Laevu loetakse profiililt: pikkus millegi kõrvaloleva suhtes, kus asub pealisehitus ja mis seisab tekil. Raketilaevad näitavad oma relvastust — vanematel mudelitel piki külgi kaldu asetatud suured torud, uuematel siledad püstsed luugid — nii et tekiplaan eristab klasse ammu enne kerekuju. Nüri vöör ja päris ahtrisse lükatud pealisehitus tähendab dessantlaeva, mitte lahingulaeva.",
    doctrineNote:
      "Vene pealveelaevastiku jõud on koondunud väga vähestesse suurtesse kerede ja väga paljudesse väikestesse. Kuna väikesed raketilaevad kannavad samu maasihtmärkide vastaseid relvi kui suured, on suurus ulatuse kohta halb juhis — ja just see on tuvastamisel kõige kasulikum teadmine.",
  },
  submarines: {
    title: "Allveelaevad",
    subtitle: "Tuumatorpeedo-, diisel-, tiibraketi- ja ballistiliste rakettide laevad",
    brief:
      "Nähtav on ainult kolm asja: kere pikkus, laius ning torni kuju ja asukoht — ja sellest piisab. Ballistiliste rakettide laevad kannavad torusid torni taga, mis tõstab ahtrikere peale pika küüru. Tiibraketilaevad kannavad omi survekere kõrval, mis teeb laeva ebatavaliselt laiaks ilma küüruta. Torpeedolaevadel ei ole kumbagi ja nad näevad puhtad välja.",
    doctrineNote:
      "Allveelaevastik hoiab tuumaheidutuse säilivat osa ja peamist ohtu pealveelaevastikele, mistõttu ta saab ebaproportsionaalse osa mereväe investeeringutest. Tuvastamine käib siin klassi, mitte üksiklaeva järgi, sest klass määrab relva, mida ta kannab.",
  },
  drones: {
    title: "Mehitamata süsteemid",
    subtitle: "Õhus, maal ja vee peal",
    brief:
      "Sorteeri otstarbe järgi ja suurus tuleb ise järele. Väike katapuldilt startiv lennuk otsib suurtükiväele sihtmärke; suur kahe sabapoomiga või ühe kerega lennuk vaatleb piirkonda tunde ja võib olla relvastatud; väike ristikujuliste tiibade ja maandumisteldriteta seade on laskemoon, mitte lennuk. Maarobotid tunneb ära vastupidi — roomikmasin, millel ei ole luuke, vaatlusprismasid ega ruumi kellelegi sees.",
    doctrineNote:
      "Droonid on see, mis täna sulgeb luure-tule-ahela, mille ümber kogu Vene süsteem on ehitatud. Grau ja Bartles väidavad, et Vene suurtükivägi on täpselt nii hea kui tema vaatlus ja vaatlus on suures osas kolinud õppetüki 15 masinatelt siinsetele lennukitele.",
  },
  aircraft: {
    title: "Sõjalennukid",
    subtitle: "Hävitajad, tõrjehävitajad, pommitajad, transpordilennukid",
    brief:
      "Loe mootorid, siis loe tiib. Üks sirge tiib kahe kerekülgse mootori kohal on ründelennuk; kaks mootorit noolja tiiva all koos kahe sabakiiluga on hävitaja; neli mootorit tähendab pommitajat või transpordilennukit ja saba ütleb, kumba. Peened eristused tulevad viimasena, sest Flankeri perekond on üks lennukikere venitatud mitmeks lennukiks ja neid eristab usaldusväärselt ainult nina.",
    doctrineNote:
      "Vene õhuväge kasutatakse selleks, et jõuda sinna, kuhu kahurid ei ulatu, mitte lahingu iseseisvaks võitmiseks. Seepärast on ründelennukeid rohkem kui tõrjehävitajaid, seepärast on pommitajad raketikandjad, mis kaitstud õhuruumi ei sisene, ja seepärast otsustab transpordilennukite park, mida õhudessantväed tegelikult teha suudavad.",
  },
  missiles: {
    title: "Raketisüsteemid",
    subtitle: "Operatiiv-taktikalised, ranniku- ja strateegilised",
    brief:
      "Raketid ratastel ja esimene küsimus on, mitu ratast. Neljateljeline šassii kahe lahtise raketiga on Iskander; üks rakett kallutataval siinil paadikujulise kere taga on Totška; neli lamedalt lebavat konteinerit veoautol on rannikusüsteem; ja kaheksa telge ühe toru all, mis on masina pikkune, tähendab strateegilist. Loe kõigepealt šassiid ja alles siis koormat — muud neil süsteemidel peaaegu ühist ei ole.",
    doctrineNote:
      "Ükski neist ei kuulu allüksusele, keda sa parasjagu jälgid. Neid vabastatakse armee tasandil või kõrgemal ja nad ulatuvad sihtmärkideni, mida sinu ees olev brigaad kunagi ei näe — juhtimispunktid, lennuväljad, sadamad, laskemoon. Ühe tuvastamine ütleb, milline ešelon on selle lõigu vastu huvi tundnud ja see on teistsugune ning suurem fakt kui see, mida ütleb ükskõik milline kahur.",
  },
  helicopters: {
    title: "Kopterid",
    subtitle: "Maaväe lennuväe ründe- ja transpordikopterid",
    brief:
      "Loe kõigepealt tiivikut. Kaks tiivikut ühel mastil ja sabatiivikut ei ole — see on Ka-52 ja mitte miski muu Vene teenistuses. Kõigil ülejäänutel on üks peatiivik ja sabatiivik ja järgmine küsimus on, kas kabiini taga on dessantruum: dessantruumiga ründekopter on Hind, ilma selleta Mi-28 ja rida ümmargusi aknaid küljel tähendab Hipi koos sellega, mis talle sisse on kruvitud.",
    doctrineNote:
      "Maaväe lennuvägi kuulub maaväe ülemale, mitte õhuväele ja teda kasutatakse väga liikuva tuletoetusena, mitte õhujõuna. Seepärast töötavad ründekopterid paarides madalal eesliini lähedal ja seepärast ütleb nende leidmine, kus oodatakse maalahingut, mitte seda, kus käib õhukampaania.",
  },
};
