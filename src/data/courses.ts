export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  creator: string;
  level: CourseLevel;
  rating: number;
  /** Price in USD. */
  price: number;
  /** Shown after the price, e.g. "/lifetime". */
  priceUnit: string;
  thumbnail: string;
  stats: {
    lessons: number;
    duration: string;
    comments: number;
  };
  /** Enrolled-student avatars and the "+N" bubble. */
  students: {
    avatars: string[];
    extra: string;
  };
};

const STUDENT_AVATARS = [1, 2, 3, 4].map((n) => `/images/shared/avatar-${n}.png`);

const defaults = {
  creator: "purepearl studio",
  level: "Beginner",
  rating: 4.5,
  price: 25,
  priceUnit: "/lifetime",
  stats: { lessons: 17, duration: "2 hours 16 mins", comments: 59 },
  students: { avatars: STUDENT_AVATARS, extra: "26+" },
} satisfies Omit<Course, "id" | "title" | "thumbnail">;

// TODO(landing): thumbnails for courses without a downloaded image currently reuse the two from the
// Login frame; point them at public/images/landing/* once the course grid (33:683) is fetched.
export const courses: Course[] = [
  {
    ...defaults,
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    thumbnail: "/images/shared/course-build-digital-asset.jpg",
  },
  {
    ...defaults,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    thumbnail: "/images/shared/course-build-digital-asset.jpg",
  },
  {
    ...defaults,
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    thumbnail: "/images/shared/course-big-data.jpg",
  },
  {
    ...defaults,
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    thumbnail: "/images/shared/course-big-data.jpg",
  },
  {
    ...defaults,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    thumbnail: "/images/shared/course-big-data.jpg",
  },
  {
    ...defaults,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    thumbnail: "/images/shared/course-build-digital-asset.jpg",
  },
];

export function getCourse(id: string): Course {
  const course = courses.find((c) => c.id === id);
  if (!course) throw new Error(`Unknown course: ${id}`);
  return course;
}
