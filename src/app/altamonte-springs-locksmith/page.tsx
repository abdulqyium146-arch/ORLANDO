import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, Clock, MapPin, Star, ChevronRight, CheckCircle,
  Shield, BadgeCheck, AlertTriangle, Building2, Home, Car,
  KeyRound, RefreshCw, Wrench, ArrowRight, DollarSign,
} from "lucide-react";
import { SITE_CONFIG, AUTHOR, SERVICES, REVIEWS } from "@/lib/config";
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

/* ── Page constants ── */
const CITY = "Altamonte Springs";
const SLUG = "altamonte-springs";
const PAGE_URL = `${SITE_CONFIG.url}/altamonte-springs-locksmith`;

/* ── PAA-targeted FAQs (AIO + AEO) ── */
const FAQS = [
  {
    q: "What locksmith services are available in Altamonte Springs, FL?",
    a: `Affordable Locksmith Orlando provides complete locksmith services in Altamonte Springs, FL including 24/7 emergency lockouts (home, car, office), lock rekeying, deadbolt installation, smart lock setup, car key replacement and programming, safe opening, commercial master key systems, and access control installation. All services are available across Altamonte Springs ZIP codes 32701 and 32714 in Seminole County with 20–30 minute response times.`,
  },
  {
    q: "How much does locksmith service cost in Altamonte Springs?",
    a: `Locksmith service in Altamonte Springs starts at $45 for emergency lockouts. Lock rekeying from $25/lock. Deadbolt installation from $55 (labor). Car key programming from $85. Smart lock installation from $55. All prices are quoted upfront before work begins — no hidden service call fees, no after-hours surcharges.`,
  },
  {
    q: "Is there a 24-hour locksmith in Altamonte Springs?",
    a: `Yes. Affordable Locksmith Orlando provides 24-hour locksmith service in Altamonte Springs, FL 365 days a year including all holidays and weekends. Average arrival time in Altamonte Springs is 20–30 minutes. Call ${SITE_CONFIG.phone} for immediate dispatch.`,
  },
  {
    q: "How fast can a locksmith arrive in Altamonte Springs?",
    a: `Our average response time in Altamonte Springs is 20–30 minutes. Mobile locksmith units are positioned throughout Seminole County for rapid dispatch to Cranes Roost, Forest City, Spring Lake, and the SR 434 and SR 436 corridors.`,
  },
  {
    q: "Do you provide locksmith service near Cranes Roost Park and Altamonte Mall?",
    a: `Yes. We serve all Altamonte Springs locations including Cranes Roost Park, Altamonte Mall corridor, AdventHealth Altamonte Springs campus, SunRail Altamonte Springs Station, and all residential areas along SR 434, SR 436, and US-17/92 — same 20–30 minute response throughout.`,
  },
  {
    q: "Are you a licensed locksmith serving Altamonte Springs, FL?",
    a: `Yes. Affordable Locksmith Orlando holds Florida State Locksmith License ${SITE_CONFIG.licenseNumber} and is fully insured. All technicians are background-checked and ALOA (Associated Locksmiths of America) certified. We are authorized to provide locksmith services throughout Seminole County including Altamonte Springs.`,
  },
];

/* ── Pricing data ── */
const PRICING_ROWS = [
  { service: "Emergency Lockout (Home / Office)", href: `/locations/${SLUG}/emergency-locksmith`, price: "From $45", dealer: "$75–$150", time: "20–30 min" },
  { service: "Car Lockout", href: `/locations/${SLUG}/automotive-locksmith`, price: "From $65", dealer: "$75–$150", time: "20–30 min" },
  { service: "Lock Rekeying (per lock)", href: `/locations/${SLUG}/lock-rekeying`, price: "From $25", dealer: "$50–$80", time: "Same day" },
  { service: "Deadbolt Installation", href: `/locations/${SLUG}/lock-installation`, price: "From $55", dealer: "$100–$200", time: "Same day" },
  { service: "Car Key Programming", href: `/locations/${SLUG}/car-key-programming`, price: "From $85", dealer: "$200–$500+", time: "Same day" },
  { service: "Smart Lock Installation", href: `/locations/${SLUG}/lock-installation`, price: "From $55", dealer: "$150–$400", time: "Same day" },
];

/* ── Neighborhood coverage ── */
const NEIGHBORHOODS = [
  "Cranes Roost", "Forest City", "Spring Lake", "Sanlando Springs",
  "Altamonte Mall Area", "AdventHealth Campus", "SunRail Station",
  "SR 434 Corridor", "SR 436 Corridor", "US-17/92 Corridor",
];

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound,
  Cpu: KeyRound, RefreshCw, Wrench, Shield, PlusSquare: Shield,
};

/* ── Metadata ── */
export const metadata: Metadata = {
  title: `Locksmith Service Altamonte Springs FL | 24/7 Licensed — ${SITE_CONFIG.name}`,
  description: `Professional locksmith service in Altamonte Springs, FL (Seminole County). Emergency lockouts, rekeying, car keys & more. 20–30 min response 24/7. Licensed & insured. Call ${SITE_CONFIG.phone}`,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "locksmith service altamonte springs",
    "locksmith services altamonte springs fl",
    "locksmith altamonte springs",
    "emergency locksmith altamonte springs",
    "24 hour locksmith altamonte springs fl",
    "locksmith near me altamonte springs",
    "locksmith altamonte springs fl",
    "locksmith seminole county",
    "affordable locksmith altamonte springs",
    "car lockout altamonte springs",
    "lock rekey altamonte springs fl",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `Locksmith Service Altamonte Springs FL | 24/7 Licensed`,
    description: `Professional locksmith service in Altamonte Springs, FL. Emergency lockouts, rekeying, car keys. 20–30 min response 24/7. Call ${SITE_CONFIG.phone}`,
    images: [{ url: "/professional-locksmith-orlando.webp", width: 800, height: 600, alt: `Locksmith Service Altamonte Springs FL` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Locksmith Service Altamonte Springs FL | ${SITE_CONFIG.name}`,
    description: `24/7 licensed locksmith in Altamonte Springs FL. 20–30 min response. Call ${SITE_CONFIG.phone}`,
    images: ["/professional-locksmith-orlando.webp"],
  },
};

export default function AltamonteSpringsLocksmithPage() {
  const locationSchema = generateLocationSchema(CITY, SLUG);
  const faqSchema = generateFAQSchema(FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
    { name: `${CITY}, FL`, url: `${SITE_CONFIG.url}/locations/${SLUG}` },
    { name: `Locksmith Service ${CITY}`, url: PAGE_URL },
  ]);
  const webPageSchema = generateWebPageSchema({
    name: `Locksmith Service Altamonte Springs FL — 24/7 Licensed Locksmith`,
    description: `Professional locksmith service in Altamonte Springs, FL (Seminole County). Emergency lockouts, rekeying, car keys & more.`,
    url: PAGE_URL,
    type: "WebPage",
    breadcrumb: breadcrumbSchema,
  });
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${PAGE_URL}#howto`,
    name: "How to Get Locksmith Service in Altamonte Springs, FL",
    description: "4-step process to get fast, licensed locksmith service in Altamonte Springs from Affordable Locksmith Orlando.",
    totalTime: "PT35M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "45" },
    step: [
      { "@type": "HowToStep", position: 1, name: "Call or Request Online", text: "Call our 24/7 line or fill out the quick online form with your Altamonte Springs location and service needed.", url: `${SITE_CONFIG.url}/contact` },
      { "@type": "HowToStep", position: 2, name: "Receive an Upfront Quote", text: "We provide a clear, honest price before any work begins. No hidden service call fees.", url: `${SITE_CONFIG.url}/faq` },
      { "@type": "HowToStep", position: 3, name: "Technician Dispatched", text: "A licensed technician is dispatched from the nearest mobile unit. Average arrival in Altamonte Springs: 20–30 minutes.", url: PAGE_URL },
      { "@type": "HowToStep", position: 4, name: "Problem Solved", text: "Professional locksmith service completed on-site. All major cards, cash, Apple Pay, and Google Pay accepted.", url: `${SITE_CONFIG.url}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

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
                Locksmith Service in{" "}
                <span className="text-[#f59e0b]">Altamonte Springs, FL</span>
              </h1>

              {/* Direct-answer paragraph — AIO / GEO target */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-xl speakable">
                <strong className="text-white">Affordable Locksmith Orlando</strong> provides licensed locksmith
                service throughout Altamonte Springs, FL (ZIP 32701 &amp; 32714, Seminole County) — available
                24 hours a day, 7 days a week. Emergency lockouts, lock rekeying, car key programming, and
                more starting at <strong className="text-[#f59e0b]">$45</strong>, with a{" "}
                <strong className="text-white">20–30 minute average response time</strong>.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Clock, text: "20–30 Min Response" },
                  { icon: Star, text: `${SITE_CONFIG.rating}★ Google Rated` },
                  { icon: Shield, text: "FL Licensed & Insured" },
                  { icon: MapPin, text: "Seminole County" },
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
                  aria-label={`Call locksmith Altamonte Springs ${SITE_CONFIG.phone}`}
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
              <p className="text-gray-400 text-sm mt-3">Serving all Altamonte Springs neighborhoods — 24/7</p>
            </div>

            {/* Right: contact form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 bg-[#16a34a] rounded-full emergency-pulse" aria-hidden="true" />
                <span className="font-bold text-[#1e3a5f] text-lg">Request Locksmith Service</span>
              </div>
              <p className="text-gray-500 text-xs mb-4">Altamonte Springs &amp; Seminole County — we respond within minutes</p>
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
            What Is Locksmith Service in Altamonte Springs, FL?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4 speakable">
              Locksmith service in Altamonte Springs, FL refers to professional lock and key services performed
              by a state-licensed locksmith technician at a customer&apos;s home, vehicle, or business location
              within Altamonte Springs (Seminole County). Services include emergency lockouts, lock rekeying,
              lock installation, deadbolt upgrades, car key programming, and commercial security solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Affordable Locksmith Orlando</strong> — licensed under Florida State License{" "}
              {SITE_CONFIG.licenseNumber} and operating since {SITE_CONFIG.founded} — provides fully mobile
              locksmith service throughout all Altamonte Springs ZIP codes (32701 and 32714). Technicians
              arrive in a marked vehicle with all required equipment and provide an upfront price before
              any work begins.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Under Florida Statute Chapter 493, all locksmith businesses operating in Florida must be
              licensed by the Florida Department of Agriculture and Consumer Services. Affordable Locksmith
              Orlando holds an active Florida license and all technicians are background-screened and{" "}
              ALOA (Associated Locksmiths of America) certified.
            </p>
          </div>

          {/* Quick-answer chips — AEO */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { q: "Response time?", a: "20–30 minutes average in Altamonte Springs" },
              { q: "Hours?", a: "24/7/365 — including holidays" },
              { q: "Starting price?", a: "$45 for emergency lockouts" },
            ].map((item) => (
              <div key={item.q} className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/20 rounded-xl p-4">
                <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-wide mb-1">{item.q}</p>
                <p className="text-gray-700 text-sm font-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">What We Do</span>
            <h2 id="services-heading" className="text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith Services in Altamonte Springs, FL
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every locksmith service available in Altamonte Springs — residential, commercial, and automotive —
              with fast 20–30 minute response and upfront pricing.
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
              View Altamonte Springs Location Hub
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-14 px-4" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">Transparent Pricing</span>
            <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3 speakable">
              Locksmith Service Prices in Altamonte Springs
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Upfront quote before any work begins. No surprise service call fees.
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
              How Locksmith Service Works in Altamonte Springs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Call or Request Online", desc: "Call our 24/7 line or submit the quick form. Tell us your Altamonte Springs location and service needed." },
              { n: "2", title: "Receive Upfront Quote", desc: "We provide a clear, honest price before any work begins. No surprise fees." },
              { n: "3", title: "Fast Dispatch", desc: "A licensed technician is dispatched from the nearest unit. Average arrival in Altamonte Springs: 20–30 min." },
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
                We Serve All Altamonte Springs Neighborhoods
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                Our mobile locksmith units cover every corner of Altamonte Springs, FL — from the Cranes Roost
                lakefront to Forest City, from the Altamonte Mall retail corridor to quiet residential streets
                off SR 434 and SR 436. We also serve neighboring Seminole County communities.
              </p>

              <div className="mb-5">
                <h3 className="font-bold text-[#1e3a5f] text-sm mb-3">Altamonte Springs Areas We Cover</h3>
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
                  `ZIP codes served: 32701, 32714 (Altamonte Springs, FL)`,
                  `County: Seminole County, Florida`,
                  `Average response time: 20–30 minutes`,
                  `Hours: 24/7 — including weekends and holidays`,
                  `Service radius: All Altamonte Springs + surrounding Seminole County`,
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
                title="Affordable Locksmith Orlando — serving Altamonte Springs FL"
                aria-label="Google Map showing Affordable Locksmith Orlando service area"
              />
              <div className="bg-white px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1e3a5f] text-sm">{SITE_CONFIG.name}</p>
                  <p className="text-gray-500 text-xs">Serving Altamonte Springs &amp; Seminole County</p>
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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="why-heading" className="text-2xl font-bold text-[#1e3a5f] mb-3 speakable">
              Why Altamonte Springs Chooses Affordable Locksmith Orlando
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: "Fastest Response in Altamonte Springs",
                desc: "20–30 minute average arrival throughout all ZIP codes 32701 and 32714. Our units are positioned in Seminole County for rapid dispatch.",
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
                icon: BadgeCheck,
                title: `Serving Altamonte Springs Since ${SITE_CONFIG.founded}`,
                desc: "Over a decade of professional locksmith service in Altamonte Springs and the greater Seminole County area.",
              },
              {
                icon: Phone,
                title: "One Number, All Services",
                desc: `Call ${SITE_CONFIG.phone} 24/7 for any residential, commercial, or automotive locksmith need in Altamonte Springs — one call gets it done.`,
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
              Locksmith Service Altamonte Springs — Frequently Asked Questions
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
            Also Serving Cities Near Altamonte Springs
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Longwood", slug: "longwood" },
              { name: "Casselberry", slug: "casselberry" },
              { name: "Maitland", slug: "maitland" },
              { name: "Apopka", slug: "apopka" },
              { name: "Winter Park", slug: "winter-park" },
              { name: "Sanford", slug: "sanford" },
              { name: "Lake Mary", slug: "lake-mary" },
              { name: "Orlando", slug: "orlando" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#1e3a5f] border border-gray-200 hover:border-[#1e3a5f] rounded-lg px-3 py-1.5 transition-all"
              >
                <MapPin className="h-3 w-3 text-[#f59e0b]" aria-hidden="true" />
                {city.name}, FL
              </Link>
            ))}
          </div>

          {/* All services quick links */}
          <h2 className="font-bold text-[#1e3a5f] mb-3 text-sm">All Locksmith Services in Altamonte Springs</h2>
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

      {/* ── FINAL CTA ── */}
      <CTASection
        variant="emergency"
        title={`Need Locksmith Service in Altamonte Springs Right Now?`}
        subtitle={`We serve Altamonte Springs 24/7 — Cranes Roost, Forest City, SR 434 corridor and beyond. Call for immediate dispatch.`}
      />
    </>
  );
}
