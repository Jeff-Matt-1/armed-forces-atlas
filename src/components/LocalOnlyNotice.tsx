import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";

/**
 * Shown to signed-out users on pages that display saved progress.
 *
 * Studying without an account works and is recorded on the device; an account
 * exists to sync that across devices, not to unlock the feature. Anything
 * studied before signing in is folded into the account at sign-in.
 */
export function LocalOnlyNotice() {
  const { t } = useLocale();
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border border-border bg-secondary/40 p-3 text-xs">
      <span className="plate-label">{t("local.onThisDevice")}</span>
      <span className="text-muted-foreground">{t("local.body")}</span>
      <Button asChild size="sm" variant="outline" className="ml-auto">
        <Link to="/auth">{t("nav.signIn")}</Link>
      </Button>
    </div>
  );
}
