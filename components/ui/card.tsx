import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-orange/35 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
