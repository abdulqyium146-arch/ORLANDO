import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  BadgeCheck,
  Wrench,
  Star,
  Clock,
  Phone,
  Shield,
  Award,
  Users,
} from "lucide-react";
import { SITE_CONFIG, AUTHOR, SERVICES } from "@/lib/config";
import { generatePersonSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import CTASection from "@/components/shared/CTASection";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: `About ${AUTHOR.name} — Licensed Master Locksmith Orlando`,
  description: `Meet ${AUTHOR.name}, founder and licensed master locksmith at Affordable Locksmith Orlando. ${AUTHOR.yearsExperience}+ years experience, ALOA certified, Florida state licensed. Serving Orlando, FL since ${SITE_CONFIG.founded}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    type: "profile",
    url: `${SITE_CONFIG.url}/about`,
    title: `About ${AUTHOR.name} — Licensed Master Locksmith Orlando`,
    description: AUTHOR.shortBio,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${AUTHOR.name} — ${AUTHOR.jobTitle}` }],
  },
};

export default function AboutPage() {
  const personSchema = generatePersonSchema();

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_CONFIG.url}/about#webpage`,
    url: `${SITE_CONFIG.url}/about`,
    name: `About ${AUTHOR.name} — Licensed Master Locksmith`,
    description: AUTHOR.shortBio,
    mainEntity: {
      "@id": `${SITE_CONFIG.url}/#author`,
    },
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    author: { "@id": `${SITE_CONFIG.url}/#author` },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "About", url: `${SITE_CONFIG.url}/about` },
  ]);

  const stats = [
    { icon: Clock, value: `${AUTHOR.yearsExperience}+`, label: "Years Experience" },
    { icon: Users, value: AUTHOR.jobsCompleted, label: "Jobs Completed" },
    { icon: Star, value: `${SITE_CONFIG.rating}★`, label: "Google Rating" },
    { icon: Shield, value: "Licensed", label: "FL State Licensed" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">About</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Real photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] order-last lg:order-first">
              <Image
                src="/professional-locksmith-orlando.webp"
                alt={`${AUTHOR.name} — ${AUTHOR.jobTitle} at Affordable Locksmith Orlando`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a5f] to-transparent p-5">
                <p className="text-white font-bold text-lg">{AUTHOR.name}</p>
                <p className="text-[#f59e0b] text-sm">{AUTHOR.jobTitle}</p>
              </div>
            </div>

            <div>
              <span className="inline-block text-[#f59e0b] font-bold text-sm uppercase tracking-wider mb-3">
                Meet the Owner
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-[#f59e0b]">{AUTHOR.name}</span>
                <br />
                <span className="text-2xl sm:text-3xl font-semibold text-gray-200">
                  {AUTHOR.jobTitle}
                </span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {AUTHOR.shortBio}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {AUTHOR.credentials.slice(0, 4).map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden="true" />
                    {cred}
                  </span>
                ))}
              </div>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <s.icon className="h-8 w-8 text-[#f59e0b] mx-auto mb-2" aria-hidden="true" />
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-gray-300 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio */}
      <section className="py-16 px-4" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="bio-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6">
            About {AUTHOR.name}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base mb-4">
              {AUTHOR.fullBio}
            </p>
            <p className="text-gray-700 leading-relaxed text-base mb-4">
              As the face of {SITE_CONFIG.name}, Zack is committed to raising the standard of locksmith
              services in Central Florida. He believes every customer deserves honest, upfront pricing and
              a technician who treats their home, car, or business with respect. That philosophy has earned
              Affordable Locksmith Orlando a {SITE_CONFIG.rating}-star rating across {SITE_CONFIG.reviewCount}+
              verified Google reviews.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              When Zack isn&apos;t in the field, he&apos;s training his team on the latest automotive key
              programming technology, smart lock systems, and commercial security hardware — ensuring every
              Affordable Locksmith Orlando technician delivers the same expert-level service he built his
              reputation on.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="credentials-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="credentials-heading" className="text-2xl font-bold text-[#1e3a5f] mb-2">
            Licenses, Certifications &amp; Credentials
          </h2>
          <p className="text-gray-600 mb-8">
            Zack maintains active licenses and certifications that demonstrate his expertise and
            commitment to professional standards in the locksmith industry.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {AUTHOR.credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#16a34a]/10 shrink-0">
                  <BadgeCheck className="h-5 w-5 text-[#16a34a]" aria-hidden="true" />
                </div>
                <span className="text-gray-800 text-sm font-medium">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-14 px-4" aria-labelledby="expertise-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="expertise-heading" className="text-2xl font-bold text-[#1e3a5f] mb-2">
            Areas of Expertise
          </h2>
          <p className="text-gray-600 mb-8">
            With {AUTHOR.yearsExperience}+ years in the field, Zack has mastered every facet of
            professional locksmithing.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {AUTHOR.expertise.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <Wrench className="h-4 w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>

          <h3 className="font-bold text-[#1e3a5f] mb-4">Services Offered by {AUTHOR.name}</h3>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-sm bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] px-3 py-1.5 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-14 px-4 bg-gray-50" aria-labelledby="trust-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="trust-heading" className="text-2xl font-bold text-[#1e3a5f] mb-2">
            Why You Can Trust {AUTHOR.name}
          </h2>
          <p className="text-gray-600 mb-8">
            E-E-A-T isn&apos;t just a Google concept — it&apos;s how Zack has run his business from day one:
            real experience, genuine expertise, community authority, and unwavering trustworthiness.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Clock,
                title: "Experience",
                desc: `${AUTHOR.yearsExperience}+ years performing thousands of locksmith jobs in Orlando. Real hands-on experience with every lock brand, car make, and security system.`,
              },
              {
                icon: Award,
                title: "Expertise",
                desc: "Florida State Licensed, ALOA certified, and trained in the latest automotive key programming, smart lock technology, and commercial security systems.",
              },
              {
                icon: Star,
                title: "Authoritativeness",
                desc: `${SITE_CONFIG.rating}★ rated on Google with ${SITE_CONFIG.reviewCount}+ reviews. Recognized by local customers, businesses, and the Orlando community as a trusted locksmith.`,
              },
              {
                icon: Shield,
                title: "Trustworthiness",
                desc: "Background-checked, fully insured, upfront pricing with no hidden fees. Zack personally backs every job with a satisfaction guarantee.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e3a5f] shrink-0">
                    <card.icon className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f]">{card.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges variant="compact" />
        </div>
      </section>

      <CTASection
        variant="emergency"
        title={`Call ${AUTHOR.name} — Your Local Locksmith`}
        subtitle={`Speak directly with ${AUTHOR.name}'s team. Available 24/7 with 20–30 minute response throughout Orlando.`}
      />
    </>
  );
}
