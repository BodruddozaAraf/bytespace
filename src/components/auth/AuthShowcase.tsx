import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/StatCard";
import { getCourse } from "@/data/courses";
import { cn } from "@/lib/cn";

/**
 * Decorative composition on the left of the auth pages (Figma group 15254:195):
 * two overlapping course cards, the lime "Happy Students" card and three 3D ornaments.
 *
 * Positions are the Figma offsets relative to the group's top-left (x=97, y=305 in the
 * 1440 frame), so the box is a fixed 548×585 canvas. It is scaled down on narrower
 * desktops and hidden below `lg` by the AuthShell.
 */
export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-[585px] w-[548px] shrink-0", className)}>
      <CourseCard
        course={getCourse("build-digital-asset")}
        sizes="341px"
        variant="showcase"
        className="absolute top-[89px] left-[25px] h-[384px] w-[373px]"
      />
      <CourseCard
        course={getCourse("the-power-of-big-data")}
        sizes="341px"
        variant="showcase"
        className="absolute top-0 left-[136px] h-[384px] w-[373px]"
      />
      <HappyStudentsCard className="absolute top-[435px] left-[251px] shadow-none" />

      {/* 3D ornaments: renders were trimmed, so offsets are the Figma box + trimmed margin. */}
      <Image
        src="/images/shared/3d-squiggle.webp"
        alt=""
        width={114}
        height={121}
        className="absolute top-[350px] left-[405px] h-[121px] w-[114px] -scale-x-100"
      />
      <Image
        src="/images/shared/3d-torus.webp"
        alt=""
        width={101}
        height={93}
        className="absolute top-[40px] left-[76px] h-[93px] w-[101px]"
      />
      <Image
        src="/images/shared/3d-cone.webp"
        alt=""
        width={124}
        height={137}
        className="absolute top-[419px] left-[27px] h-[137px] w-[124px]"
      />
    </div>
  );
}
