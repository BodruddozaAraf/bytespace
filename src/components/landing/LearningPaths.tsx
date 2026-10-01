import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/landing";

/** "Explore Diverse Learning Paths at Bytespace" — heading + 6 category cards (Figma 34:684, 34:725). */
export function LearningPaths() {
  return (
    <section aria-labelledby="paths-title" className="pt-16 pb-20 lg:pt-[72px] lg:pb-[120px]">
      <Container>
        <SectionHeading
          title={<span id="paths-title">Explore Diverse Learning Paths at Bytespace</span>}
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          descriptionClassName="max-w-[917px]"
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((path) => (
            <li key={path.label}>
              <Link
                href="#"
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-line-strong bg-surface p-3 text-center transition-colors hover:border-primary hover:bg-surface-muted"
              >
                <span className="grid size-[60px] place-items-center rounded-full bg-accent">
                  <Image src={path.icon} alt="" width={36} height={36} className="size-9" />
                </span>
                <span className="text-lg leading-[1.2] font-medium text-ink sm:text-xl">{path.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
