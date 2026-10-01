import Image from "next/image";
import type { Ornament } from "@/data/landing";
import { cn } from "@/lib/cn";

/**
 * Decorative 3D shapes, absolutely positioned from the horizontal centre of the parent
 * (which must be `relative`). Hidden below `xl`, where there is no room for them.
 */
export function Ornaments({ items, className }: { items: Ornament[]; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 hidden xl:block", className)}>
      {items.map(({ src, x, y, w, ratio, flip }) => (
        <Image
          key={`${src}-${x}-${y}`}
          src={src}
          alt=""
          width={w}
          height={Math.round(w * ratio)}
          sizes={`${w}px`}
          className={cn("absolute max-w-none select-none", flip && "-scale-x-100")}
          style={{ left: `calc(50% + ${x}px)`, top: y, width: w, height: "auto" }}
        />
      ))}
    </div>
  );
}
