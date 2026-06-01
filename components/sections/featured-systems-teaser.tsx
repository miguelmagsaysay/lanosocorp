import { MotionSection } from "./motion-section";
import { SectionHeader } from "@/components/ui/section-header";
import { FeaturedSystemsTeaserShowcase } from "./featured-systems-teaser-showcase";

export function FeaturedSystemsTeaser() {
  return (
    <section className="border-y border-navy/10 bg-stone-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Systems We Install"
            title="Integrated Marine Packages"
            description="Fire detection, communications, public address, and general alarm systems — supplied, integrated, and maintained."
            align="left"
            className="mb-8 max-w-none text-left"
          />
        </MotionSection>

        <MotionSection>
          <FeaturedSystemsTeaserShowcase />
        </MotionSection>
      </div>
    </section>
  );
}
