/** When true, a centered maintenance card is shown; the rest of the site stays usable. */
export function isMaintenanceMode(): boolean {
  return process.env.MAINTENANCE_MODE === "true";
}
