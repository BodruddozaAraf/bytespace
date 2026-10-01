/**
 * Shared frame for /login and /register (Figma 49:195 / 47:351): blue background with the
 * 120px grid overlay and a logo-only top bar.
 *
 * Pattern: a route-group layout can't receive props from its pages, so the per-page text lives
 * in each page, which renders <AuthShell heading description>{form}</AuthShell>
 * (src/components/auth/AuthShell.tsx). This layout only owns the chrome shared by both pages.
 */
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-primary bg-grid">
      <header className="h-24 lg:h-[120px]">
        <Container className="flex h-full items-center lg:items-start lg:pt-[35px]">
          <Logo tone="light" />
        </Container>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
