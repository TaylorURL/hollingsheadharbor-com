import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const COORD_EPSILON = 1e-6;

function coordsMatch(a, b) {
  return Math.abs(a.lat - b.lat) < COORD_EPSILON && Math.abs(a.lng - b.lng) < COORD_EPSILON;
}

function LocationMap({ locations, selectedLocation, onMarkerClick }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [35.5, -90],
      zoom: 5,
      scrollWheelZoom: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '\u00a9 OpenStreetMap contributors',
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const bounds = L.latLngBounds([]);

    locations.forEach((location) => {
      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="width:22px;height:22px;border-radius:9999px;background:#dc2626;border:3px solid #ffffff;box-shadow:0 6px 14px -4px rgba(15,23,42,0.45);"></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker([location.lat, location.lng], { icon: markerIcon }).addTo(
        mapInstanceRef.current
      ).bindPopup(`
          <div style="min-width:200px;font-family:Inter,system-ui,sans-serif;">
            <div style="font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:15px;letter-spacing:-0.01em;color:#0f172a;margin-bottom:6px;">${escapeHtml(location.name)}</div>
            <div style="color:#6b7280;font-size:12px;line-height:1.45;">${escapeHtml(location.address)}<br/>${escapeHtml(location.city)}, ${escapeHtml(location.state)} ${escapeHtml(location.zip)}</div>
            ${location.phone ? `<a href="tel:${escapeHtml(location.phone.replace(/[^\d]/g, ''))}" style="display:inline-block;margin-top:8px;color:#dc2626;font-weight:600;font-size:12px;text-decoration:none;">${escapeHtml(location.phone)}</a>` : ''}
          </div>
        `);

      marker.on('click', () => {
        if (onMarkerClick) onMarkerClick(location);
      });

      markersRef.current.push(marker);
      bounds.extend([location.lat, location.lng]);
    });

    if (locations.length > 0) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
    }
  }, [locations, onMarkerClick]);

  useEffect(() => {
    if (selectedLocation && mapInstanceRef.current) {
      const marker = markersRef.current.find((m) => {
        const latLng = m.getLatLng();
        return coordsMatch(latLng, selectedLocation);
      });

      if (marker) {
        mapInstanceRef.current.setView([selectedLocation.lat, selectedLocation.lng], 12);
        marker.openPopup();
      }
    }
  }, [selectedLocation]);

  return <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-2xl" />;
}

export default LocationMap;
