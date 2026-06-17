"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { HERO_SUBHEADING } from "@/lib/constants";
import { HeroBackgroundCarousel } from "./hero-background-carousel";
import { HeroStatsStrip } from "./hero-stats-strip";

export function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <HeroBackgroundCarousel
        activeIndex={slideIndex}
        onIndexChange={setSlideIndex}
        sectionRef={sectionRef}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/35 to-black/55"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-56 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:h-64"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-5 pb-8 text-center sm:px-8 sm:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-normal tracking-wide text-white/85 sm:text-sm"
          >
            Marine Systems Integration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-balance mt-4 max-w-3xl text-[2.05rem] font-light leading-[1.06] tracking-tight text-white sm:text-[3rem] md:text-[3.5rem]"
          >
            Smart Solutions for Smarter Seas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-balance mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
          >
            {HERO_SUBHEADING}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-8"
          >
            <ButtonLink
              href="/services"
              variant="primary"
              className="min-w-[10rem] rounded-full bg-white px-6 text-black !transition-none hover:bg-white focus-visible:ring-white/60"
            >
              Our Services
            </ButtonLink>
          </motion.div>
        </div>

        <HeroStatsStrip />
      </div>
    </section>
  );
}
