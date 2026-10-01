import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/data/landing";
import { NewsletterForm } from "./NewsletterForm";

/** Site footer (Figma 34:1256). */
export function Footer() {
  return (
    <footer className="border-t border-line-strong bg-surface text-ink">
      <Container className="flex flex-col gap-16 pt-14 pb-10 lg:gap-[130px] lg:pt-[71px] lg:pb-[72px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-[92px]">
          <div className="flex max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <p className="max-w-[504px] text-xs leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 xl:w-[580px] xl:pt-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-4 text-sm leading-[1.6]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="rounded-sm transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-strong pt-5 text-xs leading-[1.6] sm:flex-row sm:items-start sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="rounded-sm transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
