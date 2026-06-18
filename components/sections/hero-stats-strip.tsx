"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HOME_STATS, type HomeStat } from "@/lib/home-stats";
import { cn } from "@/lib/utils";

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

function CloudPill({
  stat,
  active,
}: {
  stat: HomeStat;
  active: boolean;
}) {
  const count = useAnimatedNumber(
    stat.value ?? 0,
    active && stat.variant === "metric",
  );

  return (
    <div
      className={cn(
        "flex h-[7rem] w-[10.5rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-center backdrop-blur-md transition hover:border-white/25 hover:bg-white/15 sm:h-[7.5rem] sm:w-[11rem] sm:px-5",
      )}
    >
      {stat.variant === "metric" ? (
        <>
          <p className="text-2xl font-light tabular-nums tracking-tight text-white sm:text-3xl">
            {stat.prefix}
            {count}
            {stat.suffix}
          </p>
          <p className="mt-1 text-[11px] font-normal leading-snug text-white/55 sm:text-xs">
            {stat.label}
          </p>
        </>
      ) : null}

      {stat.variant === "text" ? (
        <>
          <p
            className={cn(
              "font-light tracking-tight text-white",
              stat.id === "compliance"
                ? "w-full text-[10px] leading-tight sm:text-[11px]"
                : "text-base sm:text-lg",
            )}
          >
            {stat.display}
          </p>
          {stat.label ? (
            <p className="mt-1 text-[11px] font-normal leading-snug text-white/55 sm:text-xs">
              {stat.label}
            </p>
          ) : null}
        </>
      ) : null}

      {stat.variant === "badges" ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {stat.badges?.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/90 sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs font-normal text-white/55">{stat.label}</p>
        </>
      ) : null}
    </div>
  );
}

export function HeroStatsStrip() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full px-4 pb-8 pt-2 sm:px-6 sm:pb-10"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4">
        {HOME_STATS.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
          >
            <CloudPill stat={stat} active={active} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
