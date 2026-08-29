import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MasteryRing } from "@/components/MasteryRing";
import { getItem, imageFitClass } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import type { CorrectAnswer } from "@/lib/progress-types";
import { useRecordAttempt } from "@/lib/progress";
import { PASS_RATIO, type Question } from "@/lib/quiz";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  questions: Question[];
  mode: "photo-id" | "structure" | "exam";
  blockSlug: string | null;
  requirePass?: boolean;
  onRestart: () => void;
  backTo?: { to: string; label: string };
};

export function QuizRunner({
  title,
  subtitle,
  questions,
  mode,
  blockSlug,
  requirePass = false,
  onRestart,
  backTo,
}: Props) {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [missed, setMissed] = useState<string[]>([]);
  const [correct, setCorrect] = useState<CorrectAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [cardOpen, setCardOpen] = useState(false);
  const recordAttempt = useRecordAttempt();

  const question = questions[index];
  const questionItem = question ? getItem(question.itemSlug) : undefined;
  const total = questions.length;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const passed = percent >= PASS_RATIO * 100;

  const missedItems = useMemo(
    () => [...new Set(missed)].map((slug) => getItem(slug)).filter((item) => item !== undefined),
    [missed],
  );

  if (total === 0) {
    return <EmptyState title={t("quiz.notEnough")} body={t("quiz.notEnoughBody")} />;
  }

  function choose(option: string) {
    if (picked || !question) return;
    setPicked(option);
    if (option === question.answer) {
      setScore((value) => value + 1);
      // Remember what was answered correctly and how, so progress can credit
      // the item's own block even when the drill spans several.
      setCorrect((value) => [
        ...value,
        {
          item_slug: question.itemSlug,
          block_slug: getItem(question.itemSlug)?.blockSlug ?? "",
          kind: question.kind,
        },
      ]);
    } else
      setMissed((value) =>
        value.includes(question.itemSlug) ? value : [...value, question.itemSlug],
      );
  }

  async function advance() {
    if (index + 1 >= total) {
      const finalScore = score;
      const finalPassed = total ? finalScore / total >= PASS_RATIO : false;
      setSaveError(null);
      try {
        await recordAttempt.mutateAsync({
          blockSlug,
          mode,
          score: finalScore,
          total,
          passed: finalPassed,
          missed,
          correct,
        });
        setFinished(true);
      } catch {
        setSaveError(t("quiz.saveFailed"));
      }
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }

  if (finished) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-12">
        <p className="plate-label">{mode === "exam" ? "Exam result" : "Drill result"}</p>
        <div className="mt-4 flex items-center gap-5 border border-border bg-card p-6">
          <MasteryRing value={percent} size={76} label={`${percent}%`} />
          <div>
            <h1 className="text-2xl">{t("quiz.scoreLine", { score, total })}</h1>
            <p
              className={cn(
                "designation mt-1 text-sm",
                passed ? "text-success" : "text-destructive",
              )}
            >
              {requirePass
                ? passed
                  ? t("quiz.passed")
                  : t("quiz.failLine", { needed: Math.ceil(PASS_RATIO * total) })
                : passed
                  ? t("quiz.strong")
                  : t("quiz.needsWork")}
            </p>
          </div>
        </div>

        {missedItems.length > 0 && (
          <div className="mt-6 border border-border">
            <p className="plate-label border-b border-border px-4 py-2">{t("quiz.missed")}</p>
            <ul className="divide-y divide-border">
              {missedItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/learn/$block/$item"
                    params={{ block: item.blockSlug, item: item.slug }}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary"
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        loading="lazy"
                        className={`h-10 w-16 ${imageFitClass(item.slug)}`}
                      />
                    )}
                    <span className="designation text-sm">{item.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {t("quiz.reviewCard")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setIndex(0);
              setPicked(null);
              setScore(0);
              setMissed([]);
              setCorrect([]);
              setFinished(false);
              setSaveError(null);
              onRestart();
            }}
          >
            Run again
          </Button>
          {backTo && (
            <Button asChild variant="outline">
              <Link to={backTo.to}>{backTo.label}</Link>
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="plate-label">{title}</p>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="designation text-sm text-muted-foreground">
          {index + 1} / {total}
        </p>
      </div>

      <div className="mt-3 h-1 w-full bg-secondary">
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${((index + (picked ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      {question.kind === "photo-id" && (
        <div className="mt-6 border border-border bg-card">
          <img
            src={question.imageUrl}
            alt={t("quiz.identify")}
            className={`aspect-[16/9] w-full bg-secondary ${imageFitClass(question.itemSlug)}`}
          />
        </div>
      )}

      <h1 className="mt-6 text-xl">{question.prompt}</h1>

      <div className="mt-4 grid gap-2">
        {question.options.map((option) => {
          const isAnswer = option === question.answer;
          const isPicked = option === picked;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              disabled={Boolean(picked)}
              className={cn(
                "border border-border bg-card px-4 py-3 text-left text-sm transition-colors",
                !picked && "hover:border-primary hover:bg-secondary",
                picked && isAnswer && "border-success bg-success/10 text-foreground",
                picked && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                picked && !isAnswer && !isPicked && "opacity-50",
              )}
            >
              <span className={question.kind === "photo-id" ? "designation" : undefined}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <Button onClick={() => void advance()} disabled={recordAttempt.isPending}>
              {recordAttempt.isPending
                ? t("quiz.saving")
                : index + 1 >= total
                  ? saveError
                    ? t("quiz.saveRetry")
                    : t("quiz.finish")
                  : t("quiz.next")}
            </Button>
            <Button
              type="button"
              variant="link"
              size="sm"
              className="h-auto px-0 text-xs text-muted-foreground"
              onClick={() => setCardOpen(true)}
            >
              {t("quiz.openCard")}
            </Button>
          </div>
          {saveError && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {saveError}
            </p>
          )}
        </div>
      )}

      <Dialog open={cardOpen} onOpenChange={setCardOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto p-0 sm:rounded-none">
          {questionItem && (
            <>
              {questionItem.imageUrl && (
                <img
                  src={questionItem.imageUrl}
                  alt={`${questionItem.name} — recognition photograph`}
                  className={`aspect-[16/9] w-full bg-secondary ${imageFitClass(questionItem.slug)}`}
                />
              )}
              <div className="p-5 sm:p-6">
                <DialogHeader>
                  <DialogTitle className="designation pr-8 text-2xl">
                    {questionItem.name}
                  </DialogTitle>
                  <DialogDescription>
                    {questionItem.aka ?? t("quiz.recognitionCard")}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-5 grid gap-px bg-border sm:grid-cols-2">
                  <CardPanel title={t("item.recognitionCues")}>
                    <ul className="space-y-2">
                      {questionItem.cues.map((cue) => (
                        <li key={cue} className="flex gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </CardPanel>
                  <CardPanel title={t("item.forceStructure")}>
                    <ul className="space-y-2">
                      {questionItem.placements.map((placement) => (
                        <li key={placement} className="border-l-2 border-primary pl-3 text-sm">
                          {placement}
                        </li>
                      ))}
                    </ul>
                  </CardPanel>
                  {(questionItem.armament || questionItem.rangeText) && (
                    <CardPanel title={t("item.armamentRange")}>
                      {questionItem.armament && <p className="text-sm">{questionItem.armament}</p>}
                      {questionItem.rangeText && (
                        <p className="designation mt-2 text-sm text-primary">
                          {questionItem.rangeText}
                        </p>
                      )}
                    </CardPanel>
                  )}
                  {questionItem.doctrineNote && (
                    <CardPanel title={t("item.employment")}>
                      <p className="text-sm text-muted-foreground">{questionItem.doctrineNote}</p>
                    </CardPanel>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CardPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card p-4">
      <h2 className="plate-label">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  const { t } = useLocale();
  return (
    <div className="mx-auto w-full max-w-xl px-4 py-16 text-center">
      <h1 className="text-xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <Button asChild className="mt-6" variant="outline">
        <Link to="/learn">{t("quiz.backToBlocks")}</Link>
      </Button>
    </div>
  );
}

export function DrillSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="h-3 w-40 bg-secondary" />
      <div className="mt-6 aspect-[16/9] w-full border border-border bg-secondary" />
      <div className="mt-6 h-5 w-64 bg-secondary" />
      <div className="mt-4 grid gap-2">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="h-12 border border-border bg-card" />
        ))}
      </div>
    </div>
  );
}
