import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords: [
      ...keywords,
      "locksmith Orlando",
      "locksmith Orlando FL",
      "Orlando locksmith",
      "emergency locksmith Orlando",
      "affordable locksmith Orlando",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
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
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Orlando",
      "geo.position": `${SITE_CONFIG.geo.lat};${SITE_CONFIG.geo.lng}`,
      ICBM: `${SITE_CONFIG.geo.lat}, ${SITE_CONFIG.geo.lng}`,
    },
  };
}

export const HOME_META = generateMetadata({
  title: "24/7 Emergency Locksmith in Orlando, FL",
  description: `Affordable Locksmith Orlando — Licensed & insured. 20–30 min response. Emergency lockouts, residential, commercial & automotive locksmith services. Call ${SITE_CONFIG.phone}`,
  path: "/",
  keywords: [
    "24/7 locksmith Orlando",
    "emergency locksmith near me",
    "car lockout Orlando",
    "house lockout Orlando",
    "lock rekeying Orlando",
  ],
});
