"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { HOME_STATS, type HomeStat } from "@/lib/home-stats";
import { MotionSection } from "./motion-section";

function useAnimatedNumber(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return n;
}

function StatCell({ stat, active }: { stat: HomeStat; active: boolean }) {
  const count = useAnimatedNumber(
    stat.value ?? 0,
    active && stat.variant === "metric",
  );

  return (
    <div className="flex flex-col py-6 text-center md:py-8">
      {stat.variant === "metric" ? (
        <>
          <p className="text-3xl font-light tabular-nums text-white sm:text-4xl">
            {stat.prefix}
            {count}
            {stat.suffix}
          </p>
          <p className="mt-2 text-xs font-medium tracking-normal text-white/60">
            {stat.label}
          </p>
        </>
      ) : null}

      {stat.variant === "text" ? (
        <>
          <p className="text-base font-normal leading-snug tracking-normal text-white sm:text-lg">
            {stat.display}
          </p>
          <p className="mt-2 text-xs font-medium tracking-normal text-white/60">
            {stat.label}
          </p>
        </>
      ) : null}

      {stat.variant === "badges" ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {stat.badges?.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs font-medium tracking-normal text-white/60">
            {stat.label}
          </p>
        </>
      ) : null}
    </div>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <MotionSection className="border-y border-white/10 bg-navy">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4"
      >
        {HOME_STATS.map((stat) => (
          <StatCell key={stat.id} stat={stat} active={inView} />
        ))}
      </div>
    </MotionSection>
  );
}
