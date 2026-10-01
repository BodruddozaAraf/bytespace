import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HappyStudentsCard } from "@/components/ui/StatCard";
import { creatorBenefits, ornamentImages } from "@/data/landing";
import { RevenueCard } from "./FloatingCards";
import { photoShadow } from "./styles";

/**
 * "Create & Manage Courses Easily." (Figma 34:1158). Image composition is a 541×596 box with
 * children placed in % so it scales down; the text comes first on small screens.
 */
export function CreateManageSection() {
  return (
    <section aria-labelledby="create-title" className="pt-20 pb-20 lg:pt-[72px] lg:pb-[120px]">
      <Container className="flex flex-col-reverse gap-12 xl:flex-row xl:items-center xl:gap-[79px]">
        <div className="relative mx-auto aspect-[541/596] w-full max-w-[541px] shrink-0 xl:mx-0 xl:w-[541px]">
          <RevenueCard
            title="Total Revenue"
            period="July 1-28"
            amount="$120.29"
            change="+12$"
            progress={56}
            className="absolute top-[7.38%] left-0 hidden sm:flex"
          />
          <RevenueCard
            title="Year to Date"
            period="2023"
            amount="$1,200.38"
            change="+12$"
            className="absolute top-[32.55%] left-0 hidden w-[134px] sm:flex"
          />
          <div className={`absolute top-0 left-[5.18%] h-full w-[80.4%] ${photoShadow}`}>
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/landing/creator-woman.webp"
                alt="Smiling creator with headphones holding a tablet"
                width={500}
                height={500}
                sizes="(min-width: 640px) 683px, 130vw"
                className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
              />
            </div>
          </div>
          <HappyStudentsCard tone="white" className="absolute top-[69.3%] left-[52.31%] hidden sm:flex" />
          <Image
            src={ornamentImages.squiggleBLime.src}
            alt=""
            aria-hidden
            width={141}
            height={150}
            className="pointer-events-none absolute top-[25.17%] left-[62.66%] h-auto w-[26.06%]"
          />
        </div>

        <div className="flex flex-col gap-10 xl:w-[580px]">
          <SectionHeading
            align="left"
            className="gap-10"
            title={<span id="create-title">Create &amp; Manage Courses Easily.</span>}
            titleClassName="max-w-[391px]"
            description={
              <>
                <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities in the
                creation, publication, and administration of educational courses.
              </>
            }
            descriptionClassName="max-w-[574px] text-body-alt"
          />
          <ul className="flex flex-col gap-4">
            {creatorBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-lg leading-[1.2] font-medium text-ink">
                <Image src="/images/landing/icon-check-circle.svg" alt="" width={24} height={24} className="size-6" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
