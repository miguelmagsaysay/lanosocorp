"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { ServiceItem } from "@/types";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const NAV_LABELS: Record<ServiceItem["slug"], string> = {
  electrical: "Electrical",
  automation: "Automation",
  instrumentation: "Instrumentation",
  "engine-room": "Engine Room",
  general: "General",
};

function ServiceEditorialBlock({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const Icon = service.icon;
  const reverse = index % 2 === 1;

  return (
    <section
      id={service.slug}
      ref={ref}
      className={cn(
        "scroll-mt-24 py-12 sm:scroll-mt-28 sm:py-16 lg:py-24",
        index % 2 === 0 ? "bg-white" : "bg-stone-50/80",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20",
            reverse && "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.04 }}
            className="group relative w-full min-w-0"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl lg:aspect-[5/4]">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-out motion-safe:group-hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-80"
                aria-hidden
              />
            </div>
            <motion.span
              className="absolute -bottom-2 left-4 h-px bg-orange/70 sm:-bottom-3 sm:left-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 56 } : { width: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
              aria-hidden
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-orange shadow-sm sm:h-11 sm:w-11">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
              </span>
              <p className="text-[11px] font-medium tracking-wide text-orange sm:text-xs sm:tracking-[0.22em]">
                {NAV_LABELS[service.slug]}
              </p>
            </div>

            <h2 className="mt-4 text-xl font-light tracking-tight text-navy sm:mt-5 sm:text-2xl lg:text-3xl">
              {service.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:mt-4 sm:text-base">
              {service.description}
            </p>

            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {service.bullets.map((bullet, bulletIndex) => (
                <motion.li
                  key={bullet}
                  className="flex gap-2.5 text-[13px] leading-relaxed text-navy/80 sm:gap-3 sm:text-sm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    ease,
                    delay: 0.18 + bulletIndex * 0.06,
                  }}
                >
                  <span
                    className="mt-2.5 h-px w-4 shrink-0 bg-orange/80 sm:w-5"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>

            <ButtonLink
              href={`/contact?service=${service.slug}`}
              variant="primary"
              className="group mt-7 flex w-full justify-center sm:mt-9 sm:inline-flex sm:w-auto"
            >
              Request This Service
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPageShowcase() {
  const introRef = useRef<HTMLElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-8% 0px" });
  const ctaRef = useRef<HTMLElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10% 0px" });

  return (
    <>
      <section
        ref={introRef}
        className="relative overflow-hidden border-b border-navy/10 bg-gradient-to-b from-white via-stone-50/50 to-white py-10 sm:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 maritime-waves opacity-30"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-medium tracking-wide text-orange sm:text-xs sm:tracking-[0.2em]">
              Our Experties
            </p>
            <p className="mt-2.5 text-base leading-relaxed text-navy/75 sm:mt-3 sm:text-lg lg:text-xl">
              Explore our core capabilities — each discipline documented for
              class, PSC, and owner review, with mobilization-ready teams.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
            className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-2.5"
            aria-label="Jump to service"
          >
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-navy/12 bg-white/90 px-3 py-2.5 text-center text-[11px] font-medium tracking-normal text-navy/80 transition hover:border-orange/40 hover:text-navy sm:px-4 sm:py-2 sm:text-xs"
              >
                {NAV_LABELS[service.slug]}
              </Link>
            ))}
          </motion.nav>
        </div>
      </section>

      {SERVICES.map((service, index) => (
        <ServiceEditorialBlock
          key={service.slug}
          service={service}
          index={index}
        />
      ))}

      <section ref={ctaRef} className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden rounded-2xl bg-navy px-5 py-10 text-center text-white sm:rounded-3xl sm:px-14 sm:py-14"
          >
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/15 blur-3xl"
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <p className="relative text-lg font-medium sm:text-2xl">
              Not sure what you need?
            </p>
            <p className="relative mx-auto mt-2.5 max-w-lg text-sm leading-relaxed text-white/70 sm:mt-3">
              Talk to our team — we will map symptoms and class context to a
              scoped work plan.
            </p>
            <ButtonLink
              href="/contact"
              variant="primary"
              className="relative mt-6 flex w-full justify-center sm:mt-8 sm:inline-flex sm:w-auto"
            >
              Contact Us
            </ButtonLink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
