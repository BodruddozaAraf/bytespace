/** Landing page content. Copy comes from the Figma text layers (docs/figma/metadata.xml). */

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#" },
  { label: "Creators", href: "#" },
];

/** Category pills (Figma 21:33, 21:56, 21:63), grouped in the three centred rows of the design. */
export const categoryRows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type LearningPath = { label: string; icon: string };

/** "Explore Diverse Learning Paths" cards (Figma 34:725). */
export const learningPaths: LearningPath[] = [
  { label: "Design", icon: "/images/landing/icon-path-design.svg" },
  { label: "Development", icon: "/images/landing/icon-path-development.svg" },
  { label: "IT & Software", icon: "/images/landing/icon-path-it-software.svg" },
  { label: "Business", icon: "/images/landing/icon-path-business.svg" },
  { label: "Marketing", icon: "/images/landing/icon-path-marketing.svg" },
  { label: "Photography", icon: "/images/landing/icon-path-photography.svg" },
];

export type Stat = { value: string; label: string };

/** Growth section stats (Figma 34:773). */
export const growthStats: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

/** "Create & Manage Courses Easily." checklist (Figma 34:902). */
export const creatorBenefits: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export type Testimonial = { name: string; role: string; quote: string; avatar: string };

/** Testimonial cards (Figma 34:1182). */
export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/landing/testimonial-sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/landing/testimonial-james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/landing/testimonial-alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

/** Partner logos (Figma 1:1708) — the design's "Logoipsum" placeholders. */
export const partnerLogos = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/landing/partner-logo-${n}.svg`,
  width: n === 1 ? 167 : n === 2 ? 168 : n === 5 ? 169 : 170,
  height: n === 5 ? 42 : 41,
}));

export type FooterColumn = { title: string; links: NavLink[] };

/** Footer link columns (Figma 34:1272). Titles are hidden in the design; kept for screen readers. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"].map((label) => ({ label, href: "#" })),
  },
  {
    title: "Categories",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"].map((label) => ({ label, href: "#" })),
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/register" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

/**
 * Decorative 3D ornaments. Coordinates are the trimmed shape boxes measured from the Figma frames
 * (1440px wide), expressed as an offset from the horizontal centre so they stay anchored when the
 * viewport is wider/narrower than 1440.
 */
export type Ornament = {
  src: string;
  /** px from the section's horizontal centre to the ornament's left edge (Figma, 1440 frame). */
  x: number;
  /** px from the section's top. */
  y: number;
  /** rendered width in px. */
  w: number;
  /** intrinsic aspect, height / width. */
  ratio: number;
  flip?: boolean;
};

const ORN = {
  squiggleAWhite: { src: "/images/landing/3d-squiggle-a-white.webp", ratio: 787 / 600 },
  squiggleALime: { src: "/images/landing/3d-squiggle-a-lime.webp", ratio: 787 / 600 },
  squiggleBLime: { src: "/images/landing/3d-squiggle-b-lime.webp", ratio: 638 / 600 },
  squiggleBWhite: { src: "/images/shared/3d-squiggle.webp", ratio: 510 / 480 },
  torusWhite: { src: "/images/landing/3d-torus-white.webp", ratio: 549 / 600 },
  torusLime: { src: "/images/shared/3d-torus.webp", ratio: 440 / 480 },
  cylinderLime: { src: "/images/landing/3d-cylinder-lime.webp", ratio: 657 / 600 },
  cylinderWhite: { src: "/images/landing/3d-cylinder-white.webp", ratio: 657 / 600 },
  coneWhite: { src: "/images/landing/3d-cone-white.webp", ratio: 660 / 600 },
  coneLime: { src: "/images/shared/3d-cone.webp", ratio: 528 / 480 },
  coneTallWhite: { src: "/images/landing/3d-cone-tall-white.webp", ratio: 713 / 600 },
};

/** Hero ornaments (Figma 46:79). `y` is relative to the hero section, below the 120px header. */
export const heroOrnaments: Ornament[] = [
  { ...ORN.squiggleBLime, x: -777, y: 165, w: 252 },
  { ...ORN.squiggleBWhite, x: -504, y: 386, w: 115, flip: true },
  { ...ORN.torusWhite, x: -653, y: 621, w: 238 },
  { ...ORN.cylinderLime, x: 556, y: 136, w: 273 },
  { ...ORN.coneWhite, x: 411, y: 366, w: 125 },
  { ...ORN.squiggleAWhite, x: 476, y: 590, w: 190 },
];

/** CTA band ornaments (Figma 46:78). */
export const ctaOrnaments: Ornament[] = [
  { ...ORN.squiggleBLime, x: -777, y: -98, w: 252 },
  { ...ORN.squiggleBWhite, x: -509, y: 34, w: 115, flip: true },
  { ...ORN.coneTallWhite, x: -734, y: 242, w: 128 },
  { ...ORN.torusLime, x: -651, y: 358, w: 238 },
  { ...ORN.coneLime, x: 385, y: 22, w: 125 },
  { ...ORN.cylinderWhite, x: 551, y: 41, w: 273 },
  { ...ORN.squiggleALime, x: 459, y: 327, w: 190 },
];

export const ornamentImages = ORN;
