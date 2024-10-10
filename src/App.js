import React, { useState } from 'react';
import './App.css';
import './styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { outerLoopData } from './data/bus/outerLoopData';
import { innerLoopData } from './data/bus/innerLoopData';
import { hospitalRouteData } from './data/bus/hospitalRouteData';

function App() {
  const [showOuterMarkers, setShowOuterMarkers] = useState(false);
  const [showOuterPolyline, setShowOuterPolyline] = useState(false);
  const [showInnerMarkers, setShowInnerMarkers] = useState(false);
  const [showInnerPolyline, setShowInnerPolyline] = useState(false);
  const [showHospitalMarkers, setShowHospitalMarkers] = useState(false);
  const [showHospitalPolyline, setShowHospitalPolyline] = useState(false);
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

  const handleHospitalCheckboxChange = () => {
	setShowHospitalMarkers(!showHospitalMarkers);
	setShowHospitalPolyline(!showHospitalPolyline);
  };

  const handleNavClick = (nav) => {
	setSelectedNav(nav);
  };

  // Back to main menu
  const handleBackClick = () => {
	setSelectedNav(''); 
  };

  // Closes the menu
  const closeNav = () => {
	setIsNavOpen(false); 
	setSelectedNav(''); 
  };

  return (
	<div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
	  {/* Navigation */}
	  <div className="navBar">
		<button className="hamburgerMenu" onClick={() => setIsNavOpen(!isNavOpen)}>
		  ☰
		</button>

		<div className={`sideNav ${isNavOpen ? 'open' : ''}`}>
		  <button className="backButton" onClick={closeNav}>← Close</button>

		  {selectedNav === '' ? (
			<>
			  <button className="navButton" onClick={() => handleNavClick('SBU Bikes')}>SBU Bikes</button>
			  <button className="navButton" onClick={() => handleNavClick('DoubleMap')}>DoubleMap</button>
			  <button className="navButton" onClick={() => handleNavClick('Nutrislice')}>Nutrislice</button>
			</>
		  ) : (
			<div className="checkboxMenu">

				{selectedNav === 'DoubleMap' && (
				<div className="checkboxMenu">
					<button className="backButton" onClick={handleBackClick}>← Back</button>

					<div className="toggleButton">
					<div
						className={`toggleSwitch ${showOuterMarkers ? 'on' : ''}`}
						onClick={handleOuterCheckboxChange}
					/>
					<span>Outer Bus</span>
					</div>

					<div className="toggleButton">
					<div
						className={`toggleSwitch ${showInnerMarkers ? 'on' : ''}`}
						onClick={handleInnerCheckboxChange}
					/>
					<span>Inner Bus</span>
					</div>

					<div className="toggleButton">
					<div
						className={`toggleSwitch ${showHospitalMarkers ? 'on' : ''}`}
						onClick={handleHospitalCheckboxChange}
					/>
					<span>Hospital Bus</span>
					</div>
				</div>
				)}

			  {selectedNav === 'SBU Bikes' && <p>Content for SBU Bikes</p>}
			  {selectedNav === 'Nutrislice' && <p>Content for Nutrislice</p>}
			</div>
		  )}
		</div>
	  </div>

	  {/* Map Container */}
	  <MapContainer
		center={[40.915547526247074, -73.12272596217514]}
		zoom={15}
		style={{ height: '100%', width: '100%' }}
	  >
		<TileLayer
		  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>

		{/* Outer Loop Routes */}
		{showOuterPolyline && (
		  <Polyline
			positions={outerLoopData.busRoute}
			color="green"
			weight={5}
		  />
		)}

		{/* Outer Loop Stops */}
		{showOuterMarkers && outerLoopData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={outerLoopData.outerLoopStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

		{/* Inner Loop Routes */}
		{showInnerPolyline && (
		  <Polyline
			positions={innerLoopData.busRoute}
			color="orange"
			weight={5}
		  />
		)}

		{/* Inner Loop Stops */}
		{showInnerMarkers && innerLoopData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={innerLoopData.innerLoopStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

		{/* Hospital Routes */}
		{showHospitalPolyline && (
		  <Polyline
			positions={hospitalRouteData.busRoute}
			color="purple"
			weight={5}
		  />
		)}

		{/* Hospital Stops */}
		{showHospitalMarkers && hospitalRouteData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={hospitalRouteData.hospitalRouteStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}
	  </MapContainer>
	</div>
  );
}

export default App;
