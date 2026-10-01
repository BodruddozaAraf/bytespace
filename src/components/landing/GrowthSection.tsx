import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCourse } from "@/data/courses";
import { growthStats, ornamentImages } from "@/data/landing";
import { LearningProgressCard } from "./FloatingCards";
import { photoShadow } from "./styles";

/**
 * "Your Path to Professional Growth Starts Here!" (Figma 34:1157). The image composition is a
 * 621×552 box; children are placed in % of it so it scales down on smaller screens.
 */
export function GrowthSection() {
  return (
    <section aria-labelledby="growth-title" className="pt-20 lg:pt-[120px]">
      <Container className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-[63px]">
        <div className="flex flex-col gap-10 xl:w-[574px] xl:shrink-0">
          <SectionHeading
            align="left"
            className="gap-10"
            title={<span id="growth-title">Your Path to Professional Growth Starts Here!</span>}
            titleClassName="max-w-[577px]"
            description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
            descriptionClassName="max-w-[477px] text-body-alt"
          />
          <dl className="flex flex-wrap items-end gap-x-14 gap-y-6">
            {growthStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-lg leading-[1.6] text-body-alt">{stat.label}</dt>
                <dd className="font-heading text-4xl leading-[44px] font-medium tracking-[-0.01em] text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[621/552] w-full max-w-[621px] shrink-0 xl:mx-0 xl:w-[621px]">
          <CourseCard
            course={getCourse("learn-figma-from-basic")}
            sizes="373px"
            className="absolute top-0 left-0 hidden w-[60.06%] sm:flex"
          />
          <Image
            src="/images/landing/hero-student.webp"
            alt="Student learning online with a laptop"
            width={577}
            height={540}
            sizes="(min-width: 640px) 577px, 93vw"
            className={`absolute top-[2.17%] left-0 h-auto w-[92.9%] ${photoShadow}`}
          />
          <LearningProgressCard className="absolute top-[38.59%] left-[55.56%] hidden sm:flex" />
          <Image
            src={ornamentImages.squiggleALime.src}
            alt=""
            aria-hidden
            width={124}
            height={163}
            className="pointer-events-none absolute top-[16.67%] left-[72.6%] h-auto w-[19.97%]"
          />
        </div>
      </Container>
    </section>
  );
}
