# ByteSpace — Landing, Login & Register UI

A pixel-faithful build of the **ByteSpace** online-course website from its Figma design:
the full **landing page** plus the **Sign In** and **Create an Account** pages.
It is UI only: forms validate client-side but don't submit anywhere.

**Live:** _<vercel URL — added after deploy>_

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, Turbopack) + TypeScript
- Tailwind CSS v4: design tokens are defined with `@theme` in `src/app/globals.css`
- `next/font` for Poppins and DM Sans, `next/image` for all images
- `lucide-react` icons, plus `clsx` + `tailwind-merge` behind a `cn()` helper

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Node 20+ is required (developed on Node 22).

## Pages

| Route | What it is |
|---|---|
| `/` | Landing page. Sections: header, hero with search, partner logos, course explorer (category pills + course grid), learning paths, growth, create & manage, creator CTA, testimonials, footer |
| `/login` | Sign In: email, password with show/hide, social buttons, link to register |
| `/register` | Create an Account: full name, email, password, link to login |

Header **Sign In** → `/login` and **Join Us** → `/register`. The logo links home. The auth pages link to each other.
Pages that are out of scope (Courses, Creators, …) link to `#`.

## Project structure

```
src/
  app/
    layout.tsx              fonts, metadata
    globals.css             Tailwind import + @theme design tokens
    page.tsx                landing page (composes sections)
    (auth)/layout.tsx       blue grid background + logo bar shared by auth pages
    (auth)/login/page.tsx
    (auth)/register/page.tsx
  components/
    ui/                     reusable primitives (see below)
    auth/                   AuthShell, AuthShowcase, LoginForm, RegisterForm
    layout/                 Header (mobile menu), Footer, NewsletterForm
    landing/                one component per landing section + small helpers
  data/
    courses.ts              typed course data (landing grid + auth showcase)
    landing.ts              nav, categories, learning paths, testimonials, footer links…
  lib/cn.ts                 class-name helper
public/images/{shared,landing,auth}/
docs/
  design-tokens.md          colours, type scale, radii, component specs from Figma
  figma/                    Figma node tree, screenshots, reference code
```

### Reusable components (`src/components/ui`)

| Component | Notes |
|---|---|
| `Button` / `ButtonLink` / `buttonVariants()` | variants `lime`, `blue`, `outline`, `outline-light`, `ghost`, `ghost-light`; sizes `sm` / `md` / `lg` |
| `Input`, `PasswordInput` | labelled fields; the password field has a show/hide toggle |
| `CourseCard` | the course card, with `catalog` (landing) and `showcase` (auth) variants |
| `AvatarStack`, `Rating` | overlapping avatars with a "+N" bubble; "4.5 ★" rating |
| `StatCard`, `HappyStudentsCard` | the floating info cards around images |
| `Pill`, `PillButton` | chips and toggleable category pills |
| `SectionHeading`, `Container`, `Logo` | layout and typography helpers |

Content (courses, categories, testimonials, footer links) lives in typed arrays in `src/data/`.
Components map over these arrays rather than repeating JSX. Components use design tokens
(`bg-primary`, `text-ink`, `rounded-card`, …) and contain no hard-coded hex colours.

## Notes

- **Responsive:** the Figma file is desktop-only (1440px). I designed the tablet and mobile
  behaviour myself:
  - The nav collapses into a menu.
  - Grids reflow from 3 columns to 2 to 1.
  - Decorative 3D ornaments and floating cards hide on small screens.
  - The auth showcase column is shown from `lg` up.
  - There is no horizontal scroll at 375px.
- **Fonts:** headings use Poppins, as in Figma. The body font in Figma is **Satoshi**, which
  isn't on Google Fonts, so it is replaced with **DM Sans**, the closest Google match.
  DM Sans is slightly wider, so a few paragraphs wrap one line longer. The logo wordmark,
  Clash Display in Figma, is rendered in Poppins Bold.
- **Assets** were exported from Figma. The 3D ornaments are grey renders that Figma tints lime
  with a blend mask. That tint is baked into trimmed WebP files, about 15 KB each instead of 1.3 MB.
- **Content as designed:** the partner logos are the design's "Logoipsum" placeholders, and
  the footer keeps the design's "© 2023".
- **Accessibility:** semantic landmarks, labelled inputs, alt text, visible focus rings, and
  `aria-pressed` on toggle pills.
