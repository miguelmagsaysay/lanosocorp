import { cn } from "@/lib/utils";

type BrandSloganProps = {
  className?: string;
  /** Tighter type for the navbar. */
  compact?: boolean;
};

export function BrandSlogan({ className, compact }: BrandSloganProps) {
  return (
    <p
      className={cn(
        "text-balance text-navy",
        compact ? "text-[11px] font-medium leading-snug sm:text-xs" : "text-sm sm:text-base",
        className,
      )}
    >
      <span className="font-semibold">Smart Solutions</span>{" "}
      <span className="text-navy/65">for</span>{" "}
      <span className="font-semibold text-orange">Smarter Seas</span>
    </p>
  );
}
