import {
  Building2,
  Church,
  Landmark,
  MapPin,
  Palmtree,
  Ship,
} from "lucide-react";
import { MotionSection } from "./motion-section";
import { OperationsMap } from "./operations-map";

const regions = [
  {
    title: "Metro Manila",
    subtitle: "Head Office",
    icon: Building2,
  },
  {
    title: "Region VI",
    subtitle: "Western Visayas",
    icon: Church,
  },
  {
    title: "Region VII",
    subtitle: "Central Visayas",
    icon: Landmark,
  },
  {
    title: "Region VIII",
    subtitle: "Eastern Visayas",
    icon: Landmark,
  },
] as const;

const mindanao = [
  { city: "Zamboanga", region: "Western Mindanao" },
  { city: "Cagayan de Oro", region: "Northern Mindanao" },
  { city: "General Santos", region: "Southern Mindanao" },
] as const;

function IconRing({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-navy text-navy">
      {children}
    </span>
  );
}

export function OperationsSection() {
  return (
    <section
      id="operations"
      className="operations-panel relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 maritime-waves opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-navy-dark/8 sm:h-80 sm:w-80" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <MotionSection>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              Our Operations
            </h2>
            <div className="mt-3 h-1 w-14 bg-orange" aria-hidden />
            <p className="mt-4 text-sm italic text-navy/75 sm:text-base">
              Proudly serving clients across the Philippines
            </p>

            <ul className="mt-10 space-y-8">
              {regions.map((r) => {
                const Icon = r.icon;
                return (
                  <li key={r.title} className="flex gap-4">
                    <IconRing>
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </IconRing>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                        {r.title}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-orange">
                        {r.subtitle}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 rounded-2xl border border-navy/10 bg-stone-50/80 p-6">
              <div className="flex items-start gap-3">
                <IconRing>
                  <Palmtree className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </IconRing>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                    Areas of Mindanao
                  </p>
                  <ul className="mt-4 space-y-3">
                    {mindanao.map((m) => (
                      <li key={m.city} className="flex gap-2 text-sm">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-orange"
                          aria-hidden
                        />
                        <span>
                          <span className="font-bold text-navy">{m.city}</span>
                          <span className="text-navy/70"> / {m.region}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-10 flex gap-3 text-sm leading-relaxed text-navy">
              <IconRing>
                <Ship className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </IconRing>
              <span>
                <strong className="font-semibold text-navy">
                  Nationwide presence.
                </strong>{" "}
                Ready to support vessel operations wherever they are.
              </span>
            </p>
          </MotionSection>

          <MotionSection className="lg:sticky lg:top-28">
            <OperationsMap />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
