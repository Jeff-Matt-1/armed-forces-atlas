import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useLocale } from "@/i18n/LocaleProvider";
import { formatSeatCode } from "@/lib/class-codes";
import {
  MAX_SEATS,
  useAddSeats,
  useClasses,
  useCreateClass,
  useDeleteClass,
  useIsInstructor,
  useRenameSeat,
  useRoster,
  useSetClassArchived,
  type ClassRow,
  type RosterEntry,
} from "@/lib/class";

export const Route = createFileRoute("/class")({
  head: () => ({
    meta: [
      { title: "Instructor — Classes and Roster" },
      {
        name: "description",
        content:
          "Create a class, issue seat codes and watch each trainee's mastery, blocks passed and last study day.",
      },
    ],
  }),
  component: ClassPage,
});

/**
 * How recently something happened, in days.
 *
 * Deliberately coarse. An instructor acts on "this week" or "not for a
 * fortnight"; a timestamp to the minute would invite reading precision into a
 * number that arrives whenever the device next has a connection.
 */
function daysAgo(iso: string | null): number | null {
  if (!iso) return null;
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}

function ClassPage() {
  const { user, loading } = useAuth();
  const { t } = useLocale();
  const instructor = useIsInstructor();
  const classes = useClasses();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Memoised because the selection effect below depends on them: a fresh array
  // every render would re-run it every render.
  const all = useMemo(() => classes.data ?? [], [classes.data]);
  const open = useMemo(() => all.filter((entry) => !entry.archived_at), [all]);
  const closed = useMemo(() => all.filter((entry) => entry.archived_at), [all]);
  const selected = all.find((entry) => entry.id === selectedId) ?? null;

  // Falls back to a running course before a finished one, and re-picks when the
  // selected class is deleted rather than leaving an empty roster on screen.
  useEffect(() => {
    if (all.length === 0) return;
    if (selectedId && all.some((entry) => entry.id === selectedId)) return;
    setSelectedId((open[0] ?? all[0])!.id);
  }, [all, open, selectedId]);

  if (loading || (user && instructor.isLoading)) return null;

  if (!user) {
    return (
      <Gate title={t("class.signInTitle")} body={t("class.signInBody")}>
        <Button asChild>
          <Link to="/auth">{t("nav.signIn")}</Link>
        </Button>
      </Gate>
    );
  }

  if (!instructor.data) {
    return (
      <Gate title={t("class.notInstructorTitle")} body={t("class.notInstructorBody")}>
        <Button asChild variant="outline">
          <Link to="/join">{t("class.goToJoin")}</Link>
        </Button>
      </Gate>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <p className="plate-label">{t("class.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{t("class.title")}</h1>

      <div className="print-hide">
        {!classes.isLoading && open.length > 0 && (
          <ClassPicker
            label={t("class.yourClasses")}
            classes={open}
            selected={selectedId}
            onSelect={setSelectedId}
          />
        )}
        {!classes.isLoading && closed.length > 0 && (
          <ClassPicker
            label={t("class.closedClasses")}
            classes={closed}
            selected={selectedId}
            onSelect={setSelectedId}
          />
        )}
        <NewClass onCreated={setSelectedId} />
      </div>

      {selected && <Roster klass={selected} onDeleted={() => setSelectedId(null)} />}
    </div>
  );
}

function Gate({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  const { t } = useLocale();
  return (
    <div className="mx-auto w-full max-w-md px-4 py-14">
      <p className="plate-label">{t("class.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ClassPicker({
  label,
  classes,
  selected,
  onSelect,
}: {
  label: string;
  classes: ClassRow[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      <span className="plate-label self-center">{label}</span>
      {classes.map((entry) => (
        <button
          key={entry.id}
          type="button"
          onClick={() => onSelect(entry.id)}
          className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
            entry.id === selected
              ? "border-primary bg-secondary text-foreground"
              : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          {entry.name}
        </button>
      ))}
    </div>
  );
}

function NewClass({ onCreated }: { onCreated: (id: string) => void }) {
  const { t } = useLocale();
  const create = useCreateClass();
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(String(MAX_SEATS));

  return (
    <form
      className="mt-6 flex flex-wrap items-end gap-3 border border-border p-4"
      onSubmit={(event) => {
        event.preventDefault();
        const count = Math.min(MAX_SEATS, Math.max(1, Number(seats) || 1));
        create.mutate(
          { name, seats: count },
          {
            onSuccess: (created) => {
              onCreated(created.id);
              setName("");
            },
            onError: (error) => toast.error(error.message),
          },
        );
      }}
    >
      <div className="min-w-48 flex-1 space-y-1.5">
        <Label htmlFor="class-name">{t("class.newName")}</Label>
        <Input
          id="class-name"
          required
          maxLength={80}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="w-28 space-y-1.5">
        <Label htmlFor="class-seats">{t("class.newSeats")}</Label>
        <Input
          id="class-seats"
          type="number"
          min={1}
          max={MAX_SEATS}
          value={seats}
          onChange={(event) => setSeats(event.target.value)}
        />
      </div>
      <Button type="submit" disabled={create.isPending}>
        {t("class.create")}
      </Button>
    </form>
  );
}

function Roster({ klass, onDeleted }: { klass: ClassRow; onDeleted: () => void }) {
  const { t } = useLocale();
  const roster = useRoster(klass.id);
  const addSeats = useAddSeats();
  const archive = useSetClassArchived();
  const remove = useDeleteClass();
  const [confirming, setConfirming] = useState(false);

  const seats = roster.data ?? [];
  const closed = Boolean(klass.archived_at);

  if (roster.isLoading) {
    return <p className="mt-10 text-sm text-muted-foreground">{t("class.loading")}</p>;
  }

  const claimed = seats.filter((seat) => seat.user_id).length;

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="plate-label">{t("class.seatsClaimed", { claimed, total: seats.length })}</p>
        <div className="print-hide flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            {t("class.printSheet")}
          </Button>
          {!closed && (
            <>
              <Button
                variant="outline"
                size="sm"
                disabled={seats.length >= MAX_SEATS || addSeats.isPending}
                onClick={() =>
                  addSeats.mutate(
                    { classId: klass.id, taken: seats.length, count: 5 },
                    { onError: (error) => toast.error(error.message) },
                  )
                }
              >
                {t("class.addSeats")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={archive.isPending}
                onClick={() =>
                  archive.mutate(
                    { classId: klass.id, archived: true },
                    { onError: (error) => toast.error(error.message) },
                  )
                }
              >
                {t("class.endCourse")}
              </Button>
            </>
          )}
        </div>
      </div>

      {closed && (
        <div className="print-hide mt-4 flex flex-wrap items-center justify-between gap-3 border border-border p-4">
          <p className="text-sm text-muted-foreground">{t("class.closedBanner")}</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={archive.isPending}
              onClick={() =>
                archive.mutate(
                  { classId: klass.id, archived: false },
                  { onError: (error) => toast.error(error.message) },
                )
              }
            >
              {t("class.reopen")}
            </Button>
            <Button variant="destructive" size="sm" onClick={() => setConfirming(true)}>
              {t("class.delete")}
            </Button>
          </div>
        </div>
      )}

      <ul className="mt-4 divide-y divide-border border border-border">
        {seats.map((seat) => (
          <SeatRow key={seat.id} seat={seat} classId={klass.id} closed={closed} />
        ))}
      </ul>

      <p className="mt-3 text-xs text-muted-foreground">{t("class.syncNote")}</p>

      <Dialog open={confirming} onOpenChange={setConfirming}>
        <DialogContent className="max-w-md sm:rounded-none">
          <DialogHeader>
            <DialogTitle className="pr-8 text-xl">
              {t("class.deleteTitle", { class: klass.name })}
            </DialogTitle>
            <DialogDescription>{t("class.deleteBody")}</DialogDescription>
          </DialogHeader>
          {/* The reassurance belongs beside the warning. An instructor hesitating
              here is usually worried about the trainees, not about the roster. */}
          <p className="text-sm text-muted-foreground">{t("class.deleteKeeps")}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirming(false)}>
              {t("class.cancel")}
            </Button>
            <Button
              variant="destructive"
              disabled={remove.isPending}
              onClick={() =>
                remove.mutate(klass.id, {
                  onSuccess: () => {
                    setConfirming(false);
                    onDeleted();
                  },
                  onError: (error) => toast.error(error.message),
                })
              }
            >
              {t("class.deleteConfirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function SeatRow({
  seat,
  classId,
  closed,
}: {
  seat: RosterEntry;
  classId: string;
  closed: boolean;
}) {
  const { t } = useLocale();
  const rename = useRenameSeat();
  const [label, setLabel] = useState(seat.label ?? "");

  const studied = daysAgo(seat.summary?.last_study_date ?? null);
  const synced = daysAgo(seat.synced_at);

  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
      <span className="designation w-8 text-sm text-muted-foreground">
        {String(seat.seat_no).padStart(2, "0")}
      </span>

      <input
        aria-label={t("class.seatName")}
        className="min-w-32 flex-1 border-b border-transparent bg-transparent text-sm outline-none focus:border-border disabled:opacity-100"
        placeholder={t("class.seatNamePlaceholder")}
        value={label}
        maxLength={80}
        disabled={closed}
        onChange={(event) => setLabel(event.target.value)}
        onBlur={() => {
          if (label === (seat.label ?? "")) return;
          rename.mutate({ seatId: seat.id, classId, label });
        }}
      />

      <span className="designation text-sm tracking-widest">{formatSeatCode(seat.code)}</span>

      {seat.summary ? (
        <>
          <span className="designation w-12 text-right text-sm">{seat.summary.overall}%</span>
          <span className="designation w-14 text-right text-sm text-muted-foreground">
            {seat.summary.blocks_passed}/{seat.summary.blocks_total}
          </span>
          <span className="plate-label w-36 text-right">
            {studied === null
              ? t("class.neverStudied")
              : studied === 0
                ? t("class.studiedToday")
                : t("class.lastStudied", { days: studied })}
            {/* Only when the gap could be misread as idleness. A row synced
                yesterday needs no explanation; one synced last week does. */}
            {synced !== null && synced > 1 && ` · ${t("class.lastSynced", { days: synced })}`}
          </span>
        </>
      ) : (
        <span className="plate-label ml-auto">
          {seat.user_id ? t("class.claimedNoData") : t("class.unclaimed")}
        </span>
      )}
    </li>
  );
}
