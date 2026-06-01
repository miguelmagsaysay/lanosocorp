import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceDetailHeroProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  className?: string;
};

export function ServiceDetailHero({
  title,
  imageSrc,
  imageAlt,
  icon: Icon,
  className,
}: ServiceDetailHeroProps) {
  return (
    <div
      className={cn(
        "relative aspect-[21/9] min-h-[200px] w-full overflow-hidden",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1152px) 100vw, 1152px"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/50 to-navy/20"
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-6 sm:p-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-orange" aria-hidden />
        </span>
        <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
