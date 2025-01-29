// components/LocationMarker.jsx
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../assets/marker.png';

const LocationMarker = ({ name, coords }) => {
  return (
    <Marker position={coords} icon={new L.Icon({ iconUrl: markerIcon, iconSize: [32, 32], iconAnchor: [16, 32] })}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default LocationMarker;
