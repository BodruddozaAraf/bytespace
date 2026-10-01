"use client";

import { Button } from "@/components/ui/Button";

/** Footer newsletter field (Figma 34:1266). UI only: submitting does nothing. */
export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full items-center gap-3 sm:gap-6">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        className="h-[52px] w-full min-w-0 rounded-full border border-line-strong bg-surface px-6 text-base leading-[1.6] text-ink placeholder:text-ink transition-colors hover:border-muted focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 sm:w-[376px]"
      />
      {/* The design labels this button "Search"; kept as-is (see report). */}
      <Button type="submit" variant="lime">
        Search
      </Button>
    </form>
  );
}
