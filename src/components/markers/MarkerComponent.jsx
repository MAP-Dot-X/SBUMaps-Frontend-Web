import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../../assets/marker.png';
import { useToggleContext } from '../../context/ToggleContext';

const MarkerComponent = ({ locations }) => {
  const { toggleStates } = useToggleContext();

  return (
    <>
      {locations.map(
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
              <Popup>{location.name}</Popup>
            </Marker>
          )
      )}
    </>
  );
};

export default MarkerComponent;
