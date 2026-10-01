import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" = white wordmark for blue backgrounds, "dark" = ink wordmark for white backgrounds. */
  tone?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

/** ByteSpace logo (Figma "Header Logo"): lime mark + wordmark. Always links home. */
export function Logo({ tone = "light", showText = true, className }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-center gap-2", className)}>
      <Image src="/images/shared/logo-mark.svg" alt="" width={29} height={32} className="h-8 w-[29px]" />
      {showText && (
        <span
          className={cn(
            "font-heading text-2xl leading-none font-bold tracking-[-0.02em]",
            tone === "light" ? "text-surface" : "text-ink",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
