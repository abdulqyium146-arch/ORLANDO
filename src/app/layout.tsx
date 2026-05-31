import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyBanner from "@/components/layout/EmergencyBanner";
import MobileActionBar from "@/components/layout/MobileActionBar";
import StickyCallButton from "@/components/layout/StickyCallButton";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generatePersonSchema,
} from "@/lib/schema";
import { SITE_CONFIG, AUTHOR } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `24/7 Emergency Locksmith Orlando FL | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `Licensed & insured locksmith in Orlando, FL. 24/7 emergency service, 20–30 min response. Residential, commercial & automotive locksmith. Call ${SITE_CONFIG.phone}`,
  keywords: [
    "locksmith Orlando",
    "emergency locksmith Orlando",
    "locksmith Orlando FL",
    "24 hour locksmith Orlando",
    "car lockout Orlando",
    "house lockout Orlando",
    "affordable locksmith Orlando",
    "locksmith near me Orlando",
    "lock rekeying Orlando",
    "car key programming Orlando",
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  publisher: SITE_CONFIG.name,
  category: "Locksmith Services",
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
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `24/7 Emergency Locksmith Orlando FL | ${SITE_CONFIG.name}`,
    description: `Licensed & insured locksmith in Orlando, FL. 24/7 emergency service, 20–30 min response. Call ${SITE_CONFIG.phone}`,
    images: [
      {
        url: "/professional-locksmith-orlando.webp",
        width: 800,
        height: 600,
        alt: `${SITE_CONFIG.name} — Licensed Locksmith in Orlando FL`,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `24/7 Locksmith Orlando | ${SITE_CONFIG.name}`,
    description: `Licensed locksmith in Orlando, FL. 24/7 emergency service. Call ${SITE_CONFIG.phone}`,
    images: ["/professional-locksmith-orlando.webp"],
  },
  alternates: { canonical: SITE_CONFIG.url },
  verification: {
    google: "fd9kURQSurl6Cd7LXeHocOK65S3qVW4T9dRXTL4Asmk",
  },
  // favicon.ico, icon.png, apple-icon.png in src/app/ — Next.js auto-generates <link> tags
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Orlando, Florida",
    "geo.position": `${SITE_CONFIG.geo.lat};${SITE_CONFIG.geo.lng}`,
    ICBM: `${SITE_CONFIG.geo.lat}, ${SITE_CONFIG.geo.lng}`,
    "msapplication-TileColor": "#1e3a5f",
    "msapplication-TileImage": "/android-chrome-192x192.png",
    "msapplication-config": "none",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateLocalBusinessSchema(),
    generatePersonSchema(),
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        {/* Entity/Knowledge Graph schemas */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <meta name="theme-color" content="#1e3a5f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Locksmith Orlando" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        {/* favicon link tags are handled by metadata.icons above */}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
        <StickyCallButton />
      </body>
    </html>
  );
}
