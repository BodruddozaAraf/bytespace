import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "lime" | "blue" | "outline" | "outline-light" | "ghost" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-chip font-body font-medium leading-[1.2] transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  // Figma 49:239 — lime fill, ink label. The main call-to-action everywhere.
  lime: "bg-accent text-ink hover:bg-accent-hover focus-visible:outline-primary",
  blue: "bg-primary text-surface hover:bg-primary-hover focus-visible:outline-accent",
  outline: "border border-line-soft bg-surface text-ink hover:bg-surface-muted",
  "outline-light": "border border-surface/40 text-surface hover:bg-surface/10",
  ghost: "text-ink hover:bg-surface-muted",
  "ghost-light": "text-surface hover:bg-surface/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-lg", // Figma: 24px / 12px padding, Label L 18px
  lg: "px-8 py-4 text-lg",
};

export type ButtonStyleProps = { variant?: ButtonVariant; size?: ButtonSize };

/** Class string for anything that should look like a button. */
export function buttonVariants({ variant = "lime", size = "md" }: ButtonStyleProps = {}) {
  return cn(base, variants[variant], sizes[size]);
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & ButtonStyleProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

/** A link styled as a button. Use for navigation (Sign In, Join Us, Join as Creator…). */
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & ButtonStyleProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
