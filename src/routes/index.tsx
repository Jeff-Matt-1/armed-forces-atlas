import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { MasteryRing } from "@/components/MasteryRing";
import { allBlocks, plateNumber, readyBlocks, studyableItems } from "@/lib/content";
import { useProgress } from "@/lib/progress";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recognition Trainer — Russian Armed Forces Equipment ID" },
      {
        name: "description",
        content:
          "Open-source visual recognition training for Russian armed forces vehicles and equipment: photo ID drills, flashcards and block exams with force-structure context.",
      },
      { property: "og:title", content: "Recognition Trainer — Russian Armed Forces Equipment ID" },
      {
        property: "og:description",
        content:
          "Learn to identify Russian tanks, IFVs, artillery and aircraft from photographs, and know where each sits in the force structure.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { user } = useAuth();
  const progress = useProgress();
  const totalItems = studyableItems().length;

  return (
    <div>
      <section className="grid-backdrop border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <p className="plate-label">Visual recognition · basic training</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Identify the equipment of the Russian Armed Forces.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            A foundations primer plus nineteen subject blocks, one subject at a time. Every entry
            gives you the recognition cues, the main armament and range, and where the machine
            actually sits in the force structure. Doctrinal framing follows Grau &amp; Bartles,{" "}
            <em>The Russian Way of War</em>.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild size="lg">
              <Link to="/learn">Start with Foundations</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/drill/photo-id">Photo ID drill</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            <Stat label="Blocks" value={`${readyBlocks.length} / ${allBlocks.length}`} />
            <Stat label="Entries" value={String(totalItems)} />
            <Stat label="Due today" value={user ? String(progress.dueSlugs.length) : "—"} />
            <Stat label="Streak" value={user ? String(progress.streak?.current_streak ?? 0) : "—"} />
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="plate-label">Continue</p>
            <h2 className="mt-2 text-2xl">Ready blocks</h2>
          </div>
          <Link
            to="/learn"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            All 19 blocks
          </Link>
        </div>

        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {readyBlocks.map((block) => (
            <Link
              key={block.slug}
              to="/learn/$block"
              params={{ block: block.slug }}
              className="group bg-card p-5 transition-colors hover:bg-secondary"
            >
              <div className="flex items-start justify-between">
                <span className="designation text-xs text-primary">
                  {plateNumber(block.ordinal)}
                </span>
                <MasteryRing value={user ? progress.masteryOf(block.slug) : 0} />
              </div>
              <h3 className="mt-4 text-lg leading-tight">{block.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{block.subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          <Mode
            to="/drill/flashcards"
            title="Flashcards"
            body="Spaced repetition on photos and designations. Cards resurface exactly when you are about to forget them."
          />
          <Mode
            to="/drill/photo-id"
            title="Photo ID"
            body="One photograph, four designations. Distractors are pulled from visually similar equipment in the same block."
          />
          <Mode
            to="/drill/structure"
            title="Structure placement"
            body="Given the machine, name the unit that fields it. Recognition without context is trivia."
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card p-4">
      <dt className="plate-label">{label}</dt>
      <dd className="designation mt-2 text-2xl">{value}</dd>
    </div>
  );
}

function Mode({ to, title, body }: { to: string; title: string; body: string }) {
  return (
    <Link to={to} className="bg-card p-6 transition-colors hover:bg-secondary">
      <h3 className="text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <span className="designation mt-4 inline-block text-xs text-primary">Open drill →</span>
    </Link>
  );
}
