import { SERVICES } from "@/lib/constants";
import { ServiceShowcaseCard } from "./service-showcase-card";

export function ServicesBento() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-5">
      {SERVICES.map((service) => (
        <div
          key={service.slug}
          className="w-full sm:w-[calc(50%-0.625rem)]"
        >
          <ServiceShowcaseCard
            service={service}
            variant="minimal"
            layout="wide"
          />
        </div>
      ))}
    </div>
  );
}
