import { Link } from "@tanstack/react-router";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Item } from "@/lib/content";
import type { BlockGaps } from "@/lib/progress";

/**
 * What a block still needs before it reads 100%.
 *
 * Mastery accumulates per item rather than per drill, so a reader can finish
 * every drill and every exam and still sit short of full — the components count
 * items answered correctly, not runs completed. The number alone cannot say
 * which, so this names them.
 *
 * Each row links to the drill that closes it, because "four items outstanding"
 * is only useful if the next action is one click away.
 */
export function BlockGapsPanel({ gaps, blockSlug }: { gaps: BlockGaps; blockSlug: string }) {
  const { t } = useLocale();

  const rows: Array<{
    key: string;
    label: string;
    items: Item[];
    total: number;
    to: string;
  }> = [];

  if (gaps.cards.length > 0) {
    rows.push({
      key: "cards",
      label: t("gaps.cards"),
      items: gaps.cards,
      total: gaps.totals.cards,
      to: "/drill/flashcards",
    });
  }
  if (gaps.asks.photo && gaps.photo.length > 0) {
    rows.push({
      key: "photo",
      label: t("gaps.photo"),
      items: gaps.photo,
      total: gaps.totals.photo,
      to: "/drill/photo-id",
    });
  }
  if (gaps.asks.placement && gaps.placement.length > 0) {
    rows.push({
      key: "placement",
      label: t("gaps.placement"),
      items: gaps.placement,
      total: gaps.totals.placement,
      to: "/drill/structure",
    });
  }

  const examOutstanding = !gaps.examPassed;
  if (rows.length === 0 && !examOutstanding) return null;

  return (
    <section className="mt-8 border border-border">
      <p className="plate-label border-b border-border px-4 py-2">{t("gaps.title")}</p>

      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li key={row.key} className="p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-sm">
                {row.label}{" "}
                <span className="designation text-xs text-muted-foreground">
                  {row.total - row.items.length} / {row.total}
                </span>
              </span>
              <Link
                to={row.to}
                search={{ block: blockSlug }}
                className="designation text-xs text-primary underline-offset-4 hover:underline"
              >
                {t("gaps.open")}
              </Link>
            </div>
            {/* Naming every item when none is done says nothing the count has
                not already said. The list earns its place once some are done,
                which is exactly when a reader asks what is left. */}
            {row.items.length < row.total && (
              <p className="mt-2 text-xs text-muted-foreground">
                {row.items.map((item) => item.name).join(" · ")}
              </p>
            )}
          </li>
        ))}

        {examOutstanding && (
          <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 p-4">
            <span className="text-sm">{t("gaps.exam")}</span>
            <Link
              to="/exam/$block"
              params={{ block: blockSlug }}
              className="designation text-xs text-primary underline-offset-4 hover:underline"
            >
              {t("gaps.open")}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
