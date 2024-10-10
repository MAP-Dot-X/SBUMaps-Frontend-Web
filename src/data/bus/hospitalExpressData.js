import L from 'leaflet';

export const hospitalExpressData = {
    hospitalExpressStopIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),

    busStops: [
        { name: 'Lot 40', position: [40.89688182178211, -73.12666708166921] },
        { name: 'Emergency Room', position: [40.90903344643293, -73.11427209004468] },
    ],

    busRoute: [
        [40.89688182178211, -73.12666708166921], // Lot 40
        [40.90903344643293, -73.11427209004468], // Emergency Room
    ]
};
