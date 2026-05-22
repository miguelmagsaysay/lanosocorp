import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type ServiceSlug =
  | "electrical"
  | "automation"
  | "instrumentation"
  | "engine-room"
  | "general";

export type ServiceItem = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
};

/** Keys for partner marks rendered by `BrandMark`. */
export type BrandMarkId =
  | "garmin"
  | "bandg"
  | "simrad"
  | "furuno"
  | "raymarine"
  | "icom"
  | "yanmar"
  | "caterpillar"
  | "abb"
  | "kongsberg"
  | "wartsila"
  | "parker";

export type BrandItem = {
  name: string;
  category: string;
  description: string;
  markId: BrandMarkId;
};

export type MarqueeBrand = {
  name: string;
  markId: BrandMarkId;
};

export type ContactFormPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: ServiceSlug;
  message: string;
};

export type ProductCategorySlug =
  | "all"
  | "fire-detection"
  | "telephone"
  | "public-address"
  | "general-alarm"
  | "telegraph"
  | "navigation"
  | "instrumentation"
  | "alarm-signaling";

export type ProductCategory = {
  slug: ProductCategorySlug;
  label: string;
};

export type FeaturedProductSystem = {
  id: string;
  acronym: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type CatalogProduct = {
  id: string;
  title: string;
  description?: string;
  manufacturer?: string;
  category: Exclude<ProductCategorySlug, "all">;
  imageSrc: string;
  imageAlt: string;
};
