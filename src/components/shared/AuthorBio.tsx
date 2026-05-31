import Link from "next/link";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { AUTHOR } from "@/lib/config";

interface AuthorBioProps {
  compact?: boolean;
}

export default function AuthorBio({ compact = false }: AuthorBioProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 py-3 border-t border-gray-200 mt-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#1e3a5f]">
          <Image
            src="/professional-locksmith-orlando.webp"
            alt={AUTHOR.name}
            fill
            className="object-cover object-top"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Written &amp; reviewed by{" "}
            <Link href="/about" className="text-[#1e3a5f] hover:underline">
              {AUTHOR.name}
            </Link>
          </p>
          <p className="text-xs text-gray-500">{AUTHOR.jobTitle}</p>
        </div>
      </div>
    );
  }

  return (
    <aside
      className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/20 rounded-2xl p-6"
      aria-label={`About the author: ${AUTHOR.name}`}
    >
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-[#1e3a5f]">
          <Image
            src="/professional-locksmith-orlando.webp"
            alt={AUTHOR.name}
            fill
            className="object-cover object-top"
            sizes="64px"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider mb-1">
            Written &amp; Reviewed By
          </p>
          <h3 className="text-lg font-bold text-[#1e3a5f]">
            <Link href="/about" className="hover:underline">
              {AUTHOR.name}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 font-medium mb-2">{AUTHOR.jobTitle}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{AUTHOR.shortBio}</p>
          <div className="flex flex-wrap gap-2">
            {AUTHOR.credentials.slice(0, 3).map((cred) => (
              <span
                key={cred}
                className="inline-flex items-center gap-1 text-xs bg-white border border-[#1e3a5f]/20 text-[#1e3a5f] px-2 py-1 rounded-full"
              >
                <BadgeCheck className="h-3 w-3 text-[#16a34a]" aria-hidden="true" />
                {cred}
              </span>
            ))}
          </div>
          <Link
            href="/about"
            className="inline-block mt-3 text-sm font-semibold text-[#1e3a5f] hover:underline"
          >
            Learn more about {AUTHOR.name} →
          </Link>
        </div>
      </div>
    </aside>
  );
}
