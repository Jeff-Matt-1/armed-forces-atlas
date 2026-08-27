import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LocalOnlyNotice } from "@/components/LocalOnlyNotice";
import { MasteryRing } from "@/components/MasteryRing";
import { getItem, plateNumber, readyBlocks } from "@/lib/content";
import { readGatePreference, useAttempts, useProgress, writeGatePreference } from "@/lib/progress";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Progress — Mastery, Streak and Weak Items" },
      {
        name: "description",
        content:
          "Track mastery per study block, your study streak, recent exam results and the items you keep missing.",
      },
      { property: "og:title", content: "Progress — Mastery, Streak and Weak Items" },
      {
        property: "og:description",
        content: "Per-block mastery rings, exam history and a weak-items list that feeds drills.",
      },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { user } = useAuth();
  const progress = useProgress();
  const attempts = useAttempts();
  const [gate, setGate] = useState(true);

  useEffect(() => setGate(readGatePreference()), []);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <p className="plate-label">Training record</p>
      <h1 className="mt-3 text-3xl">Progress</h1>

      {!user && <LocalOnlyNotice />}

      <dl className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        <Stat label="Overall mastery" value={`${progress.overall}%`} />
        <Stat label="Blocks passed" value={`${progress.passedBlocks.size}/${readyBlocks.length}`} />
        <Stat label="Current streak" value={String(progress.streak?.current_streak ?? 0)} />
        <Stat label="Cards due" value={String(progress.dueSlugs.length)} />
      </dl>

      <section className="mt-10">
        <h2 className="text-xl">Mastery by block</h2>
        <ul className="mt-4 divide-y divide-border border border-border">
          {readyBlocks.map((block) => {
            const mastery = progress.masteryOf(block.slug);
            const passed = progress.passedBlocks.has(block.slug);
            return (
              <li key={block.slug} className="flex items-center gap-4 p-4">
                <span className="designation text-xs text-primary">
                  {plateNumber(block.ordinal)}
                </span>
                <div className="min-w-0 flex-1">
                  <Link
                    to="/learn/$block"
                    params={{ block: block.slug }}
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    {block.title}
                  </Link>
                  <div className="mt-2 h-1 w-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: `${mastery}%` }} />
                  </div>
                </div>
                <span className="designation text-xs text-muted-foreground">
                  {passed ? "EXAM PASSED" : "EXAM PENDING"}
                </span>
                <MasteryRing value={mastery} />
              </li>
            );
          })}
        </ul>
      </section>

      {progress.weakItems.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl">Weak items</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cards you have failed at least once. Work these first.
          </p>
          <ul className="mt-4 grid gap-px bg-border sm:grid-cols-2">
            {progress.weakItems.map((row) => {
              const item = getItem(row.item_slug);
              if (!item) return null;
              return (
                <li key={row.item_slug} className="bg-card">
                  <Link
                    to="/learn/$block/$item"
                    params={{ block: item.blockSlug, item: item.slug }}
                    className="flex items-center gap-3 p-3 transition-colors hover:bg-secondary"
                  >
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        loading="lazy"
                        className="h-10 w-14 bg-secondary object-cover"
                      />
                    ) : (
                      <span className="h-10 w-14 bg-secondary" />
                    )}
                    <span className="designation text-sm">{item.name}</span>
                    <span className="plate-label ml-auto">{row.lapses} miss</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl">Recent attempts</h2>
        {(attempts.data ?? []).length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">No drills or exams recorded yet.</p>
        ) : (
          <ul className="mt-4 divide-y divide-border border border-border">
            {(attempts.data ?? []).map((attempt) => (
              <li key={attempt.id} className="flex items-center gap-4 p-3 text-sm">
                <span className="plate-label">{attempt.mode}</span>
                <span className="text-muted-foreground">{attempt.block_slug ?? "all blocks"}</span>
                <span className="designation ml-auto">
                  {attempt.score}/{attempt.total}
                </span>
                <span
                  className={
                    attempt.passed
                      ? "designation text-xs text-success"
                      : "designation text-xs text-muted-foreground"
                  }
                >
                  {attempt.passed ? "PASS" : "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10 border border-border p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Label htmlFor="gate">Progressive unlock</Label>
            <p className="mt-1 text-xs text-muted-foreground">
              Require each block exam to be passed before the next block opens.
            </p>
          </div>
          <Switch
            id="gate"
            checked={gate}
            onCheckedChange={(checked) => {
              setGate(checked);
              writeGatePreference(checked);
            }}
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card p-4">
      <dt className="plate-label">{label}</dt>
      <dd className="designation mt-2 text-2xl">{value}</dd>
    </div>
  );
}
