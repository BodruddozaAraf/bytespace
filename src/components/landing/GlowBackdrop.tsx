import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Glow = {
  src: string;
  /** px from the horizontal centre to the glow's left edge (Figma, 1440 frame). */
  x: number;
  y: number;
  size: number;
  height?: number;
};

/**
 * Light section background with blurred lime/blue radial glows (Figma "Group 5", "Ellipse 8–12").
 * The glow SVGs are exported from Figma as-is.
 */
export function GlowBackdrop({
  glows,
  children,
  className,
}: {
  glows: Glow[];
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-surface-alt", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {glows.map((g) => (
          <Image
            key={`${g.src}-${g.x}-${g.y}`}
            src={g.src}
            alt=""
            width={g.size}
            height={g.height ?? g.size}
            className="absolute max-w-none"
            style={{ left: `calc(50% + ${g.x}px)`, top: g.y, width: g.size, height: g.height ?? g.size }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

/** Frame 15 (growth + create & manage) background. */
export const growthGlows: Glow[] = [
  { src: "/images/landing/growth-glow.svg", x: -1268, y: -506, size: 2536, height: 2471 },
  { src: "/images/landing/glow-lime.svg", x: -1047, y: 906, size: 752 },
];

/** Testimonials background. */
export const testimonialGlows: Glow[] = [
  { src: "/images/landing/glow-lime-large.svg", x: 82, y: -281, size: 1217 },
  { src: "/images/landing/glow-lime.svg", x: -365, y: -178, size: 752 },
  { src: "/images/landing/glow-blue-large.svg", x: -1202, y: 109, size: 1217 },
];
