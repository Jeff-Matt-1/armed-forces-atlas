import { useEffect, useState } from "react";

import { useLocale } from "@/i18n/LocaleProvider";

/**
 * Registers the service worker and offers the update when one is waiting.
 *
 * The prompt is not decoration. A precache pins a reader to the build they
 * installed, so without a way to move on they would study an old edition of the
 * content indefinitely and never be told — which for a training product is
 * worse than having no offline mode at all.
 *
 * Nothing happens in development: scripts/build-sw.ts writes sw.js into the
 * build output, so there is no worker to register under `vite dev`, and
 * registering a stale one there would serve yesterday's bundle over today's.
 */
export function ServiceWorkerBridge() {
  const { t } = useLocale();
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    if (!("serviceWorker" in navigator)) return;

    let cancelled = false;

    // A controller change means the new worker took over, which only happens
    // after the reader accepts. Reloading here rather than at the click keeps
    // the two in the right order.
    let reloading = false;
    const onControllerChange = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    void navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        if (cancelled) return;

        const offer = (worker: ServiceWorker | null) => {
          // A waiting worker on a page that has never had one is the first
          // install, not an update; there is nothing to interrupt for.
          if (worker && navigator.serviceWorker.controller) setWaiting(worker);
        };

        offer(registration.waiting);
        registration.addEventListener("updatefound", () => {
          const installing = registration.installing;
          if (!installing) return;
          installing.addEventListener("statechange", () => {
            if (installing.state === "installed") offer(registration.waiting);
          });
        });
      })
      .catch(() => {
        // An unavailable or blocked worker costs the reader offline support and
        // nothing else, so it is not worth an error in front of them.
      });

    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
    };
  }, []);

  if (!waiting) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-md items-center gap-3 border border-border bg-card p-3 shadow-lg">
        <p className="flex-1 text-sm">{t("update.available")}</p>
        <button
          type="button"
          onClick={() => waiting.postMessage("skip-waiting")}
          className="plate-label rounded-sm bg-primary px-3 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t("update.reload")}
        </button>
      </div>
    </div>
  );
}
