export type OperationLocation = {
  id: string;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
};

/** Regional hubs — approximate centers for map pins. */
export const OPERATION_LOCATIONS: OperationLocation[] = [
  {
    id: "manila",
    title: "Metro Manila",
    subtitle: "Head Office",
    lat: 14.6548,
    lng: 120.9436,
  },
  {
    id: "region-vi",
    title: "Region VI",
    subtitle: "Western Visayas",
    lat: 10.7202,
    lng: 122.5621,
  },
  {
    id: "region-vii",
    title: "Region VII",
    subtitle: "Central Visayas",
    lat: 10.3157,
    lng: 123.8854,
  },
  {
    id: "region-viii",
    title: "Region VIII",
    subtitle: "Eastern Visayas",
    lat: 11.2442,
    lng: 125.0039,
  },
  {
    id: "zamboanga",
    title: "Zamboanga",
    subtitle: "Western Mindanao",
    lat: 6.9214,
    lng: 122.079,
  },
  {
    id: "cdo",
    title: "Cagayan de Oro",
    subtitle: "Northern Mindanao",
    lat: 8.4542,
    lng: 124.6319,
  },
  {
    id: "gensan",
    title: "General Santos",
    subtitle: "Southern Mindanao",
    lat: 6.1128,
    lng: 125.1717,
  },
];

export const PHILIPPINES_MAP_CENTER = { lat: 12.2, lng: 122.0 };

export function getOperationLocationOsmUrl(loc: OperationLocation): string {
  return `https://www.openstreetmap.org/?mlat=${loc.lat}&mlon=${loc.lng}#map=8/${loc.lat}/${loc.lng}`;
}
