import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariant } from "./button";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-light shadow-lg shadow-orange/25 focus-visible:ring-orange",
  secondary:
    "bg-navy-light text-white hover:bg-navy focus-visible:ring-navy-light",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5 focus-visible:ring-navy",
  outline:
    "border-2 border-navy/25 text-navy bg-transparent hover:border-navy/40 hover:bg-navy/[0.04] focus-visible:ring-navy",
  outlineLight:
    "border-2 border-white text-white bg-transparent hover:bg-white/10 focus-visible:ring-white",
};

export type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
