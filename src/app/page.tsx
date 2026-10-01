import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CourseExplorer } from "@/components/landing/CourseExplorer";
import { CreateManageSection } from "@/components/landing/CreateManageSection";
import { CreatorCta } from "@/components/landing/CreatorCta";
import { GlowBackdrop, growthGlows } from "@/components/landing/GlowBackdrop";
import { GrowthSection } from "@/components/landing/GrowthSection";
import { Hero } from "@/components/landing/Hero";
import { LearningPaths } from "@/components/landing/LearningPaths";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <>
      {/* The header floats over the hero so both share one blue background + 120px grid (Figma Hero_Frame). */}
      <Header className="absolute inset-x-0 top-0" />
      <main className="flex-1">
        <div className="bg-primary bg-grid pt-20 [background-position:top_center]! lg:pt-[120px]">
          <Hero />
        </div>
        <LogoStrip />
        <CourseExplorer />
        <LearningPaths />
        <GlowBackdrop glows={growthGlows}>
          <GrowthSection />
          <CreateManageSection />
        </GlowBackdrop>
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
