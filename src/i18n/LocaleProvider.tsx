import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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
 * Two pieces of state rather than one, for a reason. `chosen` is what the
 * reader picked; `applied` is what the tree is currently rendering. The content
 * layer is switched in a layout effect and `applied` is advanced in the same
 * pass, so the switch happens between renders rather than during one.
 *
 * The earlier version called setContentLocale in the render body. That mutates
 * module state while React is rendering, which concurrent rendering is entitled
 * to punish: a render can be started, discarded and retried, and the content a
 * child reads is then not the content that was committed. Doing it in a layout
 * effect means children never observe a half-applied switch, and the re-render
 * lands before the browser paints, so there is no visible flicker.
 *
 * The server always renders English, because the choice lives in localStorage
 * and the server cannot see it. Applying the stored preference after mount
 * costs one commit rather than risking a hydration mismatch.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [chosen, setChosen] = useState<Locale>(DEFAULT_LOCALE);
  const [applied, setApplied] = useState<Locale>(DEFAULT_LOCALE);

  useLayoutEffect(() => {
    if (applied === chosen) return;
    setContentLocale(chosen);
    setApplied(chosen);
  }, [chosen, applied]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) setChosen(stored);
    } catch {
      // Private windows and blocked site data throw on access; English stands.
    }
    // Runs once: later changes go through setLocale, which writes storage itself.
  }, []);

  useEffect(() => {
    document.documentElement.lang = applied;
  }, [applied]);

  const setLocale = useCallback((next: Locale) => {
    setChosen(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still applies for this session.
    }
  }, []);

  /**
   * Consumers see the applied language, not the chosen one, so interface
   * strings and content always change together.
   */
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale: applied,
      setLocale,
      t: (key, values) => translate(applied, key, values),
    }),
    [applied, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
