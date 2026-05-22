import { HeroSection } from "@/components/sections/hero-section";
import { HeroCompliance } from "@/components/sections/hero-compliance";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustSection } from "@/components/sections/trust-section";
import { OperationsSection } from "@/components/sections/operations-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroCompliance />
      {/* <BrandStrip /> */}
      <ServicesGrid />
      <TrustSection />
      <OperationsSection />
      <CtaBanner />
    </>
  );
}
