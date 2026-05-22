import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceDetailHero } from "@/components/sections/service-detail-hero";
import { SERVICES } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";
import { MotionSection } from "@/components/sections/motion-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical solutions, automation systems, instrumentation and calibration, and engine room machinery support for commercial and offshore vessels.",
  openGraph: {
    title: "Marine Services | Lanoso Corporation",
    description:
      "Electrical, automation, instrumentation, and engine room support aligned to IMO, SOLAS, and MARINA.",
    url: "https://lanosocorp.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Marine Systems Services"
        subtitle="Technical depth across electrical, automation, instrumentation, and machinery disciplines — documented, class-aware, and mobilization-ready."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        imageSrc="/images/technical-work.jpg"
        imageAlt="Marine electrical and control systems installation and commissioning."
      />
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <MotionSection key={service.slug} delay={index * 0.05}>
              <section
                id={service.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
              >
                <ServiceDetailHero
                  title={service.title}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  icon={Icon}
                />
                <div className="p-8 sm:p-10">
                  <p className="text-navy/75">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-navy/80">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={`/contact?service=${service.slug}`}
                    variant="primary"
                    className="mt-8"
                  >
                    Request This Service
                  </ButtonLink>
                </div>
              </section>
            </MotionSection>
          );
        })}

        <MotionSection>
          <div className="rounded-2xl bg-navy px-8 py-10 text-center text-white sm:px-12">
            <p className="font-display text-xl font-bold uppercase tracking-wide">
              Not sure what you need?
            </p>
            <p className="mt-2 text-sm text-white/70">
              Talk to our team — we will map symptoms and class context to a
              scoped work plan.
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
