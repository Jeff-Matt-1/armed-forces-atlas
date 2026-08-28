import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { LocalOnlyNotice } from "@/components/LocalOnlyNotice";
import { getItem, imageFitClass } from "@/lib/content";
import { useProgress } from "@/lib/progress";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Review Queue — Cards Due Today" },
      {
        name: "description",
        content:
          "Your spaced-repetition queue across every completed block, so earlier subjects are never forgotten.",
      },
      { property: "og:title", content: "Review Queue — Cards Due Today" },
      {
        property: "og:description",
        content: "Mixed due cards from every block you have studied.",
      },
    ],
  }),
  component: Review,
});

function Review() {
  const { user } = useAuth();
  const progress = useProgress();

  const dueItems = progress.dueSlugs.map((slug) => getItem(slug)).filter((i) => i !== undefined);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <p className="plate-label">Retention</p>
      <h1 className="mt-3 text-3xl">Due today</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {dueItems.length === 0
          ? "Nothing is due right now. Grade some new cards to build the queue."
          : `${dueItems.length} card${dueItems.length === 1 ? "" : "s"} scheduled for review.`}
      </p>

      {!user && <LocalOnlyNotice />}

      <div className="mt-6 flex gap-2">
        <Button asChild>
          <Link to="/drill/flashcards">Start review run</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/drill/photo-id">Photo ID instead</Link>
        </Button>
      </div>

      {dueItems.length > 0 && (
        <ul className="mt-8 divide-y divide-border border border-border">
          {dueItems.map((item) => (
            <li key={item.slug}>
              <Link
                to="/learn/$block/$item"
                params={{ block: item.blockSlug, item: item.slug }}
                className="flex items-center gap-3 p-3 transition-colors hover:bg-secondary"
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    loading="lazy"
                    className={`h-11 w-16 bg-secondary ${imageFitClass(item.slug)}`}
                  />
                ) : (
                  <span className="h-11 w-16 bg-secondary" />
                )}
                <span className="designation text-sm">{item.name}</span>
                <span className="plate-label ml-auto">{item.blockSlug}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
