import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone, Clock, ChevronRight, CheckCircle, MapPin, Star,
  KeyRound, AlertTriangle, Home, Building2, Car, RefreshCw, Wrench, Shield,
} from "lucide-react";
import { SERVICE_AREAS, SERVICES, SITE_CONFIG, REVIEWS } from "@/lib/config";
import {
  generateCityServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/shared/ContactForm";
import TrustBadges from "@/components/shared/TrustBadges";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound, Cpu: KeyRound,
  RefreshCw, Wrench, Shield, PlusSquare: Shield,
};

export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];
  for (const area of SERVICE_AREAS) {
    for (const service of SERVICES) {
      params.push({ slug: area.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!area || !service) return { title: "Not Found" };

  const pageUrl = `${SITE_CONFIG.url}/locations/${slug}/${serviceSlug}`;
  const title = `${service.name} in ${area.name}, FL | 24/7 Locksmith`;
  const description = `Professional ${service.name.toLowerCase()} in ${area.name}, FL. ${service.description} Fast response. Call ${SITE_CONFIG.phone}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    keywords: [
      `${service.name.toLowerCase()} ${area.name}`,
      `${service.name.toLowerCase()} ${area.name} FL`,
      `${area.name} ${service.name.toLowerCase()}`,
      `locksmith ${area.name}`,
    ],
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${service.name} ${area.name} FL` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service: serviceSlug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!area || !service) notFound();

  const Icon = SERVICE_ICONS[service.icon] || KeyRound;
  const pageUrl = `${SITE_CONFIG.url}/locations/${slug}/${serviceSlug}`;

  const localFaqs = [
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${area.name}, FL?`,
      a: `${service.name} in ${area.name} starts at ${service.price}. We provide upfront pricing before any work begins — no hidden fees. Call ${SITE_CONFIG.phone} for a free quote.`,
    },
    {
      q: `Is ${service.name.toLowerCase()} available 24/7 in ${area.name}?`,
      a: `Yes. We provide ${service.name.toLowerCase()} in ${area.name}, FL 24 hours a day, 7 days a week including holidays. Our average response time is 20–30 minutes.`,
    },
    {
      q: `How fast can you arrive for ${service.name.toLowerCase()} in ${area.name}?`,
      a: `Our average arrival time in ${area.name} is 20–30 minutes. We dispatch the nearest available technician immediately when you call.`,
    },
    {
      q: `Do you offer same-day ${service.name.toLowerCase()} in ${area.name}?`,
      a: `Yes. Same-day service is available for ${service.name.toLowerCase()} in ${area.name}. For emergency service, we typically arrive within 20–30 minutes.`,
    },
  ];

  const comboSchema = generateCityServiceSchema({
    serviceName: service.name,
    serviceDescription: service.heroDescription,
    cityName: area.name,
    slug,
    serviceSlug,
    price: service.price,
  });
  const faqSchema = generateFAQSchema(localFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
    { name: area.name, url: `${SITE_CONFIG.url}/locations/${slug}` },
    { name: service.name, url: pageUrl },
  ]);
  const webPageSchema = generateWebPageSchema({
    name: `${service.name} in ${area.name}, FL`,
    description: service.heroDescription,
    url: pageUrl,
    type: "ServicePage",
  });

  /* Other services for this city */
  const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug).slice(0, 5);
  /* Same service in nearby cities */
  const nearbyCities = SERVICE_AREAS.filter((a) => a.slug !== slug).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comboSchema) }} />
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
            <Link href={`/locations/${slug}`} className="hover:text-white transition-colors">{area.name}</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 bg-white rounded-full emergency-pulse" aria-hidden="true" />
                Available in {area.name} 24/7
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {service.name} in{" "}
                <span className="text-[#f59e0b]">{area.name}, FL</span>
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {service.heroDescription} Serving {area.name} and surrounding neighborhoods with
                fast 20–30 minute response times, 24/7.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Clock, text: "20–30 Min Response" },
                  { icon: MapPin, text: area.name },
                  { icon: Star, text: `${SITE_CONFIG.rating}★ Rated` },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm">
                    <item.icon className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-xs text-gray-300">Starting at</div>
                  <div className="font-bold text-[#f59e0b]">{service.price}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-xs text-gray-300">Response</div>
                  <div className="font-bold text-white">{service.responseTime}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-xs text-gray-300">Availability</div>
                  <div className="font-bold text-white">24/7</div>
                </div>
              </div>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="font-bold text-[#1e3a5f] text-lg mb-1">
                Request {service.shortName} in {area.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We respond within minutes. For emergencies call directly.
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us for this service in this city */}
      <section className="py-14 px-4" aria-labelledby="local-service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 id="local-service-heading" className="text-2xl font-bold text-[#1e3a5f] mb-4">
                {service.name} in {area.name} — What to Expect
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                When you need {service.name.toLowerCase()} in {area.name}, FL, you need a fast,
                reliable, and affordable locksmith. Affordable Locksmith Orlando serves {area.name}{" "}
                and surrounding neighborhoods 24/7 with certified technicians and upfront pricing.
              </p>

              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Service Details</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.heroDescription}</p>

              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                Why {area.name} Residents Choose Us
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  `Fast 20–30 minute arrival anywhere in ${area.name}`,
                  `${service.price} starting price — upfront, no hidden fees`,
                  "Licensed and insured Florida locksmith company",
                  `${SITE_CONFIG.rating}★ rated with ${SITE_CONFIG.reviewCount}+ verified Google reviews`,
                  "Background-checked, certified technicians",
                  "All major payment methods accepted",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#16a34a] shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* FAQs */}
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                {service.name} in {area.name} — FAQ
              </h3>
              <div className="space-y-4">
                {localFaqs.map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-bold text-[#1e3a5f] mb-2">{faq.q}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Call Box */}
              <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 text-center sticky top-20">
                <Icon className="h-10 w-10 text-[#f59e0b] mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-1">Serving {area.name}, FL</p>
                <p className="text-[#f59e0b] font-bold mb-4">{service.responseTime} response</p>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold w-full py-3 rounded-xl text-lg transition-colors mb-3"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
                <p className="text-gray-400 text-xs">{SITE_CONFIG.phone}</p>
              </div>

              {/* Other services in this city */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-[#1e3a5f] mb-3">
                  More Services in {area.name}
                </h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/locations/${slug}/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e3a5f] hover:font-medium transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden="true" />
                      {s.name} in {area.name}
                    </Link>
                  ))}
                  <Link
                    href={`/locations/${slug}`}
                    className="text-sm font-semibold text-[#1e3a5f] hover:underline"
                  >
                    All {area.name} Services →
                  </Link>
                </div>
              </div>

              {/* Same service in nearby cities */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-[#1e3a5f] mb-3">
                  {service.name} Near {area.name}
                </h3>
                <div className="space-y-2">
                  {nearbyCities.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/locations/${a.slug}/${serviceSlug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e3a5f] transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden="true" />
                      {service.name} in {a.name}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="city-service-reviews">
        <div className="max-w-7xl mx-auto">
          <h2 id="city-service-reviews" className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">
            What Orlando-Area Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((r) => (
              <ReviewCard key={r.id} {...r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>

      <CTASection
        variant="emergency"
        title={`Need ${service.name} in ${area.name}?`}
        subtitle={`We serve ${area.name} 24/7. Call now for fast, professional ${service.name.toLowerCase()} — we arrive in 20–30 minutes.`}
      />
    </>
  );
}
