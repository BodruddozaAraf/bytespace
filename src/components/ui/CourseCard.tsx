import Image from "next/image";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/cn";
import { AvatarStack } from "./AvatarStack";
import { Pill } from "./Pill";
import { Rating } from "./Rating";

type CourseCardProps = {
  course: Course;
  className?: string;
  /** Pass for above-the-fold cards so the thumbnail is preloaded. */
  preload?: boolean;
  /** `sizes` hint for the thumbnail. Defaults to a 3-column grid. */
  sizes?: string;
  /**
   * "catalog" (landing grid, Figma 33:683): lime "+N" bubble, grey star.
   * "showcase" (auth pages, Figma 49:251): ink "+N" bubble, lime star.
   */
  variant?: "catalog" | "showcase";
};

/**
 * Figma "Course_Card_1" (49:251): 373×384 at 1440px, 1px border, 24px radius, 15px padding.
 * Fluid width — the parent grid decides the size.
 */
export function CourseCard({
  course,
  className,
  preload,
  sizes = "(min-width: 1024px) 373px, (min-width: 640px) 50vw, 100vw",
  variant = "catalog",
}: CourseCardProps) {
  const showcase = variant === "showcase";
  const { title, creator, level, rating, price, priceUnit, thumbnail, stats, students } = course;

  return (
    <article
      className={cn(
        "flex flex-col gap-5 overflow-hidden rounded-card border border-line-strong bg-surface p-[15px]",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-field bg-thumb">
        <Image src={thumbnail} alt="" fill sizes={sizes} preload={preload} className="object-cover" />
        <ul className="absolute right-3 bottom-3 left-3 flex flex-wrap gap-2" aria-label="Course details">
          <li>
            <Pill variant="glass">{stats.lessons} Lessons</Pill>
          </li>
          <li>
            <Pill variant="glass">{stats.duration}</Pill>
          </li>
          <li>
            <Pill variant="glass">{stats.comments} Comments</Pill>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-ink-strong">
              {title}
            </h3>
            <p className="text-xs leading-5 text-body">
              by <span className="text-primary">{creator}</span>
            </p>
          </div>
          <Rating value={rating} tone={showcase ? "lime" : "muted"} className="shrink-0" />
        </div>

        <div className="flex items-center gap-3">
          <Pill variant="muted" className="gap-1 text-body-alt">
            <Image src="/images/shared/icon-level.svg" alt="" width={20} height={20} className="size-5" />
            {level}
          </Pill>
          <AvatarStack avatars={students.avatars} extra={students.extra} extraTone={showcase ? "ink" : "lime"} />
        </div>

        <p className="flex items-end gap-0.5">
          <span className="font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-primary">
            <span className="font-medium">$</span>
            {price}
          </span>
          <span className="pb-0.5 text-xs leading-5 text-body">{priceUnit}</span>
        </p>
      </div>
    </article>
  );
}
