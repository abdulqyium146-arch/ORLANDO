import { SITE_CONFIG, REVIEWS } from "./config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    alternateName: "Affordable Locksmith",
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description:
      "Licensed and insured locksmith in Orlando, FL offering 24/7 emergency locksmith services, residential, commercial, and automotive locksmith services with 20–30 minute response times.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    openingHours: "Mo-Su 00:00-24:00",
    openingHoursSpecification: [
      {
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
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      datePublished: "2025-12-01",
    })),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    areaServed: [
      { "@type": "City", name: "Orlando" },
      { "@type": "City", name: "Winter Garden" },
      { "@type": "City", name: "Ocoee" },
      { "@type": "City", name: "Apopka" },
      { "@type": "City", name: "Winter Park" },
      { "@type": "City", name: "Kissimmee" },
    ],
    serviceType: [
      "Emergency Locksmith",
      "Car Lockout",
      "House Lockout",
      "Lock Rekeying",
      "Lock Installation",
      "Car Key Programming",
      "Safe Opening",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Locksmith",
            description: "24/7 emergency lockout service with 20–30 min response",
          },
          price: "45.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lock Rekeying",
            description: "Rekey residential or commercial locks",
          },
          price: "25.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Key Programming",
            description: "Transponder key and key fob programming",
          },
          price: "85.00",
          priceCurrency: "USD",
        },
      ],
    },
    sameAs: [SITE_CONFIG.social.google],
    knowsAbout: [
      "Lock Installation",
      "Lock Rekeying",
      "Emergency Lockout",
      "Car Key Programming",
      "Safe Opening",
      "Security Locks",
      "Deadbolt Installation",
      "Access Control",
    ],
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
      },
    },
    areaServed: { "@type": "City", name: "Orlando" },
    offers: {
      "@type": "Offer",
      price: price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    },
    serviceType: name,
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateLocationSchema(locationName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    name: `Affordable Locksmith ${locationName}`,
    url: `${SITE_CONFIG.url}/locations/${slug}`,
    telephone: SITE_CONFIG.phone,
    description: `Professional locksmith services in ${locationName}, FL. Emergency lockouts, residential, commercial, and automotive locksmith services available 24/7.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationName,
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: locationName },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 56,
    },
  };
}
