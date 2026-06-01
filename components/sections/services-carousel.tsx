"use client";

import { useRef } from "react";
import { SERVICES } from "@/lib/constants";
import { ServiceShowcaseCard } from "./service-showcase-card";

/** Visible slides: 1.15 on small screens, 2.25 on md+ (gap-5 = 1.25rem between cards). */
const CARD_WIDTH =
  "w-[calc((100%-1.25rem)/1.15)] md:w-[calc((100%-2.5rem)/2.25)] lg:w-[calc((100%-3.75rem)/4)]";

export function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map((service, index) => (
          <div
            key={service.slug}
            data-service-card
            className={`shrink-0 snap-start ${CARD_WIDTH}`}
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
