import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturedSystemsTeaser } from "@/components/sections/featured-systems-teaser";
import { WhoWeAreBand } from "@/components/sections/who-we-are-band";
import { OperationsSection } from "@/components/sections/operations-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <BrandStrip /> */}
      <ServicesGrid />
      <TrustSection />
      <FeaturedSystemsTeaser />
      <WhoWeAreBand />
      <OperationsSection />
      <CtaBanner />
    </>
  );
}
