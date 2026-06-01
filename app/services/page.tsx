import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesPageShowcase } from "@/components/sections/services-page-showcase";
import { SERVICES_HERO_CAROUSEL_SLIDES } from "@/lib/constants";

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
        carouselSlides={SERVICES_HERO_CAROUSEL_SLIDES}
      />
      <ServicesPageShowcase />
    </>
  );
}
