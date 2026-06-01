"use client";

import { PRODUCTS_PAGE_FEATURED_SYSTEMS } from "@/lib/products";
import type { FeaturedProductSystem } from "@/types";
import { cn } from "@/lib/utils";
import { FeaturedProductSystemCard } from "./featured-product-system-card";

/** Visible slides: ~1 on mobile, ~2 on md+, with gap-5 (1.25rem). */
const CARD_WIDTH =
  "w-[min(100%,22rem)] sm:w-[calc((100%-1.25rem)/1.15)] md:w-[calc((100%-2.5rem)/2.25)] lg:w-[calc((100%-3.75rem)/3.15)]";

type FeaturedProductSystemsCarouselProps = {
  systems?: readonly FeaturedProductSystem[];
  showTeaserMeta?: boolean;
  className?: string;
};

export function FeaturedProductSystemsCarousel({
  systems = PRODUCTS_PAGE_FEATURED_SYSTEMS,
  showTeaserMeta = false,
  className,
}: FeaturedProductSystemsCarouselProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {systems.map((system) => (
          <div
            key={system.id}
            data-product-system-card
            className={cn("shrink-0 snap-start", CARD_WIDTH)}
          >
            <FeaturedProductSystemCard
              system={system}
              showTeaserMeta={showTeaserMeta}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
