import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { locationIcon } from '../utils/icons';  

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        map.setView([latitude, longitude], 16);
      },
      () => {
        alert('Could not get your location');
      }
    );
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={locationIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
