import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Phone,
  KeyRound,
  AlertTriangle,
  Home,
  Building2,
  Car,
  RefreshCw,
  Wrench,
  Shield,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import TrustBadges from "@/components/shared/TrustBadges";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Locksmith Services Orlando FL",
  description: `Complete locksmith services in Orlando, FL. Emergency lockouts, lock rekeying, car key programming, safe opening, and more. Available 24/7. Call ${SITE_CONFIG.phone}`,
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound, Cpu: KeyRound,
  RefreshCw, Wrench, Shield, PlusSquare: Shield,
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Services</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Locksmith Services in{" "}
            <span className="text-[#f59e0b]">Orlando, FL</span>
          </h1>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
            Licensed, insured, and available 24/7. Our certified technicians handle every lock
            and key need across Orlando and surrounding areas.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
              <span>20–30 min response</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-[#f59e0b] transition-colors font-semibold">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4" aria-labelledby="all-services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="all-services-heading" className="sr-only">All Locksmith Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || KeyRound;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1e3a5f] hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] transition-colors">
                      <Icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Starting at</div>
                      <div className="font-bold text-[#1e3a5f]">{service.price}</div>
                    </div>
                  </div>
                  <h2 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#1e3a5f] transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {service.responseTime}
                    </div>
                    <div className="flex items-center gap-1 text-[#1e3a5f] font-semibold text-sm">
                      View Details
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>

      <CTASection variant="standard" />
    </>
  );
}
