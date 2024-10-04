import L from 'leaflet';

export const outerBusData = {
    outerLoopStopIcon: new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
    }),
    
    busStops: [
        { name: 'SAC', position: [] },
        { name: 'Lot 13', position: [] },
        { name: 'Roosevelt West', position: [] },
        { name: 'Greeley', position: [] },
        { name: 'West E', position: [] },
        { name: 'West G', position: [] },
        { name: 'West C', position: [] },
        { name: 'Nobel', position: [] },
    ],

    busRoute: [
        [], // SAC
        [], // Lot 13
        [], // Roosevelt West
        [], // Greeley
        [], // West E
        [], // West G
        [], // West C
        [], // Nobel
    ]
};
