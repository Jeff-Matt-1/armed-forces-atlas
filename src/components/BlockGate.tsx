import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { readyBlocks } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";

/**
 * Shown in place of a block that has not been unlocked yet.
 *
 * It names the block standing in the way, because "locked" without a reason
 * reads as a fault in the app rather than a step not yet taken.
 */
export function BlockLocked({ blockSlug }: { blockSlug: string }) {
  const { t } = useLocale();
  const index = readyBlocks.findIndex((block) => block.slug === blockSlug);
  const previous = index > 0 ? readyBlocks[index - 1] : undefined;

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-16 text-center">
      <Lock className="mx-auto size-6 text-muted-foreground" aria-hidden />
      <h1 className="mt-4 text-2xl">{t("gate.lockedTitle")}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {previous ? t("gate.lockedBody", { block: previous.title }) : t("gate.lockedBodyGeneric")}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {previous && (
          <Button asChild>
            <Link to="/learn/$block" params={{ block: previous.slug }}>
              {t("gate.openPrevious", { block: previous.title })}
            </Link>
          </Button>
        )}
        <Button asChild variant="outline">
          <Link to="/learn">{t("exam.allBlocks")}</Link>
        </Button>
      </div>
    </div>
  );
}

/** A block page waiting to learn whether it may show itself. */
export function BlockChecking() {
  return <div className="mx-auto w-full max-w-6xl px-4 py-16" aria-busy />;
}
