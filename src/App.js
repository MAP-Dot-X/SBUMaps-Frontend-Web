import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { outerLoopData } from './data/bus/outerLoopData';
import { innerLoopData } from './data/bus/innerLoopData';
import { hospitalRouteData } from './data/bus/hospitalRouteData';
import { hospitalExpressData } from './data/bus/hospitalExpressData';
import { expressEastData } from './data/bus/expressEastData';
import { expressWestData } from './data/bus/expressWestData';
import { railroadData } from './data/bus/railroadData';
import { bikeStationData } from './data/bike/bikeStationData';
import L from 'leaflet';

function App() {
	const [busData, setBusData] = useState([]); 
	const [showOuterMarkers, setShowOuterMarkers] = useState(false);
	const [showOuterPolyline, setShowOuterPolyline] = useState(false);
	const [showInnerMarkers, setShowInnerMarkers] = useState(false);
	const [showInnerPolyline, setShowInnerPolyline] = useState(false);
	const [showHospitalMarkers, setShowHospitalMarkers] = useState(false);
	const [showHospitalPolyline, setShowHospitalPolyline] = useState(false);
	const [showHospitalExpressMarkers, setShowHospitalExpressMarkers] = useState(false);
	const [showHospitalExpressPolyline, setShowHospitalExpressPolyline] = useState(false);
	const [showExpressEastMarkers, setShowExpressEastMarkers] = useState(false);
	const [showExpressEastPolyline, setShowExpressEastPolyline] = useState(false);
	const [showExpressWestMarkers, setShowExpressWestMarkers] = useState(false);
	const [showExpressWestPolyline, setShowExpressWestPolyline] = useState(false);
	const [showRailroadMarkers, setShowRailroadMarkers] = useState(false);
	const [showRailroadPolyline, setShowRailroadPolyline] = useState(false);
	const [showBikeStations, setShowBikeStations] = useState(false); 
	const [isNavOpen, setIsNavOpen] = useState(false);
  	const [selectedNav, setSelectedNav] = useState('');
	const outerLoopRoutes = [534]; 
	const innerLoopRoutes = [533];
	const hospitalRoutes = [531];
	const expressEastRoutes = [529];
	const expressWestRoutes = [530];
	const railroadRoutes = [537];


	const busIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png', 
		iconSize: [25, 25],
		iconAnchor: [12, 25],
		popupAnchor: [0, -25],
  	});

	const outerLoopBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png', 
		iconSize: [25, 25],
		iconAnchor: [12, 25],
		popupAnchor: [0, -25],
  	});

	const innerLoopBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png', 
		iconSize: [35, 35],  
		iconAnchor: [17, 35],  
		popupAnchor: [0, -35],
	});

	const hospitalBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png', 
		iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
  	});

	const expressEastBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png', 
		iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
  	});

	const expressWestBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png', 
		iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
  	});

	const railroadBusIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png', 
		iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
  	});

	const fetchBusData = async () => {
		try {
		const response = await fetch('/map/v2/buses');
		const data = await response.json();
		setBusData(data);
		} catch (error) {
		console.error("Failed to fetch bus data:", error);
		}
	};
	  
	useEffect(() => {
		fetchBusData(); 
		const interval = setInterval(fetchBusData, 1000); 
		return () => clearInterval(interval); 
	}, []);

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

	const handleHospitalExpressToggleChange = () => {
		setShowHospitalExpressMarkers(!showHospitalExpressMarkers);
		setShowHospitalExpressPolyline(!showHospitalExpressPolyline);
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

	const handleBikeStationToggleChange = () => {
		setShowBikeStations(!showBikeStations); 
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
									className={`toggleSwitch ${showHospitalExpressMarkers ? 'on hospitalExpress' : ''}`}
									onClick={handleHospitalExpressToggleChange}
									/>
									<span>Hospital Express</span>
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

								<div className="showAllNoneContainer">
									<button className="showButton" onClick={() => {
									setShowOuterMarkers(true);
									setShowOuterPolyline(true);
									setShowInnerMarkers(true);
									setShowInnerPolyline(true);
									setShowHospitalMarkers(true);
									setShowHospitalPolyline(true);
									setShowHospitalExpressMarkers(true);
									setShowHospitalExpressPolyline(true);
									setShowExpressEastMarkers(true);
									setShowExpressEastPolyline(true);
									setShowExpressWestMarkers(true);
									setShowExpressWestPolyline(true);
									setShowRailroadMarkers(true);
									setShowRailroadPolyline(true);
									}}>
									Show All
									</button>

									<button className="hideButton" onClick={() => {
									setShowOuterMarkers(false);
									setShowOuterPolyline(false);
									setShowInnerMarkers(false);
									setShowInnerPolyline(false);
									setShowHospitalMarkers(false);
									setShowHospitalPolyline(false);
									setShowHospitalExpressMarkers(false);
									setShowHospitalExpressPolyline(false);
									setShowExpressEastMarkers(false);
									setShowExpressEastPolyline(false);
									setShowExpressWestMarkers(false);
									setShowExpressWestPolyline(false);
									setShowRailroadMarkers(false);
									setShowRailroadPolyline(false);
									}}>
									Show None
									</button>
								</div>

							</div>
						)}
						{selectedNav === 'SBU Bikes' && (
							<div className="checkboxMenu">
								<div className="toggleButton">
									<div
									className={`toggleSwitch ${showBikeStations ? 'on bike' : ''}`}
									onClick={handleBikeStationToggleChange}
									/>
									<span>Bike Stations</span>
								</div>
							</div>
						)}
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

			{/* Live bus locations */}
			{busData.map((bus) => {
				const isOuterLoopBus = outerLoopRoutes.includes(bus.route);
				const isInnerLoopBus = innerLoopRoutes.includes(bus.route);
				const isHospitalBus = hospitalRoutes.includes(bus.route);
				const isExpressEastBus = expressEastRoutes.includes(bus.route);
				const isExpressWestBus = expressWestRoutes.includes(bus.route);
				const isRailroadBus = railroadRoutes.includes(bus.route);

				if (showOuterMarkers && isOuterLoopBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={outerLoopBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				if (showInnerMarkers && isInnerLoopBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={innerLoopBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				if (showHospitalMarkers && isHospitalBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={hospitalBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				if (showExpressEastMarkers && isExpressEastBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={expressEastBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				if (showExpressWestMarkers && isExpressWestBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={expressWestBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				if (showRailroadMarkers && isRailroadBus) {
					return (
						<Marker key={bus.id} position={[bus.lat, bus.lon]} icon={railroadBusIcon}>
							<Popup>
								<div>
									<strong>Bus {bus.name}</strong><br />
									Heading: {bus.heading}°<br />
									Last stop: {bus.lastStop}
								</div>
							</Popup>
						</Marker>
					);
				}

				return null; 
			})}

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

			{/* Hospital Express Routes */}
			{showHospitalExpressPolyline && (
			<Polyline
				positions={hospitalExpressData.busRoute}
				color="pink"
				weight={5}
			/>
			)}

			{/* Hospital Express Stops */}
			{showHospitalExpressMarkers && hospitalExpressData.busStops.map((stop, index) => (
			<Marker key={index} position={stop.position} icon={hospitalExpressData.hospitalExpressStopIcon}>
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

			{/* Bike stations */}
			{showBikeStations && bikeStationData.bikeStations.map((station, index) => (
				<Marker key={index} position={station.position} icon={bikeStationData.bikeStationIcon}> 
					<Popup>{station.name}</Popup>
				</Marker>
			))}

		</MapContainer>
		</div>
	);
}

export default App;