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
            { name: 'SAC', position: [40.91440535849848, -73.12514670891179] },
            { name: 'Lot 13', position: [40.91440535849848, -73.12514670891179] },
            { name: 'Roosevelt West', position: [40.91440535849848, -73.12514670891179] },
            { name: 'Greeley', position: [40.91440535849848, -73.12514670891179] },
            { name: 'West E', position: [40.91440535849848, -73.12514670891179] },
            { name: 'West G', position: [40.91440535849848, -73.12514670891179] },
            { name: 'West C', position: [40.91440535849848, -73.12514670891179] },
            { name: 'Nobel', position: [40.91440535849848, -73.12514670891179] },
        ],

        busRoute: [
            [40.91440535849848, -73.12514670891179], // SAC
            [40.91440535849848, -73.12514670891179], // Lot 13
            [40.91440535849848, -73.12514670891179], // Roosevelt West
            [40.91440535849848, -73.12514670891179], // Greeley
            [40.91440535849848, -73.12514670891179], // West E
            [40.91440535849848, -73.12514670891179], // West G
            [40.91440535849848, -73.12514670891179], // West C
            [40.91440535849848, -73.12514670891179], // Nobel
        ]
    }