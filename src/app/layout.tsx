import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

// Headings: Poppins (same as Figma).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Body: Figma uses Satoshi (Fontshare, not on Google Fonts). DM Sans is the closest Google match.
const satoshiSubstitute = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description:
    "ByteSpace — get access to hundreds of courses. Unlock your creativity, gain valuable knowledge and grow your business.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshiSubstitute.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
