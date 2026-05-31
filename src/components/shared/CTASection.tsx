import { Phone, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "emergency" | "standard" | "minimal";
}

export default function CTASection({
  title = "Need a Locksmith in Orlando Right Now?",
  subtitle = "We're available 24/7. Our average response time is 20–30 minutes throughout Orlando.",
  variant = "emergency",
}: CTASectionProps) {
  if (variant === "minimal") {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call {SITE_CONFIG.phone}
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-bold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          Request Service
        </Link>
      </div>
    );
  }

  if (variant === "standard") {
    return (
      <section className="bg-[#1e3a5f] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#1e3a5f] font-bold px-8 py-4 rounded-lg transition-colors text-lg w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/50 text-white hover:border-white font-bold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              Request Online
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 emergency-pulse" aria-hidden="true" />
              <span className="font-bold text-red-200 text-sm uppercase tracking-wide">
                Emergency Locksmith — Available Now
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-red-100">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-lg transition-colors text-lg justify-center"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white/10 font-bold px-6 py-4 rounded-lg transition-colors justify-center"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              Online Request
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
