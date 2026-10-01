import Image from "next/image";
import { cn } from "@/lib/cn";

type RatingProps = {
  value: number;
  /** Number of reviews, shown as "(240)". */
  count?: number;
  /** md = course card (18px text + 24px star), sm = stat card (10px text + 16px star). */
  size?: "sm" | "md";
  /** md only: "lime" = filled lime star, medium number (auth showcase); "muted" = grey star, regular number (landing). */
  tone?: "lime" | "muted";
  className?: string;
};

/** "4.5 ★" rating (Figma 49:279 and 49:316). */
export function Rating({ value, count, size = "md", tone = "lime", className }: RatingProps) {
  const sm = size === "sm";
  const label = `Rated ${value} out of 5${count !== undefined ? ` from ${count} reviews` : ""}`;
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={label}>
      <span
        className={cn(
          sm ? "text-[10px] leading-[1.5] text-muted" : "text-lg leading-7 text-body",
          !sm && tone === "lime" && "font-medium",
        )}
      >
        <span className={cn(sm && "font-bold text-ink")}>{value}</span>
        {count !== undefined && <span> ({count})</span>}
      </span>
      <Image
        src={
          sm
            ? "/images/shared/icon-star-small.svg"
            : tone === "muted"
              ? "/images/shared/icon-star-outline.svg"
              : "/images/shared/icon-star.svg"
        }
        alt=""
        width={sm ? 16 : 24}
        height={sm ? 16 : 24}
        className={sm ? "size-4 p-[1.5px]" : "size-6"}
      />
    </div>
  );
}
