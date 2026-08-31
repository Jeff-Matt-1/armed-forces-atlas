import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { BlockCard } from "@/components/BlockCard";
import { allBlocks, isBlockUnlocked, readyBlocks, studyableItems } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { useProgress, useUnlockGate } from "@/lib/progress";

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
  const progress = useProgress();
  const totalItems = studyableItems().length;
  const { t } = useLocale();
  const gate = useUnlockGate();

  return (
    <div>
      <section className="grid-backdrop border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <p className="plate-label">{t("home.eyebrow")}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{t("home.title")}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            {t("home.intro", { count: readyBlocks.length - 1 })} <em>The Russian Way of War</em>.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild size="lg">
              <Link to="/learn">{t("home.startFoundations")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/drill/photo-id">{t("home.photoDrill")}</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            <Stat
              label={t("home.statBlocks")}
              value={`${readyBlocks.length} / ${allBlocks.length}`}
            />
            <Stat label={t("home.statEntries")} value={String(totalItems)} />
            <Stat label={t("home.statDue")} value={String(progress.dueSlugs.length)} />
            <Stat
              label={t("home.statStreak")}
              value={String(progress.streak?.current_streak ?? 0)}
            />
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="plate-label">{t("home.continue")}</p>
            <h2 className="mt-2 text-2xl">{t("home.readyBlocks")}</h2>
          </div>
          <Link
            to="/learn"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            {t("home.allBlocks", { count: allBlocks.length })}
          </Link>
        </div>

        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {readyBlocks.map((block) => (
            <BlockCard
              key={block.slug}
              block={block}
              mastery={progress.masteryOf(block.slug)}
              state={isBlockUnlocked(block.slug, progress.passedBlocks, gate) ? "open" : "locked"}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          <Mode
            to="/drill/flashcards"
            title={t("home.modeFlashcards")}
            body={t("home.modeFlashcardsBody")}
            cta={t("home.openDrill")}
          />
          <Mode
            to="/drill/photo-id"
            title={t("home.modePhotoId")}
            body={t("home.modePhotoIdBody")}
            cta={t("home.openDrill")}
          />
          <Mode
            to="/drill/structure"
            title={t("home.modeStructure")}
            body={t("home.modeStructureBody")}
            cta={t("home.openDrill")}
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

function Mode({ to, title, body, cta }: { to: string; title: string; body: string; cta: string }) {
  return (
    <Link to={to} className="bg-card p-6 transition-colors hover:bg-secondary">
      <h3 className="text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <span className="designation mt-4 inline-block text-xs text-primary">{cta}</span>
    </Link>
  );
}
