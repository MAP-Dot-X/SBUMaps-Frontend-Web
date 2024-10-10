import L from 'leaflet';

export const innerLoopData = {
    innerLoopStopIcon: new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
    }),
        
    busStops: [
        { name: 'SAC', position: [40.91433772861805, -73.12511875221158] },
        { name: 'Lot 13', position: [40.91367016061309, -73.128498901435] },
        { name: 'Roosevelt West', position: [40.91202250727283, -73.12804710194747] },
        { name: 'Greeley', position: [40.91112682497286, -73.13131249668088] },
        { name: 'West E', position: [40.91178912213096, -73.1344340068163] },
		{ name: 'West G', position: [40.91298328524094, -73.13593527319979] },
        { name: 'West C', position: [40.9124405755571, -73.13337901698084] },
		{ name: 'Nobel', position: [40.91298843080553, -73.12948816313441] }
    ],

    busRoute: [
        [40.91433772861805, -73.12511875221158], // SAC
        [40.91367016061309, -73.128498901435], // Lot 13
        [40.91202250727283, -73.12804710194747], // Roosevelt West
        [40.91112682497286, -73.13131249668088], // Greeley
        [40.91178912213096, -73.1344340068163], // West E
        [40.91298328524094, -73.13593527319979], // West G
        [40.9124405755571, -73.13337901698084], // West C
        [40.91298843080553, -73.12948816313441], // Nobel
    ]
}