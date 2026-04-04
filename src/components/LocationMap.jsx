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
        html: `<div class="w-6 h-6 bg-red-600 border-[3px] border-white rounded-full shadow-lg"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = L.marker([location.lat, location.lng], { icon: markerIcon }).addTo(
        mapInstanceRef.current
      ).bindPopup(`
          <div class="p-1 min-w-[180px]">
            <h3 class="font-bold text-sm m-0 mb-1.5 text-[#1e3a5f]">${escapeHtml(location.name)}</h3>
            <p class="m-0 mb-0.5 text-gray-500 text-xs">${escapeHtml(location.address)}</p>
            <p class="m-0 mb-1.5 text-gray-500 text-xs">${escapeHtml(location.city)}, ${escapeHtml(location.state)} ${escapeHtml(location.zip)}</p>
            ${location.phone ? `<p class="m-0 text-red-600 font-semibold text-xs">${escapeHtml(location.phone)}</p>` : ''}
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
