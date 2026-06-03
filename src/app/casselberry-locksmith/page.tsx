import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, Clock, MapPin, Star, ChevronRight, CheckCircle,
  Shield, BadgeCheck, AlertTriangle, Building2, Home, Car,
  KeyRound, RefreshCw, Wrench, ArrowRight, DollarSign,
} from "lucide-react";
import { SITE_CONFIG, AUTHOR, SERVICES, REVIEWS, SERVICE_AREAS } from "@/lib/config";
import {
  generateLocationSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import CTASection from "@/components/shared/CTASection";
import TrustBadges from "@/components/shared/TrustBadges";
import ReviewCard from "@/components/shared/ReviewCard";
import ContactForm from "@/components/shared/ContactForm";
import AuthorBio from "@/components/shared/AuthorBio";

const CITY = "Casselberry";
const SLUG = "casselberry";
const PAGE_URL = `${SITE_CONFIG.url}/casselberry-locksmith`;

/* ── PAA-targeted FAQs (AIO + AEO) ── */
const FAQS = [
  {
    q: "What locksmith services are available in Casselberry, FL?",
    a: `Affordable Locksmith Orlando provides complete locksmith services in Casselberry, FL including 24/7 emergency lockouts (home, car, office), lock rekeying, deadbolt installation, smart lock setup, car key replacement and transponder key programming, safe opening, commercial master key systems, and access control installation. All services available across Casselberry ZIP codes 32707 and 32730 in Seminole County with 20–30 minute response times.`,
  },
  {
    q: "How much does locksmith service cost in Casselberry?",
    a: `Locksmith service in Casselberry starts at $45 for emergency lockouts. Lock rekeying from $25/lock. Deadbolt installation from $55 (labor). Car key programming and transponder key service from $85. Car key replacement from $95. All prices quoted upfront before work begins — no hidden service call fees, no after-hours surcharges.`,
  },
  {
    q: "Is there a 24-hour locksmith in Casselberry, FL?",
    a: `Yes. Affordable Locksmith Orlando provides 24-hour locksmith service in Casselberry, FL 365 days a year including all holidays and weekends. Average arrival time in Casselberry is 20–30 minutes along the US-17/92, SR 436, and SR 434 corridors. Call ${SITE_CONFIG.phone} for immediate dispatch.`,
  },
  {
    q: "Where is the locksmith on US-17/92 in Casselberry, FL?",
    a: `Affordable Locksmith Orlando provides fully mobile locksmith service along the entire US-17/92 corridor in Casselberry, FL — including the area near Shoot Straight (5051 S US Hwy 17-92), the SR 436 (Semoran Blvd) intersection, and SR 434. We respond to all US-17/92 Casselberry addresses within 20–30 minutes, 24 hours a day.`,
  },
  {
    q: "Do you provide automotive and transponder key locksmith service in Casselberry?",
    a: `Yes. Our automotive locksmiths in Casselberry handle car lockouts, transponder key programming, car key replacement, remote key fob programming, and push-button start key services for all vehicle makes and models. We serve the US-17/92, SR 436, and SR 434 corridors in Casselberry FL with 20–30 minute response times, 24/7.`,
  },
  {
    q: "Is there a locksmith store in Casselberry, FL?",
    a: `Affordable Locksmith Orlando operates as a fully mobile locksmith serving all Casselberry, FL addresses — no storefront visit required. Our mobile units carry all necessary equipment directly to your location anywhere in Casselberry (ZIP 32707 and 32730). We cover the US-17/92 business district, SR 436, SR 434, Lake Concord area, and all residential neighborhoods. Call ${SITE_CONFIG.phone} for on-site service.`,
  },
];

/* ── Pricing data ── */
const PRICING_ROWS = [
  { service: "Emergency Lockout (Home / Office)", href: `/locations/${SLUG}/emergency-locksmith`, price: "From $45", dealer: "$75–$150", time: "20–30 min" },
  { service: "Car Lockout — US-17/92 Casselberry", href: `/locations/${SLUG}/automotive-locksmith`, price: "From $65", dealer: "$75–$150", time: "20–30 min" },
  { service: "Lock Rekeying (per lock)", href: `/locations/${SLUG}/lock-rekeying`, price: "From $25", dealer: "$50–$80", time: "Same day" },
  { service: "Deadbolt Installation", href: `/locations/${SLUG}/lock-installation`, price: "From $55", dealer: "$100–$200", time: "Same day" },
  { service: "Transponder Key Programming", href: `/locations/${SLUG}/car-key-programming`, price: "From $85", dealer: "$200–$500+", time: "Same day" },
  { service: "Car Key Replacement (all makes)", href: `/locations/${SLUG}/car-key-replacement`, price: "From $95", dealer: "$200–$400", time: "Same day" },
];

/* ── Neighborhood coverage ── */
const NEIGHBORHOODS = [
  "Lake Concord", "South Casselberry", "North Casselberry",
  "US-17/92 Corridor", "SR 436 / Semoran Blvd", "SR 434 Corridor",
  "Fern Park Area", "Greenway Square", "Lake Howell Area",
];

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound,
  Cpu: KeyRound, RefreshCw, Wrench, Shield, PlusSquare: Shield,
};

/* ── Metadata ── */
export const metadata: Metadata = {
  title: `Locksmith Casselberry FL | 24/7 on US-17/92 & SR 436 — ${SITE_CONFIG.name}`,
  description: `Professional locksmith in Casselberry, FL (Seminole County). Mobile service on US-17/92, SR 436 & SR 434. Emergency lockouts, rekeying, transponder keys. 20–30 min response 24/7. Licensed & insured. Call ${SITE_CONFIG.phone}`,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "locksmith casselberry",
    "casselberry locksmith",
    "locksmith casselberry fl",
    "locksmith casselberry florida",
    "locksmith casselberry fl 17 92",
    "locksmith on 17-92 in casselberry",
    "locksmith 17 92 casselberry",
    "emergency locksmith casselberry",
    "24 hour locksmith casselberry fl",
    "automotive locksmith casselberry",
    "automotive locksmith casselberry transponder",
    "locksmith services casselberry fl",
    "locksmith in casselberry fl",
    "local locksmith casselberry fl",
    "locksmith store casselberry fl",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `Locksmith Casselberry FL | 24/7 on US-17/92 & SR 436`,
    description: `Professional locksmith in Casselberry, FL. Mobile service on US-17/92, SR 436 & SR 434. Emergency lockouts, rekeying, transponder keys. 20–30 min 24/7. Call ${SITE_CONFIG.phone}`,
    images: [{ url: "/professional-locksmith-orlando.webp", width: 800, height: 600, alt: "Locksmith Casselberry FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Locksmith Casselberry FL | ${SITE_CONFIG.name}`,
    description: `24/7 licensed locksmith in Casselberry FL. US-17/92 & SR 436 corridor. 20–30 min response. Call ${SITE_CONFIG.phone}`,
    images: ["/professional-locksmith-orlando.webp"],
  },
};

export default function CasselberryLocksmithPage() {
  const locationSchema = generateLocationSchema(CITY, SLUG);
  const faqSchema = generateFAQSchema(FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
    { name: `${CITY}, FL`, url: `${SITE_CONFIG.url}/locations/${SLUG}` },
    { name: `Locksmith ${CITY}`, url: PAGE_URL },
  ]);
  const webPageSchema = generateWebPageSchema({
    name: `Locksmith Casselberry FL — 24/7 Licensed Service on US-17/92`,
    description: `Professional locksmith in Casselberry, FL (Seminole County). Mobile service on US-17/92, SR 436 & SR 434. Emergency lockouts, rekeying, transponder keys. 20–30 min response 24/7.`,
    url: PAGE_URL,
    type: "WebPage",
    breadcrumb: breadcrumbSchema,
  });

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${PAGE_URL}#howto`,
    name: "How to Get Locksmith Service in Casselberry, FL",
    description: "4-step process to get fast, licensed locksmith service in Casselberry from Affordable Locksmith Orlando.",
    totalTime: "PT35M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "45" },
    step: [
      { "@type": "HowToStep", position: 1, name: "Call or Request Online", text: "Call our 24/7 line or fill out the quick online form with your Casselberry location and service needed.", url: `${SITE_CONFIG.url}/contact` },
      { "@type": "HowToStep", position: 2, name: "Receive an Upfront Quote", text: "We provide a clear, honest price before any work begins. No hidden service call fees.", url: `${SITE_CONFIG.url}/faq` },
      { "@type": "HowToStep", position: 3, name: "Technician Dispatched", text: "A licensed technician is dispatched from the nearest mobile unit. Average arrival in Casselberry: 20–30 minutes along US-17/92, SR 436, and SR 434.", url: PAGE_URL },
      { "@type": "HowToStep", position: 4, name: "Problem Solved", text: "Professional locksmith service completed on-site. All major cards, cash, Apple Pay, and Google Pay accepted.", url: `${SITE_CONFIG.url}/contact` },
    ],
  };

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${PAGE_URL}#offercatalog`,
    name: "Locksmith Services — Casselberry, FL Price List",
    provider: { "@id": `${SITE_CONFIG.url}/#business` },
    areaServed: {
      "@type": "City",
      name: "Casselberry",
      containedInPlace: { "@type": "AdministrativeArea", name: "Seminole County", containedInPlace: { "@type": "State", name: "Florida" } },
    },
    itemListElement: PRICING_ROWS.map((row, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        "@id": `${PAGE_URL}#offer-${i + 1}`,
        name: `${row.service} — Casselberry, FL`,
        url: `${SITE_CONFIG.url}${row.href}`,
        price: row.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "City", name: "Casselberry" },
        seller: { "@id": `${SITE_CONFIG.url}/#business` },
        itemOffered: {
          "@type": "Service",
          "@id": `${PAGE_URL}#service-${i + 1}`,
          name: `${row.service} in Casselberry, FL`,
          provider: { "@id": `${SITE_CONFIG.url}/#business` },
          areaServed: { "@type": "City", name: "Casselberry" },
        },
      },
    })),
  };

  const imageObjectSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#heroimage`,
    url: `${SITE_CONFIG.url}/professional-locksmith-orlando.webp`,
    contentUrl: `${SITE_CONFIG.url}/professional-locksmith-orlando.webp`,
    width: 800,
    height: 600,
    name: "Licensed Locksmith Service — Casselberry, FL",
    description: `${AUTHOR.name}, ${AUTHOR.jobTitle} — professional locksmith service in Casselberry, FL (Seminole County, ZIP 32707)`,
    caption: `${SITE_CONFIG.name} — Licensed Locksmith Service in Casselberry, FL`,
    representativeOfPage: true,
    inLanguage: "en-US",
    creator: { "@id": `${SITE_CONFIG.url}/#author` },
    copyrightHolder: { "@id": `${SITE_CONFIG.url}/#organization` },
    acquireLicensePage: SITE_CONFIG.url,
  };

  const emergencyServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "LocalBusiness", "Locksmith"],
    "@id": `${PAGE_URL}#emergency`,
    name: `${SITE_CONFIG.name} — 24/7 Emergency Locksmith Casselberry FL`,
    description: "24/7 emergency locksmith service in Casselberry, FL. Residential, commercial, and automotive lockouts on US-17/92, SR 436, and SR 434 resolved in 20–30 minutes.",
    telephone: SITE_CONFIG.phone,
    url: PAGE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casselberry",
      addressRegion: "FL",
      postalCode: "32707",
      addressCountry: "US",
    },
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: [
      { "@type": "City", name: "Casselberry", containedInPlace: { "@type": "AdministrativeArea", name: "Seminole County" } },
      { "@type": "City", name: "Altamonte Springs" },
      { "@type": "City", name: "Winter Springs" },
      { "@type": "City", name: "Maitland" },
      { "@type": "City", name: "Longwood" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "emergency",
      contactOption: "TollFree",
      areaServed: "US-FL",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    parentOrganization: { "@id": `${SITE_CONFIG.url}/#business` },
  };

  const serviceItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#servicelist`,
    name: "Locksmith Services in Casselberry, FL",
    description: "Complete list of professional locksmith services available in Casselberry, FL (Seminole County)",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.name} in Casselberry, FL`,
      url: `${SITE_CONFIG.url}/locations/${SLUG}/${s.slug}`,
      item: {
        "@type": "Service",
        "@id": `${SITE_CONFIG.url}/locations/${SLUG}/${s.slug}#service`,
        name: `${s.name} — Casselberry, FL`,
        description: s.description,
        provider: { "@id": `${SITE_CONFIG.url}/#business` },
        areaServed: { "@type": "City", name: "Casselberry" },
        offers: {
          "@type": "Offer",
          price: s.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const reviewEntitySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${PAGE_URL}#ratingsummary`,
    name: SITE_CONFIG.name,
    url: PAGE_URL,
    telephone: SITE_CONFIG.phone,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 3).map((r) => ({
      "@type": "Review",
      "@id": `${PAGE_URL}#review-${r.id}`,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      datePublished: r.isoDate,
    })),
  };

  const credentialEntitySchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#author`,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    worksFor: { "@id": `${SITE_CONFIG.url}/#business` },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        "@id": `${SITE_CONFIG.url}/#credential-fl-license`,
        credentialCategory: "license",
        name: "Florida State Locksmith License",
        identifier: SITE_CONFIG.licenseNumber,
        recognizedBy: {
          "@type": "GovernmentOrganization",
          "@id": "https://www.fdacs.gov",
          name: "Florida Department of Agriculture and Consumer Services",
          alternateName: "FDACS",
          url: "https://www.fdacs.gov",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        "@id": `${SITE_CONFIG.url}/#credential-aloa`,
        credentialCategory: "certification",
        name: "ALOA Certified Registered Locksmith",
        alternateName: "CRL",
        recognizedBy: {
          "@type": "Organization",
          "@id": "https://www.aloa.org",
          name: "Associated Locksmiths of America",
          alternateName: "ALOA",
          url: "https://www.aloa.org",
        },
      },
    ],
  };

  /* ── AutomotiveService — disambiguates automotive locksmith intent ── */
  const automotiveServiceSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveService",
    "@id": `${PAGE_URL}#automotiveservice`,
    name: "Automotive Locksmith & Transponder Key Service — Casselberry, FL",
    description: "Professional automotive locksmith service in Casselberry, FL — car lockouts, transponder key programming, car key replacement, and remote key fob programming for all vehicle makes. Available 24/7 on US-17/92, SR 436, and SR 434.",
    serviceType: "Automotive Locksmith",
    provider: { "@id": `${SITE_CONFIG.url}/#business` },
    url: `${SITE_CONFIG.url}/services/automotive-locksmith`,
    areaServed: {
      "@type": "City",
      name: "Casselberry",
      containedInPlace: { "@type": "AdministrativeArea", name: "Seminole County" },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Emergency Mobile Service",
      availableLanguage: "English",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
    offers: [
      { "@type": "Offer", name: "Car Lockout Service — Casselberry US-17/92", price: "65", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Transponder Key Programming — Casselberry, FL", price: "85", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Car Key Replacement — All Makes — Casselberry, FL", price: "95", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Remote Key Fob Programming — Casselberry, FL", price: "85", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    ],
  };

  /* ── Legislation — FL Statute 493 (authority anchor for E-E-A-T + AIO) ── */
  const legislationSchema = {
    "@context": "https://schema.org",
    "@type": "Legislation",
    "@id": "https://www.flsenate.gov/Laws/Statutes/Chapter493",
    name: "Florida Statute Chapter 493 — Private Investigative, Recovery, and Security Services",
    alternateName: "FL Statute 493",
    legislationType: "Florida State Statute",
    jurisdictionLevel: "State",
    about: [
      { "@type": "Thing", name: "Locksmith Licensing Requirements" },
      { "@type": "Thing", name: "Security Services Regulation — Florida" },
    ],
    url: "https://www.flsenate.gov/Laws/Statutes/Chapter493",
    publisher: {
      "@type": "GovernmentOrganization",
      "@id": "https://www.flsenate.gov",
      name: "Florida Legislature",
      url: "https://www.flsenate.gov",
    },
    mentions: [
      { "@id": `${SITE_CONFIG.url}/#business` },
      { "@id": `${SITE_CONFIG.url}/#author` },
      { "@id": "https://www.fdacs.gov" },
    ],
  };

  /* ── Road Corridor entities — Place/Road schema for US-17/92, SR 436, SR 434 ── */
  const roadCorridorsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#corridors`,
    name: "Road Corridors Served — Casselberry, FL Locksmith",
    description: "Key road corridors and routes in Casselberry, FL served by Affordable Locksmith Orlando 24/7",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Place",
          "@id": `${PAGE_URL}#corridor-1792`,
          name: "US Highway 17-92",
          alternateName: ["US-17/92", "South US Hwy 17-92", "17-92 Casselberry FL", "locksmith casselberry fl 17 92"],
          description: "Major US highway business corridor through Casselberry, FL — full mobile locksmith service 24/7",
          address: { "@type": "PostalAddress", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          containedInPlace: { "@type": "City", name: "Casselberry", containedInPlace: { "@type": "AdministrativeArea", name: "Seminole County" } },
          geo: { "@type": "GeoCoordinates", latitude: 28.6725, longitude: -81.3276 },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Place",
          "@id": `${PAGE_URL}#corridor-sr436`,
          name: "State Road 436 (Semoran Boulevard)",
          alternateName: ["SR 436", "Semoran Blvd", "route 436 casselberry", "locksmiths on rt 436 casselberry fl"],
          description: "SR 436 (Semoran Blvd) corridor in Casselberry FL — mobile locksmith service 24/7 along the full route",
          address: { "@type": "PostalAddress", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          containedInPlace: { "@type": "City", name: "Casselberry" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Place",
          "@id": `${PAGE_URL}#corridor-sr434`,
          name: "State Road 434",
          alternateName: ["SR 434", "rt 434 casselberry", "locksmiths on rt 434 casselberry fl"],
          description: "SR 434 through northern Casselberry and Winter Springs border — mobile locksmith coverage 24/7",
          address: { "@type": "PostalAddress", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32730", addressCountry: "US" },
          containedInPlace: { "@type": "City", name: "Casselberry" },
        },
      },
    ],
  };

  /* ── DefinedTermSet — locksmith terminology (AIO / topical authority) ── */
  const definedTermsSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${PAGE_URL}#terms`,
    name: "Locksmith Terms — Casselberry, FL",
    inLanguage: "en-US",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        "@id": `${PAGE_URL}#term-transponder`,
        name: "Transponder Key",
        termCode: "transponder-key",
        description: "A car key with an embedded RFID microchip that communicates with the vehicle's immobilizer to authorize engine start. Must be professionally programmed to the specific vehicle's ECU — cannot be duplicated at a hardware store.",
        inDefinedTermSet: `${PAGE_URL}#terms`,
      },
      {
        "@type": "DefinedTerm",
        "@id": `${PAGE_URL}#term-rekeying`,
        name: "Lock Rekeying",
        termCode: "lock-rekeying",
        description: "Changing the internal pin configuration of an existing lock cylinder so old keys no longer work. New keys are cut to match the new pin configuration. More cost-effective than full lock replacement.",
        inDefinedTermSet: `${PAGE_URL}#terms`,
      },
      {
        "@type": "DefinedTerm",
        "@id": `${PAGE_URL}#term-masterkeyystem`,
        name: "Master Key System",
        termCode: "master-key-system",
        description: "A commercial lock system where individual keys open only assigned locks, while a master key opens all locks in the system. Standard for offices, apartment buildings, and multi-unit properties.",
        inDefinedTermSet: `${PAGE_URL}#terms`,
      },
      {
        "@type": "DefinedTerm",
        "@id": `${PAGE_URL}#term-deadbolt`,
        name: "Deadbolt Lock",
        termCode: "deadbolt",
        description: "A lock mechanism where a solid metal bolt extends into the door frame and can only be operated by a key or thumb-turn — not a spring. Provides significantly stronger residential and commercial security than a standard knob or lever lock.",
        inDefinedTermSet: `${PAGE_URL}#terms`,
      },
    ],
  };

  /* ── Nearby Landmark entities (co-occurrence / geo disambiguation) ── */
  const landmarkEntitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#landmarks`,
    name: "Key Landmarks Near Locksmith Service Area — Casselberry, FL",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": ["LocalBusiness", "Store"],
          "@id": `${PAGE_URL}#landmark-shootstraight`,
          name: "Shoot Straight",
          address: { "@type": "PostalAddress", streetAddress: "5051 S US Hwy 17-92", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          description: "Firearms retailer and shooting range on US-17/92 in Casselberry, FL — nearby landmark for service area reference",
          geo: { "@type": "GeoCoordinates", latitude: 28.6619, longitude: -81.3333 },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": ["Park", "CivicStructure"],
          "@id": `${PAGE_URL}#landmark-lakeconcord`,
          name: "Lake Concord Park",
          address: { "@type": "PostalAddress", streetAddress: "95 Triplet Lake Dr", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: 28.6750, longitude: -81.3283 },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": ["GovernmentBuilding", "CivicStructure"],
          "@id": `${PAGE_URL}#landmark-cityhall`,
          name: "Casselberry City Hall",
          address: { "@type": "PostalAddress", streetAddress: "95 Triplet Lake Dr", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          url: "https://www.casselberry.org",
          geo: { "@type": "GeoCoordinates", latitude: 28.6750, longitude: -81.3283 },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": ["PoliceStation", "GovernmentOffice"],
          "@id": `${PAGE_URL}#landmark-police`,
          name: "Casselberry Police Department",
          address: { "@type": "PostalAddress", streetAddress: "95 Triplet Lake Dr", addressLocality: "Casselberry", addressRegion: "FL", postalCode: "32707", addressCountry: "US" },
          url: "https://www.casselberry.org/government/departments/police-department",
          description: "Casselberry Police Department — local law enforcement entity in same service jurisdiction",
        },
      },
    ],
  };

  const placeEntitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#coverage`,
    name: "Locksmith Service Coverage — Casselberry, FL",
    provider: { "@id": `${SITE_CONFIG.url}/#business` },
    areaServed: {
      "@type": "City",
      "@id": "https://www.wikidata.org/wiki/Q2274427",
      name: "Casselberry",
      alternateName: ["Casselberry FL", "Casselberry Florida"],
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Seminole County",
        containedInPlace: { "@type": "State", name: "Florida", identifier: "FL" },
      },
      geo: { "@type": "GeoCoordinates", latitude: 28.6725, longitude: -81.3276 },
      hasMap: "https://www.google.com/maps/place/Casselberry,+FL",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 28.6725, longitude: -81.3276 },
      geoRadius: "15000",
    },
    knowsAbout: [
      "Shoot Straight, 5051 S US Hwy 17-92, Casselberry, FL 32707",
      "Lake Concord Park, 95 Triplet Lake Dr, Casselberry, FL 32707",
      "Casselberry City Hall, 95 Triplet Lake Dr, Casselberry, FL 32707",
      "US-17/92 Business Corridor, Casselberry, FL 32707",
      "SR 436 (Semoran Blvd), Casselberry, FL 32707",
      "SR 434, Casselberry, FL 32707",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewEntitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialEntitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeEntitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legislationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roadCorridorsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landmarkEntitiesSchema) }} />

      {/* ── HERO ── */}
      <section className="hero-gradient text-white relative overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <Image src="/professional-locksmith-orlando.webp" alt="" fill className="object-cover object-center" quality={40} priority />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href={`/locations/${SLUG}`} className="hover:text-white transition-colors">{CITY}</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-white">Locksmith Service</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-white rounded-full emergency-pulse" aria-hidden="true" />
                Available Right Now — {CITY} 24/7
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 speakable">
                Locksmith in{" "}
                <span className="text-[#f59e0b]">Casselberry, FL</span>
              </h1>

              {/* Direct-answer paragraph — AIO / GEO target */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-xl speakable">
                <strong className="text-white">Affordable Locksmith Orlando</strong> provides licensed locksmith
                service throughout Casselberry, FL (ZIP 32707 &amp; 32730, Seminole County) — including the{" "}
                <strong className="text-[#f59e0b]">US-17/92 corridor</strong>, SR 436 (Semoran Blvd), and SR 434.
                Available 24/7, starting at{" "}
                <strong className="text-[#f59e0b]">$45</strong>, with a{" "}
                <strong className="text-white">20–30 minute average response time</strong>.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Clock, text: "20–30 Min Response" },
                  { icon: Star, text: `${SITE_CONFIG.rating}★ Google Rated` },
                  { icon: Shield, text: "FL Licensed & Insured" },
                  { icon: MapPin, text: "US-17/92 & SR 436" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5 text-sm">
                    <item.icon className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden="true" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg text-lg"
                  aria-label={`Call locksmith Casselberry ${SITE_CONFIG.phone}`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-4 rounded-xl border border-white/30 transition-colors"
                >
                  Request Service Online
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-3">Serving all Casselberry neighborhoods — US-17/92, SR 436, SR 434 — 24/7</p>
            </div>

            {/* Right: contact form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 bg-[#16a34a] rounded-full emergency-pulse" aria-hidden="true" />
                <span className="font-bold text-[#1e3a5f] text-lg">Request Locksmith Service</span>
              </div>
              <p className="text-gray-500 text-xs mb-4">Casselberry &amp; Seminole County — we respond within minutes</p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-gray-50 border-b border-gray-200 py-5 px-4" aria-label="Trust indicators">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="horizontal" />
        </div>
      </section>

      {/* ── WHAT IS SECTION (AIO / Definitional) ── */}
      <section className="py-14 px-4" aria-labelledby="what-is-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4 speakable">
            What Is Locksmith Service in Casselberry, FL?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4 speakable">
              Locksmith service in Casselberry, FL refers to professional lock and key services performed by a
              state-licensed technician at a customer&apos;s home, vehicle, or business anywhere in Casselberry
              (Seminole County) — including along the US-17/92 (South US Highway 17-92) business corridor,
              SR 436 (Semoran Blvd), and SR 434. Services include emergency lockouts, lock rekeying, lock
              installation, deadbolt upgrades, transponder car key programming, and commercial security solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Affordable Locksmith Orlando</strong> — licensed under Florida State License{" "}
              {SITE_CONFIG.licenseNumber} and operating since {SITE_CONFIG.founded} — provides fully mobile
              locksmith service throughout Casselberry ZIP codes 32707 and 32730. Every technician arrives in
              a marked vehicle with all required equipment and provides an upfront price before any work begins.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Florida Statute Chapter 493, all locksmith businesses in Florida must be licensed by the
              Florida Department of Agriculture and Consumer Services (FDACS). Affordable Locksmith Orlando
              holds an active Florida license and all technicians are ALOA (Associated Locksmiths of America)
              certified and background-screened.
            </p>
          </div>

          {/* Competitor displacement — captures branded search intent */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#1e3a5f]">Searching for BAM Locksmith, A1 Locksmith, or a locksmith store in Casselberry?</strong>{" "}
              We&apos;re your fully licensed local alternative — with{" "}
              <Link href={`/locations/${SLUG}/emergency-locksmith`} className="text-[#1e3a5f] font-semibold underline">
                20–30 minute emergency response
              </Link>{" "}
              on US-17/92 and upfront pricing starting at $45.
            </p>
          </div>

          {/* Quick-answer chips — AEO */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { q: "Response time?", a: "20–30 minutes average in Casselberry" },
              { q: "Hours?", a: "24/7/365 — including holidays" },
              { q: "Starting price?", a: "$45 for emergency lockouts" },
            ].map((item) => (
              <div key={item.q} className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/20 rounded-xl p-4">
                <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-wide mb-1">{item.q}</p>
                <p className="text-gray-700 text-sm font-medium">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Property type entity coverage */}
          <div className="mt-6">
            <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">We Serve All Property Types in Casselberry, FL</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Home, label: "Residential", desc: "Single-family homes, townhomes, condos along US-17/92 and all residential streets" },
                { icon: Building2, label: "Commercial", desc: "Retail, offices, warehouses along US-17/92 and SR 436 / Semoran Blvd corridors" },
                { icon: Car, label: "Automotive", desc: "All vehicle makes — transponder keys, car lockouts, key fob programming on US-17/92" },
                { icon: Shield, label: "Rental & Multi-Unit", desc: "Property managers, vacation rentals, apartment complexes throughout Casselberry ZIP 32707–32730" },
              ].map((pt) => (
                <div key={pt.label} className="bg-white border border-gray-200 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <pt.icon className="h-4 w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                    <span className="font-bold text-[#1e3a5f] text-xs">{pt.label}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminology — DefinedTerm entities (AIO topical authority) */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-[#1e3a5f] text-xs uppercase tracking-wide mb-3">Locksmith Terms Explained</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { term: "Transponder Key", def: "Car key with an embedded RFID chip that must be programmed to the vehicle's ECU — cannot be duplicated at a hardware store. Requires a licensed automotive locksmith or dealership." },
                { term: "Lock Rekeying", def: "Changing the internal pin configuration so old keys no longer work. Same lock, new keys — faster and cheaper than full lock replacement." },
                { term: "Master Key System", def: "Commercial lock hierarchy where a single master key opens all locks while individual keys open only assigned doors. Standard for offices and apartment buildings." },
                { term: "Deadbolt Lock", def: "A solid bolt lock operated by key or thumb-turn only — not spring-loaded. Provides significantly stronger security than a standard knob lock." },
              ].map((item) => (
                <div key={item.term}>
                  <p className="text-xs font-bold text-[#1e3a5f] mb-0.5">{item.term}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">What We Do</span>
            <h2 id="services-heading" className="text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith Services in Casselberry, FL
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every locksmith service available in Casselberry — residential, commercial, and automotive —
              with fast 20–30 minute response on US-17/92, SR 436, and SR 434, with upfront pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || KeyRound;
              return (
                <Link
                  key={service.slug}
                  href={`/locations/${SLUG}/${service.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#1e3a5f] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] transition-colors shrink-0">
                      <Icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    {service.popular && (
                      <span className="text-xs bg-[#f59e0b]/15 text-[#d97706] font-semibold px-2 py-0.5 rounded-full">Popular</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm group-hover:text-[#1e3a5f] transition-colors">
                    {service.name} — {CITY}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Starting at</div>
                      <div className="font-bold text-[#1e3a5f] text-sm">{service.price}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#f59e0b] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href={`/locations/${SLUG}`} className="inline-flex items-center gap-2 text-[#1e3a5f] font-bold hover:underline text-sm">
              View Casselberry Location Hub
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AUTOMOTIVE & TRANSPONDER DEEP-DIVE ── */}
      <section className="py-14 px-4" aria-labelledby="auto-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Automotive Locksmith</span>
            <h2 id="auto-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Automotive Locksmith &amp; Transponder Key Service in Casselberry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm speakable">
              Mobile automotive locksmith service throughout Casselberry, FL — car lockouts on US-17/92,
              transponder key programming, car key replacement, and key fob service for every vehicle make
              and model. Available 24/7 with 20–30 minute response.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: Car,
                title: "Car Lockout — US-17/92 Casselberry",
                desc: "Locked out of your car on US-17/92, SR 436, or anywhere in Casselberry? We arrive in 20–30 minutes for all vehicle makes, 24/7.",
                href: `/locations/${SLUG}/automotive-locksmith`,
                price: "From $65",
              },
              {
                icon: KeyRound,
                title: "Transponder Key Programming",
                desc: "Transponder chip key cut and programmed on-site for Toyota, Honda, Ford, Chevrolet, BMW, Mercedes-Benz, and all other makes — 60% less than dealerships.",
                href: `/locations/${SLUG}/car-key-programming`,
                price: "From $85",
              },
              {
                icon: RefreshCw,
                title: "Car Key Replacement — All Makes",
                desc: "Lost car keys? We cut and program replacement keys on-site anywhere in Casselberry (ZIP 32707/32730). No tow truck to the dealership required.",
                href: `/locations/${SLUG}/car-key-replacement`,
                price: "From $95",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#1e3a5f] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] mb-4 transition-colors">
                  <card.icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm">{card.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#16a34a] font-bold text-sm">{card.price}</span>
                  <ChevronRight className="h-4 w-4 text-[#f59e0b] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          {/* Vehicle makes — entity signals for automotive locksmith */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">
              Vehicle Makes We Service in Casselberry, FL (Transponder &amp; Standard Keys)
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "Toyota","Honda","Ford","Chevrolet","Dodge","Jeep","Nissan",
                "Hyundai","Kia","BMW","Mercedes-Benz","Audi","Lexus","Acura",
                "Subaru","Mazda","Volkswagen","GMC","Ram","Chrysler","Cadillac","Infiniti",
              ].map((make) => (
                <span key={make} className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">
                  {make}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              All transponder key programming, smart key, and push-button start key services performed on-site
              in Casselberry, FL (US-17/92, SR 436, SR 434) — no dealership tow required.
              <Link href={`/locations/${SLUG}/automotive-locksmith`} className="text-[#1e3a5f] font-semibold ml-1 hover:underline">
                View automotive locksmith service →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-14 px-4" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Transparent Pricing</span>
            <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith Service Prices in Casselberry, FL
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Upfront quote before any work begins. No surprise service call fees — same price on US-17/92 as anywhere in Casselberry.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Service</th>
                  <th className="text-center px-5 py-4 font-semibold">Our Price</th>
                  <th className="text-center px-5 py-4 font-semibold hidden sm:table-cell">vs. Dealership</th>
                  <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING_ROWS.map((row) => (
                  <tr key={row.service} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-gray-800 font-medium">
                      <Link href={row.href} className="hover:text-[#1e3a5f] hover:underline">{row.service}</Link>
                    </td>
                    <td className="px-5 py-3.5 text-center font-bold text-[#16a34a]">{row.price}</td>
                    <td className="px-5 py-3.5 text-center text-gray-400 text-xs hidden sm:table-cell">{row.dealer}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600 text-xs">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: DollarSign, title: "Upfront Quotes", desc: "Price confirmed before work begins." },
              { icon: Shield, title: "No Hidden Fees", desc: "No after-hours or service call surcharges." },
              { icon: Phone, title: "Free Phone Estimate", desc: "Call for a quick estimate before we dispatch." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e3a5f] mb-3">
                  <item.icon className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="howto-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Simple Process</span>
            <h2 id="howto-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              How Locksmith Service Works in Casselberry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Call or Request Online", desc: "Call our 24/7 line or submit the quick form. Give us your Casselberry address — US-17/92, SR 436, SR 434, or any neighborhood." },
              { n: "2", title: "Receive Upfront Quote", desc: "We provide a clear, honest price before any work begins. No surprise fees or hidden charges." },
              { n: "3", title: "Fast Dispatch", desc: "A licensed technician is dispatched from the nearest unit. Average arrival in Casselberry: 20–30 min." },
              { n: "4", title: "Problem Solved", desc: "Professional service completed on-site. All major payments accepted." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── COVERAGE — Neighborhoods + Landmarks ── */}
      <section className="py-14 px-4" aria-labelledby="coverage-heading">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Local Coverage</span>
              <h2 id="coverage-heading" className="text-2xl font-bold text-[#1e3a5f] mb-4 speakable">
                We Serve All Casselberry Neighborhoods &amp; Corridors
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                Our mobile locksmith units cover the entire US-17/92 business corridor in Casselberry from
                Fern Park through to the Altamonte Springs border — including near Shoot Straight at 5051 S US
                Hwy 17-92, the SR 436 (Semoran Blvd) intersection, SR 434 corridor, and all residential
                streets throughout Casselberry ZIP codes 32707 and 32730.
              </p>

              <div className="mb-5">
                <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">Casselberry Areas We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBORHOODS.map((n) => (
                    <span key={n} className="inline-flex items-center gap-1.5 bg-[#1e3a5f]/8 text-[#1e3a5f] text-xs font-medium px-3 py-1.5 rounded-lg">
                      <MapPin className="h-3 w-3 text-[#f59e0b]" aria-hidden="true" />
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                {[
                  `ZIP codes served: 32707, 32730 (Casselberry, FL)`,
                  `County: Seminole County, Florida`,
                  `Corridors: US-17/92, SR 436 (Semoran Blvd), SR 434`,
                  `Average response time: 20–30 minutes`,
                  `Hours: 24/7 — including weekends and holidays`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#16a34a] shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={SITE_CONFIG.googleMapsEmbed}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Affordable Locksmith Orlando — serving Casselberry FL"
                aria-label="Google Map showing Affordable Locksmith Orlando service area in Casselberry"
              />
              <div className="bg-white px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1e3a5f] text-sm">{SITE_CONFIG.name}</p>
                  <p className="text-gray-500 text-xs">Serving Casselberry &amp; Seminole County</p>
                </div>
                <a
                  href={SITE_CONFIG.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1e3a5f] font-semibold hover:underline"
                >
                  View on Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROAD CORRIDOR COVERAGE (targets route-specific keywords) ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="corridors-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Route Coverage</span>
            <h2 id="corridors-heading" className="text-2xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith on Every Casselberry Corridor — US-17/92, SR 436 &amp; SR 434
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm speakable">
              Whether you need a locksmith on US-17/92, Semoran Blvd (SR 436), or State Road 434 in
              Casselberry — our mobile units cover your exact location within 20–30 minutes, 24/7.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                route: "US-17/92",
                full: "US Highway 17-92",
                zip: "32707",
                desc: "Primary business artery through Casselberry, FL — from the Fern Park boundary northward through the Altamonte Springs border. Includes the area near Shoot Straight (5051 S US Hwy 17-92) and the SR 436 intersection. Full locksmith coverage 24/7.",
                badge: "Most Requested",
                href: `/locations/${SLUG}/emergency-locksmith`,
              },
              {
                route: "SR 436",
                full: "Semoran Boulevard (SR 436)",
                zip: "32707",
                desc: "State Road 436 (Semoran Blvd) runs through central Casselberry connecting to Altamonte Springs and Winter Springs. Our mobile locksmiths serve the entire SR 436 / Semoran Blvd corridor in Casselberry within 20–30 minutes.",
                badge: "RT 436 Coverage",
                href: `/locations/${SLUG}/emergency-locksmith`,
              },
              {
                route: "SR 434",
                full: "State Road 434",
                zip: "32707–32730",
                desc: "SR 434 runs through northern Casselberry toward the Winter Springs boundary. Our units cover the SR 434 corridor in Casselberry ZIP codes 32707 and 32730 with 20–30 minute emergency response.",
                badge: "RT 434 Coverage",
                href: `/locations/${SLUG}/emergency-locksmith`,
              },
            ].map((c) => (
              <div key={c.route} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1e3a5f] rounded-xl shrink-0">
                    <MapPin className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1e3a5f] text-lg leading-tight">{c.route}</p>
                    <p className="text-gray-500 text-xs">{c.full}</p>
                    <span className="inline-block text-xs bg-[#f59e0b]/15 text-[#d97706] font-semibold px-2 py-0.5 rounded-full mt-0.5">{c.badge}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">ZIP {c.zip}</span>
                  <Link href={c.href} className="inline-flex items-center gap-1 text-xs text-[#1e3a5f] font-bold hover:underline">
                    Get Service <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="why-heading" className="text-2xl font-bold text-[#1e3a5f] mb-3 speakable">
              Why Casselberry Chooses Affordable Locksmith Orlando
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: "Fastest Response on US-17/92",
                desc: "20–30 minute average arrival throughout all Casselberry addresses — US-17/92, SR 436, SR 434 — and ZIP codes 32707 and 32730.",
              },
              {
                icon: Shield,
                title: "Florida State Licensed",
                desc: `Florida State Locksmith License ${SITE_CONFIG.licenseNumber}. All technicians are ALOA certified and background-checked for your safety.`,
              },
              {
                icon: DollarSign,
                title: "Guaranteed Upfront Pricing",
                desc: "You receive a clear price before any work begins. No hidden service call fees, no after-hours surcharges. Lockouts from $45.",
              },
              {
                icon: Star,
                title: `${SITE_CONFIG.rating}★ Google Rated`,
                desc: `${SITE_CONFIG.reviewCount}+ verified Google reviews from real customers across the Orlando metro area including Seminole County.`,
              },
              {
                icon: Car,
                title: "Transponder & Automotive Keys",
                desc: "Full automotive locksmith service — transponder programming, key fob replacement, and car lockouts for all makes and models along the US-17/92 corridor.",
              },
              {
                icon: Phone,
                title: "One Number, All Services",
                desc: `Call ${SITE_CONFIG.phone} 24/7 for any residential, commercial, or automotive locksmith need in Casselberry — one call gets it done.`,
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e3a5f] shrink-0">
                    <card.icon className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] text-sm">{card.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>

      {/* ── FAQ (PAA targeting) ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">FAQ</span>
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith Casselberry FL — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm speakable">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed speakable">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[#1e3a5f] font-bold hover:underline text-sm">
              View All FAQs <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LICENSE & AUTHORITY (Entity signals for Knowledge Panel + AIO) ── */}
      <section className="py-12 px-4 bg-[#1e3a5f] text-white" aria-labelledby="authority-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="authority-heading" className="text-xl font-bold mb-6 speakable">
            Licensed &amp; Verified — Locksmith Service Authority in Casselberry, FL
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Florida State License", value: SITE_CONFIG.licenseNumber, sub: "Issued by FDACS", href: "https://www.fdacs.gov" },
              { label: "Professional Certification", value: "ALOA CRL", sub: "Associated Locksmiths of America", href: "https://www.aloa.org" },
              { label: "Service ZIP Codes", value: "32707 & 32730", sub: "Casselberry, Seminole County FL", href: null },
              { label: "In Business Since", value: SITE_CONFIG.founded, sub: `${new Date().getFullYear() - parseInt(SITE_CONFIG.founded)}+ years serving Central FL`, href: null },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">{item.label}</p>
                <p className="font-bold text-[#f59e0b] text-sm mt-1">{item.value}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-xs hover:text-white transition-colors">{item.sub} ↗</a>
                ) : (
                  <p className="text-gray-300 text-xs">{item.sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* Landmarks with addresses — explicit Place entity signals */}
          <h3 className="font-semibold text-white text-sm mb-3">Key Landmarks &amp; Addresses We Serve in Casselberry</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Shoot Straight (US-17/92)", address: "5051 S US Hwy 17-92, Casselberry, FL 32707" },
              { name: "Lake Concord Park", address: "95 Triplet Lake Dr, Casselberry, FL 32707" },
              { name: "Casselberry City Hall", address: "95 Triplet Lake Dr, Casselberry, FL 32707" },
              { name: "US-17/92 Business Corridor", address: "US Highway 17-92, Casselberry, FL 32707" },
              { name: "SR 436 / Semoran Blvd", address: "State Road 436, Casselberry, FL 32707" },
              { name: "SR 434 Corridor", address: "State Road 434, Casselberry, FL 32707–32730" },
            ].map((place) => (
              <div key={place.name} className="flex items-start gap-2 bg-white/5 rounded-lg px-3 py-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#f59e0b] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-white text-xs font-semibold">{place.name}</p>
                  <p className="text-gray-400 text-xs">{place.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-14 px-4" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
              ))}
            </div>
            <h2 id="reviews-heading" className="text-2xl font-bold text-[#1e3a5f] mb-1">
              {SITE_CONFIG.rating}★ Rated by Orlando Metro Customers
            </h2>
            <p className="text-gray-600 text-sm">{SITE_CONFIG.reviewCount}+ verified Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {REVIEWS.slice(0, 3).map((r) => (
              <ReviewCard key={r.id} {...r} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-[#1e3a5f] font-bold hover:underline text-sm">
              Read All Reviews <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AUTHOR BIO (E-E-A-T) ── */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AuthorBio />
        </div>
      </section>

      {/* ── NEARBY CITIES ── */}
      <section className="py-10 px-4" aria-labelledby="nearby-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="nearby-heading" className="font-bold text-[#1e3a5f] mb-4 text-lg">
            Also Serving Cities Near Casselberry
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Altamonte Springs", slug: "altamonte-springs" },
              { name: "Winter Springs", slug: "sanford" },
              { name: "Maitland", slug: "maitland" },
              { name: "Longwood", slug: "longwood" },
              { name: "Winter Park", slug: "winter-park" },
              { name: "Sanford", slug: "sanford" },
              { name: "Lake Mary", slug: "lake-mary" },
              { name: "Orlando", slug: "orlando" },
            ].map((city) => (
              <Link
                key={city.slug + city.name}
                href={`/locations/${city.slug}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#1e3a5f] border border-gray-200 hover:border-[#1e3a5f] rounded-lg px-3 py-1.5 transition-all"
              >
                <MapPin className="h-3 w-3 text-[#f59e0b]" aria-hidden="true" />
                {city.name}, FL
              </Link>
            ))}
          </div>

          {/* All services quick links */}
          <h2 className="font-bold text-[#1e3a5f] mb-3 text-sm">All Locksmith Services in Casselberry</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${SLUG}/${s.slug}`}
                className="text-xs bg-gray-100 hover:bg-[#1e3a5f] hover:text-white text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEGA INTERNAL LINK MATRIX (fast indexing / crawl depth) ── */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200" aria-label="Complete site index">
        <div className="max-w-7xl mx-auto">

          {/* Core pages */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Navigation</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "All Locations", href: "/locations" },
                { label: "Casselberry Hub", href: `/locations/${SLUG}` },
                { label: "Altamonte Springs Locksmith", href: "/altamonte-springs-locksmith" },
                { label: "Customer Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-[#1e3a5f] hover:underline font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Casselberry — all services */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Casselberry — All Locksmith Services
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/locations/${SLUG}/${s.slug}`}
                  className="text-xs text-gray-600 hover:text-[#1e3a5f] hover:underline"
                >
                  {s.name} — Casselberry
                </Link>
              ))}
            </div>
          </div>

          {/* All service hub pages */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">All Service Pages</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <Link href="/services" className="text-xs text-gray-600 hover:text-[#1e3a5f] hover:underline">All Services</Link>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs text-gray-600 hover:text-[#1e3a5f] hover:underline"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* All location hub pages */}
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">All Location Pages</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <Link href="/locations" className="text-xs text-gray-600 hover:text-[#1e3a5f] hover:underline">All Locations</Link>
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="text-xs text-gray-600 hover:text-[#1e3a5f] hover:underline"
                >
                  {area.name}, FL
                </Link>
              ))}
            </div>
          </div>

          {/* Full City × Service matrix */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Locksmith Services by City — Complete Index
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {SERVICE_AREAS.map((area) => (
                <div key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="block text-[#1e3a5f] font-bold text-xs mb-1.5 hover:underline"
                  >
                    {area.name}, FL
                  </Link>
                  <ul className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/locations/${area.slug}/${s.slug}`}
                          className="text-gray-500 hover:text-[#1e3a5f] text-xs leading-snug hover:underline"
                        >
                          {s.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTASection
        variant="emergency"
        title={`Need Locksmith Service in Casselberry Right Now?`}
        subtitle={`We serve all of Casselberry 24/7 — US-17/92, SR 436 (Semoran Blvd), SR 434 corridor and every neighborhood. Call for immediate dispatch.`}
      />
    </>
  );
}
