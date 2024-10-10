import L from 'leaflet';

export const railroadData = {
    railroadStopIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    }),

    busStops: [
        { name: 'LIRR', position: [40.92137844846457, -73.12751511809915] },
        { name: 'Gym Road West', position: [40.91848425396323, -73.12933807899793] },
        { name: 'Hamiliton', position: [40.913634058073946, -73.12984054833946] },
        { name: 'SAC', position: [40.914205980345606, -73.12526398293195] },
        { name: 'Kelly', position: [40.9134150835656, -73.12918902436843] },
        { name: 'Gym Road East', position: [40.91805457231416, -73.12942010636748] },
        { name: 'Lot 5B', position: [40.92287220129566, -73.12592373008697] },
    ],

    busRoute: [
        [40.92137844846457, -73.12751511809915], // LIRR
        [40.91848425396323, -73.12933807899793], // Gym Road West
        [40.913634058073946, -73.12984054833946], // Hamiliton
        [40.914205980345606, -73.1252639829319], // SAC
        [40.9134150835656, -73.12918902436843], // Kelly
        [40.91805457231416, -73.12942010636748], // Gym Road East
        [40.92287220129566, -73.12592373008697], // Lot 5B
    ]
};
