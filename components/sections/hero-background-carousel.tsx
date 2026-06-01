"use client";

import { useCallback, useEffect, type Dispatch, type RefObject, type SetStateAction } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HERO_CAROUSEL_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

type HeroBackgroundCarouselProps = {
  activeIndex: number;
  onIndexChange: Dispatch<SetStateAction<number>>;
  sectionRef: RefObject<HTMLElement | null>;
};

export function HeroBackgroundCarousel({
  activeIndex,
  onIndexChange,
  sectionRef,
}: HeroBackgroundCarouselProps) {
  const slideCount = HERO_CAROUSEL_SLIDES.length;
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  const goTo = useCallback(
    (next: number) => {
      onIndexChange((next + slideCount) % slideCount);
    },
    [onIndexChange, slideCount],
  );

  useEffect(() => {
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      onIndexChange((i) => (i + 1) % slideCount);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [onIndexChange, reducedMotion, slideCount]);

  return (
    <div className="absolute inset-0" aria-hidden>
      {HERO_CAROUSEL_SLIDES.map((slide, i) => (
        <motion.div
          key={slide.imageSrc}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute -inset-[12%]"
            style={
              reducedMotion
                ? undefined
                : { y: parallaxY, scale: parallaxScale }
            }
          >
            <Image
              src={slide.imageSrc}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      ))}

      <div
        className="absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 gap-2 sm:bottom-6"
        role="tablist"
        aria-label="Hero image carousel"
      >
        {HERO_CAROUSEL_SLIDES.map((slide, i) => (
          <button
            key={slide.imageSrc}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={slide.imageAlt}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex
                ? "w-8 bg-orange shadow-sm"
                : "w-1.5 bg-navy/25 hover:bg-navy/45",
            )}
          />
        ))}
      </div>
    </div>
  );
}
