"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

export function CtaBanner() {
  return (
    <section className="bg-[#fbfbfd] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_24px_64px_-12px_rgba(27,43,94,0.12)] maritime-waves"
        >
          <motion.div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/12 blur-3xl"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-navy/8 blur-3xl"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent"
            aria-hidden
          />

          <motion.div
            className="relative flex flex-col gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
          >
            <motion.div className="max-w-2xl text-center lg:text-left">
              <h2 className="font-display text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[#1d1d1f] sm:text-3xl lg:text-[2rem]">
                Ready to upgrade your vessel&apos;s{" "}
                <span className="text-navy">systems?</span>
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[#424245] sm:text-base sm:leading-[1.55]">
                Book a consultation this quarter to secure mobilization windows
                for electrical, automation, and engine room work.
              </p>

              <p className="mt-5 inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#6e6e73] lg:justify-start">
                <CalendarClock className="h-4 w-4 shrink-0 text-navy/50" aria-hidden />
                Typical response within one business day
              </p>
            </motion.div>

            <motion.div className="flex shrink-0 items-center lg:items-end">
              <ButtonLink
                href="/contact"
                variant="primary"
                className="group min-w-[14rem] rounded-full px-7 py-3 text-[15px] shadow-lg shadow-orange/20"
              >
                Talk to an expert
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </ButtonLink>
            </motion.div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
