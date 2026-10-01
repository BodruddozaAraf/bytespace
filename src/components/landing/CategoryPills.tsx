"use client";

import { useState } from "react";
import Link from "next/link";
import { PillButton } from "@/components/ui/Pill";
import { categoryRows } from "@/data/landing";

/**
 * Category toggles (Figma 21:33 / 21:56 / 21:63). Clicking a pill makes it active; there is no
 * filtering (UI only). At `xl` the pills keep the design's three centred rows; below that they
 * simply wrap.
 */
export function CategoryPills() {
  const [active, setActive] = useState(categoryRows[0][0]);
  const lastRow = categoryRows.length - 1;

  return (
    <div
      role="group"
      aria-label="Course categories"
      className="flex flex-wrap justify-center gap-x-3 gap-y-3 sm:gap-x-4 xl:flex-col xl:items-center xl:gap-[21px]"
    >
      {categoryRows.map((row, r) => (
        <div key={r} className="contents xl:flex xl:items-center xl:gap-4">
          {row.map((category) => (
            <PillButton
              key={category}
              variant="muted"
              active={category === active}
              onClick={() => setActive(category)}
              className="border border-transparent px-4 py-2.5 text-sm leading-[1.2] text-ink sm:py-[11px] sm:text-base"
            >
              {category}
            </PillButton>
          ))}
          {r === lastRow && (
            <Link
              href="#"
              className="inline-flex items-center rounded-chip px-1 py-2.5 text-sm leading-[1.2] font-medium text-primary hover:underline sm:py-[11px] sm:text-base"
            >
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
