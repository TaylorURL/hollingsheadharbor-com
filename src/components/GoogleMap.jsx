import { useEffect, useRef, useState } from 'react';

function GoogleMap({ locations, selectedLocation, onMarkerClick }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapError, setMapError] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timeoutId = null;

    const isGoogleMapsReady = () => {
      return !!(
        window.google &&
        window.google.maps &&
        window.google.maps.Map &&
        window.google.maps.LatLngBounds &&
        window.google.maps.Marker &&
        window.google.maps.InfoWindow
      );
    };

    const initMap = () => {
      if (!mapRef.current || !isMounted) return false;

      if (!isGoogleMapsReady()) {
        return false;
      }

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 5,
          center: { lat: 35.5, lng: -90 },
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }, { lightness: 17 }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 18 }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 16 }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#dedede' }, { lightness: 21 }],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
            },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [{ color: '#fefefe' }, { lightness: 20 }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
            },
          ],
        });

        mapInstanceRef.current = map;

        markersRef.current.forEach((marker) => marker.setMap(null));
        markersRef.current = [];

        const bounds = new window.google.maps.LatLngBounds();

        locations.forEach((location) => {
          const position = { lat: location.lat, lng: location.lng };
          bounds.extend(position);

          const marker = new window.google.maps.Marker({
            position,
            map,
            title: location.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: '#dc2626',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
            },
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="font-weight: bold; font-size: 16px; margin: 0 0 8px 0; color: #1e3a5f;">${location.name}</h3>
                <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${location.address}</p>
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${location.city}, ${location.state} ${location.zip}</p>
                ${location.phone ? `<p style="margin: 0; color: #dc2626; font-weight: 600; font-size: 14px;">${location.phone}</p>` : ''}
              </div>
            `,
          });

          marker.addListener('click', () => {
            markersRef.current.forEach((m) => {
              if (m.infoWindow) m.infoWindow.close();
            });
            infoWindow.open(map, marker);
            if (onMarkerClick) onMarkerClick(location);
          });

          marker.infoWindow = infoWindow;
          markersRef.current.push(marker);
        });

        if (locations.length > 0) {
          map.fitBounds(bounds);
          const listener = window.google.maps.event.addListener(map, 'idle', () => {
            if (map.getZoom() > 10) map.setZoom(10);
            window.google.maps.event.removeListener(listener);
          });
        }

        if (isMounted) {
          setMapLoaded(true);
        }
        return true;
      } catch (error) {
        console.error('Error initializing map:', error);
        if (isMounted) {
          setMapError(true);
        }
        return false;
      }
    };

    const handleGoogleMapsReady = () => {
      if (isMounted && !mapLoaded && !mapError) {
        setTimeout(() => {
          if (!initMap() && isMounted) {
            setMapError(true);
          }
        }, 100);
      }
    };

    if (window.googleMapsReady && isGoogleMapsReady()) {
      initMap();
    } else {
      window.addEventListener('google-maps-ready', handleGoogleMapsReady);

      timeoutId = setTimeout(() => {
        if (isMounted && !mapLoaded) {
          if (isGoogleMapsReady()) {
            initMap();
          } else {
            setMapError(true);
          }
        }
      }, 10000);
    }

    return () => {
      isMounted = false;
      window.removeEventListener('google-maps-ready', handleGoogleMapsReady);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [locations, onMarkerClick, mapLoaded, mapError]);

  useEffect(() => {
    if (selectedLocation && mapInstanceRef.current && mapLoaded) {
      const marker = markersRef.current.find((m) => m.getTitle() === selectedLocation.name);
      if (marker) {
        mapInstanceRef.current.panTo(marker.getPosition());
        mapInstanceRef.current.setZoom(12);
        markersRef.current.forEach((m) => {
          if (m.infoWindow) m.infoWindow.close();
        });
        if (marker.infoWindow) {
          marker.infoWindow.open(mapInstanceRef.current, marker);
        }
      }
    }
  }, [selectedLocation, mapLoaded]);

  if (mapError) {
    return (
      <div className="w-full h-full min-h-[400px] rounded-2xl bg-gray-100 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-blue-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Our Harbor Locations</h3>
        <p className="text-gray-500 text-sm max-w-xs mb-4">
          View our {locations.length} harbor locations across{' '}
          {[...new Set(locations.map((l) => l.state))].length} states below.
        </p>
        <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
          {[...new Set(locations.map((l) => l.state))].sort().map((state) => (
            <div key={state} className="bg-white rounded-xl p-3 text-center">
              <div className="text-lg font-black text-blue-800">{state}</div>
              <div className="text-gray-500 text-xs">
                {locations.filter((l) => l.state === state).length} locations
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-2xl" />;
}

export default GoogleMap;
