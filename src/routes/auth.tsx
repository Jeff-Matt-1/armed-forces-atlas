import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

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
  component: AuthPage;
});

function AuthPage() {
  return null;
}
