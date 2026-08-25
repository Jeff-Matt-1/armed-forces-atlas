import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/QuizRunner";
import { readyBlocks, studyableItems, type Item } from "@/lib/content";
import { useProgress, useRecordReview } from "@/lib/progress";
import { gradeLabels } from "@/lib/srs";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

type Search = { block?: string };

export const Route = createFileRoute("/drill/flashcards")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    block: typeof search.block === "string" ? search.block : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Flashcards — Spaced Repetition Recognition Drill" },
      {
        name: "description",
        content:
          "Photo-front flashcards with SM-2 spaced repetition: grade each card and it resurfaces exactly when you need it.",
      },
      { property: "og:title", content: "Flashcards — Spaced Repetition Recognition Drill" },
      {
        property: "og:description",
        content: "Grade recall on each recognition card and let the scheduler handle the rest.",
      },
    ],
  }),
  component: Flashcards,
});

function Flashcards() {
  const { block } = Route.useSearch();
  const { user } = useAuth();
  const progress = useProgress();
  const recordReview = useRecordReview();

  const deck = useMemo(() => {
    const pool = studyableItems(block ? [block] : undefined);
    return [...pool].sort(() => Math.random() - 0.5);
  }, [block]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [graded, setGraded] = useState(0);

  const card: Item | undefined = deck[index];

  if (deck.length === 0) {
    return (
      <EmptyState
        title="No cards in this selection"
        body="Pick a block with published content to start a flashcard run."
      />
    );
  }

  if (!card) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-16 text-center">
        <p className="plate-label">Deck complete</p>
        <h1 className="mt-3 text-2xl">{graded} cards graded</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {user
            ? "Scheduling saved. Check the review queue for what is due next."
            : "Sign in to save scheduling and keep your progress across devices."}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={() => {
              setIndex(0);
              setFlipped(false);
              setGraded(0);
            }}
          >
            Shuffle again
          </Button>
          <Button asChild variant="outline">
            <Link to="/review">Review queue</Link>
          </Button>
        </div>
      </div>
    );
  }

  function grade(value: number) {
    const existing = progress.reviewMap.get(card!.slug);
    if (user) {
      recordReview.mutate({
        itemSlug: card!.slug,
        blockSlug: card!.blockSlug,
        grade: value,
        current: existing
          ? {
              ease: existing.ease,
              intervalDays: existing.interval_days,
              reps: existing.reps,
              lapses: existing.lapses,
            }
          : undefined,
      });
    }
    setGraded((count) => count + 1);
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  const blockTitle = readyBlocks.find((b) => b.slug === card.blockSlug)?.title ?? "";

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <div className="flex items-baseline justify-between">
        <p className="plate-label">Flashcards · {blockTitle}</p>
        <p className="designation text-sm text-muted-foreground">
          {index + 1} / {deck.length}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        className="mt-4 w-full border border-border bg-card text-left transition-colors hover:border-primary"
      >
        {card.imageUrl ? (
          <img
            src={card.imageUrl}
            alt="Recognition card"
            className="aspect-[16/9] w-full bg-secondary object-cover"
          />
        ) : (
          <div className="flex aspect-[16/6] w-full items-center justify-center bg-secondary p-6 text-center">
            <span className="text-base text-muted-foreground">{card.cues[0]}</span>
          </div>
        )}

        <div className="p-5">
          {flipped ? (
            <div>
              <h1 className="designation text-2xl">{card.name}</h1>
              {card.aka && <p className="mt-1 text-sm text-muted-foreground">{card.aka}</p>}
              {card.placements[0] && (
                <p className="mt-4 border-l-2 border-primary pl-3 text-sm">{card.placements[0]}</p>
              )}
              {card.armament && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {card.armament}
                  {card.rangeText ? ` · ${card.rangeText}` : ""}
                </p>
              )}
            </div>
          ) : (
            <p className="plate-label">Tap to reveal the designation</p>
          )}
        </div>
      </button>

      {flipped ? (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {gradeLabels.map((label, value) => (
            <Button
              key={label}
              variant={value === 0 ? "destructive" : value === 3 ? "default" : "outline"}
              onClick={() => grade(value)}
              className={cn(value === 2 && "border-primary")}
            >
              {label}
            </Button>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Recall the designation, the armament, and the unit that fields it — then reveal.
        </p>
      )}
    </div>
  );
}
