import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** 1200px content column (Figma: 1440 frame, 120px side margins) with 20px mobile gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-[calc(var(--container-content)+2.5rem)] px-5", className)} {...props} />
  );
}
