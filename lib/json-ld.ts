import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lanoso Corporation",
  description:
    "Marine Systems Integration — Smart Solutions for Smarter Seas",
  url: SITE_URL,
  telephone: "+639455496162",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blk31 Lot18 P2 A2 BRGY Dagat-dagatan",
    addressLocality: "Navotas City",
    postalCode: "1409",
    addressCountry: "PH",
  },
  foundingDate: "2012",
} as const;
