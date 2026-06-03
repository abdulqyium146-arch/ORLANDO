"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Star, ExternalLink, BadgeCheck } from "lucide-react";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS, AUTHOR } from "@/lib/config";

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

      {/* Main Footer — 4 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group" aria-label="Affordable Locksmith Orlando — Home">
              <Image
                src="/android-chrome-192x192.png"
                alt="Affordable Locksmith Orlando logo"
                width={44}
                height={44}
                className="rounded-full shrink-0"
              />
              <div>
                <div className="font-bold text-base text-white">Affordable Locksmith</div>
                <div className="text-[#f59e0b] text-sm font-semibold">Orlando, FL</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Orlando&apos;s most trusted locksmith. Licensed, insured, and available 24/7 for all your lock and key needs across the greater Orlando metro area.
            </p>
            {/* Rating */}
            <Link
              href="/reviews"
              className="flex items-center gap-2 mb-4 hover:text-[#f59e0b] transition-colors group"
              aria-label={`${SITE_CONFIG.rating} star rating — read our ${SITE_CONFIG.reviewCount}+ reviews`}
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= Math.floor(SITE_CONFIG.rating) ? "text-[#f59e0b] fill-[#f59e0b]" : "text-gray-500"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-[#f59e0b]">
                {SITE_CONFIG.rating} ({SITE_CONFIG.reviewCount}+ reviews)
              </span>
            </Link>
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
            {/* Trust badges */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Licensed &amp; Insured — FL-LIC-2024-LOCK</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Background Checked Technicians</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#f59e0b] font-bold text-sm">✓</span>
                <span className="text-sm text-gray-200">Upfront Pricing — No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">
              <Link href="/services" className="hover:text-[#f59e0b] transition-colors">
                Our Services →
              </Link>
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors flex items-center justify-between group"
                  >
                    <span>{service.name}</span>
                    {service.popular && (
                      <span className="text-xs text-[#f59e0b]/70 group-hover:text-[#f59e0b]">Popular</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column — ALL 12 */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">
              <Link href="/locations" className="hover:text-[#f59e0b] transition-colors">
                Service Areas →
              </Link>
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
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

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "Service Areas", href: "/locations" },
                { label: "Altamonte Springs Locksmith", href: "/altamonte-springs-locksmith" },
                { label: "Customer Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: `About ${AUTHOR.name}`, href: "/about" },
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
            {/* Google Business Profile link */}
            <a
              href={SITE_CONFIG.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#f59e0b] text-sm transition-colors mb-4"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Google Business Profile
            </a>
          </div>
        </div>

        {/* ── Mega Sitemap: City × Service Link Matrix ── */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
            Locksmith Services by City — Complete Coverage
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {SERVICE_AREAS.map((area) => (
              <div key={area.slug}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="block text-[#f59e0b] font-semibold text-sm mb-2 hover:text-white transition-colors"
                >
                  {area.name}, FL
                </Link>
                <ul className="space-y-1">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/locations/${area.slug}/${service.slug}`}
                        className="block text-gray-400 hover:text-gray-200 text-xs leading-snug transition-colors"
                      >
                        {service.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── All Service Pages ── */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">All Service Pages</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <Link href="/services" className="text-gray-400 hover:text-gray-200 text-xs transition-colors">
              All Services
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-gray-400 hover:text-gray-200 text-xs transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ── All Location Hub Pages ── */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">All Location Pages</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <Link href="/locations" className="text-gray-400 hover:text-gray-200 text-xs transition-colors">
              All Locations
            </Link>
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="text-gray-400 hover:text-gray-200 text-xs transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Author / E-E-A-T Credit ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-2xl px-5 py-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#1e3a5f]">
              <Image
                src="/professional-locksmith-orlando.webp"
                alt={AUTHOR.name}
                fill
                className="object-cover object-top"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 mb-0.5">Content written &amp; reviewed by</p>
              <Link href="/about" className="font-bold text-white hover:text-[#f59e0b] transition-colors">
                {AUTHOR.name}
              </Link>
              <span className="text-gray-400 text-sm"> — {AUTHOR.jobTitle}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {AUTHOR.credentials.slice(0, 3).map((cred) => (
                  <span key={cred} className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                    <BadgeCheck className="h-3 w-3 text-[#16a34a]" aria-hidden="true" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="text-xs text-[#f59e0b] hover:underline font-semibold shrink-0"
            >
              View Bio →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>
            © {currentYear}{" "}
            <Link href="/" className="hover:text-gray-200 transition-colors">
              {SITE_CONFIG.name}
            </Link>
            . All rights reserved. License #{SITE_CONFIG.licenseNumber}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/reviews" className="hover:text-gray-200 transition-colors">Reviews</Link>
            <Link href="/faq" className="hover:text-gray-200 transition-colors">FAQ</Link>
            <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-200 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
