import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteShell } from "@/components/layout/site-shell";
import { organizationJsonLd } from "@/lib/json-ld";
import { isMaintenanceMode } from "@/lib/maintenance";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const maintenance = isMaintenanceMode();

export const metadata: Metadata = {
  metadataBase: new URL("https://lanosocorp.com"),
  title: maintenance
    ? "Under Maintenance | Lanoso Corporation"
    : {
        default: "Lanoso Corporation — Smart Solutions for Smarter Seas",
        template: "%s | Lanoso Corporation",
      },
  description: maintenance
    ? "Lanoso Corporation is updating its website. Contact us for marine systems support across the Philippines."
    : "Philippine-based marine systems integrator providing electrical, automation, instrumentation, and engine room machinery support. IMO, SOLAS & MARINA aligned.",
  keywords: maintenance
    ? undefined
    : [
        "marine systems integrator",
        "ship services Philippines",
        "marine automation",
        "vessel electrical",
        "IMO SOLAS MARINA",
      ],
  openGraph: maintenance
    ? undefined
    : {
        type: "website",
        locale: "en_PH",
        url: "https://lanosocorp.com",
        siteName: "Lanoso Corporation",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      },
  twitter: maintenance ? undefined : { card: "summary_large_image" },
  robots: maintenance ? { index: false, follow: false } : { index: true, follow: true },
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
        className={`${display.variable} ${body.variable} min-h-screen bg-white font-body antialiased`}
      >
        {/* JSON-LD: static LocalBusiness schema (sanitized at build time). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {maintenance ? children : <SiteShell>{children}</SiteShell>}
        {!maintenance && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
