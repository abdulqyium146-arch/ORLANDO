import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { SITE_CONFIG, FAQ_GENERAL, SERVICES } from "@/lib/config";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Locksmith FAQ — Frequently Asked Questions",
  description: `Answers to the most common questions about locksmith services in Orlando, FL. Pricing, response time, emergency service, rekeying, and more. Call ${SITE_CONFIG.phone}`,
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
};

const SERVICE_FAQS = [
  {
    category: "Emergency Locksmith",
    faqs: [
      { q: "What counts as a locksmith emergency?", a: "A locksmith emergency includes: being locked out of your home, car, or business; a broken key stuck in a lock; a compromised lock after a break-in attempt; or any situation where you need immediate access or security restored." },
      { q: "What is the fastest locksmith response time in Orlando?", a: "Our fastest response times are typically 15–20 minutes for calls in central Orlando. The average across our full service area is 20–30 minutes. We dispatch the nearest available technician immediately upon your call." },
    ],
  },
  {
    category: "Pricing & Payments",
    faqs: [
      { q: "How is locksmith pricing determined in Orlando?", a: "Locksmith pricing depends on the service type, time of day, lock brand/complexity, and whether parts (locks, keys) are required. We always provide an upfront quote before starting work. There are no hidden fees." },
      { q: "Is after-hours locksmith service more expensive?", a: "No. Our pricing is consistent 24/7. We do not charge extra for nights, weekends, or holidays. You get the same fair rate regardless of when you call." },
      { q: "Do you offer free estimates?", a: "Yes. We provide a free quote over the phone for most services once you describe the situation. For on-site assessments, a technician visit is included in the service call fee, which is waived if you proceed with the work." },
    ],
  },
  {
    category: "Residential Services",
    faqs: [
      { q: "How do I know if I should rekey or replace my locks?", a: "Rekey when: you've moved into a new home, lost a key, or want to change access without replacing hardware. Replace when: the lock is damaged, low-security grade, very old, or you want to upgrade to smart locks." },
      { q: "Can you install a smart lock on any door?", a: "Most standard residential doors can accommodate smart locks. We assess your door and existing hardware to recommend compatible smart locks. We install August, Yale, Schlage Encode, Kwikset Halo, and Google Nest Lock." },
      { q: "How long does rekeying take?", a: "Rekeying a single lock takes 10–15 minutes. A full home rekey (3–4 locks) is typically completed in 30–45 minutes." },
    ],
  },
  {
    category: "Automotive Services",
    faqs: [
      { q: "Can you make a car key for any vehicle?", a: "We service the vast majority of makes and models including all domestic vehicles (Ford, Chevy, Dodge, etc.) and foreign brands (Toyota, Honda, BMW, Mercedes, etc.). Some very new or specialized models may require dealer-only programming." },
      { q: "How much cheaper is a mobile locksmith vs the dealership for car keys?", a: "Typically 30–60% cheaper. A dealership might charge $250–$500 for a transponder key or key fob. Our pricing starts at $85–$150 for most vehicles, including programming." },
      { q: "My key is in the ignition and the car won't start — can you help?", a: "This could be a transponder programming issue, a dead battery in a smart key, or ignition problems. Our automotive locksmiths diagnose and resolve these issues on-site." },
    ],
  },
  {
    category: "Safety & Trust",
    faqs: [
      { q: "How do I know the locksmith is legitimate?", a: "A legitimate locksmith will arrive in a marked vehicle or with company identification, ask to see proof of ownership before performing any lockout, provide a written estimate, and have a physical business address and license number. All of this applies to Affordable Locksmith Orlando." },
      { q: "What proof of ownership do I need for a lockout?", a: "For home lockouts: a photo ID matching the address. For car lockouts: vehicle registration and photo ID. For business lockouts: business ID or key authorization documentation." },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = [...FAQ_GENERAL, ...SERVICE_FAQS.flatMap((c) => c.faqs)];
  const faqSchema = generateFAQSchema(allFaqs.map((f) => ({ q: f.q, a: f.a })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "FAQ", url: `${SITE_CONFIG.url}/faq` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">FAQ</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Locksmith{" "}
            <span className="text-[#f59e0b]">Frequently Asked Questions</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Everything you need to know about our Orlando locksmith services — pricing, response
            time, safety, and more.
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-14 px-4" aria-labelledby="general-faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="general-faq-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6">
            General Questions
          </h2>
          <div className="space-y-4 mb-12">
            {FAQ_GENERAL.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1e3a5f] transition-colors">
                <h3 className="font-bold text-[#1e3a5f] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Category FAQs */}
          {SERVICE_FAQS.map((category) => (
            <div key={category.category} className="mb-10">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#f59e0b] rounded-full" aria-hidden="true" />
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1e3a5f] transition-colors">
                    <h3 className="font-bold text-[#1e3a5f] mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 text-center">
            <h2 className="font-bold text-xl mb-2">Still Have Questions?</h2>
            <p className="text-gray-300 mb-4">
              Our team is available 24/7 to answer your questions and provide service.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-[#d97706] transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-10 px-4 bg-gray-50" aria-labelledby="faq-services-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-services-heading" className="font-bold text-[#1e3a5f] mb-3">
            Explore Our Services
          </h2>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-sm border border-gray-200 hover:border-[#1e3a5f] hover:text-[#1e3a5f] px-3 py-1.5 rounded-full transition-all"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="standard" />
    </>
  );
}
