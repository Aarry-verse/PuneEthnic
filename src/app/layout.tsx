import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: "Pune Ethnic | Ethnic Wear & Wedding Fashion in Pune", template: "%s | Pune Ethnic" },
  description: "Explore ethnic fashion and wedding wear at Pune Ethnic, located in Sadashiv Peth, Pune. Contact the store for collection enquiries and more information.",
  openGraph: { siteName: "Pune Ethnic", locale: "en_IN", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "ClothingStore", name: business.name, telephone: business.phone,
  address: { "@type": "PostalAddress", streetAddress: "Sadashiv Peth", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
  openingHours: "Mo-Su 10:00-22:00", hasMap: business.mapsUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:p-3">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
