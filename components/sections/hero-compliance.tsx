import { Check } from "lucide-react";

const COMPLIANCE_ITEMS = [
  { title: "IMO Aligned", subtitle: "International Maritime Org." },
  { title: "SOLAS Aligned", subtitle: "Safety of Life at Sea" },
  { title: "MARINA Compliant", subtitle: "Maritime Industry Authority" },
] as const;

export function HeroCompliance() {
  return (
    <section
      className="border-b border-navy/10 bg-white"
      aria-label="Compliance and certifications"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-7 sm:py-9 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <ul className="mt-6 grid w-full list-none grid-cols-2 gap-x-5 gap-y-6 sm:mt-7 md:mt-8 md:flex md:flex-wrap md:items-start md:justify-center md:gap-x-12 md:gap-y-0 lg:gap-x-16">
          {COMPLIANCE_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex shrink-0 items-start gap-3.5 px-0.5 md:px-2 [&:nth-child(3)]:col-span-2 [&:nth-child(3)]:max-w-[15.5rem] [&:nth-child(3)]:justify-self-center md:col-auto md:max-w-none md:justify-self-auto"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 sm:h-7 sm:w-7">
                <Check
                  className="h-3.5 w-3.5 text-orange sm:h-4 sm:w-4"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </span>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-[13px] font-semibold leading-snug text-navy sm:text-sm">
                  {item.title}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-navy/55 sm:text-xs">
                  {item.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
