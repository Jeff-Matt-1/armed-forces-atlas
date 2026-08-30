import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { DrillSkeleton, QuizRunner } from "@/components/QuizRunner";
import { getBlock } from "@/lib/content";
import { buildPhotoQuiz } from "@/lib/quiz";
import { useShuffled } from "@/hooks/useShuffled";
import { useLocale } from "@/i18n/LocaleProvider";

type Search = { block?: string | undefined };

export const Route = createFileRoute("/drill/photo-id")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    block: typeof search["block"] === "string" ? (search["block"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Photo ID Drill — Russian Equipment Recognition" },
      {
        name: "description",
        content:
          "One photograph, four designations. Distractors are drawn from visually similar equipment so the drill trains real recognition.",
      },
      { property: "og:title", content: "Photo ID Drill — Russian Equipment Recognition" },
      {
        property: "og:description",
        content:
          "Photo identification practice across tanks, handguns and equipment classes of the Russian Armed Forces.",
      },
    ],
  }),
  component: PhotoDrill,
});

function PhotoDrill() {
  const { t } = useLocale();
  const { block } = Route.useSearch();
  const [seed, setSeed] = useState(0);
  const { items: questions, built } = useShuffled(
    () => buildPhotoQuiz(block ? [block] : undefined, 12),
    [block, seed],
  );
  const blockTitle = block ? getBlock(block)?.title : undefined;

  if (!built) return <DrillSkeleton />;

  return (
    <QuizRunner
      title={`${t("drill.photoIdTitle")} · ${blockTitle || t("drill.allBlocks")}`}
      subtitle={t("drill.photoIdSubtitle")}
      questions={questions}
      mode="photo-id"
      blockSlug={block ?? null}
      onRestart={() => setSeed((value) => value + 1)}
      backTo={
        block
          ? { to: "/learn/$block", params: { block }, label: t("exam.backToBlock") }
          : { to: "/learn", label: t("quiz.backToBlocks") }
      }
    />
  );
}
