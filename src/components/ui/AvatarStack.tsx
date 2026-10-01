import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  /** Text in the trailing dark bubble, e.g. "26+" or "2K+". */
  extra?: string;
  /** Avatar diameter in px. Figma: 32 on course cards, 43 on "Happy Students". */
  size?: number;
  /** Overlap in px. Figma: 8 for 32px avatars, 16 for 43px. */
  overlap?: number;
  className?: string;
};

/** Overlapping circular avatars with an optional "+N" bubble. */
export function AvatarStack({ avatars, extra, size = 32, overlap = 8, className }: AvatarStackProps) {
  const item = { width: size, height: size };
  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt=""
          width={size}
          height={size}
          style={{ ...item, marginLeft: i === 0 ? 0 : -overlap }}
          className="shrink-0 rounded-full object-cover"
        />
      ))}
      {extra && (
        <span
          style={{ ...item, marginLeft: avatars.length ? -overlap : 0 }}
          className="relative grid shrink-0 place-items-center rounded-full bg-ink text-xs leading-5 font-medium text-surface"
        >
          {extra}
        </span>
      )}
    </div>
  );
}
