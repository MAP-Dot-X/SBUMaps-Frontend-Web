import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerComponent from "./markers/MarkerComponent"; 
import diningHallLocations from '../data/location/DiningHallLocation.json';
import affilateDiningLocations from '../data/location/AffiliateDiningLocation.json'
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
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
      <MarkerComponent locations={diningHallLocations} />
      <MarkerComponent locations={affilateDiningLocations} />
    </MapContainer>
  );
};

export default MapComponent;
