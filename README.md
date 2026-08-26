# Armed Forces Atlas

A visual-recognition and basic-training app for Russian armed forces equipment.
Built for enthusiasts and military personnel as study material, using **public
sources only**.

Each of the 20 blocks is a self-contained module built on a fixed loop:

```text
BRIEF  ->  LEARN  ->  DRILL  ->  EXAM  ->  RETAIN
intro      card set   flashcards  15-20 Q   spaced repetition
+ doctrine  (photos)  photo-ID    mixed     surfaces due cards
context               placement   pass 80%  across all blocks
```

Recognition comes first: what to look at on the hull, turret, wheels and
antennas — not spec sheets. Doctrinal framing follows Grau & Bartles, _The
Russian Way of War_, so equipment is understood by the role it plays inside an
artillery-led battle rather than as isolated trivia.

## Status

| Block                                                                                                                                     | State                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 0 Foundations, 1 Ranks, 2 Handguns, 9 Tanks                                                                                               | Content complete                        |
| 3–8, 10–19 (weapons, vehicles, artillery, IFV/APC, EW, C2, radar, engineering, air defence, recon, vessels, submarines, drones, aircraft) | Structure in place, content in progress |

54 entries, 26 with recognition photographs.

## Development

Requires [Bun](https://bun.sh) (the lockfile is `bun.lock`).

```sh
bun install
bun run dev
```

Copy `.env.example` to `.env` and fill in the values. Supabase holds accounts
and progress only — all study content is a static TypeScript module, so the app
browses fine without a backend.

| Script           | Purpose          |
| ---------------- | ---------------- |
| `bun run dev`    | Dev server       |
| `bun run build`  | Production build |
| `bun run lint`   | ESLint           |
| `bun run format` | Prettier         |

## Architecture

- **TanStack Start** with file-based routes in `src/routes/`
- **React 19**, **Tailwind 4**, shadcn/Radix components in `src/components/ui/`
- **Supabase** for auth and per-user progress — `card_reviews`, `attempts`,
  `block_progress`, `streaks`, `profiles`, all row-level-security scoped to
  `auth.uid()`
- **Content** is static TypeScript in `src/content/russia.ts`, read through
  `src/lib/content.ts`. No database seeding required.
- **SM-2 spaced repetition** in `src/lib/srs.ts`, quiz generation in
  `src/lib/quiz.ts`, mastery/progress in `src/lib/progress.ts`
- **Images** are self-hosted in `public/images/items/`, credited per entry

Set `VITE_SITE_URL` in the deploy environment — social preview images are
absolute URLs built from it.

## Licensing

Code and written content are MIT. Photographs are Wikimedia Commons files under
their own individual licences and are **not** covered by MIT. See
[NOTICE.md](NOTICE.md) before reusing anything.

## Contributing

Public sources only. Every image needs an author, a licence and a Commons link.
Entries should earn their place through recognition value — cues, armament,
where the thing actually sits in the force — not spec-sheet completeness.
