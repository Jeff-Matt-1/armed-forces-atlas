import { Link, createFileRoute } from "@tanstack/react-router";

import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Recognition Trainer" },
      {
        name: "description",
        content:
          "What this app stores, where it is stored, and how to have it deleted. No analytics, no advertising, no third-party tracking.",
      },
      { name: "robots", content: "index" },
    ],
  }),
  component: Privacy,
});

/**
 * The privacy note.
 *
 * Written from the schema rather than from a template: every table named here
 * was read off the live database, and the browser keys off the code that
 * writes them. A privacy policy that overstates or understates what is
 * collected is worse than none, so it names the six tables and the three
 * localStorage keys exactly.
 */
function Privacy() {
  const { t } = useLocale();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <p className="plate-label">{t("privacy.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{t("privacy.title")}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{t("privacy.intro")}</p>

      <Section title={t("privacy.withoutAccountTitle")}>
        <p>{t("privacy.withoutAccountBody")}</p>
        <ul className="mt-3 space-y-1">
          <Key name="recognition-trainer:progress" desc={t("privacy.keyProgress")} />
          <Key name="afa:locale" desc={t("privacy.keyLocale")} />
          <Key name="recognition-trainer:unlock-gate" desc={t("privacy.keyGate")} />
        </ul>
        <p className="mt-3">{t("privacy.withoutAccountClear")}</p>
      </Section>

      <Section title={t("privacy.withAccountTitle")}>
        <p>{t("privacy.withAccountBody")}</p>
        <ul className="mt-3 space-y-1">
          <Key name="auth.users" desc={t("privacy.tableUsers")} />
          <Key name="profiles" desc={t("privacy.tableProfiles")} />
          <Key name="card_reviews" desc={t("privacy.tableReviews")} />
          <Key name="drill_results" desc={t("privacy.tableDrills")} />
          <Key name="block_progress" desc={t("privacy.tableBlocks")} />
          <Key name="attempts" desc={t("privacy.tableAttempts")} />
          <Key name="streaks" desc={t("privacy.tableStreaks")} />
        </ul>
        <p className="mt-3">{t("privacy.rls")}</p>
      </Section>

      <Section title={t("privacy.whereTitle")}>
        <p>{t("privacy.whereBody")}</p>
      </Section>

      <Section title={t("privacy.thirdPartyTitle")}>
        <p>{t("privacy.thirdPartyBody")}</p>
      </Section>

      <Section title={t("privacy.notCollectedTitle")}>
        <p>{t("privacy.notCollectedBody")}</p>
      </Section>

      <Section title={t("privacy.deleteTitle")}>
        <p>{t("privacy.deleteBody")}</p>
      </Section>

      <Section title={t("privacy.rightsTitle")}>
        <p>{t("privacy.rightsBody")}</p>
      </Section>

      <p className="mt-10 text-xs text-muted-foreground">
        <Link to="/about" className="underline underline-offset-4">
          {t("privacy.seeSources")}
        </Link>
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-border pt-6">
      <h2 className="plate-label">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Key({ name, desc }: { name: string; desc: string }) {
  return (
    <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <code className="designation shrink-0 text-xs text-primary">{name}</code>
      <span className="text-sm text-muted-foreground">{desc}</span>
    </li>
  );
}
