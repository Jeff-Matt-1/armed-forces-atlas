/**
 * The languages the app is offered in.
 *
 * English is the source language: every string exists in English, and Estonian
 * falls back to it wherever a translation is missing. That fallback is load
 * bearing rather than a safety net — content is translated block by block, and
 * a half-translated block should still be usable.
 */
export const LOCALES = ["en", "et"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Shown on the language button. Each language names itself, as is conventional. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  et: "Eesti",
};

/** Short form for the button face, where there is room for two letters only. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  et: "ET",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
