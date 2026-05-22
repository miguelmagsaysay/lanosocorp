import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "./motion-section";
import { ServicesCarousel } from "./services-carousel";

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 maritime-waves opacity-25"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Capabilities"
            title="What We Do"
            description="Electrical, automation, instrumentation, and machinery support engineered for class, PSC, and owner expectations."
          />
        </MotionSection>

        <MotionSection className="mt-12">
          <ServicesCarousel />
          <p className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-wide text-orange transition hover:text-orange-light"
            >
              View all services →
            </Link>
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
