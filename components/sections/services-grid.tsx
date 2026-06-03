import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "./motion-section";
import { ServicesBento } from "./services-bento";

export function ServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Capabilities"
            title="What We Do"
            description="Electrical, automation, instrumentation, engine room, and marine machinery support engineered for class, PSC, and owner expectations."
            className="mb-10 sm:mb-12"
          />
        </MotionSection>

        <MotionSection>
          <ServicesBento />
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-navy/55 transition hover:text-navy"
            >
              View all services →
            </Link>
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
