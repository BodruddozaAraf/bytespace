import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { AuthShowcase } from "./AuthShowcase";

type AuthShellProps = {
  /** Left column heading, e.g. "Sign in with ease". */
  heading: string;
  /** Left column paragraph under the heading. */
  description: string;
  /** The form card content (LoginForm / RegisterForm). */
  children: ReactNode;
};

/**
 * Two-column body of the auth pages (Login 49:195 / Register 47:351).
 * Left: heading + paragraph + decorative AuthShowcase (desktop only).
 * Right: the white 579×784 form card. Pages render it inside the (auth) layout.
 */
export function AuthShell({ heading, description, children }: AuthShellProps) {
  return (
    <Container className="flex flex-1 flex-col gap-8 pb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pb-[120px]">
      <div className="flex flex-col gap-4 text-surface-muted lg:max-w-[548px] lg:pt-0">
        <h1 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em]">{heading}</h1>
        <p className="max-w-[475px] text-base leading-[1.6] sm:text-lg">{description}</p>
        {/* The showcase is a fixed 548×585 canvas (Figma y=305 → 71px below the text). Between lg
            and xl the left column is only ~365px wide, so the canvas is scaled to 62% inside a box
            of the scaled size (transforms don't affect layout). */}
        <div className="mt-[71px] hidden h-[363px] w-[340px] lg:block xl:h-[585px] xl:w-[548px]">
          <AuthShowcase className="origin-top-left scale-[0.62] xl:scale-100" />
        </div>
      </div>

      <section
        aria-label={heading}
        className="flex w-full flex-col rounded-card bg-surface px-5 py-10 sm:px-[63px] sm:pt-[61px] sm:pb-10 lg:min-h-[784px] lg:max-w-[579px]"
      >
        {children}
      </section>
    </Container>
  );
}
