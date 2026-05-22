import { MARQUEE_BRANDS } from "@/lib/constants";
import { MotionSection } from "./motion-section";
import { BrandMark } from "@/components/brands/brand-mark";

function MarqueeRow() {
  const doubled = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];
  return (
    <div className="relative overflow-hidden py-4">
      <div className="marquee flex w-max items-center gap-10 md:gap-14">
        {doubled.map((b, idx) => (
          <div
            key={`${b.name}-${idx}`}
            className="flex min-w-[168px] items-center justify-center px-5 py-4 md:min-w-[202px]"
          >
            <BrandMark markId={b.markId} label={b.name} size="marquee" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandStrip() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <MotionSection>
        <MarqueeRow />
      </MotionSection>
    </section>
  );
}
