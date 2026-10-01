import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AvatarStack } from "./AvatarStack";
import { Rating } from "./Rating";

type StatCardProps = Omit<ComponentProps<"div">, "title"> & {
  title?: ReactNode;
  tone?: "lime" | "white";
};

/** Small floating info card placed around images (hero, auth showcase, growth section). */
export function StatCard({ title, tone = "white", className, children, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-panel p-4 shadow-card",
        tone === "lime" ? "bg-accent text-ink" : "bg-surface text-ink",
        className,
      )}
      {...props}
    >
      {title && <p className="text-base leading-6 font-medium">{title}</p>}
      {children}
    </div>
  );
}

export const HAPPY_STUDENT_AVATARS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/shared/student-${n}.png`);

/** Figma 49:313 — "Happy Students · 4.5 (240) ★" card with an avatar row and "2K+". */
export function HappyStudentsCard({
  tone = "lime",
  avatars = HAPPY_STUDENT_AVATARS,
  className,
}: {
  tone?: "lime" | "white";
  avatars?: string[];
  className?: string;
}) {
  return (
    <StatCard tone={tone} className={cn("w-[258px] backdrop-blur-[10px]", className)}>
      <div>
        <p className="text-base leading-6 font-medium">Happy Students</p>
        <Rating value={4.5} count={240} size="sm" />
      </div>
      <AvatarStack avatars={avatars} extra="2K+" size={43} overlap={16} />
    </StatCard>
  );
}
