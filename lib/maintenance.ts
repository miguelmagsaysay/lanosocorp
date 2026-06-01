/** When true, all public routes show the under-maintenance page. */
export function isMaintenanceMode(): boolean {
  return process.env.MAINTENANCE_MODE === "false";
}
