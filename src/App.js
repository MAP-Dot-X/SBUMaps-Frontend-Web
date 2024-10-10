import React, { useState } from 'react';
import './App.css';
import './styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { outerLoopData } from './data/bus/outerLoopData';
import { innerLoopData } from './data/bus/innerLoopData';
import { hospitalRouteData } from './data/bus/hospitalRouteData';
import { expressEastData } from './data/bus/expressEastData';
import { expressWestData } from './data/bus/expressWestData';
import { railroadData } from './data/bus/railroadData';

function App() {
  const [showOuterMarkers, setShowOuterMarkers] = useState(false);
  const [showOuterPolyline, setShowOuterPolyline] = useState(false);
  const [showInnerMarkers, setShowInnerMarkers] = useState(false);
  const [showInnerPolyline, setShowInnerPolyline] = useState(false);
  const [showHospitalMarkers, setShowHospitalMarkers] = useState(false);
  const [showHospitalPolyline, setShowHospitalPolyline] = useState(false);
  const [showExpressEastMarkers, setShowExpressEastMarkers] = useState(false);
  const [showExpressEastPolyline, setShowExpressEastPolyline] = useState(false);
  const [showExpressWestMarkers, setShowExpressWestMarkers] = useState(false);
  const [showExpressWestPolyline, setShowExpressWestPolyline] = useState(false);
  const [showRailroadMarkers, setShowRailroadMarkers] = useState(false);
  const [showRailroadPolyline, setShowRailroadPolyline] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');

  const handleOuterToggleChange = () => {
	setShowOuterMarkers(!showOuterMarkers);
	setShowOuterPolyline(!showOuterPolyline);
  };

  const handleInnerToggleChange = () => {
	setShowInnerMarkers(!showInnerMarkers);
	setShowInnerPolyline(!showInnerPolyline);
  };

  const handleHospitalToggleChange = () => {
	setShowHospitalMarkers(!showHospitalMarkers);
	setShowHospitalPolyline(!showHospitalPolyline);
  };

  const handleExpressEastToggleChange = () => {
	setShowExpressEastMarkers(!showExpressEastMarkers);
	setShowExpressEastPolyline(!showExpressEastPolyline);
  };

  const handleExpressWestToggleChange = () => {
	setShowExpressWestMarkers(!showExpressWestMarkers);
	setShowExpressWestPolyline(!showExpressWestPolyline);
  };

  const handleRailroadToggleChange = () => {
	setShowRailroadMarkers(!showRailroadMarkers);
	setShowRailroadPolyline(!showRailroadPolyline);
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
			<div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}> 
				<button className="backButton" onClick={selectedNav === '' ? closeNav : handleBackClick}>
					{selectedNav === '' ? 'X' : '<<'}
				</button>
				{selectedNav !== '' && <span className="navTitle">Bus Routes</span>}
			</div>


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

							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showOuterMarkers ? 'on outer' : ''}`}
								onClick={handleOuterToggleChange}
								/>
								<span>Outer Loop</span>
							</div>

							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showInnerMarkers ? 'on inner' : ''}`} 
								onClick={handleInnerToggleChange}
								/>
								<span>Inner Loop</span>
							</div>

							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showHospitalMarkers ? 'on hospital' : ''}`}
								onClick={handleHospitalToggleChange}
								/>
								<span>Hospital/Chapin</span>
							</div>
							
							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showExpressEastMarkers ? 'on expressE' : ''}`}
								onClick={handleExpressEastToggleChange}
								/>
								<span>Express East</span>
							</div>

							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showExpressWestMarkers ? 'on expressW' : ''}`}
								onClick={handleExpressWestToggleChange}
								/>
								<span>Express West</span>
							</div>

							<div className="toggleButton">
								<div
								className={`toggleSwitch ${showRailroadMarkers ? 'on railroad' : ''}`}
								onClick={handleRailroadToggleChange}
								/>
								<span>Railroad</span>
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

		{/* Express East Routes */}
		{showExpressEastPolyline && (
		  <Polyline
			positions={expressEastData.busRoute}
			color="blue"
			weight={5}
		  />
		)}

		{/* Express East Stops */}
		{showExpressEastMarkers && expressEastData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={expressEastData.expressEastStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

		{/* Express West Routes */}
		{showExpressWestPolyline && (
		  <Polyline
			positions={expressWestData.busRoute}
			color="red"
			weight={5}
		  />
		)}

		{/* Express West Stops */}
		{showExpressWestMarkers && expressWestData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={expressWestData.expressWestStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

		{/* Railroad Routes */}
		{showRailroadPolyline && (
		  <Polyline
			positions={railroadData.busRoute}
			color="black"
			weight={5}
		  />
		)}

		{/* Railroad Stops */}
		{showRailroadMarkers && railroadData.busStops.map((stop, index) => (
		  <Marker key={index} position={stop.position} icon={railroadData.railroadStopIcon}>
			<Popup>{stop.name}</Popup>
		  </Marker>
		))}

	  </MapContainer>
	</div>
  );
}

export default App;
