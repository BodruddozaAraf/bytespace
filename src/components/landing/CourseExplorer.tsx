import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/data/courses";
import { CategoryPills } from "./CategoryPills";

/** "Discover Your Passion, Build Your Skills" — heading, category pills and course grid (Figma 12:101, 21:33, 33:683). */
export function CourseExplorer() {
  return (
    <section aria-labelledby="explore-title" className="pt-16 lg:pt-[72px]">
      <Container>
        <SectionHeading
          title={
            <span id="explore-title">
              Discover Your Passion, <br className="hidden sm:inline" />
              Build Your Skills
            </span>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          descriptionClassName="max-w-[917px]"
        />

        <div className="mt-10 lg:mt-[42px]">
          <CategoryPills />
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[77px] lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
