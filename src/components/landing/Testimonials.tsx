import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/landing";
import { GlowBackdrop, testimonialGlows } from "./GlowBackdrop";

/** "Discover What Our Community Is Saying" (Figma 34:1175). */
export function Testimonials() {
  return (
    <GlowBackdrop glows={testimonialGlows}>
      <section aria-labelledby="testimonials-title" className="py-20 lg:pt-[74px] lg:pb-[80px]">
        <Container className="flex flex-col gap-12 lg:gap-[72px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[43px]">
            <h2
              id="testimonials-title"
              className="max-w-[577px] font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-balance text-ink-strong sm:text-4xl lg:text-[44px]"
            >
              Discover What Our Community Is Saying
            </h2>
            <p className="max-w-[580px] text-base leading-[1.6] text-body sm:text-lg">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative journey of learning and creating on our platform.
              Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
              creators.
            </p>
          </div>

          <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="flex flex-col gap-6 rounded-card bg-surface p-6">
                  <Image src={t.avatar} alt="" width={80} height={80} className="size-20 rounded-full object-cover" />
                  <figcaption className="flex flex-col">
                    <span className="font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-ink-strong">
                      {t.name}
                    </span>
                    <span className="text-lg leading-[1.6] text-primary">{t.role}</span>
                  </figcaption>
                  <blockquote className="text-lg leading-[1.6] text-body">&ldquo;{t.quote}&rdquo;</blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </GlowBackdrop>
  );
}
