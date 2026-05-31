"use client";

import { Phone, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function EmergencyBanner() {
  return (
    <div className="bg-[#dc2626] text-white py-2 px-4 text-center text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 emergency-pulse" aria-hidden="true" />
          <span className="font-bold">24/7 Emergency Service</span>
        </span>
        <span className="hidden sm:inline text-red-200">|</span>
        <span className="hidden sm:inline text-red-100">
          Locked out? We arrive in 20–30 minutes
        </span>
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex items-center gap-1.5 bg-white text-red-600 rounded-full px-3 py-0.5 font-bold text-sm hover:bg-red-50 transition-colors ml-2"
          aria-label={`Call us now at ${SITE_CONFIG.phone}`}
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {SITE_CONFIG.phone}
        </a>
      </div>
    </div>
  );
}
