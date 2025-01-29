// components/MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DiningHallMarker from "./markers/DiningHallMarker"; 
import { useToggleStates } from '../hooks/useToggleStates';
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [toggleStates] = useToggleStates(); // Get the toggle states from the hook

  return (
    <MapContainer
      center={[40.915547526247074, -73.12272596217514]}
      zoom={16}
      style={{ height: "100vh", width: "100vw" }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=d3uIpCWUCDWUe0yLzTJp"
      />
      <DiningHallMarker />
    </MapContainer>
  );
};

export default MapComponent;
