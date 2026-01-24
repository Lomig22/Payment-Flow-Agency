import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimisation performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Métadonnées SEO complètes
export const metadata: Metadata = {
  // Base URL pour les images Open Graph
  metadataBase: new URL("https://agency-premium.fr"),
  
  // Titre et description optimisés pour le SEO
  title: {
    default: "Agency Premium | Agence Web & Marketing Digital Paris",
    template: "%s | Agency Premium",
  },
  description:
    "Agence digitale premium à Paris. Création de sites web performants, SEO, marketing digital et automatisation IA. Plus de 150 clients satisfaits. Livraison en 48-72h.",
  
  // Mots-clés ciblés
  keywords: [
    "agence web paris",
    "création site internet",
    "agence digitale",
    "marketing digital",
    "référencement SEO",
    "agence SEO paris",
    "création site e-commerce",
    "automatisation IA",
    "consultant marketing digital",
    "développeur web freelance",
    "site vitrine professionnel",
    "refonte site web",
  ],
  
  // Auteur et éditeur
  authors: [{ name: "Agency Premium", url: "https://agency-premium.fr" }],
  creator: "Agency Premium",
  publisher: "Agency Premium",
  
  // Configuration robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://agency-premium.fr",
    siteName: "Agency Premium",
    title: "Agency Premium | Agence Web & Marketing Digital Paris",
    description:
      "Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale. Agence digitale premium à Paris.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agency Premium - Agence Web & Marketing Digital",
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Agency Premium | Agence Web & Marketing Digital Paris",
    description:
      "Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale.",
    images: ["/og-image.jpg"],
    creator: "@agencypremium",
  },
  
  // Autres métadonnées
  category: "technology",
  classification: "Agence Web, Marketing Digital, SEO",
  
  // Vérification pour Search Console
  verification: {
    google: "votre-code-verification-google",
  },
  
  // Canonical et alternates
  alternates: {
    canonical: "https://agency-premium.fr",
    languages: {
      "fr-FR": "https://agency-premium.fr",
    },
  },
  
  // Application mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Agency Premium",
  },
  
  // Format detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Schema.org JSON-LD pour le site entier
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://agency-premium.fr/#website",
      "url": "https://agency-premium.fr",
      "name": "Agency Premium",
      "description": "Agence digitale premium - Sites web, SEO et Marketing Digital",
      "publisher": {
        "@id": "https://agency-premium.fr/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://agency-premium.fr/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "Organization",
      "@id": "https://agency-premium.fr/#organization",
      "name": "Agency Premium",
      "url": "https://agency-premium.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agency-premium.fr/logo.png",
        "width": 512,
        "height": 512
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-1-23-45-67-89",
        "contactType": "customer service",
        "areaServed": "FR",
        "availableLanguage": "French"
      },
      "sameAs": [
        "https://www.linkedin.com/company/agency-premium",
        "https://twitter.com/agencypremium",
        "https://www.instagram.com/agencypremium"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Avenue des Champs-Élysées",
        "addressLocality": "Paris",
        "postalCode": "75008",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://agency-premium.fr/#localbusiness",
      "name": "Agency Premium",
      "image": "https://agency-premium.fr/og-image.jpg",
      "priceRange": "€€€",
      "telephone": "+33-1-23-45-67-89",
      "email": "contact@agency-premium.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Avenue des Champs-Élysées",
        "addressLocality": "Paris",
        "postalCode": "75008",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8566,
        "longitude": 2.3522
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect pour les ressources externes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content pour l'accessibilité */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        
        <Header />
        <main id="main-content" className="relative" role="main">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
