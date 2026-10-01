import { StatCard } from "@/components/ui/StatCard";
import { cn } from "@/lib/cn";

/** Thin progress bar used inside the floating cards (Figma: 200×8, lime fill on a light track). */
function ProgressBar({ value, trackClassName }: { value: number; trackClassName?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] overflow-hidden rounded-chip bg-surface-muted", trackClassName)}
    >
      <div className="h-full rounded-chip bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}

/** "Learning Progress 55%" card (Figma 1:1797 / 34:1031). */
export function LearningProgressCard({ value = 55, className }: { value?: number; className?: string }) {
  return (
    <StatCard className={cn("backdrop-blur-[10px]", className)}>
      <p className="text-sm leading-[1.2] font-medium">Learning Progress</p>
      <p className="font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em]">{value}%</p>
      <ProgressBar value={value} />
    </StatCard>
  );
}

/** "UI/UX Design · 200 Courses • 1000+ Students" card (Figma 46:126). */
export function CategoryStatCard({ className }: { className?: string }) {
  return (
    <StatCard className={cn("gap-0 backdrop-blur-[10px]", className)}>
      <p className="text-base leading-[1.2] font-medium">UI/UX Design</p>
      <p className="flex items-center gap-2 text-xs leading-[1.6] whitespace-nowrap text-muted">
        <span>200 Courses</span>
        <span aria-hidden className="text-[10px] leading-[1.5]">
          •
        </span>
        <span>1000+ Students</span>
      </p>
    </StatCard>
  );
}

/** Blue revenue cards in the "Create & Manage" composition (Figma 34:987, 34:998). */
export function RevenueCard({
  title,
  period,
  amount,
  change,
  progress,
  className,
}: {
  title: string;
  period: string;
  amount: string;
  change: string;
  /** When set, renders the progress bar and puts the change chip next to the amount. */
  progress?: number;
  className?: string;
}) {
  const chip = (
    <span className="inline-flex rounded-chip bg-accent px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">
      {change}
    </span>
  );
  return (
    <div className={cn("flex flex-col items-start gap-2 rounded-panel bg-primary p-4 text-surface-muted shadow-float", className)}>
      <div>
        <p className="text-base leading-[1.2] font-medium">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      {progress !== undefined ? (
        <>
          <div className="flex w-[200px] items-center justify-between">
            <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
            {chip}
          </div>
          <ProgressBar value={progress} trackClassName="bg-surface" />
        </>
      ) : (
        <>
          <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
          {chip}
        </>
      )}
    </div>
  );
}
