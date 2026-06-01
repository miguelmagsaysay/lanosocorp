"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

type CarouselSlide = {
  imageSrc: string;
  imageAlt: string;
};

type PageHeroCarouselBackgroundProps = {
  slides: readonly CarouselSlide[];
};

export function PageHeroCarouselBackground({
  slides,
}: PageHeroCarouselBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const slideCount = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setActiveIndex((next + slideCount) % slideCount);
    },
    [slideCount],
  );

  useEffect(() => {
    if (reducedMotion || slideCount <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slideCount);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, slideCount]);

  if (slideCount === 0) return null;

  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((slide, i) => (
        <motion.div
          key={slide.imageSrc}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
      ))}

      {slideCount > 1 ? (
        <div
          className="absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 gap-2 sm:bottom-5"
          role="tablist"
          aria-label="Hero image carousel"
        >
          {slides.map((slide, i) => (
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
      ) : null}
    </div>
  );
}
