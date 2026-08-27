import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { MasteryRing } from "@/components/MasteryRing";
import { getBlock, itemsOfBlock, plateNumber } from "@/lib/content";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/learn/$block")({
  loader: ({ params }) => {
    const block = getBlock(params.block);
    if (!block || block.status !== "ready") throw notFound();
    return { blockSlug: block.slug, title: block.title, subtitle: block.subtitle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Block unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} — Russian Armed Forces Recognition`;
    const description =
      loaderData.subtitle ?? `Study block: ${loaderData.title} of the Russian Armed Forces.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BlockDetail,
});

function BlockDetail() {
  const { blockSlug } = Route.useLoaderData();
  const block = getBlock(blockSlug)!;
  const items = itemsOfBlock(blockSlug);
  const progress = useProgress();

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="plate-label">Block {plateNumber(block.ordinal)}</p>
              <h1 className="mt-3 text-3xl">{block.title}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{block.subtitle}</p>
            </div>
            <MasteryRing value={progress.masteryOf(block.slug)} size={64} />
          </div>

          {block.brief && (
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/90">
              {block.brief}
            </p>
          )}

          {block.doctrineNote && (
            <div className="mt-6 max-w-3xl border-l-2 border-primary bg-background p-4">
              <p className="plate-label">Doctrinal note</p>
              <p className="mt-2 text-sm text-muted-foreground">{block.doctrineNote}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild>
              <Link to="/drill/flashcards" search={{ block: block.slug }}>
                Flashcards
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/drill/photo-id" search={{ block: block.slug }}>
                Photo ID
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/drill/structure" search={{ block: block.slug }}>
                Structure drill
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/exam/$block" params={{ block: block.slug }}>
                Block exam
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <p className="plate-label">{items.length} entries</p>
        <ul className="mt-4 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug} className="bg-card">
              <Link
                to="/learn/$block/$item"
                params={{ block: block.slug, item: item.slug }}
                className="flex h-full flex-col transition-colors hover:bg-secondary"
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full bg-secondary object-cover"
                  />
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center bg-secondary">
                    <span className="plate-label">No photograph</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="designation text-sm font-semibold">{item.name}</h3>
                  {item.aka && <p className="mt-1 text-xs text-muted-foreground">{item.aka}</p>}
                  {item.placements[0] && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.placements[0]}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
