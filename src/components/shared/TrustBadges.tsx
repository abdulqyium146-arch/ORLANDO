import { Shield, Star, Clock, Phone, DollarSign, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const BADGES = [
  {
    icon: Shield,
    label: "Licensed & Insured",
    sub: "FL State Licensed",
    color: "text-[#16a34a]",
  },
  {
    icon: Star,
    label: `${SITE_CONFIG.rating}★ Rated`,
    sub: `${SITE_CONFIG.reviewCount}+ Google Reviews`,
    color: "text-[#f59e0b]",
  },
  {
    icon: Clock,
    label: "20–30 Min Response",
    sub: "Average arrival time",
    color: "text-[#2563eb]",
  },
  {
    icon: Phone,
    label: "24/7 Available",
    sub: "Including holidays",
    color: "text-[#dc2626]",
  },
  {
    icon: DollarSign,
    label: "Upfront Pricing",
    sub: "No hidden fees",
    color: "text-[#16a34a]",
  },
  {
    icon: UserCheck,
    label: "Background Checked",
    sub: "All technicians",
    color: "text-[#1e3a5f]",
  },
];

interface TrustBadgesProps {
  variant?: "full" | "compact" | "horizontal";
}

export default function TrustBadges({ variant = "full" }: TrustBadgesProps) {
  if (variant === "horizontal") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4" role="list" aria-label="Trust indicators">
        {BADGES.map((badge) => (
          <div key={badge.label} className="flex items-center gap-1.5" role="listitem">
            <badge.icon className={`h-4 w-4 ${badge.color}`} aria-hidden="true" />
            <span className="text-sm font-medium text-gray-700">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="list" aria-label="Trust indicators">
        {BADGES.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
            role="listitem"
          >
            <badge.icon className={`h-5 w-5 ${badge.color} shrink-0`} aria-hidden="true" />
            <span className="text-sm font-medium text-gray-800">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-label="Trust indicators">
      {BADGES.map((badge) => (
        <div
          key={badge.label}
          className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
          role="listitem"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 shrink-0">
            <badge.icon className={`h-5 w-5 ${badge.color}`} aria-hidden="true" />
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-900">{badge.label}</div>
            <div className="text-xs text-gray-500">{badge.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
