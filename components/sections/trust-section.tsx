import Image from "next/image";
import { Award, Globe2, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "./motion-section";

const pillars = [
  {
    title: "IMO, SOLAS & MARINA Aligned",
    body: "Every solution is engineered to meet international maritime standards.",
    icon: Award,
    imageSrc: "/images/hero-ship.jpg",
    imageAlt: "Commercial vessel at sea — representative of class, SOLAS, and MARINA compliance.",
  },
  {
    title: "Field-Proven",
    body: "Over a decade of hands-on experience on vessels across the region.",
    icon: Wrench,
    imageSrc: "/images/technical-work.jpg",
    imageAlt: "Marine technicians performing systems work aboard a vessel.",
  },
  {
    title: "End-to-End Support",
    body: "From diagnosis to deployment, we handle it all.",
    icon: Globe2,
    imageSrc: "/images/engine-room.jpg",
    imageAlt: "Engine room and machinery aboard a commercial ship.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            eyebrow="Authority"
            title="Built on Compliance. Trusted by the Industry."
            description="Consistency, traceability, and technical depth — the signals owners and operators expect from a systems integrator."
          />
        </MotionSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <MotionSection key={p.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange/30 hover:shadow-lg">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={p.imageSrc}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-navy/25 to-transparent"
                      aria-hidden
                    />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-orange" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
                      {p.body}
                    </p>
                    </div>
                </article>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
