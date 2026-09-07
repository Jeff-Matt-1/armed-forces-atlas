import { useEffect, useRef } from "react";

import { ExcellenceBadge } from "@/components/ExcellenceBadge";
import { useLocale } from "@/i18n/LocaleProvider";
import { maxRank } from "@/lib/badges";

/** How long the overlay stays up before dismissing itself. */
const HOLD_MS = 2800;

/**
 * The overlay shown the moment a flawless exam earns a rung on the ladder.
 *
 * Without it the badge simply appeared in the header, twenty-odd pixels wide,
 * while the reader was looking at their exam result in the middle of the page
 * — so the reward for the thing the ladder exists to encourage went unseen.
 *
 * It leaves on its own, because it interrupts a result screen the reader did
 * not ask to have covered. Escape, a click and the button close it sooner. The
 * timer is cleared on unmount so navigating away mid-animation cannot fire
 * setState on a component that is gone.
 */
export function BadgeAward({ rank, onDone }: { rank: number; onDone: () => void }) {
  const { t } = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(onDone, HOLD_MS);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDone();
    };
    document.addEventListener("keydown", onKey);
    // Move focus to the overlay so a keyboard reader is told what happened and
    // Escape reaches it without a click first.
    closeRef.current?.focus();
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
    };
  }, [onDone]);

  const label = rank === 0 ? t("badge.frame") : t("badge.rank", { rank, max: maxRank() });

  return (
    <div
      className="badge-award-scrim fixed inset-0 z-[60] flex items-center justify-center bg-background/92 px-6"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="badge-award-title"
      onClick={onDone}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center">
          {/* Behind the badge, so the badge is never dimmed by it. */}
          <span
            aria-hidden
            className="badge-award-ring absolute h-40 w-40 rounded-full border-2 border-primary"
          />
          <ExcellenceBadge rank={rank} size={168} className="badge-award-mark relative" />
        </div>

        <div className="badge-award-text mt-8">
          <p className="plate-label">{t("badge.awardEyebrow")}</p>
          <h2 id="badge-award-title" className="mt-2 text-3xl">
            {rank === 0 ? t("badge.awardFrameTitle") : t("badge.awardTitle")}
          </h2>
          <p className="designation mt-2 text-sm text-muted-foreground">{label}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onDone}
            className="plate-label mt-8 rounded-sm px-3 py-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {t("badge.awardDismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
