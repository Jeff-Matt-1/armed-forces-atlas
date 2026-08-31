import type { Locale } from "@/i18n/locales";

/**
 * A small flag beside the language toggle.
 *
 * The button already showed "ET", which an Estonian speaker had to read to
 * discover the app speaks their language. A flag is recognised before it is
 * read, which is the point.
 *
 * Drawn rather than fetched: two shapes at 16px, and an emoji flag would be
 * at the mercy of the platform's font — Windows renders regional indicators
 * as bare letters, so "🇪🇪" would have shown up as "EE" beside "ET".
 */
export function LocaleFlag({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <svg
      viewBox="0 0 22 14"
      width="16"
      height="11"
      className={className}
      role="img"
      aria-hidden
      focusable="false"
    >
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="13"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      {locale === "et" ? (
        <>
          {/* Blue, black, white in equal bands. */}
          <rect x="1" y="1" width="20" height="4" fill="#0072CE" />
          <rect x="1" y="5" width="20" height="4" fill="#101010" />
          <rect x="1" y="9" width="20" height="4" fill="#F5F5F5" />
        </>
      ) : (
        <>
          {/* Union Flag, simplified to what survives at this size: the two
              saltires under the cross of St George. */}
          <rect x="1" y="1" width="20" height="12" fill="#012169" />
          <path d="M1 1 L21 13 M21 1 L1 13" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M1 1 L21 13 M21 1 L1 13" stroke="#C8102E" strokeWidth="1.4" />
          <path d="M11 1 V13 M1 7 H21" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M11 1 V13 M1 7 H21" stroke="#C8102E" strokeWidth="2.2" />
        </>
      )}
    </svg>
  );
}
