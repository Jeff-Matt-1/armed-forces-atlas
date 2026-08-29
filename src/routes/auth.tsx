import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { authRedirectTo } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — Recognition Trainer" },
      {
        name: "description",
        content:
          "Sign in to save your spaced-repetition scheduling, exam results, mastery and study streak across devices.",
      },
      { property: "og:title", content: "Sign In — Recognition Trainer" },
      {
        property: "og:description",
        content: "Accounts keep your recognition training progress synced.",
      },
    ],
  }),
  component: AuthPage,
});

type Mode = "signin" | "signup" | "forgot";

const HEADING: Record<Mode, string> = {
  signin: "Sign in",
  signup: "Create an account",
  forgot: "Reset your password",
};

const SUBMIT_LABEL: Record<Mode, string> = {
  signin: "Sign in",
  signup: "Create account",
  forgot: "Send reset link",
};

function AuthPage() {
  const navigate = useNavigate();
  const { t } = useLocale();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  /**
   * Set once an email has actually been dispatched. Sign-up and reset both end
   * in "go and read your inbox", which is a different outcome from being
   * signed in and needs to stay on screen rather than pass by as a toast.
   */
  const [sentTo, setSentTo] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: authRedirectTo("/reset-password"),
        });
        if (error) throw error;
        // Deliberately not reporting whether the address exists: that would
        // turn this form into an account-enumeration oracle.
        setSentTo(email);
        return;
      }

      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: authRedirectTo("/learn") },
        });
        if (error) throw error;
        // The profile row is created by the on_auth_user_created trigger, not
        // here: at this point there may be no session yet, so a client insert
        // would fail RLS silently.
        //
        // With email confirmation enabled Supabase returns a user but no
        // session. Claiming success and navigating to /learn would leave the
        // user signed out while being told the opposite.
        if (!data.session) {
          setSentTo(email);
          return;
        }
        toast.success("Account created");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in");
      }
      void navigate({ to: "/learn" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Authentication failed");
    } finally {
      setBusy(false);
    }
  }

  function switchTo(next: Mode) {
    setMode(next);
    setSentTo(null);
  }

  if (sentTo) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-14">
        <p className="plate-label">{t("auth.account")}</p>
        <h1 className="mt-3 text-3xl">{t("auth.checkEmail")}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {mode === "forgot"
            ? t("auth.resetSent", { email: sentTo })
            : t("auth.confirmSent", { email: sentTo })}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{t("auth.checkSpam")}</p>
        <Button variant="outline" className="mt-8 w-full" onClick={() => switchTo("signin")}>
          {t("auth.backToSignIn")}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-14">
      <p className="plate-label">{t("auth.account")}</p>
      <h1 className="mt-3 text-3xl">{HEADING[mode]}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {mode === "forgot"
          ? "Enter the address you signed up with and we will send you a link to set a new password."
          : "Progress, spaced-repetition scheduling and exam results are stored against your account. Study content stays free to browse without one."}
      </p>

      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("auth.email")}</Label>
          <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {mode !== "forgot" && (
          <div className="space-y-1.5">
            <Label htmlFor="password">{t("auth.password")}</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        )}
        <Button type="submit" className="w-full" disabled={busy}>
          {SUBMIT_LABEL[mode]}
        </Button>
      </form>

      <div className="mt-6 space-y-3 text-center text-sm text-muted-foreground">
        {mode === "signin" && (
          <>
            <button
              type="button"
              onClick={() => switchTo("signup")}
              className="block w-full underline-offset-4 hover:underline"
            >
              {t("auth.noAccount")}
            </button>
            <button
              type="button"
              onClick={() => switchTo("forgot")}
              className="block w-full underline-offset-4 hover:underline"
            >
              {t("auth.forgot")}
            </button>
          </>
        )}
        {mode === "signup" && (
          <button
            type="button"
            onClick={() => switchTo("signin")}
            className="block w-full underline-offset-4 hover:underline"
          >
            {t("auth.haveAccount")}
          </button>
        )}
        {mode === "forgot" && (
          <button
            type="button"
            onClick={() => switchTo("signin")}
            className="block w-full underline-offset-4 hover:underline"
          >
            Remembered it? Back to sign in
          </button>
        )}
        <p>
          You can also{" "}
          <Link to="/learn" className="underline underline-offset-4">
            {t("auth.studyWithout")}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
