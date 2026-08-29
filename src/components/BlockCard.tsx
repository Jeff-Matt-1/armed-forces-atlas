import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { MasteryRing } from "@/components/MasteryRing";
import { blockItemCount, plateNumber, type Block } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import type { BlockCardState } from "@/lib/progress";

/**
 * One block in a listing.
 *
 * Shared by the home page and /learn: they used to render their own cards, and
 * only /learn honoured the lock, so the home page handed out every block
 * regardless of progress.
 */
export function BlockCard({
  block,
  mastery,
  state,
}: {
  block: Block;
  mastery: number;
  state: BlockCardState;
}) {
  const { t } = useLocale();
  const count = blockItemCount(block.slug);

  const body = (
    <>
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "designation text-xs",
            state === "unreleased" ? "text-muted-foreground" : "text-primary",
          )}
        >
          {plateNumber(block.ordinal)}
        </span>
        {state === "open" ? (
          <MasteryRing value={mastery} />
        ) : state === "locked" ? (
          <Lock className="size-4 text-muted-foreground" aria-hidden />
        ) : (
          <span className="plate-label">{t("curriculum.inProgress")}</span>
        )}
      </div>
      <h2 className="mt-4 text-lg leading-tight">{block.title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{block.subtitle}</p>
      <p className="designation mt-4 text-[11px] text-muted-foreground">
        {state === "open"
          ? t("block.entries", { count })
          : state === "locked"
            ? t("curriculum.lockedHint")
            : t("curriculum.inProgressHint")}
      </p>
    </>
  );

  if (state === "open") {
    return (
      <Link
        to="/learn/$block"
        params={{ block: block.slug }}
        className="block h-full bg-card p-5 transition-colors hover:bg-secondary"
      >
        {body}
      </Link>
    );
  }

  return (
    <div className={cn("h-full bg-card p-5", state === "unreleased" && "opacity-60")}>{body}</div>
  );
}
