import type { Metadata, Viewport } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-barlow", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: "Discover iCrown Fitness Hub. Explore our gym, workout environment, and fitness community. Connect with us to begin your fitness journey.",
  openGraph: { title: `${site.name} | ${site.tagline}`, description: "Train with purpose at iCrown Fitness Hub.", images: ["/media/photos/hex-hall.webp"], type: "website" },
};
export const viewport: Viewport = { themeColor: "#0a0807" };

/** Structured data using only verified details (no ratings or hours). */
const structuredData = {
  "@context": "https://schema.org", "@type": "ExerciseGym", name: site.name,
  address: { "@type": "PostalAddress", streetAddress: "Balummahra Junction", addressLocality: "Gampaha", postalCode: "11056", addressCountry: "LK" },
  telephone: `+${site.coach.phoneIntl}`, sameAs: [site.social.facebook, site.social.tiktok], hasMap: site.mapsUrl,
};

/** Root layout: fonts and global styles. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${anton.variable} ${barlow.variable}`} suppressHydrationWarning><body className="font-sans antialiased" suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>);
}
