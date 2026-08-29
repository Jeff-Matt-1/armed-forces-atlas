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

| Block                                                                                                                                                              | State                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| 0–15 — Foundations, Ranks, Handguns, Heavy Weapons, Light Vehicles, Trucks, Artillery, IFVs, APCs, Tanks, EW, C2, Radars, Engineering, Air Defence, Reconnaissance | Content complete                        |
| 16–19 — vessels, submarines, drones, aircraft                                                                                                                      | Structure in place, content in progress |

130 entries across the first sixteen blocks, every one with a credited
recognition photograph.

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

## Deployment

The build target is Cloudflare (nitro's default). Every `VITE_*` value is
inlined at build time, not read at runtime, so these must be present in the
**build** environment — setting them only as Worker runtime variables is too
late:

| Variable                        | Value                                 |
| ------------------------------- | ------------------------------------- |
| `VITE_SUPABASE_URL`             | `https://<project-ref>.supabase.co`   |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_…` (public by design) |
| `VITE_SUPABASE_PROJECT_ID`      | the project ref                       |
| `VITE_SITE_URL`                 | canonical origin, no trailing slash   |

`VITE_SITE_URL` also backs the absolute Open Graph image URLs; a root-relative
path is silently ignored by every crawler.

Put the deployed values in `.env.production`, which Vite loads for
`vite build` in place of the `.env` development still needs. `bun run deploy`
runs `scripts/check-deploy-env.ts` first and refuses to build when a value is
missing or still points at localhost.

```sh
wrangler login   # once per machine
bun run deploy
```

### Supabase auth configuration

Email is the only way into an account, so the auth settings are part of the
deploy, not an afterthought:

- **Site URL** must be the production origin.
- **Redirect URLs** must allow `<origin>/reset-password` and `<origin>/learn`,
  plus the `http://localhost:8080` equivalents for development. A link to an
  address outside the allowlist is silently rewritten to the Site URL, which
  looks like a broken reset flow rather than a configuration error.
- **SMTP** must be a real provider. Supabase's built-in sender is rate limited
  and intended for development only; password recovery is the one flow a user
  cannot route around, so a throttled sender means permanent lockout.

## Licensing

Code and written content are MIT. Photographs are Wikimedia Commons files under
their own individual licences and are **not** covered by MIT. See
[NOTICE.md](NOTICE.md) before reusing anything.

## Contributing

Public sources only. Every image needs an author, a licence and a Commons link.
Entries should earn their place through recognition value — cues, armament,
where the thing actually sits in the force — not spec-sheet completeness.
