import { Link, createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { MasteryRing } from "@/components/MasteryRing";
import { allBlocks, blockItemCount, isBlockUnlocked, plateNumber } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { readGatePreference, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Study Blocks — Russian Armed Forces Recognition" },
      {
        name: "description",
        content:
          "Nineteen study blocks covering ranks, small arms, armour, artillery, air defence, vessels, drones and aircraft of the Russian Armed Forces.",
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
  const [gate, setGate] = useState(true);

  useEffect(() => setGate(readGatePreference()), []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <p className="plate-label">{t("curriculum.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{t("curriculum.title")}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t("curriculum.intro")}</p>

      <ol className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {allBlocks.map((block) => {
          const ready = block.status === "ready";
          const unlocked = isBlockUnlocked(block.slug, progress.passedBlocks, gate);
          const count = blockItemCount(block.slug);
          const mastery = progress.masteryOf(block.slug);

          const body = (
            <>
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "designation text-xs",
                    ready ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {plateNumber(block.ordinal)}
                </span>
                {ready ? (
                  unlocked ? (
                    <MasteryRing value={mastery} />
                  ) : (
                    <Lock className="size-4 text-muted-foreground" aria-hidden />
                  )
                ) : (
                  <span className="plate-label">{t("curriculum.inProgress")}</span>
                )}
              </div>
              <h2 className="mt-4 text-lg leading-tight">{block.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{block.subtitle}</p>
              <p className="designation mt-4 text-[11px] text-muted-foreground">
                {ready
                  ? unlocked
                    ? t("block.entries", { count })
                    : t("curriculum.lockedHint")
                  : "Content in progress"}
              </p>
            </>
          );

          return (
            <li key={block.slug} className="bg-card">
              {ready && unlocked ? (
                <Link
                  to="/learn/$block"
                  params={{ block: block.slug }}
                  className="block h-full p-5 transition-colors hover:bg-secondary"
                >
                  {body}
                </Link>
              ) : (
                <div className={cn("h-full p-5", !ready && "opacity-60")}>{body}</div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
