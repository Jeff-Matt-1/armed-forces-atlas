import { useEffect, useState } from "react";

/**
 * Builds randomized study material on the client only.
 * Shuffling during SSR would produce a different order than hydration.
 */
export function useShuffled<T>(build: () => T[], deps: unknown[]): { items: T[]; built: boolean } {
  const [state, setState] = useState<{ items: T[]; built: boolean }>({ items: [], built: false });

  useEffect(() => {
    setState({ items: build(), built: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
