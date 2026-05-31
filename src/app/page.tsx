import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Home,
  Car,
  Building2,
  AlertTriangle,
  KeyRound,
  Wrench,
  RefreshCw,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS, REVIEWS, FAQ_GENERAL } from "@/lib/config";
import { generateFAQSchema } from "@/lib/schema";
import TrustBadges from "@/components/shared/TrustBadges";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "24/7 Emergency Locksmith Orlando FL | Affordable Locksmith Orlando",
  description: `Affordable Locksmith Orlando — Licensed & insured. Fast 20–30 min response. Emergency lockouts, residential, commercial & automotive locksmith services 24/7. Call ${SITE_CONFIG.phone}`,
  alternates: { canonical: SITE_CONFIG.url },
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle,
  Home,
  Building2,
  Car,
  KeyRound,
  Cpu: KeyRound,
  RefreshCw,
  Wrench,
  Shield,
  PlusSquare: Shield,
};

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Call or Request Online",
    desc: "Call us at any hour or submit our quick online form. Tell us your location and the service you need.",
  },
  {
    step: "2",
    title: "Get Upfront Pricing",
    desc: "We provide a clear, honest price before any work begins. No surprise fees.",
  },
  {
    step: "3",
    title: "Fast Technician Dispatch",
    desc: "A certified technician is dispatched immediately. Average arrival in Orlando: 20–30 minutes.",
  },
  {
    step: "4",
    title: "Problem Solved",
    desc: "Professional service completed efficiently. We accept all major payment methods.",
  },
];

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQ_GENERAL.slice(0, 5).map((f) => ({ q: f.q, a: f.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="hero-gradient text-white relative overflow-hidden" aria-label="Hero">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Copy */}
            <div>
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-white rounded-full emergency-pulse" aria-hidden="true" />
                Available Right Now — 24/7 Emergency Service
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Orlando&apos;s Most Trusted{" "}
                <span className="text-[#f59e0b]">Locksmith</span>
                <br />
                Fast, Affordable & Licensed
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-xl">
                Locked out? Need new locks? Lost your car keys? We provide professional locksmith
                services across Orlando, FL — available{" "}
                <strong className="text-white">24 hours a day, 7 days a week</strong>, including
                holidays.
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, text: "20–30 Min Response" },
                  { icon: Star, text: `${SITE_CONFIG.rating}★ Google Rating` },
                  { icon: Shield, text: "Licensed & Insured" },
                ].map((stat) => (
                  <div key={stat.text} className="flex items-center gap-2 text-sm">
                    <stat.icon className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                    <span className="font-medium">{stat.text}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg text-lg"
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-xl border border-white/30 transition-colors"
                >
                  Request Service Online
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-3">
                Serving Orlando and surrounding areas within 30 miles
              </p>
            </div>

            {/* Right: Quick Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[#16a34a] rounded-full emergency-pulse" aria-hidden="true" />
                <span className="font-bold text-[#1e3a5f] text-lg">Request Locksmith Service</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Fill out the form and we&apos;ll respond within minutes. For emergencies, call directly.
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 px-4" aria-label="Trust indicators">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="horizontal" />
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-16 px-4" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">
              What We Do
            </span>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
              Complete Locksmith Services in Orlando
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency lockouts to complete security upgrades — our certified technicians
              handle every lock and key need for residential, commercial, and automotive customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || KeyRound;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#1e3a5f] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] transition-colors">
                      <Icon
                        className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    {service.popular && (
                      <span className="text-xs bg-[#f59e0b]/15 text-[#d97706] font-semibold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#1e3a5f] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Starting at</div>
                      <div className="font-bold text-[#1e3a5f] text-sm">{service.price}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[#1e3a5f] font-semibold text-sm">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY CTA ─── */}
      <CTASection variant="emergency" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">
              Simple Process
            </span>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Getting locksmith help in Orlando is simple. Here&apos;s what to expect when you call us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative text-center">
                {/* Connector line */}
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[#1e3a5f]/20" aria-hidden="true" />
                <div className="relative">
                  <div className="w-16 h-16 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="py-16 px-4" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
              Why Choose Affordable Locksmith Orlando?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve built our reputation on fast response times, honest pricing, and professional
              service. Here&apos;s what sets us apart from other Orlando locksmiths.
            </p>
          </div>
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-6 w-6 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
              ))}
            </div>
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">
              {SITE_CONFIG.rating}★ Rated by Orlando Customers
            </h2>
            <p className="text-gray-600">
              {SITE_CONFIG.reviewCount}+ verified Google reviews from real Orlando customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {REVIEWS.slice(0, 6).map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-bold hover:underline"
            >
              Read All Reviews
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-16 px-4" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">
              Where We Serve
            </span>
            <h2 id="areas-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
              Locksmith Services Across the Orlando Metro
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We serve Orlando and all surrounding communities within a 30-mile radius. Fast arrival
              times throughout the entire service area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white group transition-all"
              >
                <MapPin className="h-4 w-4 text-[#f59e0b] shrink-0 group-hover:text-[#f59e0b]" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="text-3xl font-bold text-[#1e3a5f] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our Orlando locksmith services.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_GENERAL.slice(0, 6).map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-[#1e3a5f] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-bold hover:underline"
            >
              View All FAQs
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / EEAT ─── */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-2">
                About Us
              </span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Orlando&apos;s Trusted Local Locksmith Since {SITE_CONFIG.founded}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Affordable Locksmith Orlando is a locally owned and operated locksmith company
                serving the greater Orlando area. Since {SITE_CONFIG.founded}, we&apos;ve helped
                thousands of Orlando residents and businesses with their lock and key needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every technician is state-licensed, background-checked, and trained on the latest
                lock technology — from traditional deadbolts to smart locks and advanced
                transponder key systems.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Florida State Licensed Locksmith Company",
                  "Fully insured — liability and workers compensation",
                  "Background-checked, certified technicians",
                  "Serving Orlando since " + SITE_CONFIG.founded,
                  `${SITE_CONFIG.rating}★ rated with ${SITE_CONFIG.reviewCount}+ verified reviews`,
                  "Transparent, upfront pricing — no hidden fees",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#16a34a] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <CTASection variant="minimal" />
            </div>

            {/* Stats Panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years in Business", value: `${new Date().getFullYear() - parseInt(SITE_CONFIG.founded)}+` },
                { label: "Customers Served", value: "5,000+" },
                { label: "Google Rating", value: `${SITE_CONFIG.rating}★` },
                { label: "Avg Response Time", value: "~25 min" },
                { label: "5-Star Reviews", value: `${SITE_CONFIG.reviewCount}+` },
                { label: "Service Coverage", value: "30 miles" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1e3a5f] text-white rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-bold text-[#f59e0b] mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        variant="standard"
        title="Ready to Get Help? Call Affordable Locksmith Orlando"
        subtitle="We're standing by 24/7. Call now for immediate dispatch or request service online."
      />
    </>
  );
}
