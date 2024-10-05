import React, { useState } from 'react';
import './App.css';
import './styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { outerBusData } from './data/bus/outerLoopData';

function App() {
  const [showMarkers, setShowMarkers] = useState(true);
  const [showPolyline, setShowPolyline] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');

  const handleCheckboxChange = () => {
    setShowMarkers(!showMarkers);
    setShowPolyline(!showPolyline);
  };

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
    setIsNavOpen(false);
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Navigation */}
      <div className="navBar">
        <button
          className="hamburgerMenu"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>

        {isNavOpen && (
          <div className="sideNav">
            <button onClick={() => handleNavClick('SBU Bikes')}>SBU Bikes</button>
            <button onClick={() => handleNavClick('DoubleMap')}>DoubleMap</button>
            <button onClick={() => handleNavClick('Nutrislice')}>Nutrislice</button>
          </div>
        )}
      </div>

      {/* Map Container */}
      <MapContainer
        center={[40.915547526247074, -73.12272596217514]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showPolyline && (
          <Polyline
            positions={outerBusData.busRoute}
            color="green"
            weight={5}
          />
        )}

        {showMarkers && outerBusData.busStops.map((stop, index) => (
          <Marker key={index} position={stop.position} icon={outerBusData.outerLoopStopIcon}>
            <Popup>{stop.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Toggle Checkbox */}
      {selectedNav === 'DoubleMap' && (
        <div className="toggleCheckbox" style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}>
          <label>
            <input
              type="checkbox"
              checked={showMarkers}
              onChange={handleCheckboxChange}
            />
            {showMarkers ? "Hide Outer Bus" : "Show Outer Bus"}
          </label>
        </div>
      )}

    </div>
  );
}

export default App;