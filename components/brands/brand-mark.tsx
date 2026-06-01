import Image from "next/image";
import type { SimpleIcon } from "simple-icons";
import { siCaterpillar } from "simple-icons/icons";
import type { BrandMarkId } from "@/types";
import { BRAND_LOGO_SRC, BRAND_WORDMARKS } from "@/lib/brand-marks";
import { cn } from "@/lib/utils";

const simpleById: Partial<Record<BrandMarkId, SimpleIcon>> = {
  caterpillar: siCaterpillar,
};

export type BrandMarkProps = {
  markId: BrandMarkId;
  /** Accessible label (usually the OEM trading name). */
  label: string;
  className?: string;
  /** Larger marks for /products partner cards */
  size?: "sm" | "md" | "marquee" | "lg";
};

const sizeClasses = {
  sm: "h-8 max-w-[112px]",
  md: "h-10 max-w-[140px]",
  /** Home marquee: 20% larger than `md` */
  marquee: "h-12 max-w-[168px]",
  lg: "h-12 max-w-[180px]",
};

const rasterBox: Record<keyof typeof sizeClasses, string> = {
  sm: "h-8 w-[112px]",
  md: "h-10 w-[140px]",
  marquee: "h-12 w-[168px]",
  lg: "h-12 w-[180px]",
};

function RasterMark({
  src,
  label,
  className,
  size,
}: {
  src: string;
  label: string;
  className?: string;
  size: keyof typeof sizeClasses;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0",
        rasterBox[size],
        className,
      )}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={
          size === "lg"
            ? "180px"
            : size === "marquee"
              ? "168px"
              : size === "md"
                ? "140px"
                : "112px"
        }
        className="object-contain object-center"
      />
    </div>
  );
}

function SimpleIconMark({
  icon,
  label,
  className,
  size,
}: {
  icon: SimpleIcon;
  label: string;
  className?: string;
  size: keyof typeof sizeClasses;
}) {
  const fill = `#${icon.hex}`;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      className={cn(sizeClasses[size], "w-auto shrink-0", className)}
    >
      <title>{label}</title>
      <path fill={fill} d={icon.path} />
    </svg>
  );
}

function WordmarkMark({
  markId,
  label,
  className,
  size,
}: {
  markId: BrandMarkId;
  label: string;
  className?: string;
  size: keyof typeof sizeClasses;
}) {
  const wm = BRAND_WORDMARKS[markId];
  if (!wm) return null;
  const fs = wm.lines.length > 1 ? (size === "lg" ? 9 : 8) : size === "lg" ? 13 : 11;
  const lineHeight = wm.lines.length > 1 ? (size === "lg" ? 12 : 10) : 0;
  const h = size === "lg" ? 52 : size === "md" ? 44 : 36;
  const w = size === "lg" ? 200 : size === "md" ? 168 : 140;
  const startY =
    wm.lines.length > 1
      ? h / 2 - ((wm.lines.length - 1) * lineHeight) / 2 + (size === "lg" ? 4 : 3)
      : h / 2 + (size === "lg" ? 5 : 4);

  return (
    <svg
      role="img"
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      className={cn(sizeClasses[size], "w-auto shrink-0", className)}
    >
      <title>{label}</title>
      {wm.lines.map((line, i) => (
        <text
          key={line}
          x={w / 2}
          y={startY + i * lineHeight}
          textAnchor="middle"
          fill={wm.fill}
          fontSize={fs}
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          {line}
        </text>
      ))}
    </svg>
  );
}

export function BrandMark({ markId, label, className, size = "md" }: BrandMarkProps) {
  const raster = BRAND_LOGO_SRC[markId];
  if (raster) {
    return (
      <RasterMark src={raster} label={label} className={className} size={size} />
    );
  }
  const icon = simpleById[markId];
  if (icon) {
    return (
      <SimpleIconMark icon={icon} label={label} className={className} size={size} />
    );
  }
  return (
    <WordmarkMark markId={markId} label={label} className={className} size={size} />
  );
}
