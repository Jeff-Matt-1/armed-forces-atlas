import type { Locale } from "@/i18n/locales";

/**
 * Interface strings.
 *
 * English is the source and defines the key set, so a missing Estonian string
 * is a type error rather than a blank label. Content — block briefs, item cues,
 * doctrinal notes — is not here; it lives beside the content it translates, in
 * src/content/et/.
 *
 * Military vocabulary follows Militerm, the Estonian Defence Forces
 * terminology base (sonaveeb.ee/ds/mil): "tuvastamine" for recognition,
 * "õppetükk" for a study block, "relvastus" for armament, "luure" for
 * reconnaissance.
 */
const en = {
  // Shell
  "nav.blocks": "Blocks",
  "nav.review": "Review",
  "nav.progress": "Progress",
  "nav.sources": "Sources",
  "nav.signIn": "Sign in",
  "nav.signOut": "Sign out",
  "shell.tagline": "Recognition Trainer",
  "shell.footerSources":
    "Open-source study material from public sources only. No restricted or classified content.",
  "shell.footerDoctrine": "Doctrinal framing: Grau & Bartles,",
  "shell.language": "Language",

  // Home
  "home.eyebrow": "Visual recognition · Basic training",
  "home.title": "Identify the equipment of the Russian Armed Forces.",
  "home.startFoundations": "Start with Foundations",
  "home.photoDrill": "Photo ID drill",
  "home.statBlocks": "Blocks",
  "home.statEntries": "Entries",
  "home.statDue": "Due today",
  "home.statStreak": "Streak",
  "home.continue": "Continue",
  "home.readyBlocks": "Ready blocks",
  "home.allBlocks": "All {count} blocks",

  "home.intro":
    "A foundations primer plus {count} subject blocks, one subject at a time. Every entry gives you the recognition cues, the main armament and range, and where the machine actually sits in the force structure. Doctrinal framing follows Grau & Bartles,",
  "home.modeFlashcards": "Flashcards",
  "home.modeFlashcardsBody":
    "Spaced repetition on photos and designations. Cards resurface exactly when you are about to forget them.",
  "home.modePhotoId": "Photo ID",
  "home.modePhotoIdBody":
    "One photograph, four designations. Distractors are pulled from visually similar equipment in the same block.",
  "home.modeStructure": "Structure placement",
  "home.modeStructureBody":
    "Given the machine, name the unit that fields it. Recognition without context is trivia.",
  "home.openDrill": "Open drill →",

  // Block index and block page
  "block.entries": "{count} entries",
  "block.inProgress": "Content in progress",
  "block.locked": "Locked",
  "block.brief": "Brief",
  "block.doctrineNote": "Doctrinal note",
  "block.flashcards": "Flashcards",
  "block.photoId": "Photo ID",
  "block.structureDrill": "Structure drill",
  "block.exam": "Block exam",
  "block.mastery": "Mastery",

  "block.blockNumber": "Block {n}",
  "block.noPhotograph": "No photograph",
  "item.recognitionCues": "Recognition cues",
  "item.forceStructure": "Force-structure placement",
  "item.armamentRange": "Armament and range",
  "item.employment": "Employment",
  "item.data": "Data",
  "item.status": "Status",
  // Item card
  "item.cues": "Recognition cues",
  "item.armament": "Armament",
  "item.range": "Range",
  "item.placement": "Where it sits",
  "item.crew": "Crew",
  "item.service": "Service",
  "item.credit": "Image",
  "item.next": "Next",
  "item.previous": "Previous",

  "prompt.designation": 'Which designation is also known as "{aka}"?',
  "prompt.placement": "Where is the {name} normally found?",
  "prompt.armament": "What is the main armament of the {name}?",
  "prompt.photo": "Identify this equipment.",
  "prompt.seniority": "Which of these is the most senior rank?",

  // Quiz
  "quiz.identify": "Identify this equipment.",
  "quiz.progress": "{current} / {total}",
  "quiz.examHeading": "Block exam · {block}",
  "quiz.examIntro":
    "Mixed recognition, armament and placement questions. {pass}% required to pass.",
  "quiz.scoreLine": "{score} / {total} correct",
  "quiz.failLine": "FAIL — {needed} correct required",
  "quiz.saving": "Saving…",
  "quiz.recognitionCard": "Recognition card",
  // Excellence badges
  "badge.title": "Excellence badge",
  "badge.frame": "Excellence badge — frame earned",
  "badge.rank": "Excellence badge — rank {rank} of {max}",
  "badge.howTo":
    "Pass a block exam without a single mistake to rise one rank. Each block counts once, so going back to clear a block you passed with a mistake advances you too.",
  "badge.complete": "Every block cleared without a mistake. There is no higher rank.",
  "badge.cleanExams": "Cleared without a mistake ({count})",
  "badge.remaining": "{count} blocks still to clear perfectly",
  "quiz.runAgain": "Run again",
  "quiz.backToBlocks": "Back to blocks",
  "quiz.correct": "Correct",
  "quiz.incorrect": "Not quite",
  "quiz.next": "Next question",
  "quiz.finish": "Finish",
  "quiz.result": "Exam result",
  "quiz.drillResult": "Drill result",
  "quiz.passed": "PASS — block complete",
  "quiz.strong": "Strong recognition",
  "quiz.needsWork": "Needs more repetition",
  "quiz.missed": "Missed items",
  "quiz.reviewCard": "Review card",
  "quiz.retry": "Try again",
  "quiz.saveFailed": "Your result could not be saved. Check your connection and try again.",
  "quiz.saveRetry": "Try saving again",
  "quiz.openCard": "Open the card for this item",
  "quiz.notForBlock": "This block has no structure drill",
  "quiz.notForBlockBody":
    "Every entry here shares the same few places in the force, so there is nothing to tell apart. Use the flashcards, the photo drill and the exam — the exam asks about seniority instead.",
  "quiz.notEnough": "Not enough content yet",
  "quiz.notEnoughBody": "This drill needs at least four comparable entries. Pick another block.",

  "exam.noneTitle": "No exam available for {block} yet",
  "exam.noneBody":
    "This block does not yet carry enough data to build questions from. Study the cards and drills in the meantime — the exam opens once the block is filled out.",
  "exam.backToBlock": "Back to the block",
  "exam.allBlocks": "All blocks",

  "drill.allBlocks": "all blocks",
  "drill.photoIdTitle": "Photo ID",
  "drill.photoIdSubtitle": "Identify the equipment from the photograph.",
  "drill.structureTitle": "Structure placement",
  "drill.structureSubtitle": "Name the unit that normally fields this equipment.",
  "drill.noCards": "No cards in this selection",
  "drill.noCardsBody": "Pick a block with published content to start a flashcard run.",
  "drill.deckComplete": "Deck complete",
  "drill.cardsGraded": "{count} cards graded",
  "drill.savedSynced": "Scheduling saved. Check the review queue for what is due next.",
  "drill.savedLocal":
    "Scheduling saved on this device. Sign in to sync it across devices — what you have already studied comes with you.",
  "drill.shuffleAgain": "Shuffle again",
  // Unlock gate
  "gate.lockedTitle": "This block is still locked",
  "gate.lockedBody":
    "Pass the {block} exam to open it. The blocks build on each other, so the order is the point.",
  "gate.lockedBodyGeneric": "Work through the earlier blocks to open this one.",
  "gate.openPrevious": "Go to {block}",
  "curriculum.inProgressHint": "Content in progress",
  "drill.gradeAgain": "Again",
  "drill.gradeHard": "Hard",
  "drill.gradeGood": "Good",
  "drill.gradeEasy": "Easy",
  "drill.recallHint":
    "Recall the designation, the armament, and the unit that fields it — then reveal.",

  "drill.reviewQueue": "Review queue",

  "gaps.title": "Still outstanding in this block",
  "gaps.cards": "Cards not yet recalled",
  "gaps.photo": "Not yet identified from a photograph",
  "gaps.placement": "Placement not yet answered correctly",
  "gaps.exam": "Block exam not yet passed",
  "gaps.open": "Open →",
  "gaps.complete": "Everything in this block is done.",

  // Progress and review
  "progress.title": "Progress",
  "progress.blocksPassed": "Blocks passed",
  "progress.overallMastery": "Overall mastery",
  "progress.dueToday": "Due today",
  "progress.streak": "Study streak",
  "review.title": "Review",
  "review.due": "{count} cards due",
  "review.none": "Nothing due right now. Come back tomorrow.",
  "review.start": "Start review",

  "progress.trainingRecord": "Training record",
  "progress.currentStreak": "Current streak",
  "progress.cardsDue": "Cards due",
  "progress.masteryByBlock": "Mastery by block",
  "progress.weakItems": "Weak items",
  "progress.examPassed": "EXAM PASSED",
  "progress.examPending": "EXAM PENDING",
  "review.retention": "Retention",
  "review.dueToday": "Due today",
  "review.nothingDue": "Nothing is due right now. Grade some new cards to build the queue.",
  "review.scheduled": "{count} cards scheduled for review.",
  "review.startRun": "Start review run",
  "review.photoInstead": "Photo ID instead",
  "notFound.body": "The route you requested does not exist in this trainer.",
  "notFound.goToBlocks": "Go to blocks",

  "local.onThisDevice": "On this device",
  "local.body":
    "Progress is saved in this browser. Sign in to sync it across devices — anything you have already studied comes with you.",

  // Auth
  "auth.account": "Account",
  "auth.signIn": "Sign in",
  "auth.createAccount": "Create an account",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.noAccount": "No account yet? Create one",
  "auth.haveAccount": "Already registered? Sign in instead",
  "auth.forgot": "Forgotten your password?",
  "auth.studyWithout": "keep studying without an account",

  "about.transparency": "Transparency",
  "about.title": "Sources and licensing",
  "about.publicSources":
    "This trainer is built for enthusiasts and military personnel as basic-training material. It uses public sources only. Nothing here is restricted, classified or derived from non-public documents, and it never will be.",
  "about.doctrineIntro": "Doctrinal framing follows Lester W. Grau and Charles K. Bartles,",
  "about.doctrineRest":
    "(Foreign Military Studies Office), a publicly released study. Where an entry carries an employment note, that note reflects the framing in that work: the Russian force is fires-centric, and equipment is best understood by the role it plays inside an artillery-led battle.",
  "about.photographs":
    "Photographs come from Wikimedia Commons and are reproduced here under their original licences, with the author and licence shown on each card and linked back to the Commons file page. Copies are served from this site rather than hotlinked, and are resized for web delivery; no other alteration is made.",
  "about.placements":
    "Force-structure placements describe common, openly reported practice. Organisations change; treat placements as typical rather than absolute.",
  "about.imageCredits": "Image credits",
  "about.commons": "Commons",

  "auth.checkEmail": "Check your email",
  "auth.resetSent":
    "If an account exists for {email}, a password reset link is on its way. The link expires in one hour.",
  "auth.confirmSent":
    "A confirmation link has been sent to {email}. Open it to finish creating your account.",
  "auth.checkSpam":
    "Nothing in your inbox after a few minutes? Check the spam folder, then try again.",
  "auth.backToSignIn": "Back to sign in",
  "auth.linkInvalid": "This link is no longer valid",
  "auth.linkInvalidBody":
    "Reset links expire after an hour and can only be used once. Request a fresh one and open it from the same browser.",
  "auth.requestNewLink": "Request a new link",
  "auth.setNewPassword": "Set a new password",
  "auth.signedInAs": "Signed in as {email}. Choose a new password to finish.",
  "auth.newPassword": "New password",
  "auth.repeatPassword": "Repeat it",
  "auth.updatePassword": "Update password",
  "auth.checkingLink": "Checking your link…",
  "curriculum.eyebrow": "Curriculum",
  "curriculum.title": "Study blocks",
  "curriculum.intro":
    "Work one subject at a time. Each block opens with a brief, then recognition cards, then drills, and closes with a mixed exam. Pass the exam at 80% to unlock the next block.",
  "curriculum.inProgress": "In progress",
  "curriculum.lockedHint": "Pass the previous block to unlock",
  "progress.recentAttempts": "Recent attempts",
  "progress.noAttempts": "No drills or exams recorded yet.",
  "progress.progressiveUnlock": "Progressive unlock",
  "progress.progressiveUnlockBody":
    "Require each block exam to be passed before the next block opens.",
  "drill.tapToReveal": "Tap to reveal the designation",

  // Misc
  "common.notFound": "Not found",
  "common.noSuchPage": "No such page",
  "common.backToBlocks": "Back to the block index",
} as const;

export type StringKey = keyof typeof en;

const et: Record<StringKey, string> = {
  // Shell
  "nav.blocks": "Õppetükid",
  "nav.review": "Kordamine",
  "nav.progress": "Edenemine",
  "nav.sources": "Allikad",
  "nav.signIn": "Logi sisse",
  "nav.signOut": "Logi välja",
  "shell.tagline": "Tuvastamise treener",
  "shell.footerSources":
    "Avatud lähtekoodiga õppematerjal ainult avalikest allikatest. Ei sisalda piiratud ega salastatud teavet.",
  "shell.footerDoctrine": "Doktriini raamistik: Grau ja Bartles,",
  "shell.language": "Keel",

  // Home
  "home.eyebrow": "Visuaalne tuvastamine · Baasväljaõpe",
  "home.title": "Tunne ära Vene relvajõudude tehnika.",
  "home.startFoundations": "Alusta alustest",
  "home.photoDrill": "Fototuvastuse harjutus",
  "home.statBlocks": "Õppetükke",
  "home.statEntries": "Kirjeid",
  "home.statDue": "Täna korrata",
  "home.statStreak": "Järjestikku",
  "home.continue": "Jätka",
  "home.readyBlocks": "Valmis õppetükid",
  "home.allBlocks": "Kõik {count} õppetükki",

  "home.intro":
    "Aluste sissejuhatus ja {count} teemaplokki, üks teema korraga. Iga kirje annab tuvastustunnused, pearelvastuse ja laskekauguse ning selle, kus masin tegelikult lahingukorras asub. Doktriini raamistik järgib Grau ja Bartlesi teost",
  "home.modeFlashcards": "Sõnasedelid",
  "home.modeFlashcardsBody":
    "Hajutatud kordamine fotode ja tähistuste peal. Kaardid tulevad tagasi täpselt siis, kui oled neid unustamas.",
  "home.modePhotoId": "Fototuvastus",
  "home.modePhotoIdBody":
    "Üks foto, neli tähistust. Eksitajad võetakse sama õppetüki visuaalselt sarnasest tehnikast.",
  "home.modeStructure": "Koht koosseisus",
  "home.modeStructureBody":
    "Masin on antud — nimeta üksus, kes teda kasutab. Tuvastamine ilma kontekstita on tühi teadmine.",
  "home.openDrill": "Ava harjutus →",

  // Block index and block page
  "block.entries": "{count} kirjet",
  "block.inProgress": "Sisu koostamisel",
  "block.locked": "Lukus",
  "block.brief": "Ülevaade",
  "block.doctrineNote": "Doktriini märkus",
  "block.flashcards": "Sõnasedelid",
  "block.photoId": "Fototuvastus",
  "block.structureDrill": "Struktuuriharjutus",
  "block.exam": "Õppetüki eksam",
  "block.mastery": "Omandatus",

  "block.blockNumber": "Õppetükk {n}",
  "block.noPhotograph": "Fotot ei ole",
  "item.recognitionCues": "Tuvastustunnused",
  "item.forceStructure": "Koht lahingukorras",
  "item.armamentRange": "Relvastus ja laskekaugus",
  "item.employment": "Kasutus",
  "item.data": "Andmed",
  "item.status": "Seisund",
  // Item card
  "item.cues": "Tuvastustunnused",
  "item.armament": "Relvastus",
  "item.range": "Laskekaugus",
  "item.placement": "Koht koosseisus",
  "item.crew": "Meeskond",
  "item.service": "Kasutuses",
  "item.credit": "Pilt",
  "item.next": "Järgmine",
  "item.previous": "Eelmine",

  "prompt.designation": 'Millist tähistust tuntakse ka nime all "{aka}"?',
  "prompt.placement": "Kus {name} tavaliselt asub?",
  "prompt.armament": "Milline on {name} pearelvastus?",
  "prompt.photo": "Tuvasta see tehnika.",
  "prompt.seniority": "Milline neist on kõrgeim auaste?",

  // Quiz
  "quiz.identify": "Tuvasta see tehnika.",
  "quiz.progress": "{current} / {total}",
  "quiz.examHeading": "Õppetüki eksam · {block}",
  "quiz.examIntro":
    "Segatud tuvastus-, relvastus- ja koosseisuküsimused. Läbimiseks on vaja {pass}%.",
  "quiz.scoreLine": "{score} / {total} õigesti",
  "quiz.failLine": "EI LÄBINUD — vaja on {needed} õiget",
  "quiz.saving": "Salvestan…",
  "quiz.recognitionCard": "Tuvastuskaart",
  // Excellence badges
  "badge.title": "Meisterlikkuse märk",
  "badge.frame": "Meisterlikkuse märk — raam teenitud",
  "badge.rank": "Meisterlikkuse märk — aste {rank} / {max}",
  "badge.howTo":
    "Soorita õppetüki eksam ilma ühegi veata, et tõusta ühe astme võrra. Iga õppetükk loeb ühe korra, nii et ka tagasiminek varem veaga sooritatud õppetüki juurde viib sind edasi.",
  "badge.complete": "Kõik õppetükid sooritatud veatult. Kõrgemat astet ei ole.",
  "badge.cleanExams": "Veatult sooritatud ({count})",
  "badge.remaining": "{count} õppetükki veel veatult sooritada",
  "quiz.runAgain": "Tee uuesti",
  "quiz.backToBlocks": "Tagasi õppetükkide juurde",
  "quiz.correct": "Õige",
  "quiz.incorrect": "Ei ole õige",
  "quiz.next": "Järgmine küsimus",
  "quiz.finish": "Lõpeta",
  "quiz.result": "Eksami tulemus",
  "quiz.drillResult": "Harjutuse tulemus",
  "quiz.passed": "LÄBITUD — õppetükk lõpetatud",
  "quiz.strong": "Tugev tuvastusoskus",
  "quiz.needsWork": "Vajab rohkem kordamist",
  "quiz.missed": "Valesti vastatud",
  "quiz.reviewCard": "Vaata kaarti",
  "quiz.retry": "Proovi uuesti",
  "quiz.saveFailed": "Tulemust ei õnnestunud salvestada. Kontrolli ühendust ja proovi uuesti.",
  "quiz.saveRetry": "Proovi uuesti salvestada",
  "quiz.openCard": "Ava selle kirje tuvastuskaart",
  "quiz.notForBlock": "Sellel õppetükil ei ole struktuuriharjutust",
  "quiz.notForBlockBody":
    "Kõik siinsed kirjed jagavad samu üksikuid kohti koosseisus, nii et eristada ei ole midagi. Kasuta sõnasedeleid, fototuvastust ja eksamit — eksam küsib selle asemel auastmete järjestuse kohta.",
  "quiz.notEnough": "Sisu ei ole veel piisavalt",
  "quiz.notEnoughBody":
    "See harjutus vajab vähemalt nelja võrreldavat kirjet. Vali mõni teine õppetükk.",

  "exam.noneTitle": "Õppetükile {block} ei ole veel eksamit",
  "exam.noneBody":
    "Sellel õppetükil ei ole veel piisavalt andmeid, millest küsimusi koostada. Õpi seni kaarte ja tee harjutusi — eksam avaneb, kui õppetükk on täidetud.",
  "exam.backToBlock": "Tagasi õppetüki juurde",
  "exam.allBlocks": "Kõik õppetükid",

  "drill.allBlocks": "kõik õppetükid",
  "drill.photoIdTitle": "Fototuvastus",
  "drill.photoIdSubtitle": "Tuvasta tehnika foto järgi.",
  "drill.structureTitle": "Koht koosseisus",
  "drill.structureSubtitle": "Nimeta üksus, kes seda tehnikat tavaliselt kasutab.",
  "drill.noCards": "Selles valikus ei ole kaarte",
  "drill.noCardsBody": "Vali õppetükk, millel on sisu olemas, et alustada sõnasedelite harjutust.",
  "drill.deckComplete": "Pakk läbitud",
  "drill.cardsGraded": "{count} kaarti hinnatud",
  "drill.savedSynced":
    "Ajastus salvestatud. Vaata kordamisjärjekorrast, mis on järgmisena vaja korrata.",
  "drill.savedLocal":
    "Ajastus salvestati sellesse seadmesse. Logi sisse, et seda seadmete vahel sünkroonida — juba õpitu tuleb sinuga kaasa.",
  "drill.shuffleAgain": "Sega uuesti",
  // Unlock gate
  "gate.lockedTitle": "See õppetükk on veel lukus",
  "gate.lockedBody":
    "Ava see, sooritades õppetüki {block} eksami. Õppetükid ehituvad üksteisele, seega on järjekord oluline.",
  "gate.lockedBodyGeneric": "Selle avamiseks tööta läbi eelnevad õppetükid.",
  "gate.openPrevious": "Ava {block}",
  "curriculum.inProgressHint": "Sisu on koostamisel",
  "drill.gradeAgain": "Uuesti",
  "drill.gradeHard": "Raske",
  "drill.gradeGood": "Hea",
  "drill.gradeEasy": "Kerge",
  "drill.recallHint":
    "Tuleta meelde tähistus, relvastus ja üksus, mis seda kasutab — seejärel ava vastus.",

  "drill.reviewQueue": "Kordamisjärjekord",

  "gaps.title": "Selles õppetükis on veel tegemata",
  "gaps.cards": "Kaardid, mida ei ole veel meelde jäetud",
  "gaps.photo": "Foto järgi veel tuvastamata",
  "gaps.placement": "Koht koosseisus veel õigesti vastamata",
  "gaps.exam": "Õppetüki eksam veel sooritamata",
  "gaps.open": "Ava →",
  "gaps.complete": "Selles õppetükis on kõik tehtud.",

  // Progress and review
  "progress.title": "Edenemine",
  "progress.blocksPassed": "Läbitud õppetükke",
  "progress.overallMastery": "Üldine omandatus",
  "progress.dueToday": "Täna korrata",
  "progress.streak": "Õppimise järjestikkus",
  "review.title": "Kordamine",
  "review.due": "{count} kaarti ootab kordamist",
  "review.none": "Praegu ei ole midagi korrata. Tule homme tagasi.",
  "review.start": "Alusta kordamist",

  "progress.trainingRecord": "Õppetulemused",
  "progress.currentStreak": "Praegune järjestikkus",
  "progress.cardsDue": "Kaarte korrata",
  "progress.masteryByBlock": "Omandatus õppetükkide kaupa",
  "progress.weakItems": "Nõrgad kirjed",
  "progress.examPassed": "EKSAM LÄBITUD",
  "progress.examPending": "EKSAM TEGEMATA",
  "review.retention": "Meeldejätmine",
  "review.dueToday": "Täna korrata",
  "review.nothingDue": "Praegu ei ole midagi korrata. Hinda uusi kaarte, et järjekord tekiks.",
  "review.scheduled": "{count} kaarti on kordamiseks planeeritud.",
  "review.startRun": "Alusta kordamist",
  "review.photoInstead": "Tee hoopis fototuvastust",
  "notFound.body": "Sellist marsruuti selles treeneris ei ole.",
  "notFound.goToBlocks": "Mine õppetükkide juurde",

  "local.onThisDevice": "Selles seadmes",
  "local.body":
    "Edenemine salvestatakse sellesse brauserisse. Logi sisse, et seda seadmete vahel sünkroonida — kõik juba õpitu tuleb sinuga kaasa.",

  // Auth
  "auth.account": "Konto",
  "auth.signIn": "Logi sisse",
  "auth.createAccount": "Loo konto",
  "auth.email": "E-post",
  "auth.password": "Parool",
  "auth.noAccount": "Kontot veel ei ole? Loo see",
  "auth.haveAccount": "Juba registreeritud? Logi hoopis sisse",
  "auth.forgot": "Unustasid parooli?",
  "auth.studyWithout": "jätka õppimist ilma kontota",

  "about.transparency": "Läbipaistvus",
  "about.title": "Allikad ja litsentsid",
  "about.publicSources":
    "See treener on mõeldud huvilistele ja kaitseväelastele baasväljaõppe materjalina. Kasutatakse ainult avalikke allikaid. Siin ei ole midagi piiratud ega salastatud ega mitteavalikest dokumentidest tuletatud, ja ei tule ka edaspidi.",
  "about.doctrineIntro": "Doktriini raamistik järgib Lester W. Grau ja Charles K. Bartlesi teost",
  "about.doctrineRest":
    "(Foreign Military Studies Office), mis on avalikult välja antud uurimus. Kui kirje juures on kasutusmärkus, peegeldab see selle töö raamistikku: Vene relvajõud on tulekesksed ja tehnikat mõistab kõige paremini selle rolli kaudu suurtükiväekeskses lahingus.",
  "about.photographs":
    "Fotod pärinevad Wikimedia Commonsist ja on siin taasesitatud nende algsete litsentside alusel; autor ja litsents on näidatud igal kaardil ning viidatud tagasi Commonsi faililehele. Koopiaid serveeritakse sellelt saidilt, mitte ei laadita mujalt, ja need on veebi jaoks vähendatud; muid muudatusi ei tehta.",
  "about.placements":
    "Kirjeldatud kohad lahingukorras vastavad tavapärasele avalikult teadaolevale praktikale. Koosseisud muutuvad; käsitle neid tüüpiliste, mitte absoluutsetena.",
  "about.imageCredits": "Piltide autorid",
  "about.commons": "Commons",

  "auth.checkEmail": "Vaata oma e-posti",
  "auth.resetSent":
    "Kui aadressil {email} on konto olemas, on parooli lähtestamise link teel. Link aegub tunni aja pärast.",
  "auth.confirmSent":
    "Kinnituslink on saadetud aadressile {email}. Ava see, et konto loomine lõpetada.",
  "auth.checkSpam":
    "Kui mõne minuti pärast ei ole midagi saabunud, vaata rämpsposti kausta ja proovi siis uuesti.",
  "auth.backToSignIn": "Tagasi sisselogimise juurde",
  "auth.linkInvalid": "See link enam ei kehti",
  "auth.linkInvalidBody":
    "Lähtestuslingid aeguvad tunni aja pärast ja neid saab kasutada ainult üks kord. Küsi uus ja ava see samas brauseris.",
  "auth.requestNewLink": "Küsi uus link",
  "auth.setNewPassword": "Määra uus parool",
  "auth.signedInAs": "Sisse logitud kui {email}. Lõpetamiseks vali uus parool.",
  "auth.newPassword": "Uus parool",
  "auth.repeatPassword": "Korda seda",
  "auth.updatePassword": "Uuenda parool",
  "auth.checkingLink": "Kontrollin sinu linki…",
  "curriculum.eyebrow": "Õppekava",
  "curriculum.title": "Õppetükid",
  "curriculum.intro":
    "Tegele ühe teemaga korraga. Iga õppetükk algab ülevaatega, siis tulevad tuvastuskaardid, seejärel harjutused, ja lõpetab segaeksam. Järgmise õppetüki avamiseks tuleb eksam sooritada 80% peale.",
  "curriculum.inProgress": "Koostamisel",
  "curriculum.lockedHint": "Avamiseks soorita eelmine õppetükk",
  "progress.recentAttempts": "Hiljutised katsed",
  "progress.noAttempts": "Harjutusi ega eksameid ei ole veel salvestatud.",
  "progress.progressiveUnlock": "Järkjärguline avamine",
  "progress.progressiveUnlockBody":
    "Nõua iga õppetüki eksami sooritamist, enne kui järgmine avaneb.",
  "drill.tapToReveal": "Puuduta tähistuse nägemiseks",

  // Misc
  "common.notFound": "Ei leitud",
  "common.noSuchPage": "Sellist lehte ei ole",
  "common.backToBlocks": "Tagasi õppetükkide nimekirja",
};

const STRINGS: Record<Locale, Record<StringKey, string>> = { en, et };

/**
 * Look up a string, substituting {named} placeholders.
 *
 * Falls back to English when a translation is absent, so a partially
 * translated locale degrades to a readable page rather than to blanks.
 */
export function translate(
  locale: Locale,
  key: StringKey,
  values?: Record<string, string | number>,
): string {
  const template = STRINGS[locale][key] || STRINGS.en[key];
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    name in values ? String(values[name]) : whole,
  );
}
