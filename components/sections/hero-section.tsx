"use client";

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const heroTitle = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export function HeroSection() {
  return (
    <section className="relative flex min-h-[75svh] items-center justify-center overflow-hidden pt-16">
      <Image
        src="/images/hero-ship.jpg"
        alt="Cargo ship loaded with containers at port — marine logistics imagery."
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Soft scrim so centered copy stays readable on the photo */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_45%,rgba(251,251,253,0.94)_0%,rgba(251,251,253,0.82)_42%,rgba(251,251,253,0.45)_72%,rgba(251,251,253,0.2)_100%)]"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6e6e73] sm:text-xs"
        >
          Marine Systems Integration
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`${heroTitle.className} mt-4 text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-5xl md:text-[3.25rem]`}
        >
          <span className="text-navy-dark">Smart Solutions</span>{" "}
          <span className="font-medium text-navy/45">for</span>{" "}
          <span className="text-orange">Smarter Seas</span>
        </motion.h1>

        

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <ButtonLink
            href="/services"
            variant="primary"
            className="min-w-[9.5rem] rounded-full px-6 shadow-none"
          >
            Our Services
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="outline"
            className="min-w-[9.5rem] rounded-full border-[#1d1d1f]/20 bg-white/60 px-6 text-[#1d1d1f] shadow-none backdrop-blur-sm hover:bg-white/90"
          >
            Contact Us
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
