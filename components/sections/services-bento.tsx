import { SERVICES } from "@/lib/constants";
import { ServiceShowcaseCard } from "./service-showcase-card";

export function ServicesBento() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {SERVICES.map((service) => (
        <ServiceShowcaseCard
          key={service.slug}
          service={service}
          variant="minimal"
          layout="wide"
        />
      ))}
    </div>
  );
}
