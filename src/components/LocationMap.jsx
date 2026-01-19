import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function LocationMap({ locations, selectedLocation, onMarkerClick }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current, {
      center: [35.5, -90],
      zoom: 5,
      scrollWheelZoom: true
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current) return

    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    const bounds = L.latLngBounds([])

    locations.forEach(location => {
      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          width: 24px;
          height: 24px;
          background-color: #dc2626;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })

      const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup(`
          <div style="padding: 4px; min-width: 180px;">
            <h3 style="font-weight: bold; font-size: 14px; margin: 0 0 6px 0; color: #1e3a5f;">${location.name}</h3>
            <p style="margin: 0 0 2px 0; color: #666; font-size: 12px;">${location.address}</p>
            <p style="margin: 0 0 6px 0; color: #666; font-size: 12px;">${location.city}, ${location.state} ${location.zip}</p>
            ${location.phone ? `<p style="margin: 0; color: #dc2626; font-weight: 600; font-size: 12px;">${location.phone}</p>` : ''}
          </div>
        `)

      marker.on('click', () => {
        if (onMarkerClick) onMarkerClick(location)
      })

      markersRef.current.push(marker)
      bounds.extend([location.lat, location.lng])
    })

    if (locations.length > 0) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 })
    }
  }, [locations, onMarkerClick])

  useEffect(() => {
    if (selectedLocation && mapInstanceRef.current) {
      const marker = markersRef.current.find(m => {
        const latLng = m.getLatLng()
        return latLng.lat === selectedLocation.lat && latLng.lng === selectedLocation.lng
      })
      
      if (marker) {
        mapInstanceRef.current.setView([selectedLocation.lat, selectedLocation.lng], 12)
        marker.openPopup()
      }
    }
  }, [selectedLocation])

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-2xl"
      style={{ minHeight: '400px' }}
    />
  )
}

export default LocationMap