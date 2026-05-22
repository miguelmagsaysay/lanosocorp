"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ServiceShowcaseCard } from "./service-showcase-card";

export function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-service-card]");
    const gap = 20;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous services"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition",
            "hover:border-navy hover:bg-navy/5 disabled:pointer-events-none disabled:opacity-35",
          )}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next services"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition",
            "hover:bg-navy-light disabled:pointer-events-none disabled:opacity-35",
          )}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map((service, index) => (
          <div
            key={service.slug}
            data-service-card
            className="w-[min(85vw,320px)] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <ServiceShowcaseCard
              service={service}
              overlayPosition={index % 2 === 0 ? "top" : "bottom"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
