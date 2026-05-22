import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FeaturedProductSystems } from "@/components/sections/featured-product-systems";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { SHOWCASE_BRANDS } from "@/lib/constants";
import { MotionSection } from "@/components/sections/motion-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { BrandMark } from "@/components/brands/brand-mark";

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

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products & Systems"
        subtitle="Marine communication, alarm, fire detection, and bridge equipment we supply, integrate, and maintain — alongside leading navigation and machinery partners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        imageSrc="/images/technical-work.jpg"
        imageAlt="Marine electrical panels and control equipment installed aboard a vessel."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Integrated Systems"
            title="Complete Marine Packages"
            description="Turnkey FDAS, MATS, PAS, and general alarm solutions — engineered for class requirements and Philippine fleet operations."
            align="left"
            className="mb-10 max-w-none text-left"
          />
          <FeaturedProductSystems />
        </MotionSection>

        <MotionSection className="mt-20">
          <SectionHeader
            eyebrow="Equipment Catalog"
            title="Panels, Stations & Devices"
            description="Representative hardware from Haihsea, Fucheng, JBS, Nanjing Zehai, and Lanoso-branded lines we install and service."
            align="left"
            className="mb-10 max-w-none text-left"
          />
          <ProductCatalog />
        </MotionSection>

        <MotionSection className="mt-20">
          <SectionHeader
            eyebrow="Navigation & Machinery"
            title="Technology Partners"
            description="We also integrate and service equipment from the world's leading marine electronics and machinery manufacturers."
            align="left"
            className="mb-10 max-w-none text-left"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE_BRANDS.map((brand, i) => (
              <MotionSection key={brand.name} delay={(i % 6) * 0.04}>
                <article className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange/35 hover:shadow-md">
                  <div className="flex aspect-[5/3] items-center justify-center px-4 py-6">
                    <div className="grayscale transition duration-300 group-hover:grayscale-0">
                      <BrandMark
                        markId={brand.markId}
                        label={brand.name}
                        size="lg"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-orange">
                    {brand.category}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold uppercase text-navy">
                    {brand.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
                    {brand.description}
                  </p>
                </article>
              </MotionSection>
            ))}
          </div>
        </MotionSection>

        <MotionSection>
          <div className="mt-10 rounded-2xl bg-navy px-8 py-10 text-center text-white">
            <p className="font-display text-lg font-bold uppercase">
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
    </>
  );
}
