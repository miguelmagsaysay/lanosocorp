"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, ListFilter } from "lucide-react";
import {
  CATALOG_PRODUCTS,
  PRODUCT_CATEGORIES,
  getProductsByCategory,
} from "@/lib/products";
import type { ProductCategorySlug } from "@/types";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { MotionSection } from "./motion-section";

const ITEMS_PER_PAGE = 12;

function getCategoryCount(slug: ProductCategorySlug): number {
  if (slug === "all") return CATALOG_PRODUCTS.length;
  return CATALOG_PRODUCTS.filter((p) => p.category === slug).length;
}

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "ellipsis")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push("ellipsis");
  for (let i = start; i <= end; i += 1) pages.push(i);
  if (end < total - 1) pages.push("ellipsis");
  pages.push(total);

  return pages;
}

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ProductCategorySlug>("all");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const catalogTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = searchParams.get("category");
    if (!raw) return;
    const allowed = new Set(PRODUCT_CATEGORIES.map((c) => c.slug));
    if (allowed.has(raw as ProductCategorySlug)) {
      setActive(raw as ProductCategorySlug);
      setPage(1);
    }
  }, [searchParams]);

  const products = useMemo(() => getProductsByCategory(active), [active]);
  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return products.slice(start, start + ITEMS_PER_PAGE);
  }, [products, safePage]);

  const activeLabel =
    PRODUCT_CATEGORIES.find((c) => c.slug === active)?.label ?? "All";

  const pageNumbers = useMemo(
    () => getPageNumbers(safePage, totalPages),
    [safePage, totalPages],
  );

  const selectCategory = useCallback((slug: ProductCategorySlug) => {
    setActive(slug);
    setPage(1);
    setFilterOpen(false);
  }, []);

  useEffect(() => {
    if (!filterOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (filterRef.current && !filterRef.current.contains(target)) {
        setFilterOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFilterOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [filterOpen]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const goToPage = (next: number) => {
    const clamped = Math.max(1, Math.min(next, totalPages));
    setPage(clamped);
    catalogTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const rangeStart =
    products.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1;
  const rangeEnd = Math.min(safePage * ITEMS_PER_PAGE, products.length);

  return (
    <div ref={catalogTopRef}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy/60">
          Showing{" "}
          <span className="font-semibold text-navy">
            {products.length === 0 ? "0" : `${rangeStart}–${rangeEnd}`}
          </span>{" "}
          of <span className="font-semibold text-navy">{products.length}</span>
          {active !== "all" ? (
            <span className="hidden sm:inline"> in {activeLabel}</span>
          ) : null}
        </p>

        <div ref={filterRef} className="relative w-full sm:w-auto sm:shrink-0">
          <button
            type="button"
            onClick={() => setFilterOpen((open) => !open)}
            aria-expanded={filterOpen}
            aria-haspopup="listbox"
            aria-label="Filter by category"
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:w-auto sm:min-w-[11rem]",
              filterOpen
                ? "border-navy bg-navy text-white"
                : "border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-stone-50",
            )}
          >
            <span className="flex items-center gap-2">
              <ListFilter className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate">
                {active === "all" ? "All categories" : activeLabel}
              </span>
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 transition-transform",
                filterOpen && "rotate-180",
              )}
              aria-hidden
            />
          </button>

          {filterOpen ? (
            <ul
              role="listbox"
              aria-label="Product categories"
              className="absolute left-0 right-0 z-20 mt-2 max-h-[min(20rem,70vh)] overflow-y-auto rounded-xl border border-navy/10 bg-white py-1 shadow-lg sm:left-auto sm:right-0 sm:w-72"
            >
              {PRODUCT_CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat.slug);
                const selected = active === cat.slug;

                return (
                  <li key={cat.slug} role="option" aria-selected={selected}>
                    <button
                      type="button"
                      onClick={() => selectCategory(cat.slug)}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition",
                        selected
                          ? "bg-navy/8 font-semibold text-navy"
                          : "text-navy/80 hover:bg-stone-50",
                      )}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
                          selected
                            ? "bg-navy text-white"
                            : "bg-stone-100 text-navy/60",
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      {active !== "all" ? (
        <p className="mt-2 text-xs text-navy/55 sm:hidden">
          Filtered by {activeLabel}
        </p>
      ) : null}

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProducts.map((product, i) => (
          <MotionSection key={product.id} delay={(i % 8) * 0.03}>
            <ProductCard product={product} />
          </MotionSection>
        ))}
      </div>

      {products.length === 0 ? (
        <p className="mt-10 text-center text-sm text-navy/60">
          No equipment matches this category.
        </p>
      ) : null}

      {totalPages > 1 ? (
        <nav
          className="mt-10 flex flex-col items-center gap-4"
          aria-label="Catalog pagination"
        >
          <p className="text-xs font-medium text-navy/55">
            Page {safePage} of {totalPages}
          </p>

          <div className="flex w-full max-w-md items-center justify-center gap-1 sm:max-w-none sm:gap-2">
            <button
              type="button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage <= 1}
              aria-label="Previous page"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition",
                "hover:border-navy hover:bg-navy/5 disabled:pointer-events-none disabled:opacity-35",
              )}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1">
              {pageNumbers.map((item, index) =>
                item === "ellipsis" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="hidden px-1 text-navy/40 sm:inline"
                    aria-hidden
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    aria-label={`Page ${item}`}
                    aria-current={item === safePage ? "page" : undefined}
                    className={cn(
                      "hidden h-10 min-w-10 rounded-full px-3 text-sm font-bold transition sm:inline-flex sm:items-center sm:justify-center",
                      item === safePage
                        ? "bg-navy text-white"
                        : "text-navy/70 hover:bg-navy/5",
                    )}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage >= totalPages}
              aria-label="Next page"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition",
                "hover:border-navy hover:bg-navy/5 disabled:pointer-events-none disabled:opacity-35",
              )}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
