# Licensing

This project has three separate layers, under three different terms. Do not
assume the MIT licence covers all of it.

## 1. Source code — MIT

Everything under `src/`, `supabase/`, and the build configuration is MIT
licensed. See [LICENSE](LICENSE).

## 2. Written content — MIT, with a caveat

Block briefs, recognition cues, doctrinal notes and force-structure placements
in `src/content/` are original prose written for this project and released
under the same MIT terms.

The doctrinal framing draws on Lester W. Grau and Charles K. Bartles, _The
Russian Way of War: Force Structure, Tactics, and Modernization of the Russian
Ground Forces_ (Foreign Military Studies Office) — a publicly released study.
That work is cited, not reproduced.

**This project uses public sources only.** No restricted, classified, or
non-public material is included, and none will be accepted in contributions.

## 3. Photographs — individually licensed, NOT MIT

Images in `public/images/items/` are copies of Wikimedia Commons files, each
under its own licence (variously CC BY, CC BY-SA, or public domain). They are
**not** covered by this project's MIT licence and cannot be relicensed by it.

Per-image author, licence and source link are stored alongside each entry in
`src/content/` — `russia.ts` and the per-block files under `items/` —
as `imageCredit` and `imagePage`, and rendered on every item card and on the
`/about` page. Those fields are written by `scripts/apply-credits.ts` from the
Commons API rather than typed by hand, so attribution traces back to the file's
own metadata.

Images are reproduced at reduced resolution for web delivery; no other
alteration is made. If you reuse an image, honour its original licence — for
CC BY-SA files that includes share-alike on any adaptation.

If you are the rights holder of an image here and want it removed or the credit
corrected, open an issue.
