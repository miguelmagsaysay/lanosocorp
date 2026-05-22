import Image from "next/image";
import type { CatalogProduct } from "@/types";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: CatalogProduct;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const categoryLabel =
    product.category === "fire-detection"
      ? "Fire Detection"
      : product.category === "telephone"
        ? "Telephone"
        : product.category === "public-address"
          ? "Public Address"
          : product.category === "general-alarm"
            ? "General Alarm"
            : product.category === "telegraph"
              ? "Engine Telegraph"
              : product.category === "navigation"
                ? "Navigation"
                : product.category === "instrumentation"
                  ? "Instrumentation"
                  : "Alarm & Signaling";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-orange/35 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-square bg-stone-50 p-4">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-orange">
          {categoryLabel}
        </p>
        <h3 className="mt-2 font-display text-sm font-bold uppercase leading-snug text-navy sm:text-base">
          {product.title}
        </h3>
        {product.manufacturer ? (
          <p className="mt-2 text-xs text-navy/55">{product.manufacturer}</p>
        ) : null}
        {product.description ? (
          <p className="mt-2 flex-1 text-xs leading-relaxed text-navy/65">
            {product.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
