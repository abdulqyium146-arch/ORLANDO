import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone, Clock, MapPin, ChevronRight, CheckCircle, Star,
  KeyRound, AlertTriangle, Home, Building2, Car, RefreshCw,
} from "lucide-react";
import { SERVICE_AREAS, SITE_CONFIG, SERVICES, REVIEWS } from "@/lib/config";
import { generateLocationSchema, generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import TrustBadges from "@/components/shared/TrustBadges";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/shared/ContactForm";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound, Cpu: KeyRound,
  RefreshCw, Wrench: KeyRound, Shield: AlertTriangle, PlusSquare: KeyRound,
};

function getLocationContent(name: string) {
  return {
    intro: `Affordable Locksmith Orlando proudly serves ${name}, FL and surrounding neighborhoods. Our certified locksmiths provide fast, professional, and affordable locksmith services to ${name} residents, businesses, and drivers — 24 hours a day, 7 days a week.`,
    neighborhoods: `Whether you're in the heart of ${name} or an outlying neighborhood, our mobile locksmith units provide rapid response throughout the area. We typically arrive within 20–30 minutes.`,
    faqs: [
      {
        q: `Is there a locksmith available 24/7 in ${name}, FL?`,
        a: `Yes. Affordable Locksmith Orlando provides 24/7 emergency locksmith service in ${name}, FL. We respond to emergencies day and night, including weekends and holidays. Our average arrival time is 20–30 minutes.`,
      },
      {
        q: `How much does a locksmith cost in ${name}?`,
        a: `Locksmith services in ${name} start at $45 for emergency lockouts. Lock rekeying starts at $25 per lock. Car key programming starts at $85. We provide upfront pricing before any work begins.`,
      },
      {
        q: `What locksmith services are available in ${name}?`,
        a: `We offer complete locksmith services in ${name} including emergency lockouts, residential lock services (installation, rekeying, repair), commercial locksmith services, automotive locksmith and car key programming, and safe opening.`,
      },
      {
        q: `Do you offer same-day locksmith service in ${name}?`,
        a: `Yes. Same-day service is available for most locksmith needs in ${name}. Emergency services are dispatched immediately. Standard services can typically be scheduled same-day.`,
      },
    ],
  };
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: "Location Not Found" };

  const pageUrl = `${SITE_CONFIG.url}/locations/${slug}`;
  const title = `Locksmith ${area.name} FL | 24/7 Emergency Locksmith`;
  const description = `Professional locksmith services in ${area.name}, FL. Emergency lockouts, lock rekeying, car keys & more. Available 24/7. Fast 20–30 min response. Call ${SITE_CONFIG.phone}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    keywords: [
      `locksmith ${area.name}`,
      `locksmith ${area.name} FL`,
      `emergency locksmith ${area.name}`,
      `${area.name} locksmith`,
      `locksmith near me ${area.name}`,
      `24 hour locksmith ${area.name}`,
    ],
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Locksmith ${area.name} FL` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = getLocationContent(area.name);
  const pageUrl = `${SITE_CONFIG.url}/locations/${slug}`;
  const locationSchema = generateLocationSchema(area.name, slug);
  const faqSchema = generateFAQSchema(content.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
    { name: `${area.name}, FL`, url: pageUrl },
  ]);
  const webPageSchema = generateWebPageSchema({
    name: `Locksmith ${area.name} FL — 24/7 Emergency Locksmith`,
    description: content.intro,
    url: pageUrl,
    type: "WebPage",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-400 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">{area.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 bg-white rounded-full emergency-pulse" aria-hidden="true" />
                Serving {area.name} 24/7
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Locksmith in{" "}
                <span className="text-[#f59e0b]">{area.name}, FL</span>
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {content.intro}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Clock, text: "20–30 Min Response" },
                  { icon: MapPin, text: `Serving ${area.name}` },
                  { icon: Star, text: `${SITE_CONFIG.rating}★ Rated` },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm">
                    <item.icon className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    {item.text}
                  </div>
                ))}
              </div>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="font-bold text-[#1e3a5f] text-lg mb-1">
                Request Service in {area.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We&apos;ll respond within minutes. For emergencies call directly.
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services Available — all 10 with city×service links */}
      <section className="py-14 px-4" aria-labelledby="local-services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="local-services-heading" className="text-2xl font-bold text-[#1e3a5f] mb-2 text-center">
            Locksmith Services in {area.name}, FL
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            All locksmith services are available in {area.name} with fast 20–30 minute response
            times and upfront pricing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || KeyRound;
              return (
                <Link
                  key={service.slug}
                  href={`/locations/${slug}/${service.slug}`}
                  className="group flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#1e3a5f] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] shrink-0 transition-colors">
                    <Icon className="h-5 w-5 text-[#1e3a5f] group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#1e3a5f]">
                      {service.name} in {area.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">{service.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About serving this area */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="about-area-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-area-heading" className="text-2xl font-bold text-[#1e3a5f] mb-4">
            Your Local Locksmith in {area.name}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">{content.neighborhoods}</p>
          <ul className="space-y-2 mb-6">
            {[
              `Licensed locksmith serving ${area.name} since ${SITE_CONFIG.founded}`,
              `${SITE_CONFIG.rating}★ rated with ${SITE_CONFIG.reviewCount}+ verified reviews`,
              "Upfront pricing — no hidden fees or surprises",
              "All technicians are background-checked and certified",
              "We accept all major credit cards, cash, Apple Pay & Google Pay",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-[#16a34a] shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4" aria-labelledby="location-faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="location-faq-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6">
            Locksmith {area.name} — FAQ
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-[#1e3a5f] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="location-reviews-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="location-reviews-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">
            Customer Reviews — Greater Orlando Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r) => (
              <ReviewCard key={r.id} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>

      {/* All Services — quick links */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">All Services — {area.name}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${slug}/${s.slug}`}
                className="bg-gray-100 hover:bg-[#1e3a5f] hover:text-white text-gray-700 text-sm px-3 py-1.5 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
            <Link href="/services" className="text-[#1e3a5f] font-semibold hover:underline">All Services →</Link>
            <Link href="/locations" className="text-[#1e3a5f] font-semibold hover:underline">All Locations →</Link>
            <Link href="/faq" className="text-[#1e3a5f] font-semibold hover:underline">FAQ →</Link>
            <Link href="/contact" className="text-[#1e3a5f] font-semibold hover:underline">Contact →</Link>
            <Link href="/reviews" className="text-[#1e3a5f] font-semibold hover:underline">Reviews →</Link>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-8 px-4 bg-gray-50" aria-labelledby="nearby-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="nearby-heading" className="font-bold text-[#1e3a5f] mb-3">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.filter((a) => a.slug !== slug).map((a) => (
              <Link
                key={a.slug}
                href={`/locations/${a.slug}`}
                className="text-sm text-gray-600 hover:text-[#1e3a5f] border border-gray-200 hover:border-[#1e3a5f] rounded-lg px-3 py-1.5 transition-all"
              >
                {a.name}, FL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="emergency"
        title={`Need a Locksmith in ${area.name} Right Now?`}
        subtitle={`We serve ${area.name} 24/7 with 20–30 minute response times. Call us immediately for emergency service.`}
      />
    </>
  );
}
