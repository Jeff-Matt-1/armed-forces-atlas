import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { DrillSkeleton, QuizRunner } from "@/components/QuizRunner";
import { Button } from "@/components/ui/button";
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

  // A block can be marked ready and still yield no questions if its entries
  // lack the fields the generators need. Say so plainly rather than rendering
  // an empty page that looks broken and silently blocks the unlock chain.
  if (questions.length === 0) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-16 text-center">
        <p className="plate-label">Block exam</p>
        <h1 className="mt-3 text-2xl">No exam available for {title} yet</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This block does not yet carry enough data to build questions from. Study the cards and
          drills in the meantime — the exam opens once the block is filled out.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Button asChild>
            <Link to="/learn/$block" params={{ block: blockSlug }}>
              Back to the block
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/learn">All blocks</Link>
          </Button>
        </div>
      </div>
    );
  }

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
