import Link from "next/link";
import { Phone, Home, KeyRound } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center w-20 h-20 bg-[#1e3a5f]/10 rounded-full mx-auto mb-5">
          <KeyRound className="h-10 w-10 text-[#1e3a5f]" aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Looking for locksmith service? We can help!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center justify-center gap-2 bg-[#dc2626] text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE_CONFIG.phone}
          </a>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold px-6 py-3 rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
