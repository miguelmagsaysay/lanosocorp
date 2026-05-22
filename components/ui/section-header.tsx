import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    >
      <p
        className={cn(
          "font-display text-sm font-bold uppercase tracking-[0.2em]",
          light ? "text-orange" : "text-orange",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-navy/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
