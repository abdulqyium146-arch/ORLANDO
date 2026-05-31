import type { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.popular ? 0.9 : 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area, i) => ({
    url: `${baseUrl}/locations/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 0.9 : 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
