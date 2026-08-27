import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

/**
 * Shown to signed-out users on pages that display saved progress.
 *
 * Studying without an account works and is recorded on the device; an account
 * exists to sync that across devices, not to unlock the feature. Anything
 * studied before signing in is folded into the account at sign-in.
 */
export function LocalOnlyNotice() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border border-border bg-secondary/40 p-3 text-xs">
      <span className="plate-label">On this device</span>
      <span className="text-muted-foreground">
        Progress is saved in this browser. Sign in to sync it across devices — anything you have
        already studied comes with you.
      </span>
      <Button asChild size="sm" variant="outline" className="ml-auto">
        <Link to="/auth">Sign in</Link>
      </Button>
    </div>
  );
}
