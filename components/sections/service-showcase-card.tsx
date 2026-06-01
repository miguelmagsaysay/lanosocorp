import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

type ServiceShowcaseCardProps = {
  service: ServiceItem;
  variant?: "dark" | "minimal";
  layout?: "stacked" | "wide";
  overlayPosition?: "top" | "bottom";
  className?: string;
};

export function ServiceShowcaseCard({
  service,
  variant = "minimal",
  layout = "stacked",
  overlayPosition = "top",
  className,
}: ServiceShowcaseCardProps) {
  if (variant === "minimal") {
    const isWide = layout === "wide";

    return (
      <Link
        href={`/services#${service.slug}`}
        className={cn(
          "group flex h-full overflow-hidden rounded-2xl border border-stone-200/90 bg-white transition duration-300 hover:border-stone-300 hover:shadow-[0_8px_30px_rgba(27,43,94,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/50",
          isWide ? "min-h-[11rem] flex-col sm:min-h-[9.5rem] sm:flex-row" : "flex-col",
          className,
        )}
      >
        <div
          className={cn(
            "relative shrink-0 overflow-hidden bg-stone-100",
            isWide
              ? "aspect-[16/9] w-full sm:aspect-auto sm:h-auto sm:min-h-[9.5rem] sm:w-[44%] lg:w-[42%]"
              : "min-h-[9rem] flex-1 sm:min-h-[10rem]",
          )}
        >
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            fill
            className="object-cover opacity-[0.92] transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            sizes={
              isWide
                ? "(max-width: 640px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            }
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center",
            isWide
              ? "flex-1 border-stone-100 px-4 py-4 sm:border-l sm:px-5 sm:py-4"
              : "shrink-0 border-t border-stone-100 px-4 py-4 sm:px-5 sm:py-5",
          )}
        >
          <h3 className="text-base font-medium leading-snug tracking-tight text-navy sm:text-lg">
            {service.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone-500 sm:line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "group relative block aspect-[3/4] min-h-[280px] w-full overflow-hidden rounded-3xl shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:min-h-[312px]",
        className,
      )}
    >
      <Image
        src={service.imageSrc}
        alt={service.imageAlt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"
        aria-hidden
      />
      <div
        className={cn(
          "absolute left-4 right-4 rounded-2xl border border-white/25 bg-white/15 p-5 shadow-lg backdrop-blur-md transition group-hover:bg-white/20 sm:left-5 sm:right-5 sm:p-6",
          overlayPosition === "top" ? "top-5 sm:top-6" : "bottom-5 sm:bottom-6",
        )}
      >
        <h3 className="text-lg font-medium leading-snug text-white sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}
