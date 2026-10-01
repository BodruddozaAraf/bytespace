"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/data/landing";
import { cn } from "@/lib/cn";

/**
 * Site header (Figma 1:1778): sits on the blue hero, 120px tall at desktop.
 * Below `lg` the nav collapses into a hamburger menu.
 */
export function Header({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("z-30 text-surface-muted", className)}>
      <Container className="relative flex h-20 items-center justify-between lg:h-[120px]">
        <Logo tone="light" className="lg:pl-0.5" />

        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-6 text-base">
            {mainNav.map((item, i) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={i === 0 ? "page" : undefined}
                  className={cn(
                    "rounded-sm transition-colors hover:text-accent",
                    i === 0 ? "leading-[1.2] font-medium" : "leading-[1.6]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 text-base leading-6 lg:flex">
          <Link href="/login" className="rounded-sm transition-colors hover:text-accent">
            Sign In
          </Link>
          <Link href="/register" className="rounded-sm transition-colors hover:text-accent">
            Join Us
          </Link>
          <Link href="#" aria-label="Cart" className="rounded-sm transition-opacity hover:opacity-80">
            <Image src="/images/landing/icon-shopping-bag.svg" alt="" width={24} height={24} className="size-6" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="#" aria-label="Cart" className="grid size-10 place-items-center rounded-full">
            <Image src="/images/landing/icon-shopping-bag.svg" alt="" width={24} height={24} className="size-6" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-surface/10"
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-surface/15 bg-primary shadow-float lg:hidden"
      >
        <Container className="flex flex-col gap-6 py-6">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1 text-lg">
              {mainNav.map((item, i) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={i === 0 ? "page" : undefined}
                    className="block rounded-field px-3 py-2 transition-colors hover:bg-surface/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3">
            <ButtonLink href="/login" variant="outline-light" className="flex-1">
              Sign In
            </ButtonLink>
            <ButtonLink href="/register" variant="lime" className="flex-1">
              Join Us
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
