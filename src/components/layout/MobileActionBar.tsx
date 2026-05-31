"use client";

import { Phone, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar shadow-[0_-2px_10px_rgba(0,0,0,0.1)]" aria-label="Quick action bar">
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#dc2626] text-white font-bold text-xs hover:bg-red-700 transition-colors"
        aria-label="Call us now"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#1e3a5f] text-white font-bold text-xs hover:bg-[#152d4a] transition-colors border-x border-white/20"
        aria-label="Contact us"
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        <span>Contact</span>
      </Link>
      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#f59e0b] text-white font-bold text-xs hover:bg-[#d97706] transition-colors"
        aria-label="Get directions"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
        <span>Directions</span>
      </a>
    </div>
  );
}
