import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  downloadAll,
  offlineStatus,
  offlineSupported,
  removeDownload,
  storageUsed,
  type OfflineProgress,
} from "@/lib/offline";

type Phase = "checking" | "unavailable" | "idle" | "downloading" | "ready" | "error";

/** 46.6 MB reads better as 47 MB; nobody is budgeting to the byte. */
function megabytes(bytes: number): string {
  return `${Math.round(bytes / 1_000_000)} MB`;
}

/**
 * Download the whole library so the app works with no connection.
 *
 * Both halves are fetched: the photographs, which are the bulk of the bytes,
 * and the page for every route, which is what actually makes it work — each
 * navigation is server-rendered per request, so without the documents a reader
 * offline gets a network error before any cached photograph matters.
 *
 * The state is counted from the caches on every visit rather than remembered in
 * a flag. Site data can be cleared and a new build retires the page cache, and
 * a flag would go on promising something that had stopped being true.
 */
export function OfflineLibrary() {
  const { t } = useLocale();
  const [phase, setPhase] = useState<Phase>("checking");
  const [progress, setProgress] = useState<OfflineProgress>({ done: 0, total: 0 });
  const [size, setSize] = useState<number | null>(null);
  const [build, setBuild] = useState<string | null>(null);
  const [used, setUsed] = useState<number | null>(null);
  const abort = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    if (!offlineSupported()) {
      setPhase("unavailable");
      return;
    }
    const status = await offlineStatus();
    setProgress(status);
    setPhase(status.total > 0 && status.done >= status.total ? "ready" : "idle");
    setUsed(await storageUsed());
  }, []);

  useEffect(() => {
    void refresh();
    // The download size comes from the build rather than from counting bytes in
    // the browser, so the button can say what it will cost before it is pressed.
    void fetch("/offline-manifest.json")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { bytes?: number; build?: string } | null) => {
        setSize(data?.bytes ?? null);
        setBuild(data?.build ?? null);
      })
      .catch(() => setSize(null));

    return () => abort.current?.abort();
  }, [refresh]);

  async function start() {
    const controller = new AbortController();
    abort.current = controller;
    setPhase("downloading");
    try {
      await downloadAll(controller.signal, setProgress);
      if (!controller.signal.aborted) await refresh();
    } catch {
      // Most often the storage quota. Saying "downloaded" over half a library
      // would be the one failure a reader cannot detect until they are offline.
      if (!controller.signal.aborted) setPhase("error");
    } finally {
      abort.current = null;
    }
  }

  async function remove() {
    await removeDownload();
    await refresh();
  }

  if (phase === "checking") return null;

  return (
    <section className="mt-10 border border-border p-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-56 flex-1">
          <p className="plate-label">{t("offline.title")}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {phase === "unavailable" ? t("offline.unavailable") : t("offline.body")}
          </p>

          {phase === "downloading" && (
            <p className="designation mt-2 text-sm">
              {t("offline.progress", { done: progress.done, total: progress.total })}
            </p>
          )}
          {phase === "ready" && (
            <p className="designation mt-2 text-sm text-success">
              {used === null
                ? t("offline.ready")
                : t("offline.readySize", { size: megabytes(used) })}
            </p>
          )}
          {phase === "error" && (
            <p className="designation mt-2 text-sm text-destructive">{t("offline.error")}</p>
          )}
          {build && <p className="plate-label mt-3">{t("offline.build", { build })}</p>}
        </div>

        {phase === "idle" && (
          <Button onClick={() => void start()}>
            {size === null
              ? t("offline.download")
              : t("offline.downloadSize", { size: megabytes(size) })}
          </Button>
        )}
        {phase === "downloading" && (
          <Button variant="outline" onClick={() => abort.current?.abort()}>
            {t("offline.cancel")}
          </Button>
        )}
        {(phase === "ready" || phase === "error") && (
          <Button variant="outline" onClick={() => void remove()}>
            {t("offline.remove")}
          </Button>
        )}
      </div>
    </section>
  );
}
