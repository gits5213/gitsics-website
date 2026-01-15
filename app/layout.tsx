import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseErrorHandler from "./components/AdSenseErrorHandler";
import AdSenseScript from "./components/AdSenseScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Global I Tech Solutions Inc. | IT Training, Staffing & Consulting",
  description: "Transform your career with hands-on QA/SDET training, automation frameworks, and job placement support. From Learning to Earning — Globally.",
  keywords: "QA training, SDET training, automation testing, Playwright, Selenium, Cypress, IT staffing, software testing, career training",
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/icon.svg`,
  },
  other: {
    "google-adsense-account": "ca-pub-9112023534705295",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <AdSenseScript />
        <AdSenseErrorHandler />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
