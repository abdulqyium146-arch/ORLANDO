import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Clock,
  ChevronRight,
  CheckCircle,
  Star,
  MapPin,
  KeyRound,
  AlertTriangle,
  Home,
  Building2,
  Car,
  RefreshCw,
  Wrench,
  Shield,
} from "lucide-react";
import { SERVICES, SITE_CONFIG, REVIEWS, SERVICE_AREAS, FAQ_GENERAL } from "@/lib/config";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import TrustBadges from "@/components/shared/TrustBadges";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/shared/ContactForm";
import AuthorBio from "@/components/shared/AuthorBio";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  AlertTriangle, Home, Building2, Car, KeyRound, Cpu: KeyRound,
  RefreshCw, Wrench, Shield, PlusSquare: Shield,
};

/* ── Service-specific content ── */
const SERVICE_CONTENT: Record<string, {
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  costInfo: string;
  timeInfo: string;
}> = {
  "emergency-locksmith": {
    benefits: [
      "Available 24 hours a day, 7 days a week including holidays",
      "Average arrival time of 20–30 minutes in Orlando",
      "Certified technicians equipped for all lock types",
      "No extra charge for nights, weekends, or holidays",
      "Upfront pricing — you approve the quote before work begins",
    ],
    process: [
      { step: "1", title: "Call Us Immediately", desc: "Call our 24/7 emergency line. Tell us your location and the type of emergency." },
      { step: "2", title: "ID Verification", desc: "For your security, we require proof of ownership before beginning any lockout service." },
      { step: "3", title: "Technician Dispatched", desc: "A certified technician is dispatched immediately. We'll give you an ETA." },
      { step: "4", title: "Problem Solved", desc: "We resolve your lock emergency quickly and professionally. Most lockouts take under 15 minutes." },
    ],
    faqs: [
      { q: "How fast can you respond to an emergency lockout in Orlando?", a: "Our average response time is 20–30 minutes. We have mobile units throughout Orlando for rapid dispatch." },
      { q: "Do you charge extra for nighttime or weekend emergency calls?", a: "No. Our pricing is consistent 24/7. You'll get the same fair rate day or night, weekday or weekend." },
      { q: "What if I'm locked out of my car on a highway?", a: "We service all locations throughout the Orlando metro area including highways and parking lots. Just give us your exact location." },
      { q: "Do I need to prove I own the property before you'll help me?", a: "Yes, for security we verify ownership with a photo ID and may require additional documentation (lease, registration, title) before performing lockout services." },
    ],
    relatedServices: ["residential-locksmith", "lock-rekeying", "automotive-locksmith"],
    costInfo: "Emergency locksmith services in Orlando start at $45. Pricing varies based on service type and lock complexity. We provide an upfront quote before any work begins.",
    timeInfo: "We arrive in 20–30 minutes on average throughout Orlando. Most lockouts are resolved in 15–30 minutes on-site.",
  },
  "residential-locksmith": {
    benefits: [
      "Complete home lock installation, repair, and replacement",
      "Lock rekeying to secure your home after a move or lost key",
      "Smart lock installation (August, Schlage, Yale, Nest)",
      "High-security lock upgrades for enhanced protection",
      "Window lock installation and repair",
    ],
    process: [
      { step: "1", title: "Schedule Service", desc: "Call or request online. Same-day appointments available for most residential services." },
      { step: "2", title: "Free Assessment", desc: "Our technician assesses your current security and recommends solutions." },
      { step: "3", title: "Upfront Quote", desc: "You receive a clear price before any work begins. No surprises." },
      { step: "4", title: "Professional Installation", desc: "Locks installed or serviced correctly the first time, backed by our workmanship guarantee." },
    ],
    faqs: [
      { q: "How much does it cost to rekey locks in Orlando?", a: "Lock rekeying in Orlando starts at $25 per lock. For a typical home with 3–4 entry points, expect to pay $75–$120 total." },
      { q: "When should I rekey vs replace my locks?", a: "Rekey when the lock is in good condition but you want to change who has access (new home, lost key). Replace when the lock is damaged, outdated, or you want to upgrade your security." },
      { q: "Can you install smart locks?", a: "Yes. We install and configure smart locks from all major brands including August, Schlage Encode, Yale, Kwikset Halo, and Google Nest." },
    ],
    relatedServices: ["lock-rekeying", "lock-installation", "emergency-locksmith"],
    costInfo: "Residential locksmith services start at $55. Rekeying starts at $25/lock. Lock installation varies by hardware brand.",
    timeInfo: "Same-day service available. Most residential jobs are completed in 30–90 minutes.",
  },
  "commercial-locksmith": {
    benefits: [
      "Master key and key control systems for businesses",
      "High-security commercial locks (Medeco, Mul-T-Lock, ASSA Abloy)",
      "Access control installation and programming",
      "Panic hardware and exit device installation",
      "Commercial lockout service with rapid response",
    ],
    process: [
      { step: "1", title: "Security Assessment", desc: "We evaluate your current commercial security setup and identify vulnerabilities." },
      { step: "2", title: "Custom Solution", desc: "We design a tailored security solution for your business needs and budget." },
      { step: "3", title: "Professional Installation", desc: "Certified technicians install hardware to commercial standards." },
      { step: "4", title: "Key Control Setup", desc: "We establish your master key hierarchy and document all key assignments." },
    ],
    faqs: [
      { q: "What is a master key system?", a: "A master key system allows one key (the master key) to open multiple locks while individual keys open only specific locks. Ideal for businesses with multiple entry points and staff access levels." },
      { q: "Do you install access control systems?", a: "Yes. We install keypad, card reader, fob, and biometric access control systems for offices, warehouses, and multi-unit properties." },
      { q: "Can you help with a commercial lockout after hours?", a: "Yes. We provide 24/7 commercial emergency locksmith service throughout Orlando with the same fast response times." },
    ],
    relatedServices: ["lock-installation", "lock-rekeying", "emergency-locksmith"],
    costInfo: "Commercial locksmith services start at $75. Master key systems, access control, and large-scale installations are priced per project.",
    timeInfo: "Same-day service available. Complex commercial installations may require scheduling a specific appointment.",
  },
  "automotive-locksmith": {
    benefits: [
      "Car lockouts resolved quickly — all makes and models",
      "Car key replacement cut and programmed on-site",
      "Transponder key duplication and programming",
      "Key fob replacement and programming",
      "Often faster and cheaper than the dealership",
    ],
    process: [
      { step: "1", title: "Call for Service", desc: "Provide your vehicle make, model, year, and location. We dispatch immediately." },
      { step: "2", title: "Verify Ownership", desc: "We verify your vehicle registration and photo ID before performing any service." },
      { step: "3", title: "On-Site Service", desc: "Our mobile locksmith brings all necessary equipment to your location." },
      { step: "4", title: "Key or Access Restored", desc: "Car key cut and programmed or lockout resolved — most services completed in 30–60 minutes." },
    ],
    faqs: [
      { q: "Can you make a car key without the original?", a: "Yes. Using your vehicle's VIN and proof of ownership, we can cut and program a replacement key even without the original." },
      { q: "Is a mobile locksmith cheaper than the dealership for car keys?", a: "Yes — in most cases, significantly cheaper. Dealerships often charge $200–$500+ for transponder key programming. We typically charge $85–$200 depending on the vehicle." },
      { q: "What car makes and models do you service?", a: "We service all domestic and foreign makes including Ford, Chevrolet, Toyota, Honda, Nissan, BMW, Mercedes, Audi, Jeep, and more." },
    ],
    relatedServices: ["car-key-replacement", "car-key-programming", "emergency-locksmith"],
    costInfo: "Car lockouts start at $65. Car key replacement starts at $95. Transponder programming starts at $85. All pricing is upfront.",
    timeInfo: "20–30 minute average response time. Car lockouts are typically resolved in 10–15 minutes on-site.",
  },
  "car-key-replacement": {
    benefits: [
      "Replacement keys cut and programmed on-site",
      "All types: traditional, transponder, smart key, fob",
      "All major domestic and foreign makes and models",
      "Often 40–60% cheaper than dealership pricing",
      "No towing required — we come to you",
    ],
    process: [
      { step: "1", title: "Contact Us", desc: "Call or request online with your vehicle year, make, model, and VIN." },
      { step: "2", title: "Ownership Verification", desc: "Provide vehicle registration and photo ID to verify ownership." },
      { step: "3", title: "Key Cut On-Site", desc: "Our locksmith cuts the key blade to your vehicle's specifications at your location." },
      { step: "4", title: "Key Programmed", desc: "The transponder chip is programmed to your vehicle's immobilizer system and tested." },
    ],
    faqs: [
      { q: "How much does car key replacement cost in Orlando?", a: "Car key replacement in Orlando starts at $95. Transponder keys range from $95–$250. Smart keys and push-button start keys range from $150–$350, depending on the make and model." },
      { q: "Can I get a car key made without going to the dealer?", a: "Yes. Our mobile locksmiths come to your location and make replacement car keys on-site, often at a fraction of the dealership cost." },
      { q: "Do you make keys for luxury vehicles?", a: "Yes. We service BMW, Mercedes-Benz, Audi, Lexus, Infinity, Cadillac, and other luxury brands." },
    ],
    relatedServices: ["car-key-programming", "automotive-locksmith", "emergency-locksmith"],
    costInfo: "Basic car key replacement starts at $95. Transponder keys: $95–$250. Smart/proximity keys: $150–$350. We beat dealership pricing.",
    timeInfo: "Same-day service. Most car key replacements completed in 30–60 minutes on-site.",
  },
  "car-key-programming": {
    benefits: [
      "Transponder key programming for all makes and models",
      "Remote key fob programming and replacement",
      "Push-button start / proximity key programming",
      "Spare key programming at a fraction of dealership cost",
      "All programming done on-site with professional equipment",
    ],
    process: [
      { step: "1", title: "Vehicle Identification", desc: "Provide your vehicle VIN and details. We confirm compatibility and pricing." },
      { step: "2", title: "Key Cut (if needed)", desc: "If a new key is needed, we cut the blade on-site to your vehicle's specifications." },
      { step: "3", title: "OBD Programming", desc: "Using professional-grade equipment, we program the transponder chip to your vehicle." },
      { step: "4", title: "Test & Confirm", desc: "We test the new key thoroughly — starting the vehicle and testing all remote functions." },
    ],
    faqs: [
      { q: "What is transponder key programming?", a: "Modern car keys contain a microchip (transponder) that communicates with your vehicle's immobilizer system. If the chip isn't programmed to your car, the engine won't start even if the key turns." },
      { q: "Can you program a key fob without the original?", a: "Yes. Using your vehicle's OBD port and professional programming software, we can program new key fobs even without the original present." },
      { q: "How much does key fob programming cost?", a: "Key fob programming in Orlando starts at $85. The total cost depends on whether you need a new fob shell and whether key cutting is required." },
    ],
    relatedServices: ["car-key-replacement", "automotive-locksmith", "emergency-locksmith"],
    costInfo: "Transponder key programming starts at $85. Key fob programming starts at $65 for existing fobs. Full smart key replacement starts at $150.",
    timeInfo: "Same-day service. Programming typically takes 30–45 minutes on-site.",
  },
  "lock-rekeying": {
    benefits: [
      "More cost-effective than full lock replacement",
      "Old keys permanently deactivated — including lost copies",
      "Maintains your existing quality hardware",
      "All lock brands and types including deadbolts and knobs",
      "Master key systems available for multi-lock properties",
    ],
    process: [
      { step: "1", title: "Schedule Service", desc: "Call or book online. Same-day rekeying available throughout Orlando." },
      { step: "2", title: "Lock Inspection", desc: "We inspect your existing locks to confirm they're in good condition for rekeying." },
      { step: "3", title: "Rekeying", desc: "The lock cylinder is disassembled and the internal pins are reconfigured to a new key pattern." },
      { step: "4", title: "New Keys Issued", desc: "You receive new keys that are the only keys that will work the lock going forward." },
    ],
    faqs: [
      { q: "What is lock rekeying?", a: "Lock rekeying changes the internal pin configuration of your lock so that the old key no longer works. The lock hardware stays the same — only the key combination changes." },
      { q: "How much does it cost to rekey a house in Orlando?", a: "Rekeying a house in Orlando typically costs $75–$150 for the whole home (3–4 entry locks), at about $25–$35 per lock plus a service call fee." },
      { q: "Should I rekey or replace locks when moving into a new home?", a: "Rekeying is the most cost-effective option when moving into a new home. It ensures no previous owners, tenants, or contractors have copies of keys that work your locks." },
      { q: "Can all locks be rekeyed?", a: "Most standard residential and commercial locks can be rekeyed. Very old or severely damaged locks may need replacement instead." },
    ],
    relatedServices: ["lock-installation", "residential-locksmith", "emergency-locksmith"],
    costInfo: "Lock rekeying starts at $25 per lock. Full home rekeying (3–4 locks) typically costs $75–$150 including service call.",
    timeInfo: "Same-day service. Each lock takes about 10–15 minutes to rekey.",
  },
  "lock-repair": {
    benefits: [
      "All lock brands and types repaired",
      "Broken keys extracted safely without damaging the lock",
      "Misaligned locks adjusted and restored",
      "Worn cylinder components replaced",
      "Often more economical than full lock replacement",
    ],
    process: [
      { step: "1", title: "Diagnosis", desc: "We diagnose the specific problem — broken cylinder, misalignment, worn pins, frozen lock, or broken key." },
      { step: "2", title: "Repair Assessment", desc: "We determine whether repair is viable or if replacement is more cost-effective." },
      { step: "3", title: "Professional Repair", desc: "Skilled repair restores full lock functionality using quality parts." },
      { step: "4", title: "Test & Verify", desc: "The repaired lock is tested to confirm smooth operation and full security." },
    ],
    faqs: [
      { q: "How do I know if my lock needs repair or replacement?", a: "Signs your lock needs repair: stiff operation, key doesn't turn smoothly, door doesn't latch properly. Signs you should replace: severe damage, rust/corrosion, outdated security grade, or lock is beyond economical repair." },
      { q: "Can you remove a broken key from a lock?", a: "Yes. Broken key extraction is a common service we provide. We carefully remove the broken key fragment without damaging the lock cylinder." },
      { q: "Do you repair electronic and smart locks?", a: "Yes. We repair electronic locks, keypad locks, and smart lock mechanisms in addition to traditional mechanical locks." },
    ],
    relatedServices: ["lock-rekeying", "lock-installation", "residential-locksmith"],
    costInfo: "Lock repair starts at $45. Broken key extraction starts at $55. Pricing depends on lock type and repair complexity.",
    timeInfo: "Same-day service. Most lock repairs completed in 20–45 minutes.",
  },
  "safe-opening": {
    benefits: [
      "Non-destructive opening techniques used when possible",
      "All safe brands and types — floor safes, fireproof, combination",
      "Combination reset and new combination set",
      "Safe repair and relocation services available",
      "Certified safe technicians",
    ],
    process: [
      { step: "1", title: "Safe Identification", desc: "We identify the safe make, model, and type of locking mechanism to determine the appropriate opening method." },
      { step: "2", title: "Non-Destructive Attempt", desc: "We attempt to open the safe without damage using manipulation or bypass techniques." },
      { step: "3", title: "Drilling (if necessary)", desc: "If non-destructive methods fail, precision drilling opens the safe while minimizing damage." },
      { step: "4", title: "Combination Reset", desc: "We reset your combination and advise on safe security maintenance." },
    ],
    faqs: [
      { q: "How much does safe opening cost in Orlando?", a: "Safe opening in Orlando starts at $150 for simple residential safes. Complex safes, high-security models, or those requiring drilling cost more. We provide an upfront quote." },
      { q: "Will you damage my safe when opening it?", a: "We always attempt non-destructive techniques first. Most residential combination safes can be opened without damage. Some high-security safes require drilling, which we perform with minimal damage." },
      { q: "Can you open a safe if I've forgotten the combination?", a: "Yes. With proof of ownership, we can open safes where the combination has been lost or forgotten using manipulation techniques or, if necessary, drilling." },
    ],
    relatedServices: ["residential-locksmith", "commercial-locksmith"],
    costInfo: "Safe opening starts at $150. Fire safes and high-security models: $200–$400+. Combination reset: included with opening service.",
    timeInfo: "Same-day service available. Safe opening typically takes 1–3 hours depending on the safe type.",
  },
  "lock-installation": {
    benefits: [
      "All major brands: Schlage, Kwikset, Baldwin, Medeco, Mul-T-Lock",
      "Smart lock installation and configuration (August, Yale, Nest)",
      "Deadbolt installation for maximum security",
      "ANSI Grade 1 commercial locks for highest security",
      "Window locks and sliding door security hardware",
    ],
    process: [
      { step: "1", title: "Security Consultation", desc: "We assess your door type, security needs, and budget to recommend the right hardware." },
      { step: "2", title: "Hardware Selection", desc: "Choose from our inventory of quality residential and commercial lock brands." },
      { step: "3", title: "Professional Installation", desc: "Proper installation ensures full security — incorrect installation compromises even the best lock." },
      { step: "4", title: "Testing & Key Handoff", desc: "All installed locks are tested, and keys are cut and provided on-site." },
    ],
    faqs: [
      { q: "What is the best deadbolt for a home in Orlando?", a: "For most Orlando homes, we recommend ANSI Grade 1 deadbolts from Schlage or Kwikset. For high-security needs, Medeco or Mul-T-Lock offer pick and bump resistant options." },
      { q: "Can you install smart locks like August or Yale?", a: "Yes. We install, configure, and integrate smart locks with your home's Wi-Fi or smart home system. We support August Smart Lock, Yale Assure, Schlage Encode, Kwikset Halo, and Google Nest." },
      { q: "How much does deadbolt installation cost?", a: "Deadbolt installation in Orlando starts at $55 (hardware extra). If you supply the hardware, installation only is available. We also carry common residential brands in our trucks." },
    ],
    relatedServices: ["lock-rekeying", "residential-locksmith", "commercial-locksmith"],
    costInfo: "Lock installation starts at $55 (labor only). Hardware costs vary by brand and grade. Full deadbolt installed: typically $85–$200.",
    timeInfo: "Same-day service available. Single lock installation takes 20–45 minutes.",
  },
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const pageUrl = `${SITE_CONFIG.url}/services/${slug}`;
  const title = `${service.name} Orlando FL | 24/7 Licensed Locksmith`;
  const description = `Professional ${service.name.toLowerCase()} in Orlando, FL. ${service.description} Available 24/7. Call ${SITE_CONFIG.phone}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    keywords: [
      `${service.name.toLowerCase()} Orlando`,
      `${service.name.toLowerCase()} Orlando FL`,
      `Orlando ${service.name.toLowerCase()}`,
      `${service.name.toLowerCase()} near me`,
      "locksmith Orlando",
    ],
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${service.name} Orlando FL` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  const Icon = SERVICE_ICONS[service.icon] || KeyRound;

  const pageUrl = `${SITE_CONFIG.url}/services/${slug}`;
  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.heroDescription,
    url: pageUrl,
    price: service.price,
  });

  const faqSchema = content ? generateFAQSchema(content.faqs) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/services` },
    { name: service.name, url: pageUrl },
  ]);

  const webPageSchema = generateWebPageSchema({
    name: `${service.name} Orlando FL`,
    description: service.heroDescription,
    url: pageUrl,
    type: "ServicePage",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-400 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15">
                  <Icon className="h-8 w-8 text-[#f59e0b]" aria-hidden="true" />
                </div>
                {service.popular && (
                  <span className="bg-[#f59e0b] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {service.name} in{" "}
                <span className="text-[#f59e0b]">Orlando, FL</span>
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-300">Starting at</div>
                  <div className="font-bold text-[#f59e0b]">{service.price}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-300">Response Time</div>
                  <div className="font-bold text-white">{service.responseTime}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-300">Available</div>
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

            {/* Quick quote form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="font-bold text-[#1e3a5f] text-lg mb-1">
                Request {service.shortName} Service
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We respond within minutes. For emergencies, call directly.
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {content && (
        <section className="py-14 px-4" aria-labelledby="service-details-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Benefits */}
                <div>
                  <h2 id="service-details-heading" className="text-2xl font-bold text-[#1e3a5f] mb-4">
                    What&apos;s Included with Our {service.name} Service
                  </h2>
                  <ul className="space-y-3">
                    {content.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#16a34a] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                    How Our {service.name} Service Works
                  </h2>
                  <div className="space-y-4">
                    {content.process.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost & Time Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-4">
                    <h3 className="font-bold text-[#1e3a5f] mb-2">💰 Pricing</h3>
                    <p className="text-gray-700 text-sm">{content.costInfo}</p>
                  </div>
                  <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-xl p-4">
                    <h3 className="font-bold text-[#1e3a5f] mb-2">⏱ Response Time</h3>
                    <p className="text-gray-700 text-sm">{content.timeInfo}</p>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                    {service.name} — Frequently Asked Questions
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
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Call Box */}
                <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 text-center sticky top-20">
                  <Clock className="h-10 w-10 text-[#f59e0b] mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-xl mb-2">Available 24/7</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Need {service.name.toLowerCase()} right now? Call us for immediate assistance.
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold w-full py-3 rounded-xl text-lg transition-colors mb-3"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now
                  </a>
                  <p className="text-gray-400 text-xs">{SITE_CONFIG.phone}</p>
                </div>

                {/* Service Areas — all 12 with direct city×service links */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-[#1e3a5f] mb-1">{service.name} Near You</h3>
                  <p className="text-xs text-gray-500 mb-3">Select your city for local pricing &amp; info</p>
                  <div className="space-y-1.5">
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/locations/${area.slug}/${slug}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e3a5f] hover:font-medium transition-colors"
                      >
                        <MapPin className="h-3.5 w-3.5 text-[#f59e0b] shrink-0" aria-hidden="true" />
                        {service.shortName} in {area.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/locations"
                    className="block mt-3 text-xs text-[#1e3a5f] font-semibold hover:underline"
                  >
                    View all service areas →
                  </Link>
                </div>

                {/* Related Services */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-[#1e3a5f] mb-3">Related Services</h3>
                  <div className="space-y-2">
                    {content.relatedServices.map((relSlug) => {
                      const relService = SERVICES.find((s) => s.slug === relSlug);
                      if (!relService) return null;
                      return (
                        <Link
                          key={relSlug}
                          href={`/services/${relSlug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e3a5f] hover:font-medium transition-colors"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden="true" />
                          {relService.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="service-reviews-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="service-reviews-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">
            What Customers Say About Our {service.name}
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

      {/* ── City Coverage Grid — internal linking ── */}
      <section className="py-12 px-4 bg-gray-50" aria-labelledby="service-cities-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="service-cities-heading" className="text-xl font-bold text-[#1e3a5f] mb-2">
            {service.name} Available Across the Orlando Metro
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            We provide {service.name.toLowerCase()} in Orlando and every surrounding city within 30 miles.
            Click your city for local service details, pricing, and availability.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}/${slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:border-[#1e3a5f] hover:text-[#1e3a5f] hover:shadow-sm transition-all text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/services" className="text-sm text-[#1e3a5f] font-semibold hover:underline">← All Services</Link>
            <Link href="/locations" className="text-sm text-[#1e3a5f] font-semibold hover:underline">All Service Areas →</Link>
            <Link href="/contact" className="text-sm text-[#1e3a5f] font-semibold hover:underline">Contact Us →</Link>
            <Link href="/faq" className="text-sm text-[#1e3a5f] font-semibold hover:underline">FAQ →</Link>
          </div>
        </div>
      </section>

      {/* Author Bio — E-E-A-T */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <AuthorBio />
        </div>
      </section>

      {/* Other services */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Other Locksmith Services in Orlando</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-gray-100 hover:bg-[#1e3a5f] hover:text-white text-gray-700 text-sm px-3 py-1.5 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="emergency"
        title={`Need ${service.name} in Orlando?`}
        subtitle={`Call us now for immediate service. We arrive in 20–30 minutes throughout Orlando.`}
      />

      {/* Stars rating snippet */}
      <section className="py-8 px-4 bg-[#1e3a5f]" aria-label="Google rating">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(s => (
              <Star key={s} className="h-5 w-5 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
            ))}
          </div>
          <span className="font-bold text-lg">{SITE_CONFIG.rating} out of 5</span>
          <span className="text-gray-300">Based on {SITE_CONFIG.reviewCount}+ Google reviews</span>
          <Link href="/reviews" className="text-[#f59e0b] hover:underline font-semibold">
            Read Reviews →
          </Link>
        </div>
      </section>
    </>
  );
}
