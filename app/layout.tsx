import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { counties, faqs, site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const title = "Medical Courier Service Orlando, FL — OP Genesis Healthcare Logistics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description
  }
};

// Service-area business: no street address is published (only city/region/ZIP).
// Add `streetAddress` here if a public storefront address should be listed.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  description:
    "GPS-tracked medical courier services with electronic chain of custody for hospitals, labs, and pharmacies in Orlando, Florida.",
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  logo: `${site.url}/icon.png`,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "US"
  },
  areaServed: [site.city, ...counties.map((c) => `${c} County`), "Central Florida"],
  serviceType: ["Medical Courier", "Specimen Transport", "Pharmacy Delivery", "STAT Courier", "Lab-to-Lab Transfer"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Courier Service",
  provider: {
    "@type": "LocalBusiness",
    name: site.legalName
  },
  areaServed: "Orlando, FL and Central Florida",
  description:
    "GPS-tracked medical courier and specimen transport services with electronic chain of custody for hospitals, clinical laboratories, and pharmacies in central Florida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, faqSchema, serviceSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}
