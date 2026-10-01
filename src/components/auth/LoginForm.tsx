"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { cn } from "@/lib/cn";

const socialProviders = [
  { name: "Facebook", icon: "/images/auth/facebook.svg" },
  { name: "Google", icon: "/images/auth/google.svg" },
] as const;

/**
 * Login form card content (Figma 49:221 "Content"). A column spread with `justify-between` over the
 * card height: [title + fields + button] · [divider + social] · [footer link]. UI only: no API call.
 */
export function LoginForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={cn("flex flex-1 flex-col justify-between gap-10", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10" aria-labelledby="login-title">
        <div className="flex flex-col">
          <p className="text-lg leading-[1.6] text-primary">Sign In</p>
          <h2
            id="login-title"
            className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[44px]"
          >
            Welcome Back
          </h2>
        </div>

        <div className="flex flex-col items-end gap-6">
          <Input
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            name="password"
            autoComplete="current-password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* leading-[1.2] re-applied: twMerge lets size `text-lg` drop the base leading (52px → Figma ≈46px). */}
          <Button type="submit" variant="lime" size="md" className="leading-[1.2]">
            Sign In
          </Button>
        </div>
      </form>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-[11px]">
          <span aria-hidden className="h-px flex-1 bg-line-soft" />
          <span className="text-lg leading-[1.6] text-subtle">or</span>
          <span aria-hidden className="h-px flex-1 bg-line-soft" />
        </div>

        <ul className="flex items-center gap-4">
          {socialProviders.map(({ name, icon }) => (
            <li key={name}>
              <button
                type="button"
                aria-label={`Sign in with ${name}`}
                className="grid size-[72px] place-items-center rounded-card border border-line-soft bg-surface transition-colors hover:border-line-strong hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Image src={icon} alt="" width={40} height={40} className="size-10" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <p className="flex flex-wrap justify-center gap-1 text-base leading-[1.6]">
        <span className="text-subtle">New user?</span>
        <Link
          href="/register"
          className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
