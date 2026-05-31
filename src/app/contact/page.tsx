import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/shared/ContactForm";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Contact — 24/7 Locksmith Orlando",
  description: `Contact Affordable Locksmith Orlando 24/7. Call ${SITE_CONFIG.phone} for emergency service or request service online. We respond within minutes.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Affordable Locksmith Orlando",
    url: `${SITE_CONFIG.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      openingHours: "Mo-Su 00:00-24:00",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact{" "}
            <span className="text-[#f59e0b]">Affordable Locksmith Orlando</span>
          </h1>
          <p className="text-gray-200 text-lg">
            Available 24/7 for emergency locksmith service. Call us now or submit a request online.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-14 px-4" aria-labelledby="contact-options-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="contact-options-heading" className="sr-only">Contact Options</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-[#1e3a5f]">Get In Touch</h2>

              {/* Emergency Call */}
              <div className="bg-[#dc2626] text-white rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full emergency-pulse" aria-hidden="true" />
                  <span className="font-bold text-sm">Emergency Locksmith</span>
                </div>
                <p className="text-red-200 text-sm mb-3">Locked out? Call now for immediate dispatch.</p>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-2 bg-white text-red-600 font-bold px-5 py-3 rounded-xl hover:bg-red-50 transition-colors text-lg"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">Phone</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center gap-2 text-[#1e3a5f] hover:underline font-semibold"
                  >
                    <Phone className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-2 text-[#1e3a5f] hover:underline"
                  >
                    <Mail className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">Address</h3>
                  <address className="not-italic flex items-start gap-2 text-gray-700 text-sm">
                    <MapPin className="h-4 w-4 text-[#f59e0b] shrink-0 mt-0.5" aria-hidden="true" />
                    {SITE_CONFIG.address.full}
                  </address>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">Hours</h3>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Clock className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">24/7 — Every Day</div>
                      <div className="text-gray-500">Including all holidays</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick trust */}
              <div className="space-y-2">
                {[
                  "Licensed & insured locksmith",
                  "20–30 min average response time",
                  "Upfront pricing, no hidden fees",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#16a34a] text-white text-xs" aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <MessageSquare className="h-6 w-6 text-[#1e3a5f]" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-[#1e3a5f]">Request Service Online</h2>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Fill out the form below and we&apos;ll contact you within minutes. For emergency
                  service, please call us directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-64 bg-gray-200 relative" aria-label="Service area map">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-[#1e3a5f] mx-auto mb-2" aria-hidden="true" />
            <p className="font-bold text-[#1e3a5f]">Orlando, FL Service Area</p>
            <p className="text-gray-600 text-sm">Serving all of greater Orlando within 30 miles</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] text-sm hover:underline mt-1 inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>
    </>
  );
}
