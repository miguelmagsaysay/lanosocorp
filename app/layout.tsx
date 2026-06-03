import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteShell } from "@/components/layout/site-shell";
import { organizationJsonLd } from "@/lib/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lanosocorp.com"),
  title: {
    default: "Lanoso Corporation — Smart Solutions for Smarter Seas",
    template: "%s | Lanoso Corporation",
  },
  description:
    "Philippine-based marine systems integrator providing electrical, automation, instrumentation, and engine room machinery support. IMO, SOLAS & MARINA aligned.",
  keywords: [
    "marine systems integrator",
    "ship services Philippines",
    "marine automation",
    "vessel electrical",
    "IMO SOLAS MARINA",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://lanosocorp.com",
    siteName: "Lanoso Corporation",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-white font-body antialiased`}
      >
        {/* JSON-LD: static LocalBusiness schema (sanitized at build time). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SiteShell>{children}</SiteShell>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
