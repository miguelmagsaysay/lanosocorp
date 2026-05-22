import { cn } from "@/lib/utils";

type FlankedHeadingProps = {
  children: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
};

export function FlankedHeading({
  as = "h2",
  children,
  className,
}: FlankedHeadingProps) {
  const titleClass =
    "font-display text-center text-xl font-bold uppercase tracking-tight text-navy sm:text-2xl md:text-3xl";

  const title =
    as === "h3" ? (
      <h3 className={titleClass}>{children}</h3>
    ) : (
      <h2 className={titleClass}>{children}</h2>
    );

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 sm:gap-5",
        className,
      )}
    >
      <span
        className="h-px min-w-[2.5rem] flex-1 max-w-[4.5rem] bg-orange sm:min-w-[3.5rem]"
        aria-hidden
      />
      {title}
      <span
        className="h-px min-w-[2.5rem] flex-1 max-w-[4.5rem] bg-orange sm:min-w-[3.5rem]"
        aria-hidden
      />
    </div>
  );
}
