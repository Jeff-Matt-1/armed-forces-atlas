# Recognition Trainer — Russian Armed Forces (v1)

An open-source visual-recognition and basic-training app. Doctrinal framing follows Grau & Bartles, _The Russian Way of War_. No restricted material — public sources only, every image credited.

## Learning principle

Each of the 19 blocks is a self-contained module built on a fixed loop:

```text
BRIEF  ->  LEARN  ->  DRILL  ->  EXAM  ->  RETAIN
intro     card set   flashcards  15-20 Q   spaced repetition
+ doctrine  (photos)  photo-ID    mixed     surfaces due cards
context               placement   pass 80%  across all blocks
```

- **Foundations block (block 0)**: before any nation-specific content, a short primer — what a tank / IFV / APC / SPG / warship / UAV actually is, how they differ, and where each sits in a modern force structure (squad → platoon → company → battalion → brigade → army). Recognition vocabulary first, so later blocks build on it.
- **Progressive unlock**: a block's exam must be passed before the next unlocks (unlock gate can be turned off in settings for free browsing).
- **Retain**: a global "Due today" queue mixes cards from every completed block, so earlier blocks are never forgotten.

## Blocks

Block 0 Foundations, then: 1 Ranks (ground/sea/air) · 2 Handguns · 3 Heavy, squad & specialized weapons · 4 Light vehicles · 5 Trucks · 6 Artillery & MLRS · 7 IFVs · 8 APCs · 9 Tanks · 10 EW · 11 C2 · 12 Radars (incl. artillery) · 13 Engineering · 14 Air defence · 15 Reconnaissance · 16 Surface vessels · 17 Submarines · 18 UAV/UGV/USV · 19 Aircraft.

All 19 appear in the app from day one. Filled with real content in v1: **Foundations, Ranks, Handguns, Tanks**. The rest show a "content in progress" state with the block structure already in place.

## Data per object

Every entry carries:

- Designation + NATO/common name, and any nicknames
- Primary photo (Wikimedia / public domain, with author + licence shown) — plus a **recognition silhouette** for aircraft, vessels and UAVs, since those are identified at long range
- Recognition cues: 3-5 short "what to look at" points (hull shape, turret, wheel count, exhaust, antenna layout)
- Main armament + effective range (where applicable)
- Force-structure placement — one or more entries, e.g. "AK-12 — standard primary weapon, modern motor rifle squad"; "BMD-4M — main IFV of air assault (VDV) units"; "T-90M — tank battalions of selected tank/motor rifle brigades"
- Doctrinal note tied to Grau & Bartles where relevant (how it is actually employed)
- Crew, era/service status, key variants — kept short

Deliberately excluded: armour thickness tables, full spec sheets, anything that turns recognition training into trivia.

## Study modes

1. **Flashcards** — photo/silhouette front, designation + role back. SM-2 spaced repetition, per-card ease and interval.
2. **Photo ID quiz** — image, four designations, one correct. Distractors drawn from visually similar items in the same block (so BTR-80 competes with BTR-82A, not with a submarine). Optional timed mode.
3. **Block exam** — 15-20 mixed questions (photo ID, armament/range, structure placement), 80% to pass, generates a result summary showing which items were missed.
4. **Structure placement drill** — given an item, choose the unit/echelon it belongs to; and the reverse, given an echelon, pick which items it fields.

Gamification kept light and useful: daily streak, per-block mastery percentage, "weak items" list that feeds straight back into drills.

## Screens

- `/` — home: continue where you left off, due-cards count, block grid with mastery rings
- `/learn` — block index
- `/learn/$block` — block brief + card list
- `/learn/$block/$item` — item detail (recognition-first layout: large image, cues, then data)
- `/drill/flashcards`, `/drill/photo-id`, `/drill/structure` — study modes, filterable by block
- `/exam/$block` — block exam + result
- `/review` — global spaced-repetition queue
- `/progress` — mastery per block, weak items, streak
- `/about` — sources, licensing, open-source statement
- `/auth` — sign in / sign up

## Accounts & sync

Lovable Cloud backend. Email + password sign-in (no email confirmation needed for fast entry). Content data is public and readable without an account; progress requires one.

Tables: `profiles`, `blocks`, `items`, `item_images`, `item_placements`, `questions`, `card_reviews` (SM-2 state per user/item), `attempts` (quiz/exam results), `block_progress`, `streaks`. Content tables readable by anyone; every progress table scoped to `auth.uid()` with row-level security and explicit grants.

## Design direction

Field-manual aesthetic: technical, high-contrast, restrained. Recognition imagery gets the space; typography does the work. I'll produce a few rendered directions to pick from before building the UI.

## Technical notes

- TanStack Start, file-based routes, TanStack Query for reads via route loaders.
- Content authored as SQL seed data in the migration (blocks, items, placements, questions) so the app is populated on first load.
- Images referenced by URL from Wikimedia Commons with attribution metadata stored per image; generated silhouettes for air/sea/UAV stored as project assets.
- SM-2 scheduling computed client-side, persisted per review to `card_reviews`.
- Progressive unlock and mastery derived from `block_progress` + `attempts`.

## Build order

1. Cloud backend, schema, RLS, auth screens
2. Content model + seed for Foundations, Ranks, Handguns, Tanks
3. Block/item browsing UI (recognition-first)
4. Flashcards + SM-2 review queue
5. Photo ID quiz + structure drill
6. Block exam + progress/mastery
7. Silhouettes, about/sources page, SEO metadata per route
