import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Small label above the title (e.g. "Sign In"). */
  eyebrow?: ReactNode;
  align?: "center" | "left";
  /** "dark" = ink text on light backgrounds, "light" = white text on blue. */
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

/** Section title block. Title = Figma "Heading M" (Poppins SemiBold 44/1.2, -1%). */
export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("text-lg leading-[1.6]", tone === "light" ? "text-accent" : "text-primary")}>{eyebrow}</p>
      )}
      <Tag
        className={cn(
          "font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-balance sm:text-4xl lg:text-[44px]",
          tone === "light" ? "text-surface" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-[760px] text-base leading-[1.6] sm:text-lg",
            tone === "light" ? "text-surface-muted" : "text-muted",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
