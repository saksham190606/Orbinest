import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://orbinest.com";

export const viewport: Viewport = {
  themeColor: "#090D16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Orbinest Studio | Modern Web Design & Engineering Collective",
  description:
    "High-performance websites and digital solutions tailored for education institutes, local businesses, healthcare clinics, and personal digital milestones.",
  keywords: [
    "Web development",
    "Next.js agency",
    "clinic website design",
    "school portal development",
    "e-commerce web solutions",
    "digital gift websites",
    "full-stack web development India",
    "Tailwind CSS agency",
    "Framer Motion agency",
    "high-performance Next.js",
  ],
  authors: [{ name: "Orbinest Studio", url: SITE_URL }],
  creator: "Orbinest Studio",
  publisher: "Orbinest Studio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Orbinest Studio | Modern Web Design & Engineering Collective",
    description:
      "High-performance websites and digital solutions tailored for education institutes, local businesses, healthcare clinics, and personal digital milestones.",
    url: SITE_URL,
    siteName: "Orbinest Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbinest Studio | Modern Web Design & Engineering Collective",
    description:
      "High-performance websites and digital solutions tailored for education institutes, local businesses, healthcare clinics, and personal digital milestones.",
    creator: "@orbinest",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Orbinest Studio",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        "Full-stack web engineering collective building modern websites for education institutes, local businesses, medical clinics, and personal milestones.",
      sameAs: [
        "https://github.com",
        "https://linkedin.com",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Aarav Sharma",
          jobTitle: "Lead Architect & Full-Stack Engineer",
        },
        {
          "@type": "Person",
          name: "Rohan Mehta",
          jobTitle: "UI/UX & Frontend Design Engineer",
        },
        {
          "@type": "Person",
          name: "Devon Vance",
          jobTitle: "DevOps, Security & Cloud Engineer",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Orbinest Studio",
      url: SITE_URL,
      description:
        "Full-stack web engineering collective building modern websites for education institutes, local businesses, medical clinics, and personal milestones.",
      priceRange: "₹1,200 - ₹50,000+",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI, Net Banking, Razorpay, Stripe",
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Education & Coaching Institute Portals",
              description:
                "High-converting admissions funnels, course directories, faculty profiles, and automated WhatsApp inquiry routing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Showroom & E-Commerce Web Apps",
              description:
                "Zero-latency product catalogs, WhatsApp checkout integration, Razorpay payment processing, and local SEO ranking.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Medical Clinic & Healthcare Websites",
              description:
                "Doctor credential verifications, localized treatment breakdowns, clinic photo tours, and one-touch appointment booking.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Digital Gifts & Relationship Portals",
              description:
                "Interactive milestone timelines, audio-synced memory timelines, secret note reveals, and password-protected galleries.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-foreground antialiased selection:bg-indigo-500/30 selection:text-foreground">
        <Navbar />
        <main className="min-h-screen flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
