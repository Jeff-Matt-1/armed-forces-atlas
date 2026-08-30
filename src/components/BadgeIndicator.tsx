import { useEffect, useRef, useState } from "react";

import { ExcellenceBadge } from "@/components/ExcellenceBadge";
import { getBlock, plateNumber, readyBlocks } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { badgeState, maxRank } from "@/lib/badges";
import { useProgress } from "@/lib/progress";

/**
 * The badge in the header, and the list of clean exams behind it.
 *
 * A hover title alone would not do: this has to work on a phone, where there
 * is no hover, so it is a button that opens a panel and the panel closes on an
 * outside tap or Escape. Nothing renders at all until at least one exam has
 * been cleared, because an empty frame shown to someone who has earned nothing
 * would advertise a thing they cannot yet interpret.
 */
export function BadgeIndicator() {
  const progress = useProgress();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const state = badgeState(progress.blockProgress);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (state.rank === null) return null;

  const label =
    state.rank === 0 ? t("badge.frame") : t("badge.rank", { rank: state.rank, max: maxRank() });

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        title={label}
        aria-label={label}
        aria-expanded={open}
        className="flex items-center rounded-sm p-1 transition-colors hover:bg-secondary"
      >
        <ExcellenceBadge rank={state.rank} size={26} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 border border-border bg-card p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <ExcellenceBadge rank={state.rank} size={44} />
            <div>
              <p className="plate-label">{t("badge.title")}</p>
              <p className="designation mt-1 text-sm">{label}</p>
            </div>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            {state.complete ? t("badge.complete") : t("badge.howTo")}
          </p>

          <p className="plate-label mt-4">
            {t("badge.cleanExams", { count: state.blocks.length })}
          </p>
          <ul className="mt-2 space-y-1">
            {state.blocks.map((slug) => (
              <li key={slug} className="flex items-baseline gap-2 text-xs">
                <span className="designation text-primary">
                  {plateNumber(getBlock(slug)?.ordinal ?? 0)}
                </span>
                <span>{getBlock(slug)?.title ?? slug}</span>
              </li>
            ))}
          </ul>

          {state.blocks.length < readyBlocks.length && (
            <p className="mt-3 text-xs text-muted-foreground">
              {t("badge.remaining", { count: readyBlocks.length - state.blocks.length })}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
