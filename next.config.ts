import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.google.com https://www.gstatic.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com https://*.google.com https://streetviewpixels-pa.googleapis.com;
  frame-src https://www.google.com https://maps.google.com;
  connect-src 'self' https://*.googleapis.com https://*.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      /* Static assets — 1-year immutable cache */
      {
        source: "/:path*.{js,css,woff,woff2,png,jpg,jpeg,svg,webp,avif,ico}",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      /* HTML pages — CDN caches 1h, revalidates; browser no-cache (ISR friendly) */
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      /* Legacy slug patterns */
      { source: "/service/:slug", destination: "/services/:slug", permanent: true },
      { source: "/location/:slug", destination: "/locations/:slug", permanent: true },
      /* Trailing slash normalisation */
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/locations/", destination: "/locations", permanent: true },
      { source: "/faq/", destination: "/faq", permanent: true },
      { source: "/reviews/", destination: "/reviews", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
