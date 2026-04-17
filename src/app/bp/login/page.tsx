"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function BpLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bp-unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Sign in failed");
        return;
      }
      const next = searchParams.get("next") || "/bp";
      router.replace(next.startsWith("/") ? next : "/bp");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-28 pb-20 bg-background">
      <div className="w-full max-w-sm border border-border rounded-lg bg-card p-8 shadow-sm">
        <p className="text-[11px] uppercase tracking-[0.25em] text-kendo mb-2">
          iKendo BP
        </p>
        <h1 className="text-xl font-extralight tracking-tight mb-6">
          Sign in to continue
        </h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
              Username
            </label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background font-extralight focus:outline-none focus:border-kendo/40"
              required
            />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background font-extralight focus:outline-none focus:border-kendo/40"
              required
            />
          </div>
          {error ? (
            <p className="text-xs text-red-600 font-extralight">{error}</p>
          ) : null}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-kendo hover:bg-kendo-light text-white text-xs h-9 font-normal tracking-wide"
          >
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default function BpLoginPage() {
  return (
    <Suspense
      fallback={
        <section className="min-h-[70vh] flex items-center justify-center px-6 pt-28 pb-20 bg-background">
          <p className="text-sm text-muted-foreground font-extralight">Loading…</p>
        </section>
      }
    >
      <BpLoginForm />
    </Suspense>
  );
}
