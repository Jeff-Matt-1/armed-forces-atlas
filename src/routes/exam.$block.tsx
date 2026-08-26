import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { DrillSkeleton, QuizRunner } from "@/components/QuizRunner";
import { getBlock } from "@/lib/content";
import { buildExam } from "@/lib/quiz";
import { useShuffled } from "@/hooks/useShuffled";

export const Route = createFileRoute("/exam/$block")({
  loader: ({ params }) => {
    const block = getBlock(params.block);
    if (!block || block.status !== "ready") throw notFound();
    return { blockSlug: block.slug, title: block.title };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Exam unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} Exam — 80% to Pass`;
    const description = `Mixed block exam for ${loaderData.title}: photo identification, main armament and force-structure placement.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: Exam,
});

function Exam() {
  const { blockSlug, title } = Route.useLoaderData();
  const [seed, setSeed] = useState(0);
  const { items: questions, built } = useShuffled(
    () => buildExam(blockSlug, 16),
    [blockSlug, seed],
  );

  if (!built) return <DrillSkeleton />;

  return (
    <QuizRunner
      title={`Block exam · ${title}`}
      subtitle="Mixed recognition, armament and placement questions. 80% required to pass."
      questions={questions}
      mode="exam"
      blockSlug={blockSlug}
      requirePass
      onRestart={() => setSeed((value) => value + 1)}
      backTo={{ to: "/learn", label: "Back to blocks" }}
    />
  );
}
