import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../../assets/marker.png';
import diningHallLocations from '../../data/location/DiningHallLocation.json';
import { useToggleContext } from '../../context/ToggleContext';

const DiningHallMarker = () => {
  const { toggleStates } = useToggleContext();

  return (
    <>
      {diningHallLocations.map(
        (location, index) =>
          toggleStates[location.name] && (
            <Marker
              key={index}
              position={location.coords}
              icon={new L.Icon({
                iconUrl: markerIcon,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
              })}
            >
            </Marker>
          )
      )}
    </>
  );
};

export default DiningHallMarker;
