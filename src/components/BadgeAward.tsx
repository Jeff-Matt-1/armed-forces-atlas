import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

import { ExcellenceBadge } from "@/components/ExcellenceBadge";
import { useLocale } from "@/i18n/LocaleProvider";
import { maxRank } from "@/lib/badges";

/** How long the badge holds in the middle before it flies to the header. */
const HOLD_MS = 2200;
/** The flight itself. */
const FLY_MS = 900;
/** Fade used instead of the flight when the header slot cannot be found. */
const FADE_MS = 320;

const MARK_SIZE = 168;

type Flight = { x: number; y: number; scale: number };

function prefersReducedMotion() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

/**
 * The overlay shown the moment a flawless exam earns a rung on the ladder.
 *
 * Without it the badge simply appeared in the header, twenty-six pixels wide,
 * while the reader was looking at their exam result in the middle of the page
 * — so the reward for the thing the ladder exists to encourage went unseen.
 *
 * It holds in the middle, then flies to the header and shrinks into the slot it
 * will live in from now on, which is what connects the ceremony to the small
 * mark the reader will see on every page afterwards. The flight is measured
 * against the real header button rather than a guessed coordinate, so it lands
 * correctly at any viewport width and with the navigation in either language.
 *
 * Escape, a click and the button end it early — a dismissal means "go away",
 * not "go away slowly", so those skip the flight.
 */
export function BadgeAward({ rank, onDone }: { rank: number; onDone: () => void }) {
  const { t } = useLocale();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [leaving, setLeaving] = useState(false);
  const markRef = useRef<HTMLSpanElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  const dismiss = useCallback(() => doneRef.current(), []);

  // Escape and focus, for as long as the overlay is up.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") doneRef.current();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Hold, then leave: fly to the header slot if it can be measured, otherwise
  // fade. The slot is missing only if the header badge has not rendered yet,
  // in which case there is nothing to fly to and a fade is the honest fallback.
  useEffect(() => {
    const hold = window.setTimeout(() => {
      setLeaving(true);

      // The icon inside the button, not the button: the button carries padding,
      // and landing on its box would leave the badge a few pixels too large.
      const slot =
        document.querySelector("[data-badge-slot] svg") ??
        document.querySelector("[data-badge-slot]");
      const mark = markRef.current;
      const reduced = prefersReducedMotion();

      if (!slot || !mark || reduced) {
        window.setTimeout(() => doneRef.current(), FADE_MS);
        return;
      }

      const from = mark.getBoundingClientRect();
      const to = slot.getBoundingClientRect();
      setFlight({
        x: to.left + to.width / 2 - (from.left + from.width / 2),
        y: to.top + to.height / 2 - (from.top + from.height / 2),
        // Against the slot's smaller side, so the badge fits inside the button
        // rather than overlapping its padding.
        scale: Math.min(to.width, to.height) / from.width,
      });
      window.setTimeout(() => doneRef.current(), FLY_MS);
    }, HOLD_MS);

    return () => window.clearTimeout(hold);
  }, []);

  const label = rank === 0 ? t("badge.frame") : t("badge.rank", { rank, max: maxRank() });

  // Once flying, the landing animation is replaced outright: leaving its
  // fill-mode transform in place would fight the inline one.
  const markStyle: CSSProperties = flight
    ? {
        animation: "none",
        transform: `translate(${flight.x}px, ${flight.y}px) scale(${flight.scale})`,
        transition: `transform ${FLY_MS}ms cubic-bezier(0.6, 0, 0.2, 1)`,
      }
    : {};

  return (
    <div
      className="badge-award-scrim fixed inset-0 z-[60] flex items-center justify-center px-6"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="badge-award-title"
      onClick={dismiss}
    >
      {/* The dimming is its own layer so it can fade while the badge is still
          flying over it; fading the whole overlay would take the badge with it. */}
      <span
        aria-hidden
        className={`badge-award-veil absolute inset-0 ${leaving ? "badge-award-veil-out" : ""}`}
      />

      <div className="pointer-events-none relative flex flex-col items-center text-center">
        <span ref={markRef} className="relative flex items-center justify-center" style={markStyle}>
          {/* Behind the badge, so the badge is never dimmed by it. */}
          {!flight && (
            <span
              aria-hidden
              className="badge-award-ring absolute h-40 w-40 rounded-full border-2 border-primary"
            />
          )}
          <ExcellenceBadge rank={rank} size={MARK_SIZE} className="badge-award-mark relative" />
        </span>

        <div className={`badge-award-text mt-8 ${leaving ? "badge-award-text-out" : ""}`}>
          <p className="plate-label">{t("badge.awardEyebrow")}</p>
          <h2 id="badge-award-title" className="mt-2 text-3xl">
            {rank === 0 ? t("badge.awardFrameTitle") : t("badge.awardTitle")}
          </h2>
          <p className="designation mt-2 text-sm text-muted-foreground">{label}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={dismiss}
            className="plate-label pointer-events-auto mt-8 rounded-sm px-3 py-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {t("badge.awardDismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
