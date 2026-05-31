import Link from "next/link";
import { Phone, Mail, MapPin, Clock, KeyRound, Star } from "lucide-react";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Emergency CTA Bar */}
      <div className="bg-[#dc2626] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-bold text-lg">Locked Out? Need Emergency Help?</p>
            <p className="text-red-200 text-sm">Available 24/7 — We arrive in 20–30 minutes</p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg shrink-0"
            aria-label={`Emergency call ${SITE_CONFIG.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                <KeyRound className="h-6 w-6 text-[#f59e0b]" aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-base">Affordable Locksmith</div>
                <div className="text-[#f59e0b] text-sm">Orlando, FL</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Orlando&apos;s most trusted locksmith. Licensed, insured, and available 24/7 for all your lock and key needs.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= Math.floor(SITE_CONFIG.rating) ? "text-[#f59e0b] fill-[#f59e0b]" : "text-gray-500"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-300">
                {SITE_CONFIG.rating} ({SITE_CONFIG.reviewCount}+ reviews)
              </span>
            </div>
            {/* Contact */}
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-[#f59e0b] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic">{SITE_CONFIG.address.full}</address>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-[#f59e0b] shrink-0" aria-hidden="true" />
                24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors"
                  >
                    {area.name}, FL
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Trust */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "Service Areas", href: "/locations" },
                { label: "Customer Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Trust badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Background Checked</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Upfront Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. License #{SITE_CONFIG.licenseNumber}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gray-200 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
