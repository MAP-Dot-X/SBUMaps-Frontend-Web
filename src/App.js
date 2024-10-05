import React, { useState } from 'react';
import './App.css';
import './styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { outerLoopData } from './data/bus/outerLoopData';
import { innerLoopData } from './data/bus/innerLoopData';

function App() {
  const [showOuterMarkers, setShowOuterMarkers] = useState(false);
  const [showOuterPolyline, setShowOuterPolyline] = useState(false);
  const [showInnerMarkers, setShowInnerMarkers] = useState(false);
  const [showInnerPolyline, setShowInnerPolyline] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');

  const handleOuterCheckboxChange = () => {
	setShowOuterMarkers(!showOuterMarkers);
	setShowOuterPolyline(!showOuterPolyline);
  };

  const handleInnerCheckboxChange = () => {
	setShowInnerMarkers(!showInnerMarkers);
	setShowInnerPolyline(!showInnerPolyline);
  };

  const handleNavClick = (nav) => {
	setSelectedNav(nav);
	setIsNavOpen(false);
  };

  return (
	<div style={{ position: "relative", height: "100vh", width: "100vw" }}>
	  {/* Toggle Checkboxes */}
	  {selectedNav === 'DoubleMap' && (
		<div className="toggleCheckbox">
		  <label>
			<input
			  type="checkbox"
			  checked={showOuterMarkers}
			  onChange={handleOuterCheckboxChange}
			/>
			{showOuterMarkers ? "Hide Outer Bus" : "Show Outer Bus"}
		  </label>

		  {/* Inner Loop Toggle */}
		  <label>
			<input
			  type="checkbox"
			  checked={showInnerMarkers}
			  onChange={handleInnerCheckboxChange}
			/>
			{showInnerMarkers ? "Hide Inner Bus" : "Show Inner Bus"}
		  </label>
		</div>
	  )}

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
			<button className="navButton" onClick={() => handleNavClick('SBU Bikes')}>SBU Bikes</button>
			<button className="navButton" onClick={() => handleNavClick('DoubleMap')}>DoubleMap</button>
			<button className="navButton" onClick={() => handleNavClick('Nutrislice')}>Nutrislice</button>
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

		{showOuterPolyline && (
		  <Polyline
			positions={outerLoopData.busRoute}
			color="green"
			weight={5}
		  />
		)}

		{showOuterMarkers && outerLoopData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={outerLoopData.outerLoopStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

		{showInnerPolyline && (
		  <Polyline
			positions={innerLoopData.busRoute}
			color="orange"
			weight={5}
		  />
		)}

		{showInnerMarkers && innerLoopData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={innerLoopData.innerLoopStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}
	  </MapContainer>
	</div>
  );
}

export default App;
