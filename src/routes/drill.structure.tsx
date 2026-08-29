import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { DrillSkeleton, QuizRunner } from "@/components/QuizRunner";
import { getBlock } from "@/lib/content";
import { buildPlacementQuiz } from "@/lib/quiz";
import { useShuffled } from "@/hooks/useShuffled";
import { useLocale } from "@/i18n/LocaleProvider";

type Search = { block?: string | undefined };

export const Route = createFileRoute("/drill/structure")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    block: typeof search["block"] === "string" ? (search["block"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Structure Placement Drill — Where Equipment Is Fielded" },
      {
        name: "description",
        content:
          "Match Russian equipment to the unit and echelon that fields it: motor rifle squads, air assault units, brigade artillery and more.",
      },
      { property: "og:title", content: "Structure Placement Drill — Where Equipment Is Fielded" },
      {
        property: "og:description",
        content: "Recognition without context is trivia. Learn which unit fields which machine.",
      },
    ],
  }),
  component: StructureDrill,
});

function StructureDrill() {
  const { t } = useLocale();
  const { block } = Route.useSearch();
  const [seed, setSeed] = useState(0);
  const { items: questions, built } = useShuffled(
    () => buildPlacementQuiz(block ? [block] : undefined, 12),
    [block, seed],
  );
  const blockTitle = block ? getBlock(block)?.title : undefined;

  if (!built) return <DrillSkeleton />;

  return (
    <QuizRunner
      title={`${t("drill.structureTitle")} · ${blockTitle || t("drill.allBlocks")}`}
      subtitle={t("drill.structureSubtitle")}
      questions={questions}
      mode="structure"
      blockSlug={block ?? null}
      onRestart={() => setSeed((value) => value + 1)}
      backTo={{ to: "/learn", label: t("quiz.backToBlocks") }}
    />
  );
}
