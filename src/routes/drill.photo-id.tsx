import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { QuizRunner } from "@/components/QuizRunner";
import { getBlock } from "@/lib/content";
import { buildPhotoQuiz } from "@/lib/quiz";

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
        content: "Timed-free photo identification practice across tanks, handguns and equipment classes.",
      },
    ],
  }),
  component: PhotoDrill,
});

function PhotoDrill() {
  const { block } = Route.useSearch();
  const [seed, setSeed] = useState(0);
  const questions = useMemo(
    () => buildPhotoQuiz(block ? [block] : undefined, 12),
    [block, seed],
  );
  const blockTitle = block ? getBlock(block)?.title : undefined;

  return (
    <QuizRunner
      title={`Photo ID${blockTitle ? ` · ${blockTitle}` : " · all blocks"}`}
      subtitle="Identify the equipment from the photograph."
      questions={questions}
      mode="photo-id"
      blockSlug={block ?? null}
      onRestart={() => setSeed((value) => value + 1)}
      backTo={{ to: "/learn", label: "Back to blocks" }}
    />
  );
}
