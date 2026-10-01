import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HappyStudentsCard } from "@/components/ui/StatCard";
import { heroOrnaments } from "@/data/landing";
import { CategoryStatCard, LearningProgressCard } from "./FloatingCards";
import { HeroSearch } from "./HeroSearch";
import { Ornaments } from "./Ornaments";
import { photoShadow } from "./styles";

/**
 * Hero (Figma 1:1695, below the header). Transparent: the blue + grid background comes from the
 * wrapper in page.tsx so it runs continuously behind the header.
 *
 * The photo "stage" is sized from `--w` (the photo width: 578px at desktop, the viewport on
 * phones) so the lime ring scales with it. Floating cards and 3D ornaments appear from `lg` and `xl`.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden lg:h-[904px]">
      <Container className="relative z-10 flex flex-col items-center gap-10 pt-8 text-center sm:gap-[60px] lg:pt-[49px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1
            id="hero-title"
            className="max-w-[935px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-balance text-surface sm:text-[56px] lg:text-[72px]"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[860px] text-base leading-[1.6] text-line sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        <HeroSearch />
      </Container>

      <div className="relative mx-auto mt-12 h-[calc(var(--w)*0.886)] w-(--w) [--w:min(578px,calc(100vw-40px))] lg:absolute lg:top-[392px] lg:left-[calc(50%-289px)] lg:mx-0 lg:mt-0">
        {/* Lime ring (Figma 1:1866: 1149px circle, 320px stroke) */}
        <div
          aria-hidden
          className="absolute top-[calc(var(--w)*0.1211)] left-1/2 size-[calc(var(--w)*1.988)] -translate-x-1/2 rounded-full border-[length:calc(var(--w)*0.5536)] border-accent"
        />
        <Image
          src="/images/landing/hero-student.webp"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          preload
          sizes="(min-width: 640px) 578px, 100vw"
          className={`absolute top-0 left-0 z-10 h-auto w-full ${photoShadow}`}
        />

        <HappyStudentsCard
          tone="white"
          className="absolute top-[325px] left-[calc(50%-392px)] z-10 hidden lg:flex"
        />
        <LearningProgressCard className="absolute top-[139px] left-[calc(50%+122px)] z-10 hidden lg:flex" />
        <CategoryStatCard className="absolute top-[127px] left-[calc(50%-316px)] z-30 hidden lg:flex" />
      </div>

      <Ornaments items={heroOrnaments} className="z-20" />
    </section>
  );
}
