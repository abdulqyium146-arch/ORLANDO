import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Clock, Phone } from "lucide-react";
import { SERVICE_AREAS, SITE_CONFIG } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Locksmith Service Areas — Greater Orlando, FL",
  description: `Affordable Locksmith Orlando serves the greater Orlando metro area. Find your city for local locksmith service: ${SERVICE_AREAS.map((a) => a.name).join(", ")}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/locations` },
};

export default function LocationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Locations", url: `${SITE_CONFIG.url}/locations` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Locations</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Locksmith Service Areas in{" "}
            <span className="text-[#f59e0b]">Greater Orlando, FL</span>
          </h1>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
            We serve Orlando and all surrounding communities within 30 miles. Fast arrival — our
            average response time throughout the service area is 20–30 minutes.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
            <span>20–30 min average response time across all service areas</span>
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-14 px-4" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="areas-heading" className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1e3a5f] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] transition-colors">
                    <MapPin className="h-5 w-5 text-[#1e3a5f] group-hover:text-[#f59e0b] transition-colors" aria-hidden="true" />
                  </div>
                  <span className="text-xs text-gray-500">{area.zip}</span>
                </div>
                <h2 className="font-bold text-gray-900 mb-1 group-hover:text-[#1e3a5f]">
                  {area.name}, FL
                </h2>
                <p className="text-gray-500 text-sm mb-3">24/7 Locksmith Service Available</p>
                <div className="flex items-center gap-1 text-[#1e3a5f] font-semibold text-sm">
                  View Local Services
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map embed placeholder + contact */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="coverage-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="coverage-heading" className="text-2xl font-bold text-[#1e3a5f] mb-3">
            Complete Coverage Across Greater Orlando
          </h2>
          <p className="text-gray-600 mb-6">
            Our mobile locksmith units are stationed throughout the Orlando metro area to ensure rapid
            response times regardless of where you are. If you&apos;re not sure if we serve your area,
            just call — we&apos;ll let you know immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 bg-[#dc2626] text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <span className="text-gray-500 text-sm">Available 24/7 — Including holidays</span>
          </div>
        </div>
      </section>

      <CTASection variant="standard" />
    </>
  );
}
