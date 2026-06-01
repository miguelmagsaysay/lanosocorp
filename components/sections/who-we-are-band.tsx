import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "./motion-section";

export function WhoWeAreBand() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy/10 bg-gradient-to-r from-navy/[0.03] to-transparent px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wide text-orange">
                Who We Are
              </p>
              <p className="mt-3 text-base leading-relaxed text-navy/75 sm:text-lg">
                Founded in 2012 in Navotas City, Lanoso Corporation delivers
                integrated marine electrical, automation, and monitoring
                solutions nationwide — from survey to commissioning.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-normal text-navy transition hover:text-orange"
            >
              Our story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
