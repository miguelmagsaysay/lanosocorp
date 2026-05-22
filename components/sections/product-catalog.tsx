"use client";

import { useMemo, useState } from "react";
import {
  CATALOG_PRODUCTS,
  PRODUCT_CATEGORIES,
  getProductsByCategory,
} from "@/lib/products";
import type { ProductCategorySlug } from "@/types";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { MotionSection } from "./motion-section";

export function ProductCatalog() {
  const [active, setActive] = useState<ProductCategorySlug>("all");

  const products = useMemo(() => getProductsByCategory(active), [active]);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter products by category"
      >
        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            role="tab"
            aria-selected={active === cat.slug}
            onClick={() => setActive(cat.slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition",
              active === cat.slug
                ? "border-navy bg-navy text-white"
                : "border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-stone-50",
            )}
          >
            {cat.label}
            {cat.slug !== "all" ? (
              <span className="ml-1.5 text-[10px] font-semibold opacity-70">
                (
                {CATALOG_PRODUCTS.filter((p) => p.category === cat.slug).length}
                )
              </span>
            ) : (
              <span className="ml-1.5 text-[10px] font-semibold opacity-70">
                ({CATALOG_PRODUCTS.length})
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-navy/60">
        Showing {products.length}{" "}
        {products.length === 1 ? "item" : "items"}
        {active !== "all"
          ? ` in ${PRODUCT_CATEGORIES.find((c) => c.slug === active)?.label}`
          : ""}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <MotionSection key={product.id} delay={(i % 8) * 0.03}>
            <ProductCard product={product} />
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
