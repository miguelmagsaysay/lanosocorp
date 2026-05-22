import type { BrandMarkId } from "@/types";

/** Official raster logos in `public/images` (used by `BrandMark` before SVG fallbacks). */
export const BRAND_LOGO_SRC: Partial<Record<BrandMarkId, string>> = {
  garmin: "/images/garmin-logo.png",
  simrad: "/images/simrad-logo.png",
  raymarine: "/images/raymarine-logo.png",
  yanmar: "/images/yanmar-logo.png",
};

/** Text-only marks: brand color on transparent (no filled tile). */
export const BRAND_WORDMARKS: Partial<
  Record<BrandMarkId, { lines: string[]; fill: string }>
> = {
  abb: { lines: ["ABB"], fill: "#FF000F" },
  bandg: { lines: ["B&G"], fill: "#003057" },
  furuno: { lines: ["FURUNO"], fill: "#00529B" },
  icom: { lines: ["ICOM"], fill: "#003893" },
  kongsberg: { lines: ["KONGSBERG"], fill: "#005691" },
  wartsila: { lines: ["WÄRTSILÄ"], fill: "#0066B3" },
  parker: { lines: ["PARKER", "HANNIFIN"], fill: "#1A472A" },
};
