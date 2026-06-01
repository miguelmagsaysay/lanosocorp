/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "style-src-attr 'unsafe-inline'",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "media-src 'self' https:",
      "frame-src 'self' https://www.google.com https://maps.google.com https://consent.google.com https://www.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.tile.openstreetmap.org",
    ].join("; "),
  },
];

const nextConfig = {
  async redirects() {
    return [
      { source: "/brands", destination: "/products", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Do not attach document CSP to Next.js static assets (CSS/JS/fonts) — breaks dev/prod stylesheet delivery.
        source: "/((?!_next/|api/).*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
