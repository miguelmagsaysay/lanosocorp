import Image from "next/image";
import Link from "next/link";
import type { FeaturedProductSystem } from "@/types";
import { cn } from "@/lib/utils";

type FeaturedProductSystemCardProps = {
  system: FeaturedProductSystem;
  showTeaserMeta?: boolean;
  className?: string;
};

export function FeaturedProductSystemCard({
  system,
  showTeaserMeta = false,
  className,
}: FeaturedProductSystemCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm sm:min-h-[300px]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 bg-gradient-to-br from-stone-100 via-white to-stone-50">
        <Image
          src={system.imageSrc}
          alt={system.imageAlt}
          fill
          className="object-contain p-4 sm:p-6"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-navy/10 bg-navy px-5 py-5 sm:px-6">
        {showTeaserMeta ? (
          <>
            <p className="text-2xl font-light tracking-tight text-white">
              {system.acronym}
            </p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">
              {system.description}
            </p>
            <Link
              href="/products"
              className="mt-4 inline-flex text-xs font-medium text-orange transition hover:text-orange-light"
            >
              View products →
            </Link>
          </>
        ) : (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">
            {system.description}
          </p>
        )}
      </div>
    </article>
  );
}
