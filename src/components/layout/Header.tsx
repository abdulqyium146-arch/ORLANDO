"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, KeyRound } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/config";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    dropdown: SERVICES.slice(0, 6).map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Locations", href: "/locations" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Affordable Locksmith Orlando — Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1e3a5f]">
              <KeyRound className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#1e3a5f] font-bold text-base leading-tight">
                Affordable Locksmith
              </div>
              <div className="text-[#f59e0b] text-xs font-semibold leading-tight">
                Orlando, FL
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm font-semibold text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152d4a] text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#dc2626] text-white font-bold py-3 px-4 rounded-lg mb-3"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {SITE_CONFIG.phone}
            </a>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
