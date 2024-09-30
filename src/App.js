import './App.css';
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import LocationMarker from './components/LocationMarker';
import { outerBusStopIcon } from './utils/icons';

function RightClickCoordinates() {
  const [position, setPosition] = useState(null);

  useMapEvents({
    contextmenu(e) {
      setPosition(e.latlng); 
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        {position.lat}, {position.lng}
      </Popup>
    </Marker>
  );
}

function App() {
  const [showMarkers, setShowMarkers] = useState(true);
  const [showPolyline, setShowPolyline] = useState(true); 

  // Toggle outer loop visibility
  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
    setShowPolyline(!showPolyline); 
  };

  // Waypoints representing a curved path between bus stops, following roads
  const busRouteCoordinates = [
    [40.91429178126743, -73.12473791877228], // SAC
    [40.91431937637802, -73.12506582200677], // Waypoint on road
    [40.91413051493661, -73.12521728800554], // Waypoint on road
    [40.91404768685157, -73.12543988227846], // Waypoint on road
    [40.9134150835656, -73.12918902436843], // Kelly
    [40.91805457231416, -73.12942010636748], // Gym Road East
    [40.92287220129566, -73.12592373008697], // Lot 5B
    [40.92137844846457, -73.12751511809915], // LIRR
    [40.920519896659734, -73.1184852120179], // Benedict
    [40.91905903248162, -73.12118400086071], // H Quad
    [40.918211992558476, -73.11814033017524], // M & H
    [40.91413449887355, -73.11921606483818], // Adminstration Building
    [40.91096382303363, -73.11916865510916], // Life Sciences West
    [40.91037848484324, -73.12411675994503], // Roth/Tabler East
    [40.91105340881635, -73.12595430963177], // Tabler Steps East
    [40.91191488425261, -73.12762118320369], // Roosevelt East
    [40.91113456483082, -73.13132060361556], // Greeley
    [40.91178912213096, -73.1344340068163], // West E
    [40.91298328524094, -73.13593527319979], // West G
    [40.9124405755571, -73.13337901698084], // West C
    [40.91298843080553, -73.12948816313441], // Nobel
    [40.91429178126743, -73.12473791877228],  // SAC
  ];

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <MapContainer
        center={[40.915547526247074, -73.12272596217514]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />

        {/* Add polyline for bus route, conditionally rendered */}
        {showPolyline && (
          <Polyline 
            positions={busRouteCoordinates} 
            color="green"
            weight={5} 
          />
        )}

        {/* Right-click coordinates */}
        <RightClickCoordinates />

        {showMarkers && (
          <>
            <Marker position={[40.91429178126743, -73.12473791877228]} icon={outerBusStopIcon}>
              <Popup>SAC</Popup>
            </Marker>

            <Marker position={[40.9134150835656, -73.12918902436843]} icon={outerBusStopIcon}>
              <Popup>Kelly</Popup>
            </Marker>

            <Marker position={[40.91805457231416, -73.12942010636748]} icon={outerBusStopIcon}>
              <Popup>Gym Road East</Popup>
            </Marker>

            <Marker position={[40.92287220129566, -73.12592373008697]} icon={outerBusStopIcon}>
              <Popup>Lot 5B</Popup>
            </Marker>

            <Marker position={[40.92137844846457, -73.12751511809915]} icon={outerBusStopIcon}>
              <Popup>LIRR</Popup>
            </Marker>

            <Marker position={[40.920519896659734, -73.11848521201797]} icon={outerBusStopIcon}>
              <Popup>Benedict</Popup>
            </Marker>

            <Marker position={[40.91905903248162, -73.12118400086071]} icon={outerBusStopIcon}>
              <Popup>H Quad</Popup>
            </Marker>

            <Marker position={[40.918211992558476, -73.11814033017524]} icon={outerBusStopIcon}>
              <Popup>M & H</Popup>
            </Marker>

            <Marker position={[40.91413449887355, -73.11921606483818]} icon={outerBusStopIcon}>
              <Popup>Administration Building</Popup>
            </Marker>

            <Marker position={[40.91096382303363, -73.11916865510916]} icon={outerBusStopIcon}>
              <Popup>Life Sciences West</Popup>
            </Marker>

            <Marker position={[40.91037848484324, -73.12411675994503]} icon={outerBusStopIcon}>
              <Popup>Roth/Tabler East</Popup>
            </Marker>

            <Marker position={[40.91105340881635, -73.12595430963177]} icon={outerBusStopIcon}>
              <Popup>Tabler Steps East</Popup>
            </Marker>
            
            <Marker position={[40.91191488425261, -73.12762118320369]} icon={outerBusStopIcon}>
              <Popup>Roosevelt East</Popup>
            </Marker>

            <Marker position={[40.91113456483082, -73.13132060361556]} icon={outerBusStopIcon}>
              <Popup>Greeley</Popup>
            </Marker>

            <Marker position={[40.91178912213096, -73.1344340068163]} icon={outerBusStopIcon}>
              <Popup>West E</Popup>
            </Marker>

            <Marker position={[40.91298328524094, -73.13593527319979]} icon={outerBusStopIcon}>
              <Popup>West G</Popup>
            </Marker>

            <Marker position={[40.9124405755571, -73.13337901698084]} icon={outerBusStopIcon}>
              <Popup>West C</Popup>
            </Marker>

            <Marker position={[40.91298843080553, -73.12948816313441]} icon={outerBusStopIcon}>
              <Popup>Nobel</Popup>
            </Marker>
          </>
        )}
      </MapContainer>

      <button
        onClick={toggleMarkers}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        {showMarkers ? "Hide Outer Bus" : "Show Outer Bus"}
      </button>
    </div>
  );
}

export default App;
