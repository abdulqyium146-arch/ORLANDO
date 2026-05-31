import { Star, CheckCircle } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
  verified?: boolean;
}

export default function ReviewCard({
  name,
  rating,
  date,
  text,
  service,
  verified,
}: ReviewCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "text-[#f59e0b] fill-[#f59e0b]" : "text-gray-300"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-4">&ldquo;{text}&rdquo;</p>
      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm text-gray-900">{name}</span>
            {verified && (
              <CheckCircle
                className="h-3.5 w-3.5 text-[#16a34a]"
                aria-label="Verified review"
              />
            )}
          </div>
          {service && (
            <span className="text-xs text-gray-500">{service}</span>
          )}
        </div>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </article>
  );
}
