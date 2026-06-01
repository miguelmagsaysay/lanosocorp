import type { Metadata } from "next";
import { Suspense } from "react";
import { FeaturedProductSystemsCarousel } from "@/components/sections/featured-product-systems-carousel";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { MotionSection } from "@/components/sections/motion-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Products & Systems",
  description:
    "Marine fire detection, telephone, public address, general alarm, engine telegraph, and bridge equipment supplied and installed by Lanoso Corporation.",
  openGraph: {
    title: "Marine Products & Systems | Lanoso Corporation",
    description:
      "FDAS, MATS, PAS, GAS, and certified marine control equipment for commercial and offshore vessels.",
    url: "https://lanosocorp.com/products",
  },
};

function CatalogFallback() {
  return (
    <div
      className="animate-pulse rounded-xl border border-navy/10 bg-stone-50/80 p-8 text-sm text-navy/50"
      aria-hidden
    >
      Loading catalog…
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Integrated Systems"
            title="Complete Marine Packages"
            description="Turnkey FDAS, MATS, PAS, and general alarm solutions — engineered for class requirements and Philippine fleet operations."
            align="left"
            className="mb-10 max-w-none text-left"
          />
          <FeaturedProductSystemsCarousel />
        </MotionSection>

        <MotionSection className="mt-20">
          <SectionHeader
            eyebrow="Equipment Catalog"
            title="Control Panels & Shipboard Devices"
            description="Fire, alarm, communication, and bridge hardware we supply, integrate, and maintain for commercial and offshore fleets."
            align="left"
            className="mb-10 max-w-none text-left"
          />
          <Suspense fallback={<CatalogFallback />}>
            <ProductCatalog />
          </Suspense>
        </MotionSection>

        <MotionSection className="mt-20">
          <div className="mt-10 rounded-2xl bg-navy px-8 py-10 text-center text-white">
            <p className="text-lg font-medium">
              Need a system quote or equipment match?
            </p>
            <p className="mt-2 text-sm text-white/70">
              Send your vessel particulars, class notation, and existing panel
              model — we will confirm compatibility and mobilization scope.
            </p>
            <ButtonLink
              href="/contact"
              variant="primary"
              className="mt-6 inline-flex"
            >
              Contact Us
            </ButtonLink>
          </div>
        </MotionSection>
    </div>
  );
}
