import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

type ServiceShowcaseCardProps = {
  service: ServiceItem;
  overlayPosition?: "top" | "bottom";
  className?: string;
};

export function ServiceShowcaseCard({
  service,
  overlayPosition = "top",
  className,
}: ServiceShowcaseCardProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "group relative block aspect-[3/4] min-h-[380px] w-full overflow-hidden rounded-3xl shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:min-h-[420px]",
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
        <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}
