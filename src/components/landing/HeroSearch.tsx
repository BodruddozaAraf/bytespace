"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

/** Hero search bar (Figma 1:1772). UI only: submitting does nothing. */
export function HeroSearch() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-[577px] items-center gap-3 sm:gap-4"
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-chip bg-surface px-4 focus-within:ring-2 focus-within:ring-accent sm:px-6">
        <Image src="/images/landing/icon-search.svg" alt="" width={24} height={24} className="size-6 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="h-full min-w-0 flex-1 bg-transparent text-base leading-[1.6] text-ink placeholder:text-muted focus:outline-none sm:text-lg"
        />
      </label>
      <Button type="submit" variant="lime">
        Search
      </Button>
    </form>
  );
}
