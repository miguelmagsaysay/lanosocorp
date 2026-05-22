import {
  Anchor,
  Cpu,
  Gauge,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { BrandItem, MarqueeBrand, NavLink, ServiceItem } from "@/types";

export const SITE_URL = "https://lanosocorp.com";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_SERVICES = [
  "Electrical Solutions",
  "Automation Systems",
  "Instrumentation & Calibration",
  "Engine Room Machinery Support",
];

export const CONTACT_EMAIL = "info@lanosocorp.com";
export const PHONE_GLOBE = "0945 549 6162";
export const PHONE_SMART = "0961 074 4114";
export const PHONE_PRESIDENT = "0915 764 8514";
/** Globe / WhatsApp / Viber — digits only, country code without + (wa.me / viber). */
export const PHONE_GLOBE_E164 = "639455496162";
export const ADDRESS_LINE =
  "Blk31 Lot18 P2 A2 BRGY Dagat-dagatan, NBBS Navotas City 1409 Philippines";

/** Google Maps → Share → “Embed a map” iframe `src` (optional; improves pin accuracy). */
export function getGoogleMapsEmbedSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim();
  if (fromEnv) return fromEnv;
  const q = encodeURIComponent(ADDRESS_LINE);
  return `https://www.google.com/maps?q=${q}&output=embed&z=16&hl=en`;
}

export function getGoogleMapsExternalUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
}

const serviceIcons: Record<string, LucideIcon> = {
  electrical: Zap,
  automation: Cpu,
  instrumentation: Gauge,
  "engine-room": Anchor,
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "electrical",
    title: "Electrical Solutions",
    shortDescription:
      "Vessel electrical systems, power distribution, and fault diagnosis aligned to classification requirements.",
    description:
      "Full-scope electrical integration for new builds and retrofits, from load analysis through commissioning.",
    icon: serviceIcons.electrical,
    imageSrc: "/images/technical-work.jpg",
    imageAlt:
      "Marine electricians working on vessel electrical systems and switchboards.",
    bullets: [
      "Main and emergency switchboard support, shore connection, and harmonics review",
      "Cable routing, termination quality, and insulation resistance trending",
      "Fault isolation, protective device coordination, and arc-flash risk awareness",
      "Documentation packages suitable for PSC, class, and owner technical review",
    ],
  },
  {
    slug: "automation",
    title: "Automation Systems",
    shortDescription:
      "PLC/SCADA integration, bridge automation, and alarm management for operational clarity.",
    description:
      "We unify control narratives across OEM equipment so crews see one coherent system state.",
    icon: serviceIcons.automation,
    imageSrc: "/images/hero-ship.jpg",
    imageAlt:
      "Commercial vessel at sea — bridge and automation integration context.",
    bullets: [
      "PLC/SCADA integration with marine-grade I/O and redundant paths where required",
      "Bridge automation: mode management, interlocks, and watchkeeper workflows",
      "Alarm rationalization, shelving policies, and event historian configuration",
      "Cyber-conscious segmentation guidance alongside physical segregation",
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation & Calibration",
    shortDescription:
      "Sensor calibration, pressure and temperature loops, and compliance testing traceable to standards.",
    description:
      "Traceable calibration workflows that stand up to audits and handover scrutiny.",
    icon: serviceIcons.instrumentation,
    imageSrc: "/images/about-operations.jpg",
    imageAlt:
      "Marine technicians performing instrumentation checks aboard a vessel.",
    bullets: [
      "Pressure, temperature, level, and flow loops verified against process limits",
      "Calibration certificates with as-found/as-left data retained for surveys",
      "Tank monitoring and cargo-related sensors aligned to operational manuals",
      "Witness testing coordination with class and OEM representatives when required",
    ],
  },
  {
    slug: "engine-room",
    title: "Engine Room Machinery Support",
    shortDescription:
      "Preventive maintenance, machinery overhaul planning, and spare parts coordination.",
    description:
      "Hands-on engine room support that keeps propulsion and auxiliaries within design margins.",
    icon: serviceIcons["engine-room"],
    imageSrc: "/images/engine-room.jpg",
    imageAlt:
      "Engine room machinery and propulsion systems aboard a commercial vessel.",
    bullets: [
      "Preventive maintenance scheduling aligned to OEM bulletins and running hours",
      "Major overhaul scoping, lift plans, and alignment checks",
      "Spare parts criticality analysis and logistics for remote mobilizations",
      "Sea trial support for vibration, temperature, and performance acceptance",
    ],
  },
];

export const MARQUEE_BRANDS: MarqueeBrand[] = [
  { name: "Garmin", markId: "garmin" },
  { name: "Simrad", markId: "simrad" },
  { name: "Raymarine", markId: "raymarine" },
  { name: "Yanmar", markId: "yanmar" },
];

export const SHOWCASE_BRANDS: BrandItem[] = [
  {
    name: "Garmin",
    markId: "garmin",
    category: "Marine Navigation & GPS",
    description: "Integrated GNSS, charting, and situational awareness suites.",
  },
  {
    name: "B&G",
    markId: "bandg",
    category: "Sailing Instruments & Autopilot",
    description: "Performance sailing instrumentation and intelligent autopilot control.",
  },
  {
    name: "Simrad",
    markId: "simrad",
    category: "Commercial Marine Electronics",
    description: "Professional radar, sonar, and bridge displays for demanding operations.",
  },
  {
    name: "Furuno",
    markId: "furuno",
    category: "Radar & Navigation Systems",
    description: "Long-range radar, ECDIS-class navigation, and sensor fusion platforms.",
  },
  {
    name: "Raymarine",
    markId: "raymarine",
    category: "Marine Electronics",
    description: "Multifunction displays, thermal imaging, and integrated helm ecosystems.",
  },
  {
    name: "Icom",
    markId: "icom",
    category: "Marine VHF & Communications",
    description: "GMDSS-capable radios and onboard communications hardened for salt air.",
  },
  {
    name: "Yanmar",
    markId: "yanmar",
    category: "Marine Diesel Engines",
    description: "Propulsion and auxiliary prime movers with global service footprints.",
  },
  {
    name: "Caterpillar (CAT)",
    markId: "caterpillar",
    category: "Marine Propulsion & Power",
    description: "Medium- and high-speed diesel power for commercial and offshore vessels.",
  },
  {
    name: "ABB",
    markId: "abb",
    category: "Marine Automation & Drives",
    description: "Electric propulsion, drives, and power management for efficient ships.",
  },
  {
    name: "Kongsberg",
    markId: "kongsberg",
    category: "Integrated Bridge Systems",
    description: "Dynamic positioning, automation, and decision-support for complex bridges.",
  },
  {
    name: "Wärtsilä",
    markId: "wartsila",
    category: "Ship Power & Automation",
    description: "Propulsion, power plant, and voyage optimization for large fleets.",
  },
  {
    name: "Parker Hannifin",
    markId: "parker",
    category: "Hydraulics & Motion Control",
    description: "Marine hydraulics, motion control, and fluid power subsystems.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
