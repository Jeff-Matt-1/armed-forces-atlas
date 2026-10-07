import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale } from "@/i18n/LocaleProvider";
import type { StringKey } from "@/i18n/strings";
import { CODE_LENGTH, normaliseSeatCode } from "@/lib/class-codes";
import { useJoinClass, useMySeat, type JoinOutcome } from "@/lib/class";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join a Class — Recognition Trainer" },
      {
        name: "description",
        content:
          "Enter the seat code your instructor gave you. No email address and no password to remember.",
      },
    ],
  }),
  component: JoinPage,
});

/** Everything that is not "ok" is a sentence the trainee has to act on. */
const FAILURE: Record<Exclude<JoinOutcome["status"], "ok">, StringKey> = {
  malformed: "join.malformed",
  unknown: "join.unknown",
  closed: "join.closed",
  taken: "join.taken",
  elsewhere: "join.elsewhere",
  instructor: "join.instructor",
  unauthenticated: "join.failed",
};

function JoinPage() {
  const { t } = useLocale();
  const seat = useMySeat();
  const join = useJoinClass();
  const [code, setCode] = useState("");

  const typed = normaliseSeatCode(code);
  const outcome = join.data;

  // Joining invalidates the seat query, so a trainee who has just this second
  // typed their code would otherwise be told they are "already" in a class.
  // The confirmation of what they did has to win over the standing state.
  const justJoined = outcome?.status === "ok" ? outcome : null;

  if (justJoined || seat.data) {
    const className = justJoined ? justJoined.className : (seat.data?.class_name ?? "");
    const seatNo = justJoined ? justJoined.seatNo : seat.data!.seat_no;

    return (
      <div className="mx-auto w-full max-w-md px-4 py-14">
        <p className="plate-label">{t("join.eyebrow")}</p>
        <h1 className="mt-3 text-3xl">
          {justJoined ? t("join.joinedTitle") : t("join.alreadyIn")}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {t("join.seatLine", { class: className, seat: seatNo })}
        </p>
        <Button asChild className="mt-8 w-full">
          <Link to="/learn">{t("join.startStudying")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-14">
      <p className="plate-label">{t("join.eyebrow")}</p>
      <h1 className="mt-3 text-3xl">{t("join.title")}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t("join.body")}</p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          join.mutate(code);
        }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="code">{t("join.code")}</Label>
          <Input
            id="code"
            autoFocus
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            className="designation text-lg tracking-[0.3em] uppercase"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <p className="plate-label">{t("join.codeHint")}</p>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={join.isPending || typed.length !== CODE_LENGTH}
        >
          {join.isPending ? t("join.joining") : t("join.submit")}
        </Button>
      </form>

      {outcome && outcome.status !== "ok" && (
        <p className="mt-6 text-sm text-destructive">{t(FAILURE[outcome.status])}</p>
      )}
      {join.isError && <p className="mt-6 text-sm text-destructive">{t("join.failed")}</p>}

      <p className="mt-8 text-center text-sm text-muted-foreground">
        {t("join.noCode")}{" "}
        <Link to="/learn" className="underline underline-offset-4">
          {t("auth.studyWithout")}
        </Link>
        .
      </p>
    </div>
  );
}
