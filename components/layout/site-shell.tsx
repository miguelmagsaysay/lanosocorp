import { isMaintenanceMode } from "@/lib/maintenance";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { MaintenanceBanner } from "./maintenance-banner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const maintenance = isMaintenanceMode();

  return (
    <>
      <Navbar />
      {maintenance ? <MaintenanceBanner /> : null}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
