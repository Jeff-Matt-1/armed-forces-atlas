import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { getBlock, getItem, imageFitClass, itemsOfBlock } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/learn/$block/$item")({
  loader: ({ params }) => {
    const item = getItem(params.item);
    const block = getBlock(params.block);
    if (!item || !block || item.blockSlug !== block.slug) throw notFound();
    return { itemSlug: item.slug, name: item.name, aka: item.aka, imageUrl: item.imageUrl };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Entry unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} — Recognition Card`;
    const description = `Recognition cues, main armament and force-structure placement for the ${loaderData.name}${
      loaderData.aka ? ` (${loaderData.aka})` : ""
    }.`;
    const meta = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ];
    if (loaderData.imageUrl) {
      meta.push(
        { property: "og:image", content: absoluteUrl(loaderData.imageUrl) },
        { name: "twitter:image", content: absoluteUrl(loaderData.imageUrl) },
      );
    }
    return { meta };
  },
  component: ItemDetail,
});

function ItemDetail() {
  const { itemSlug } = Route.useLoaderData();
  const item = getItem(itemSlug)!;
  const block = getBlock(item.blockSlug)!;
  const siblings = itemsOfBlock(block.slug);
  const index = siblings.findIndex((s) => s.slug === item.slug);
  const previous = index > 0 ? siblings[index - 1] : undefined;
  const next = index < siblings.length - 1 ? siblings[index + 1] : undefined;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <Link
        to="/learn/$block"
        params={{ block: block.slug }}
        className="plate-label transition-colors hover:text-foreground"
      >
        ← {block.title}
      </Link>

      {item.imageUrl ? (
        <figure className="mt-4 border border-border bg-card">
          <img
            src={item.imageUrl}
            alt={`${item.name} — recognition photograph`}
            className={`aspect-[16/9] w-full bg-secondary ${imageFitClass(item.slug)}`}
          />
          <figcaption className="border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
            {item.imagePage ? (
              <a
                href={item.imagePage}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Wikimedia Commons
              </a>
            ) : (
              "Wikimedia Commons"
            )}
            {item.imageCredit ? ` · ${item.imageCredit}` : ""}
          </figcaption>
        </figure>
      ) : null}

      <header className="mt-6">
        <h1 className="designation text-3xl">{item.name}</h1>
        {item.aka && <p className="mt-1 text-sm text-muted-foreground">{item.aka}</p>}
      </header>

      <div className="mt-8 grid gap-px bg-border lg:grid-cols-2">
        <Panel title="Recognition cues">
          <ul className="space-y-2">
            {item.cues.map((cue) => (
              <li key={cue} className="flex gap-3 text-sm">
                <span className="designation mt-0.5 text-xs text-primary">•</span>
                <span className="text-foreground/90">{cue}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Force-structure placement">
          <ul className="space-y-3">
            {item.placements.map((placement) => (
              <li key={placement} className="border-l-2 border-primary pl-3 text-sm">
                {placement}
              </li>
            ))}
          </ul>
        </Panel>

        {(item.armament || item.rangeText) && (
          <Panel title="Armament and range">
            {item.armament && <p className="text-sm">{item.armament}</p>}
            {item.rangeText && (
              <p className="designation mt-2 text-sm text-primary">{item.rangeText}</p>
            )}
          </Panel>
        )}

        {item.doctrineNote && (
          <Panel title="Employment">
            <p className="text-sm text-muted-foreground">{item.doctrineNote}</p>
          </Panel>
        )}

        {(item.crew || item.service) && (
          <Panel title="Data">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              {item.crew && (
                <div>
                  <dt className="plate-label">Crew</dt>
                  <dd className="designation mt-1">{item.crew}</dd>
                </div>
              )}
              {item.service && (
                <div>
                  <dt className="plate-label">Status</dt>
                  <dd className="mt-1">{item.service}</dd>
                </div>
              )}
            </dl>
          </Panel>
        )}
      </div>

      <nav className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
        {previous ? (
          <Link
            to="/learn/$block/$item"
            params={{ block: block.slug, item: previous.slug }}
            className="designation text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {previous.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/learn/$block/$item"
            params={{ block: block.slug, item: next.slug }}
            className="designation text-right text-muted-foreground transition-colors hover:text-foreground"
          >
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card p-5">
      <h2 className="plate-label">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
