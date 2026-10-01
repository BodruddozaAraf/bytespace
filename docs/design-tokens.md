# ByteSpace design tokens

Extracted from Figma call #1 (`get_design_context` on Login `49:195`, 2026-10-01).
Implemented as Tailwind v4 `@theme` tokens in [`src/app/globals.css`](../src/app/globals.css).
**Components use token utilities (`bg-primary`, `text-ink`, `rounded-card`…), never raw hex.**

## Colours

| Token (utility suffix) | Hex | Figma style | Role |
|---|---|---|---|
| `primary` | `#003BE2` | Persian Blue/800 | Blue backgrounds (hero, auth, CTA band), links, "Sign In" eyebrow, prices |
| `primary-hover` | `#0031BD` | — (derived) | Hover for blue buttons |
| `accent` | `#D4FB20` | Electric Lime/400 | Primary buttons, active pill, stat cards, stars, logo mark, 3D ornaments |
| `accent-hover` | `#C2E80F` | — (derived) | Hover for lime buttons |
| `violet` | `#300B6A` | Electric Violet/950 | Rare accent (in style list, not visibly used yet) |
| `ink` | `#242528` | Shuttle Gray/950 | Headings, labels, button text, dark avatar bubble ("2K+") |
| `ink-strong` | `#000000` | Black/950 | Course card titles |
| `body` | `#4F4F4F` | Black/700 | Card meta ("by …", "/lifetime", chip text, rating number) |
| `body-alt` | `#4B4C53` | Shuttle Gray/700 | Level chip text + icon |
| `muted` | `#82868E` | Shuttle Gray/400 | Placeholders, secondary text, review counts, section descriptions |
| `subtle` | `#888888` | Black/400 | "or" divider text, "New user?" |
| `surface` | `#FFFFFF` | — | Cards, form card, inputs |
| `surface-muted` | `#F5F5F6` | Shuttle Gray/50 | Level chip bg, light text on blue |
| `line` | `#E5E6E8` | Shuttle Gray/100 | Input border |
| `line-strong` | `#CED0D3` | Shuttle Gray/200 | Course card border |
| `line-soft` | `#D1D1D1` | Black/200 | "or" divider lines, social button border |
| `thumb` | `#443131` | — | Thumbnail placeholder behind images |
| `glass` | `rgba(246,246,246,.6)` + `backdrop-blur(4px)` | — | Chips over thumbnails |

Gradients seen on the Home screenshot (lime → lavender soft section backgrounds) are not in this
frame — the landing agent should derive them from its sections and add them locally.

## Typography

| Figma style | Family | Weight | Size / line-height / tracking | Tailwind |
|---|---|---|---|---|
| Heading M | Poppins | 600 | 44 / 1.2 / -1% | `font-heading text-[44px] leading-[1.2] font-semibold tracking-[-0.01em]` (see `SectionHeading`) |
| Heading XS | Poppins | 600 | 20 / 28px / -1% | `font-heading text-xl leading-7 font-semibold tracking-[-0.01em]` |
| Body L | Satoshi | 400 | 18 / 1.6 | `text-lg leading-[1.6]` |
| Body M | Satoshi | 400 | 16 / 1.6 | `text-base leading-[1.6]` |
| Body XS | Satoshi | 400 | 12 / 20px | `text-xs leading-5` |
| Label L | Satoshi | 500 | 18 / 1.2 (28px) | `text-lg font-medium leading-[1.2]` (buttons) |
| Label S | Satoshi | 500 | 14 / 1.2 | `text-sm font-medium leading-[1.2]` (input labels) |
| Label XS | Satoshi | 500 | 12 / 20px | `text-xs font-medium leading-5` (chips) |
| Logo | Clash Display | 700 | 24 | `font-heading text-2xl font-bold` |

- `--font-heading` = **Poppins** via `next/font/google` (exact match).
- `--font-body` = **DM Sans** via `next/font/google` — **substitute for Satoshi** (Fontshare, not on
  Google Fonts). Slightly wider; keep text containers flexible.
- Logo wordmark: Figma uses **Clash Display Bold** (Fontshare) — rendered with Poppins Bold.

## Radii

| Token | Value | Used for |
|---|---|---|
| `rounded-chip` | 24px | Buttons, pills, chips |
| `rounded-card` | 24px | Course cards, auth form card, social buttons |
| `rounded-panel` | 16px | Floating stat cards ("Happy Students") |
| `rounded-field` | 12px | Inputs, thumbnails |

## Shadows

The design relies on borders more than shadows. Two soft tokens for floating cards:
`shadow-card` (neutral) and `shadow-float` (blue-tinted).

## Layout

- 1440 frame, **1200px content** (`--container-content`), 120px side margins → `<Container>`.
- 120px white grid overlay at 12% opacity on blue backgrounds → `bg-grid` utility
  (Figma "Group 4"/"Group 3" lines; visible in the Login and Home hero frames).

## Component specs

**Input** (49:233): height 52, padding 12/24, border 1px `line`, radius 12, text Body L,
placeholder `muted`. Label Label S, 8px above the field. Fields stacked with 24px gaps.

**Primary button** (49:239): `accent` bg, `ink` text, Label L, padding 12/24, radius 24 (≈46px tall).
In the login form it is right-aligned under the fields.

**Divider** (50:349): two 1px `line-soft` lines with "or" (Body L, `subtle`), 11px gaps, 453 wide.

**Social button** (50:355): 72×72, 1px `line-soft` border, radius 24, 40px black brand icon centered,
16px apart. Assets: `public/images/auth/facebook.svg`, `public/images/auth/google.svg`.

**Form card** (49:220): 579×784 white, radius 24, content inset 61/63px, content width 453,
column `justify-between` over 683px: [title block + fields + button] · [divider + social] · [footer link].
Title block: eyebrow "Sign In" Body L `primary`, title Heading M `ink`; 40px gap to the fields.

**Course card** (49:251): see `CourseCard`. 373×384, border `line-strong`, radius 24, padding 15;
thumbnail 341×195 radius 12 with glass chips 12px from bottom-left; 21px to the text block;
title Heading XS + rating (18px + 24px lime star) on the right; "by <creator>" Body XS with
creator in `primary`; level chip + avatar stack (32px, −8px overlap, "26+" black bubble);
price "$25" Poppins 20 `primary` + "/lifetime" Body XS.

**Happy Students card** (49:313): 258 wide, `accent` bg, radius 16, padding 16, gap 8;
title Satoshi Medium 16/24; rating 10px; 43px avatars with −16px overlap, "2K+" `ink` bubble.

## Assets downloaded in Phase 0

| File | What |
|---|---|
| `public/images/shared/logo-mark.svg` | Lime "b" mark |
| `public/images/shared/course-build-digital-asset.jpg`, `course-big-data.jpg` | Thumbnails |
| `public/images/shared/avatar-1..4.png` | 32px course-card avatars |
| `public/images/shared/student-1..7.png` | 43px "Happy Students" avatars |
| `public/images/shared/icon-level.svg`, `icon-star.svg`, `icon-star-small.svg` | Icons |
| `public/images/shared/3d-torus.webp`, `3d-cone.webp` (lime), `3d-squiggle.webp` (white) | 3D ornaments, tint baked in, trimmed |
| `public/images/auth/facebook.svg`, `google.svg` | Social sign-in icons |
