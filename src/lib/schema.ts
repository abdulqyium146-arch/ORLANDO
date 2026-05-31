import { SITE_CONFIG, REVIEWS, SERVICES, SERVICE_AREAS, AUTHOR } from "./config";

/* ─── Core entity identifiers ─── */
const BASE = SITE_CONFIG.url;
const BIZ_ID = `${BASE}/#business`;
const ORG_ID = `${BASE}/#organization`;
const WEB_ID = `${BASE}/#website`;
const AUTHOR_ID = `${BASE}/#author`;

/* ─── 0. Person — Author / Expert (E-E-A-T) ─── */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": AUTHOR_ID,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.shortBio,
    url: AUTHOR.url,
    image: {
      "@type": "ImageObject",
      url: AUTHOR.image,
      width: 400,
      height: 400,
    },
    worksFor: { "@id": ORG_ID },
    hasCredential: AUTHOR.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c,
    })),
    knowsAbout: AUTHOR.expertise,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    sameAs: AUTHOR.sameAs,
  };
}

/* ─── 1. Organization ─── */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/logo.webp`,
      width: 200,
      height: 60,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "US-FL",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday","Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "emergency",
        contactOption: "TollFree",
        areaServed: "US-FL",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      SITE_CONFIG.social.google,
      `https://www.yelp.com/biz/affordable-locksmith-orlando`,
      `https://www.bbb.org/us/fl/orlando`,
      `https://www.facebook.com/affordablelocksmithorlando`,
      `https://www.angi.com/companylist/us/fl/orlando/locksmiths.htm`,
    ],
    foundingDate: SITE_CONFIG.founded,
    founder: { "@id": AUTHOR_ID },
    employee: [{ "@id": AUTHOR_ID }],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
  };
}

/* ─── 2. WebSite with SearchAction (SiteLinks Searchbox) ─── */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEB_ID,
    url: BASE,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };
}

/* ─── 3. LocalBusiness (full) ─── */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": BIZ_ID,
    name: SITE_CONFIG.name,
    alternateName: ["Affordable Locksmith", "Locksmith Orlando"],
    url: BASE,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${BASE}/og-image.jpg`,
    logo: `${BASE}/logo.webp`,
    description:
      "Licensed and insured locksmith in Orlando, FL. 24/7 emergency locksmith services with 20–30 minute response times. Residential, commercial, and automotive locksmith serving Orlando and surrounding areas.",
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
    hasMap: SITE_CONFIG.social.google,
    openingHours: "Mo-Su 00:00-24:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday",
          "Friday","Saturday","Sunday",
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
    review: REVIEWS.slice(0, 3).map((r, i) => ({
      "@type": "Review",
      "@id": `${BASE}/#review-${r.id}`,
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      datePublished: r.isoDate,
    })),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      "@id": `https://www.wikidata.org/wiki/${area.name.replace(" ", "_")},_Florida`,
    })),
    serviceType: SERVICES.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services Orlando",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${BASE}/services/${s.slug}`,
        },
        price: s.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        seller: { "@id": BIZ_ID },
        areaServed: { "@type": "City", name: "Orlando" },
        availability: "https://schema.org/InStock",
      })),
    },
    sameAs: [
      SITE_CONFIG.social.google,
      `https://www.yelp.com/biz/affordable-locksmith-orlando`,
      `https://www.facebook.com/affordablelocksmithorlando`,
    ],
    knowsAbout: [
      "Lock Installation",
      "Lock Rekeying",
      "Emergency Lockout",
      "Car Key Programming",
      "Transponder Keys",
      "Key Fob Replacement",
      "Safe Opening",
      "Deadbolt Installation",
      "Smart Lock Installation",
      "Access Control Systems",
      "Master Key Systems",
    ],
    parentOrganization: { "@id": ORG_ID },
  };
}

/* ─── 4. WebPage ─── */
export function generateWebPageSchema({
  name,
  description,
  url,
  type = "WebPage",
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  type?: string;
  breadcrumb?: object;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEB_ID },
    about: { "@id": BIZ_ID },
    author: { "@id": AUTHOR_ID },
    inLanguage: "en-US",
    dateModified: new Date().toISOString().split("T")[0],
    ...(breadcrumb ? { breadcrumb } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };
}

/* ─── 5. Service ─── */
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
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": BIZ_ID },
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: [
        {
          "@type": "Offer",
          price: price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@id": BIZ_ID },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
    },
    review: REVIEWS.slice(0, 2).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.isoDate,
    })),
    serviceType: name,
    category: "Locksmith Services",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

/* ─── 6. FAQPage ─── */
export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE}/faq#faqpage`,
    mainEntity: faqs.map((faq, i) => ({
      "@type": "Question",
      "@id": `${BASE}/faq#q${i + 1}`,
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
        author: { "@id": AUTHOR_ID },
        dateModified: new Date().toISOString().split("T")[0],
      },
    })),
  };
}

/* ─── 7. BreadcrumbList with @id ─── */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1].url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: {
        "@type": "WebPage",
        "@id": item.url,
        url: item.url,
        name: item.name,
      },
    })),
  };
}

/* ─── 8. LocalBusiness — Location variant ─── */
export function generateLocationSchema(locationName: string, slug: string) {
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${BASE}/locations/${slug}#business`,
    name: `${SITE_CONFIG.name} — ${locationName}`,
    url: `${BASE}/locations/${slug}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${BASE}/og-image.jpg`,
    description: `Professional locksmith services in ${locationName}, FL. Emergency lockouts, residential, commercial, and automotive locksmith services available 24/7 with 20–30 minute response times.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: locationName,
      addressRegion: "FL",
      postalCode: area?.zip ?? "",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    currenciesAccepted: "USD",
    areaServed: { "@type": "City", name: locationName, containedInPlace: { "@type": "State", name: "Florida" } },
    parentOrganization: { "@id": BIZ_ID },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
    },
    sameAs: [SITE_CONFIG.social.google],
  };
}

/* ─── 9. HowTo ─── */
export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BASE}/#howto`,
    name: "How to Get Locksmith Service in Orlando",
    description: "Simple 4-step process to get fast locksmith service from Affordable Locksmith Orlando.",
    totalTime: "PT35M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "45" },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Call or Request Online",
        text: "Call our 24/7 line or submit our quick online form with your location and service needed.",
        url: `${BASE}/contact`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Get Upfront Pricing",
        text: "We provide a clear, honest price before any work begins. No surprise fees.",
        url: `${BASE}/faq#pricing`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Fast Technician Dispatch",
        text: "A certified technician is dispatched immediately. Average arrival in Orlando: 20–30 minutes.",
        url: `${BASE}/#howto`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Problem Solved",
        text: "Professional service completed efficiently. We accept all major payment methods.",
        url: `${BASE}/contact`,
      },
    ],
  };
}

/* ─── 10. City+Service combo page ─── */
export function generateCityServiceSchema({
  serviceName,
  serviceDescription,
  cityName,
  slug,
  serviceSlug,
  price,
}: {
  serviceName: string;
  serviceDescription: string;
  cityName: string;
  slug: string;
  serviceSlug: string;
  price: string;
}) {
  const url = `${BASE}/locations/${slug}/${serviceSlug}`;
  return {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "@id": `${url}#service`,
    name: `${serviceName} in ${cityName}, FL`,
    description: serviceDescription,
    url,
    provider: { "@id": BIZ_ID },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} ${cityName}`,
      itemListElement: [{
        "@type": "Offer",
        price: price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      }],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
    },
  };
}
