import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT } from "@/i18n/locales";

/**
 * Language switch.
 *
 * With exactly two languages a cycling button is clearer than a dropdown: the
 * face shows the language you would move to, so one press is the whole
 * interaction. The accessible name spells that out, because "ET" alone tells a
 * screen reader nothing.
 */
export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length]!;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(next)}
      title={`${t("shell.language")}: ${LOCALE_LABELS[next]}`}
      aria-label={`${t("shell.language")}: ${LOCALE_LABELS[next]}`}
      className="designation px-2 text-xs tracking-wide"
    >
      {LOCALE_SHORT[next]}
    </Button>
  );
}
