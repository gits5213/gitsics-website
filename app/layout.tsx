import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseErrorHandler from "./components/AdSenseErrorHandler";
import AdSenseScript from "./components/AdSenseScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gitsics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GITSICS | QA, SDET & Digital Literacy Training | Job Placement",
    template: "%s | GITSICS",
  },
  description: "Transform your career with hands-on QA/SDET training, automation frameworks, digital literacy, and job placement. From Learning to Earning — Globally. In-person, online & corporate.",
  keywords: [
    "QA training",
    "SDET training",
    "automation testing",
    "Playwright",
    "Selenium",
    "Cypress",
    "IT staffing",
    "software testing",
    "career training",
    "digital literacy",
    "Basic computer skills",
    "job search training",
    "Digital Marketing training",
    "manual testing course",
    "API testing",
    "DevOps for testers",
    "accessibility testing",
    "508 compliance",
  ],
  authors: [{ name: "Global I Tech Solutions Inc.", url: siteUrl }],
  creator: "Global I Tech Solutions Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "GITSICS",
    title: "GITSICS | QA, SDET & Digital Literacy Training | Job Placement",
    description: "Transform your career with expert QA/SDET training, digital literacy programs, and job placement support. In-person, online & corporate.",
    images: [{ url: "/gitsicsLogo.png", width: 512, height: 512, alt: "GITSICS Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GITSICS | QA, SDET & Digital Literacy Training",
    description: "Expert training and job placement. QA, SDET, digital literacy, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/icon.svg`,
  },
  other: {
    "google-adsense-account": "ca-pub-9112023534705295",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global I Tech Solutions Inc.",
    alternateName: "GITSICS",
    url: siteUrl,
    logo: `${siteUrl}/gitsicsLogo.png`,
    description: "IT training, staffing and consulting. QA, SDET, digital literacy training and job placement.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "202nd Street & Hillside Avenue",
      addressLocality: "New York",
      addressCountry: "US",
      postalCode: "11423",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="skip-link fixed left-4 top-4 z-[100] -translate-y-[200%] bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <AdSenseScript />
        <AdSenseErrorHandler />
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
