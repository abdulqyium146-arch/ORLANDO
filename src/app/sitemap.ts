import type { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  /* ── Static core pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                                                    lastModified: now,       changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,                                      lastModified: lastWeek,  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/locations`,                                     lastModified: lastWeek,  changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/altamonte-springs-locksmith`,                   lastModified: now,       changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/casselberry-locksmith`,                        lastModified: now,       changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/faq`,                                           lastModified: lastMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`,                                       lastModified: lastWeek,  changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contact`,                                       lastModified: lastMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,                                         lastModified: lastMonth, changeFrequency: "monthly", priority: 0.7 },
  ];

  /* ── Service pages ── */
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMonth,
    changeFrequency: "monthly" as const,
    priority: s.popular ? 0.95 : 0.85,
  }));

  /* ── Location hub pages ── */
  const locationPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area, i) => ({
    url: `${base}/locations/${area.slug}`,
    lastModified: lastMonth,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 0.9 : 0.75,
  }));

  /* ── City × Service pages (programmatic local SEO) ── */
  const cityServicePages: MetadataRoute.Sitemap = SERVICE_AREAS.flatMap((area) =>
    SERVICES.map((service) => ({
      url: `${base}/locations/${area.slug}/${service.slug}`,
      lastModified: lastMonth,
      changeFrequency: "monthly" as const,
      priority: (area.slug === "orlando" || service.popular) ? 0.8 : 0.65,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...cityServicePages,
  ];
}
