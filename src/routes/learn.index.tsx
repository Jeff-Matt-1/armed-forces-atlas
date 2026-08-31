import { createFileRoute } from "@tanstack/react-router";

import { BlockCard } from "@/components/BlockCard";
import { allBlocks, isBlockUnlocked } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { useProgress, useUnlockGate } from "@/lib/progress";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Study Blocks — Russian Armed Forces Recognition" },
      {
        name: "description",
        content: `${allBlocks.length} study blocks covering ranks, small arms, armour, artillery, air defence, missiles, vessels, drones, aircraft and helicopters of the Russian Armed Forces.`,
      },
      { property: "og:title", content: "Study Blocks — Russian Armed Forces Recognition" },
      {
        property: "og:description",
        content: "Work block by block: brief, cards, drills, then a block exam at 80% to pass.",
      },
    ],
  }),
  component: BlockIndex,
});

function BlockIndex() {
  const progress = useProgress();
  const { t } = useLocale();
  const gate = useUnlockGate();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <p className="plate-label">{t("curriculum.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{t("curriculum.title")}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t("curriculum.intro")}</p>

      <ol className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {allBlocks.map((block) => (
          <li key={block.slug} className="h-full">
            <BlockCard
              block={block}
              mastery={progress.masteryOf(block.slug)}
              state={
                block.status !== "ready"
                  ? "unreleased"
                  : isBlockUnlocked(block.slug, progress.passedBlocks, gate)
                    ? "open"
                    : "locked"
              }
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
