import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { DrillSkeleton, QuizRunner } from "@/components/QuizRunner";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { getBlock } from "@/lib/content";
import { PASS_RATIO, buildExam } from "@/lib/quiz";
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
  const { blockSlug } = Route.useLoaderData();
  const { t } = useLocale();
  // Read the title from the content layer rather than the loader: the loader
  // runs before the chosen language is applied, so its copy is always English.
  const title = getBlock(blockSlug)?.title ?? blockSlug;
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
        <p className="plate-label">{t("block.exam")}</p>
        <h1 className="mt-3 text-2xl">{t("exam.noneTitle", { block: title })}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("exam.noneBody")}</p>
        <div className="mt-6 flex justify-center gap-2">
          <Button asChild>
            <Link to="/learn/$block" params={{ block: blockSlug }}>
              {t("exam.backToBlock")}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/learn">{t("exam.allBlocks")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <QuizRunner
      title={t("quiz.examHeading", { block: title })}
      subtitle={t("quiz.examIntro", { pass: Math.round(PASS_RATIO * 100) })}
      questions={questions}
      mode="exam"
      blockSlug={blockSlug}
      requirePass
      onRestart={() => setSeed((value) => value + 1)}
      backTo={{ to: "/learn", label: t("quiz.backToBlocks") }}
    />
  );
}
