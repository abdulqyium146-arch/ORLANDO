import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Star, Phone, ExternalLink } from "lucide-react";
import { SITE_CONFIG, REVIEWS } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Customer Reviews — 4.8★ Orlando Locksmith",
  description: `Read ${SITE_CONFIG.reviewCount}+ verified customer reviews of Affordable Locksmith Orlando. ${SITE_CONFIG.rating} star rated locksmith serving Orlando, FL. See what customers say about our service.`,
  alternates: { canonical: `${SITE_CONFIG.url}/reviews` },
};

const REVIEW_HIGHLIGHTS = [
  { label: "5 Stars", count: 48, percent: 86 },
  { label: "4 Stars", count: 7, percent: 12 },
  { label: "3 Stars", count: 1, percent: 2 },
  { label: "2 Stars", count: 0, percent: 0 },
  { label: "1 Star", count: 0, percent: 0 },
];

const REVIEW_THEMES = [
  { theme: "Fast Response", icon: "⚡", count: 42 },
  { theme: "Affordable Pricing", icon: "💰", count: 38 },
  { theme: "Professional Service", icon: "✅", count: 45 },
  { theme: "Friendly Technicians", icon: "😊", count: 35 },
  { theme: "Quick Solution", icon: "🔑", count: 41 },
  { theme: "Excellent Communication", icon: "📞", count: 29 },
];

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Reviews", url: `${SITE_CONFIG.url}/reviews` },
  ]);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating,
      reviewCount: SITE_CONFIG.reviewCount,
      bestRating: 5,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-white font-medium">Reviews</span>
          </nav>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(s => (
              <Star key={s} className="h-7 w-7 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {SITE_CONFIG.rating} Stars — {SITE_CONFIG.reviewCount}+ Verified Reviews
          </h1>
          <p className="text-gray-200 text-lg">
            What Orlando customers say about Affordable Locksmith Orlando
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 px-4 bg-white" aria-labelledby="rating-summary-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Overall score */}
            <div className="text-center">
              <div className="text-7xl font-bold text-[#1e3a5f] mb-2">{SITE_CONFIG.rating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="h-6 w-6 text-[#f59e0b] fill-[#f59e0b]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-500">{SITE_CONFIG.reviewCount}+ Google Reviews</p>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2563eb] text-sm hover:underline mt-2"
              >
                View on Google <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            {/* Rating breakdown */}
            <div>
              <h2 id="rating-summary-heading" className="sr-only">Rating breakdown</h2>
              <div className="space-y-2">
                {REVIEW_HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-16 shrink-0">{item.label}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-[#f59e0b] rounded-full transition-all"
                        style={{ width: `${item.percent}%` }}
                        role="progressbar"
                        aria-valuenow={item.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${item.label}: ${item.percent}%`}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-8 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Themes */}
      <section className="py-8 px-4 bg-gray-50" aria-labelledby="themes-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="themes-heading" className="font-bold text-[#1e3a5f] mb-4 text-center">
            What Customers Mention Most
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {REVIEW_THEMES.map((item) => (
              <div key={item.theme} className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="font-semibold text-sm text-gray-900">{item.theme}</div>
                <div className="text-xs text-gray-500">Mentioned in {item.count} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-14 px-4" aria-labelledby="all-reviews-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="all-reviews-heading" className="text-2xl font-bold text-[#1e3a5f] mb-6">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
          <div className="text-center">
            <a
              href={SITE_CONFIG.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              See All Reviews on Google
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-10 px-4 bg-gray-50" aria-labelledby="leave-review-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="leave-review-heading" className="text-2xl font-bold text-[#1e3a5f] mb-2">
            Were We Your Orlando Locksmith?
          </h2>
          <p className="text-gray-600 mb-4">
            Your review helps other Orlando residents find reliable locksmith service. We read every review and are grateful for your feedback.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1e3a5f] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#152d4a] transition-colors"
            >
              <Star className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
              Leave a Google Review
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection variant="standard" />
    </>
  );
}
