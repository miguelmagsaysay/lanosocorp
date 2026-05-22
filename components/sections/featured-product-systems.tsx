import Image from "next/image";
import { FEATURED_PRODUCT_SYSTEMS } from "@/lib/products";
import { MotionSection } from "./motion-section";

export function FeaturedProductSystems() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {FEATURED_PRODUCT_SYSTEMS.map((system, i) => (
        <MotionSection
          key={system.id}
          delay={i * 0.05}
          className={i === 0 ? "sm:col-span-2" : undefined}
        >
          <article className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:border-orange/30 hover:shadow-lg">
            <div
              className={
                i === 0
                  ? "relative aspect-[21/9] bg-stone-100"
                  : "relative aspect-[5/3] bg-stone-100"
              }
            >
              <Image
                src={system.imageSrc}
                alt={system.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes={
                  i === 0
                    ? "(max-width: 1152px) 100vw, 1152px"
                    : "(max-width: 640px) 100vw, 50vw"
                }
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {system.acronym}
                </p>
                <h3 className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-orange sm:text-base">
                  {system.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                  {system.description}
                </p>
              </div>
            </div>
          </article>
        </MotionSection>
      ))}
    </div>
  );
}
