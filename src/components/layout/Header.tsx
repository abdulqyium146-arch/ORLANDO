"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, KeyRound, MapPin, Wrench } from "lucide-react";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Affordable Locksmith Orlando — Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1e3a5f]">
              <KeyRound className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-[#1e3a5f] font-bold text-base">Affordable Locksmith</div>
              <div className="text-[#f59e0b] text-xs font-semibold">Orlando, FL</div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

            {/* Home */}
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">
              Home
            </Link>

            {/* Services mega-dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                Services
                <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform" aria-hidden="true" />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 mt-1 z-50">
                <div className="p-2">
                  <Link href="/services" className="flex items-center justify-between px-3 py-2 text-sm font-bold text-[#1e3a5f] bg-[#1e3a5f]/5 rounded-lg mb-1 hover:bg-[#1e3a5f] hover:text-white transition-colors">
                    All Services <span className="text-xs font-normal opacity-70">10 services →</span>
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between px-3 py-1.5 text-sm text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors"
                    >
                      {s.name}
                      {s.popular && <span className="text-xs bg-[#f59e0b]/20 text-[#d97706] px-1.5 rounded">Popular</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations mega-dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Locations
                <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform" aria-hidden="true" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 mt-1 z-50">
                <div className="p-2">
                  <Link href="/locations" className="flex items-center justify-between px-3 py-2 text-sm font-bold text-[#1e3a5f] bg-[#1e3a5f]/5 rounded-lg mb-1 hover:bg-[#1e3a5f] hover:text-white transition-colors">
                    All Locations <span className="text-xs font-normal opacity-70">12 cities →</span>
                  </Link>
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/locations/${area.slug}`}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-[#f59e0b] group-hover:text-white" aria-hidden="true" />
                      {area.name}, FL
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/reviews" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">Reviews</Link>
            <Link href="/faq" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">FAQ</Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors rounded-md hover:bg-gray-50">Contact</Link>
          </nav>

          {/* ── CTA + Mobile toggle ── */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
              aria-label={`Emergency call ${SITE_CONFIG.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">{SITE_CONFIG.phone}</span>
              <span className="md:hidden">Call Now</span>
            </a>
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Nav ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#dc2626] text-white font-bold py-3 px-4 rounded-lg mb-2"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {SITE_CONFIG.phone}
            </a>

            <Link href="/" onClick={close} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">
              🏠 Home
            </Link>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <span>🔧 Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
              </button>
              {mobileServices && (
                <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-[#f59e0b] ml-3">
                  <Link href="/services" onClick={close} className="block px-3 py-2 text-sm font-bold text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-md">
                    All Services →
                  </Link>
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="block px-3 py-2 text-sm text-gray-600 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations accordion */}
            <div>
              <button
                onClick={() => setMobileLocations(!mobileLocations)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <span>📍 Locations</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocations ? "rotate-180" : ""}`} />
              </button>
              {mobileLocations && (
                <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-[#f59e0b] ml-3">
                  <Link href="/locations" onClick={close} className="block px-3 py-2 text-sm font-bold text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-md">
                    All Locations →
                  </Link>
                  {SERVICE_AREAS.map((a) => (
                    <Link key={a.slug} href={`/locations/${a.slug}`} onClick={close} className="block px-3 py-2 text-sm text-gray-600 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">
                      {a.name}, FL
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/reviews" onClick={close} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">⭐ Reviews</Link>
            <Link href="/faq" onClick={close} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">❓ FAQ</Link>
            <Link href="/contact" onClick={close} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors">📞 Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
