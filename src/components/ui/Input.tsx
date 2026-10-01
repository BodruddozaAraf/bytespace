import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared look of the text field box (Figma 49:233): 52px tall, 12px radius, 1px line border. */
export const fieldClassName =
  "h-[52px] w-full rounded-field border border-line bg-surface px-6 text-lg leading-[1.6] text-ink placeholder:text-muted transition-colors hover:border-line-strong focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20";

export type InputProps = ComponentProps<"input"> & {
  label: string;
  /** Visually hide the label (it stays available to screen readers). */
  hideLabel?: boolean;
  /** Optional element rendered inside the field on the right (e.g. a toggle button). */
  endAdornment?: ReactNode;
  hint?: string;
  containerClassName?: string;
};

/** Labelled text input. The label is always rendered and linked via htmlFor/id. */
export function Input({
  label,
  hideLabel,
  id,
  endAdornment,
  hint,
  className,
  containerClassName,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClassName)}>
      <label
        htmlFor={inputId}
        className={cn("text-sm font-medium leading-[1.2] text-ink", hideLabel && "sr-only")}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          aria-describedby={hintId}
          className={cn(fieldClassName, endAdornment ? "pr-14" : undefined, className)}
          {...props}
        />
        {endAdornment && <div className="absolute inset-y-0 right-3 flex items-center">{endAdornment}</div>}
      </div>
      {hint && (
        <p id={hintId} className="text-xs leading-5 text-muted">
          {hint}
        </p>
      )}
    </div>
  );
}
