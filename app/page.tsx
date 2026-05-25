import { isMaintenanceMode } from "@/lib/maintenance";
import { MaintenancePage } from "@/components/pages/maintenance-page";
import { HomePage } from "@/components/pages/home-page";

export default function Page() {
  if (isMaintenanceMode()) {
    return <MaintenancePage />;
  }

  return <HomePage />;
}
