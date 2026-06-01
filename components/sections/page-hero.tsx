import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeroCarouselBackground } from "./page-hero-carousel-background";

type Crumb = { label: string; href?: string };

type CarouselSlide = {
  imageSrc: string;
  imageAlt: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  /** Optional full-bleed background photo (local /public path). */
  imageSrc?: string;
  imageAlt?: string;
  /** Rotating hero backgrounds; takes precedence over imageSrc when set. */
  carouselSlides?: readonly CarouselSlide[];
};

const PHOTO_SCRIM =
  "pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_75%_at_50%_45%,rgba(251,251,253,0.94)_0%,rgba(251,251,253,0.82)_42%,rgba(251,251,253,0.45)_72%,rgba(251,251,253,0.2)_100%)]";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  imageSrc,
  imageAlt = "",
  carouselSlides,
}: PageHeroProps) {
  const withPhoto = Boolean(carouselSlides?.length || imageSrc);

  return (
    <section
      className={cn(
        "relative flex min-h-[min(48vh,24rem)] items-center justify-center overflow-hidden pt-16 sm:min-h-[min(52vh,28rem)]",
        !withPhoto &&
          "bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white",
      )}
    >
      {carouselSlides?.length ? (
        <PageHeroCarouselBackground slides={carouselSlides} />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : null}

      {withPhoto ? <div className={PHOTO_SCRIM} aria-hidden /> : null}

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16">
        {breadcrumbs?.length ? (
          <nav
            className={cn(
              "mb-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-normal",
              withPhoto ? "text-[#6e6e73]" : "text-white/55",
            )}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {i > 0 ? <ChevronRight className="h-3 w-3 text-orange" /> : null}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={cn(
                      "transition",
                      withPhoto ? "text-[#6e6e73] hover:text-navy" : "hover:text-white",
                    )}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-orange">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <h1
          className={cn(
            "text-3xl font-light tracking-tight sm:text-4xl md:text-5xl",
            withPhoto ? "text-[#1d1d1f]" : "text-white",
          )}
        >
          {title}
        </h1>

        {subtitle ? (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
              withPhoto ? "text-[#424245]" : "text-white/80",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
