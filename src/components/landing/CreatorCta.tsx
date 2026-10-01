import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ctaOrnaments } from "@/data/landing";
import { Ornaments } from "./Ornaments";

/** "Unlock Your Potential as a Creator with ByteSpace" blue band (Figma 34:1161). */
export function CreatorCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-primary bg-grid py-20 [background-position:top_center]! lg:flex lg:h-[488px] lg:items-center lg:py-0"
    >
      <Container className="relative z-10 flex flex-col items-center gap-10">
        <SectionHeading
          tone="light"
          className="gap-10"
          title={<span id="cta-title">Unlock Your Potential as a Creator with ByteSpace</span>}
          titleClassName="max-w-[710px] text-wrap text-surface-muted"
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
          descriptionClassName="max-w-[964px]"
        />
        <ButtonLink href="/register" variant="lime">
          Join as Creator
        </ButtonLink>
      </Container>
      <Ornaments items={ctaOrnaments} className="z-20" />
    </section>
  );
}
