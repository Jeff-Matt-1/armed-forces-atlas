import { createFileRoute } from "@tanstack/react-router";

import { allItems } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sources and Licensing — Recognition Trainer" },
      {
        name: "description",
        content:
          "Every photograph is credited to its Wikimedia Commons author and licence. Open-source, public-source material only — no restricted documents.",
      },
      { property: "og:title", content: "Sources and Licensing — Recognition Trainer" },
      {
        property: "og:description",
        content: "Image credits, doctrinal references and the project's open-source position.",
      },
    ],
  }),
  component: About,
});

function About() {
  const credited = allItems.filter((item) => item.imageUrl);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <p className="plate-label">Transparency</p>
      <h1 className="mt-3 text-3xl">Sources and licensing</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90">
        <p>
          This trainer is built for enthusiasts and military personnel as basic-training material.
          It uses <strong>public sources only</strong>. Nothing here is restricted, classified or
          derived from non-public documents, and it never will be.
        </p>
        <p>
          Doctrinal framing follows Lester W. Grau and Charles K. Bartles,{" "}
          <em>The Russian Way of War: Force Structure, Tactics, and Modernization of the Russian
          Ground Forces</em> (Foreign Military Studies Office), a publicly released study. Where an
          entry carries an employment note, that note reflects the framing in that work: the Russian
          force is fires-centric, and equipment is best understood by the role it plays inside an
          artillery-led battle.
        </p>
        <p>
          Photographs come from Wikimedia Commons and are reproduced here under their original
          licences, with the author and licence shown on each card and linked back to the Commons
          file page. Copies are served from this site rather than hotlinked, and are resized for
          web delivery; no other alteration is made. Where an item is recognised primarily at long
          range — aircraft, vessels and drones — the corresponding blocks will pair photographs
          with recognition silhouettes.
        </p>
        <p>
          Force-structure placements describe common, openly reported practice. Organisations change;
          treat placements as typical rather than absolute.
        </p>
      </div>

      <h2 className="mt-10 text-xl">Image credits</h2>
      <ul className="mt-4 divide-y divide-border border border-border text-xs">
        {credited.map((item) => (
          <li key={item.slug} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3">
            <span className="designation">{item.name}</span>
            <span className="text-muted-foreground">{item.imageCredit}</span>
            {item.imagePage && (
              <a
                href={item.imagePage}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto text-muted-foreground underline-offset-4 hover:underline"
              >
                Commons
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
