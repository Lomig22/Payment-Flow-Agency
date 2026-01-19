import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency Premium | Sites Web & Marketing Digital",
  description:
    "Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale. Agence digitale premium pour votre croissance business.",
  keywords: [
    "agence web",
    "marketing digital",
    "SEO",
    "création site web",
    "automatisation IA",
    "agence digitale",
  ],
  authors: [{ name: "Agency Premium" }],
  openGraph: {
    title: "Agency Premium | Sites Web & Marketing Digital",
    description:
      "Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Premium | Sites Web & Marketing Digital",
    description:
      "Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
