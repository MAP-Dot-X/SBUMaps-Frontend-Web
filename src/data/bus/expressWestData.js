import L from 'leaflet';

export const expressWestData = {
    expressWestStopIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),

    busStops: [
        { name: 'Lot 40', position: [40.89688182178211, -73.12666708166921] },
        { name: 'South Campus East', position: [40.90444998452158, -73.12151113953891] },
        { name: 'Engineering Drive', position: [40.913448953971134, -73.12416061968742] },
        { name: 'South Campus West', position: [40.904759187338726, -73.1217362526996] },
        { name: 'Child Care', position: [40.89823539485135, -73.12810625953261] },
    ],

    busRoute: [
        [40.89688182178211, -73.12666708166921],
        [40.90444998452158, -73.12151113953891],
        [40.913448953971134, -73.12416061968742],
        [40.904759187338726, -73.1217362526996],
        [40.89823539485135, -73.12810625953261],
    ]
};
