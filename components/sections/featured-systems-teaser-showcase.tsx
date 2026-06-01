"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PRODUCTS_PAGE_FEATURED_SYSTEMS } from "@/lib/products";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

export function FeaturedSystemsTeaserShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const systems = PRODUCTS_PAGE_FEATURED_SYSTEMS;
  const slideCount = systems.length;

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

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-stone-100 via-white to-stone-50 sm:aspect-[16/10] lg:aspect-[21/9]">
        {systems.map((system, i) => (
          <motion.div
            key={system.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={system.imageSrc}
              alt={system.imageAlt}
              fill
              priority={i === 0}
              className="object-contain p-5 sm:p-8 lg:p-10"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </motion.div>
        ))}

        <div
          className="absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="Product systems slideshow"
        >
          {systems.map((system, i) => (
            <button
              key={system.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={system.title}
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systems.map((system, i) => (
          <div
            key={system.id}
            role="button"
            tabIndex={0}
            onClick={() => goTo(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goTo(i);
              }
            }}
            className={cn(
              "group flex h-full cursor-pointer flex-col rounded-xl border bg-white p-5 text-left shadow-sm transition",
              i === activeIndex
                ? "border-orange/50 ring-1 ring-orange/25"
                : "border-navy/10 hover:border-orange/35 hover:shadow-md",
            )}
          >
            <p
              className={cn(
                "text-2xl font-light tracking-tight transition",
                i === activeIndex ? "text-orange" : "text-navy group-hover:text-orange",
              )}
            >
              {system.acronym}
            </p>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-navy/65">
              {system.description}
            </p>
            <Link
              href="/products"
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-flex text-xs font-medium text-orange transition hover:text-orange-light"
            >
              View products →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
