import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Conventionné CPAM 24h/24`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "taxi Montigny-lès-Cormeilles",
    "taxi Herblay",
    "taxi conventionné CPAM 95",
    "taxi Val-d'Oise",
    "taxi aéroport CDG",
    "taxi Orly",
    "taxi médical 95",
    "VTC Montigny",
    "taxi 24h/24",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | CPAM 24h/24`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TaxiService",
      "@id": `${SITE.url}/#taxi`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phoneE164,
      email: SITE.email,
      image: `${SITE.url}/og.jpg`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        postalCode: SITE.postalCode,
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.995,
        longitude: 2.196,
      },
      areaServed: [
        { "@type": "City", name: "Montigny-lès-Cormeilles" },
        { "@type": "City", name: "Herblay-sur-Seine" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "187",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment réserver un taxi à Montigny-lès-Cormeilles ou Herblay ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Appelez le 07 63 08 96 95 pour réserver immédiatement. Service 24h/24, 7j/7 dans tout le Val-d'Oise (95).",
          },
        },
        {
          "@type": "Question",
          name: "Êtes-vous conventionné CPAM ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous sommes agréés CPAM dans le Val-d'Oise. Tiers payant direct, aucune avance de frais avec votre prescription médicale.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased">
        {children}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
