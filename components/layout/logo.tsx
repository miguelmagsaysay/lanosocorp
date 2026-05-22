import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for API compatibility with navbar/footer (no visual effect). */
  inverted?: boolean;
  /** Prefer true in the navbar for LCP; omit in footer. */
  priority?: boolean;
};

const LOGO_SRC = "/images/lanoso-logo.png";

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block shrink-0 overflow-hidden transition-opacity hover:opacity-90",
        "h-8 w-[118px] sm:h-9 sm:w-[133px] md:h-10 md:w-[148px]",
        className,
      )}
      aria-label="Lanoso Corporation home"
    >
      <Image
        src={LOGO_SRC}
        alt=""
        fill
        priority={priority}
        className="object-contain object-left"
        sizes="(max-width: 768px) 118px, 148px"
      />
    </Link>
  );
}
