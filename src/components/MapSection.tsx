import { useEffect, useRef } from "react";
import L from "leaflet";

interface MapSectionProps {
  lat: number;
  lng: number;
}

export default function MapSection({ lat, lng }: MapSectionProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([lat, lng], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([lat, lng], 13);
      L.marker([lat, lng]).addTo(mapRef.current);
    }
  }, [lat, lng]);

  return <section id="map" className="map" />;
}
