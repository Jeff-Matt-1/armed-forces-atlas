import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a New Password — Recognition Trainer" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPasswordPage,
});

/**
 * Landing page for the emailed password-recovery link.
 *
 * The link carries its tokens in the URL fragment; the Supabase client picks
 * those up on load and raises an auth state change, so there is nothing to
 * parse here — the presence of a session is what says the link was good. A
 * link that has expired or been used comes back with an error in the fragment
 * instead, which is read once on mount before the client strips it.
 */
function ResetPasswordPage() {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const { t } = useLocale();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [busy, setBusy] = useState(false);
  const [linkError, setLinkError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fragment = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const error = fragment.get("error_description") ?? fragment.get("error");
    if (error) setLinkError(error.replace(/\+/g, " "));
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (password !== confirmation) {
      toast.error("The two passwords do not match");
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success("Password updated");
      void navigate({ to: "/learn" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not update the password");
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-14">
        <p className="text-sm text-muted-foreground">{t("auth.checkingLink")}</p>
      </div>
    );
  }

  if (linkError || !session) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-14">
        <p className="plate-label">{t("auth.account")}</p>
        <h1 className="mt-3 text-3xl">{t("auth.linkInvalid")}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {linkError ?? t("auth.linkInvalidBody")}
        </p>
        <Button asChild variant="outline" className="mt-8 w-full">
          <Link to="/auth">{t("auth.requestNewLink")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-14">
      <p className="plate-label">Account</p>
      <h1 className="mt-3 text-3xl">{t("auth.setNewPassword")}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Signed in as {session.user.email}. Choose a new password to finish.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="password">{t("auth.newPassword")}</Label>
          <Input
            id="password"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirmation">{t("auth.repeatPassword")}</Label>
          <Input
            id="confirmation"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={busy}>
          {t("auth.updatePassword")}
        </Button>
      </form>
    </div>
  );
}
