import L from 'leaflet';

export const outerBusData = {
		outerLoopStopIcon: new L.Icon({
				iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				shadowSize: [41, 41],
		}),
		
		busStops: [
			{ name: 'SAC', position: [40.91429178126743, -73.12473791877228] },
			{ name: 'Kelly', position: [40.9134150835656, -73.12918902436843] },
			{ name: 'Gym Road East', position: [40.91805457231416, -73.12942010636748] },
			{ name: 'Lot 5B', position: [40.92287220129566, -73.12592373008697] },
			{ name: 'LIRR', position: [40.92137844846457, -73.12751511809915] },
			{ name: 'Benedict', position: [40.920519896659734, -73.11848521201797] },
			{ name: 'H Quad', position: [40.91905903248162, -73.12118400086071] },
			{ name: 'M & H', position: [40.918211992558476, -73.11814033017524] },
			{ name: 'Administration Building', position: [40.91413449887355, -73.11921606483818] },
			{ name: 'Life Sciences West', position: [40.91096382303363, -73.11916865510916] },
			{ name: 'Roth/Tabler East', position: [40.91037848484324, -73.12411675994503] },
			{ name: 'Tabler Steps East', position: [40.91105340881635, -73.12595430963177] },
			{ name: 'Roosevelt East', position: [40.91191488425261, -73.12762118320369] },
			{ name: 'Greeley', position: [40.91113456483082, -73.13132060361556] },
			{ name: 'West E', position: [40.91178912213096, -73.1344340068163] },
			{ name: 'West G', position: [40.91298328524094, -73.13593527319979] },
			{ name: 'West C', position: [40.9124405755571, -73.13337901698084] },
			{ name: 'Nobel', position: [40.91298843080553, -73.12948816313441] }
		],
	
		busRoute: [
			[40.91429178126743, -73.12473791877228], // SAC
			[40.914346, -73.124831],
			[40.914365, -73.124982],
			[40.914317, -73.125134],
			[40.914222, -73.125209],
			[40.914108, -73.125203],
			[40.91407, -73.125576],
			[40.914067, -73.125702],
			[40.914035, -73.125935],
			[40.913935, -73.126238],
			[40.913706, -73.126675],
			[40.913586, -73.126949],
			[40.913521, -73.127458],
			[40.91356, -73.127818],
			[40.913621, -73.128204],
			[40.913578, -73.128708],
			[40.9134150835656, -73.12918902436843], // Kelly
			[40.913251, -73.129366],
			[40.913988, -73.130008],
			[40.914759, -73.130358],
			[40.91543, -73.130436],
			[40.915929, -73.130358],
			[40.917906, -73.129603],
			[40.91805457231416, -73.12942010636748], // Gym Road East
			[40.920124, -73.128123],
			[40.921591, -73.126846],
			[40.922722, -73.125602],
			[40.92287220129566, -73.12592373008697], // Lot 5B
			[40.92287220129566, -73.12592373008697], // LIRR
			[40.92137844846457, -73.12751511809915],
			[40.92287220129566, -73.12592373008697],
			[40.922722, -73.125602],
			[40.923488, -73.124491],
			[40.92412, -73.123258],
			[40.924266, -73.122855],
			[40.924295, -73.122512],
			[40.924274, -73.122201],
			[40.924145, -73.12175],
			[40.922426, -73.119004],
			[40.921689, -73.118242],
			[40.921091, -73.117868],
			[40.92046, -73.117683],
			[40.920301, -73.117911],
			[40.920519896659734, -73.1184852120179], // Benedict
			[40.920956, -73.12061],
			[40.920858, -73.120822],
			[40.920755, -73.120908],
			[40.919617, -73.121167],
			[40.919754, -73.122273],
			[40.918661, -73.122503],
			[40.918528, -73.121385],
			[40.919617, -73.121167],
			[40.920755, -73.120908],
			[40.920858, -73.120822],
			[40.920956, -73.12061],
			[40.920519896659734, -73.1184852120179],
			[40.920301, -73.117911],
			[40.920197, -73.117602],
			[40.919676, -73.117659],
			[40.918211992558476, -73.11814033017524], // M & H
			[40.917771, -73.118066],
			[40.916974, -73.117907],
			[40.91658, -73.118009],
			[40.915829, -73.118574],
			[40.91413449887355, -73.11921606483818], // Administration Building
		]
};
