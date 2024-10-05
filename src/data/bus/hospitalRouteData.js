import L from 'leaflet';

export const hospitalRouteData = {
    hospitalRouteStopIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),

    busStops: [
        { name: 'SAC', position: [40.91401431367258, -73.12468099152272] },
    ],

    busRoute: [
        // Define route coordinates here if needed
    ]
};
