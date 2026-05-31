"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phoneRaw}`}
      className="phone-btn-fixed hidden md:flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white font-bold px-5 py-3 rounded-full shadow-xl transition-all hover:shadow-2xl hover:scale-105"
      aria-label={`Call us now: ${SITE_CONFIG.phone}`}
    >
      <Phone className="h-5 w-5 emergency-pulse" aria-hidden="true" />
      <span className="text-sm">{SITE_CONFIG.phone}</span>
    </a>
  );
}
