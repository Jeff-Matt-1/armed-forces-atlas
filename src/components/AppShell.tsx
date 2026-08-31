import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { useAuth } from "@/hooks/useAuth";
import { BadgeIndicator } from "@/components/BadgeIndicator";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import type { StringKey } from "@/i18n/strings";
import { useMergeLocalProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/learn", label: "nav.blocks" },
  { to: "/review", label: "nav.review" },
  { to: "/progress", label: "nav.progress" },
  { to: "/about", label: "nav.sources" },
] as const satisfies ReadonlyArray<{ to: string; label: StringKey }>;

export function AppShell({ children }: { children: ReactNode }) {
  const { user, signOut } = useAuth();
  const { t } = useLocale();
  // Mounted inside AuthProvider, so this is the one place guaranteed to see
  // every sign-in and fold anonymous study into the account exactly once.
  useMergeLocalProgress();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="designation text-sm font-bold tracking-tight text-primary">
              RECOG/RU
            </span>
            <span className="plate-label hidden sm:inline">{t("shell.tagline")}</span>
          </Link>

          <nav className="ml-auto flex items-center gap-1">
            {NAV.map((entry) => (
              <Link
                key={entry.to}
                to={entry.to}
                className="rounded-sm px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {t(entry.label)}
              </Link>
            ))}
          </nav>

          <BadgeIndicator />

          <LanguageToggle />

          {user ? (
            <Button variant="ghost" size="sm" onClick={() => void signOut()}>
              {t("nav.signOut")}
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link to="/auth">{t("nav.signIn")}</Link>
            </Button>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t("shell.footerSources")}{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
              {t("nav.privacy")}
            </Link>
          </p>
          <p className="designation">
            {t("shell.footerDoctrine")} <em>The Russian Way of War</em>
          </p>
        </div>
      </footer>
    </div>
  );
}
