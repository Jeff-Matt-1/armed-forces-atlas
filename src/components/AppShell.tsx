import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { useAuth } from "@/hooks/useAuth";
import { useMergeLocalProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/learn", label: "Blocks" },
  { to: "/review", label: "Review" },
  { to: "/progress", label: "Progress" },
  { to: "/about", label: "Sources" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const { user, signOut } = useAuth();
  // Mounted inside AuthProvider, so this is the one place guaranteed to see
  // every sign-in and fold anonymous study into the account exactly once.
  useMergeLocalProgress();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="designation text-sm font-bold tracking-tight text-primary">
              RECOG/RU
            </span>
            <span className="plate-label hidden sm:inline">Recognition Trainer</span>
          </Link>

          <nav className="ml-auto flex items-center gap-1">
            {NAV.map((entry) => (
              <Link
                key={entry.to}
                to={entry.to}
                className="rounded-sm px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {entry.label}
              </Link>
            ))}
          </nav>

          {user ? (
            <Button variant="ghost" size="sm" onClick={() => void signOut()}>
              Sign out
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link to="/auth">Sign in</Link>
            </Button>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Open-source study material from public sources only. No restricted or classified
            content.
          </p>
          <p className="designation">
            Doctrinal framing: Grau &amp; Bartles, <em>The Russian Way of War</em>
          </p>
        </div>
      </footer>
    </div>
  );
}
