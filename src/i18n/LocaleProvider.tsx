import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/locales";
import { translate, type StringKey } from "@/i18n/strings";
import { setContentLocale } from "@/lib/content";

const STORAGE_KEY = "afa:locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: StringKey, values?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key, values) => translate(DEFAULT_LOCALE, key, values),
});

/**
 * Holds the chosen language and keeps the content layer in step with it.
 *
 * The server always renders English, because the choice lives in localStorage
 * and the server cannot see it. The stored preference is applied after mount,
 * which costs one frame of English but avoids a hydration mismatch — the
 * alternative, reading storage during the first render, makes the client's
 * markup disagree with the server's.
 *
 * setContentLocale is called during render rather than in an effect so that
 * children read already-translated blocks and items on the very same render.
 * It only assigns module state, so repeating it is harmless.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  setContentLocale(locale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored) && stored !== locale) setLocaleState(stored);
    } catch {
      // Private windows and blocked site data throw on access; English stands.
    }
    // Runs once: later changes go through setLocale, which writes storage itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still applies for this session.
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key, values) => translate(locale, key, values),
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
