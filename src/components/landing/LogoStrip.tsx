import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/landing";

/** Partner logo strip (Figma 1:1794): five "Logoipsum" placeholders on a light grey band. */
export function LogoStrip() {
  return (
    <section aria-label="Our partners" className="bg-surface-muted py-12 lg:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-10 gap-y-8 lg:flex-nowrap lg:gap-[72px]">
          {partnerLogos.map((logo, i) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={`Partner logo ${i + 1}`}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto lg:h-[41px]"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
