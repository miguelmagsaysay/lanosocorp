"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { MotionSection } from "./motion-section";

type Stat = {
  id: string;
  type: "number" | "text";
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
};

const STATS: Stat[] = [
  {
    id: "years",
    type: "number",
    label: "Years Experience",
    value: 10,
    suffix: "+",
  },
  {
    id: "projects",
    type: "number",
    label: "Projects Completed",
    value: 500,
    suffix: "+",
  },
  {
    id: "imo",
    type: "text",
    label: "Compliance",
    display: "IMO · SOLAS · MARINA",
  },
  {
    id: "support",
    type: "text",
    label: "Operations",
    display: "24/7 Support",
  },
];

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

function StatCell({ stat, active }: { stat: Stat; active: boolean }) {
  const years = useAnimatedNumber(stat.value ?? 0, active && stat.type === "number");

  return (
    <div className="flex flex-col py-6 text-center md:py-8">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        {stat.type === "number" ? (
          <>
            {stat.prefix}
            {years}
            {stat.suffix}
          </>
        ) : (
          <span className="text-orange">{stat.display}</span>
        )}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
        {stat.label}
      </p>
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
        {STATS.map((stat) => (
          <StatCell key={stat.id} stat={stat} active={inView} />
        ))}
      </div>
    </MotionSection>
  );
}
