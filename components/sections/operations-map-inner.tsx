"use client";

import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import {
  OPERATION_LOCATIONS,
  PHILIPPINES_MAP_CENTER,
} from "@/lib/operations-locations";
import "leaflet/dist/leaflet.css";

const pinIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FitPhilippinesBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      OPERATION_LOCATIONS.map((loc) => [loc.lat, loc.lng]),
    );
    map.fitBounds(bounds, { padding: [36, 36] });
  }, [map]);

  return null;
}

export default function OperationsMapInner() {
  return (
    <div className="operations-map relative z-0 h-[400px] w-full overflow-hidden rounded-xl border border-navy/10 bg-stone-100 sm:h-[460px] lg:h-[520px]">
      <MapContainer
        center={[PHILIPPINES_MAP_CENTER.lat, PHILIPPINES_MAP_CENTER.lng]}
        zoom={6}
        scrollWheelZoom={false}
        className="h-full w-full"
        aria-label="Map of Lanoso operation locations across the Philippines"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitPhilippinesBounds />
        {OPERATION_LOCATIONS.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={pinIcon}
            title={`${loc.title} — ${loc.subtitle}`}
          >
            <Popup>
              <p className="text-sm font-medium text-navy">
                {loc.title}
              </p>
              <p className="text-xs text-navy/70">{loc.subtitle}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
