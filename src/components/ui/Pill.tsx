import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type PillVariant = "outline" | "muted" | "glass";

const variants: Record<PillVariant, string> = {
  outline: "border border-line bg-surface text-body hover:border-line-strong",
  muted: "bg-surface-muted text-body-alt", // level chip on course cards
  glass: "bg-glass text-body backdrop-blur-[4px]", // chips over thumbnails
};

export type PillStyleProps = { variant?: PillVariant; active?: boolean };

export function pillVariants({ variant = "outline", active = false }: PillStyleProps = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-chip px-3 py-1.5 text-xs leading-5 font-medium",
    active ? "border border-accent bg-accent text-ink" : variants[variant],
  );
}

/** Non-interactive chip/tag. */
export function Pill({ variant, active, className, ...props }: ComponentProps<"span"> & PillStyleProps) {
  return <span className={cn(pillVariants({ variant, active }), className)} {...props} />;
}

/** Interactive pill (e.g. a category toggle). Sets aria-pressed from `active`. */
export function PillButton({
  variant,
  active,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & PillStyleProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={cn(pillVariants({ variant, active }), "cursor-pointer transition-colors", className)}
      {...props}
    />
  );
}
