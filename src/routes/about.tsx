import { createFileRoute } from "@tanstack/react-router";

import { allItems } from "@/lib/content";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sources and Licensing — Recognition Trainer" },
      {
        name: "description",
        content:
          "Every photograph is credited to its Wikimedia Commons author and licence. Open-source, public-source material only — no restricted documents.",
      },
      { property: "og:title", content: "Sources and Licensing — Recognition Trainer" },
      {
        property: "og:description",
        content: "Image credits, doctrinal references and the project's open-source position.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLocale();
  const credited = allItems.filter((item) => item.imageUrl);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <p className="plate-label">{t("about.transparency")}</p>
      <h1 className="mt-3 text-3xl">{t("about.title")}</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90">
        <p>{t("about.publicSources")}</p>
        <p>
          {t("about.doctrineIntro")}{" "}
          <em>
            The Russian Way of War: Force Structure, Tactics, and Modernization of the Russian
            Ground Forces
          </em>{" "}
          {t("about.doctrineRest")}
        </p>
        <p>{t("about.photographs")}</p>
        <p>{t("about.placements")}</p>
      </div>

      <h2 className="mt-10 text-xl">{t("about.imageCredits")}</h2>
      <ul className="mt-4 divide-y divide-border border border-border text-xs">
        {credited.map((item) => (
          <li key={item.slug} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3">
            <span className="designation">{item.name}</span>
            <span className="text-muted-foreground">{item.imageCredit}</span>
            {item.imagePage && (
              <a
                href={item.imagePage}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto text-muted-foreground underline-offset-4 hover:underline"
              >
                {t("about.commons")}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
