import L from 'leaflet';

export const bikeStationData = {
  bikeStationIcon: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),

  bikeStations: [  
    { position: [40.91246286481021, -73.13028562817115], name: "West Side Dining Station" },
    { position: [40.911726, -73.132924], name: "West Apartments C Station" },
    { position: [40.913355, -73.134311], name: "West Apartments I Station" },
    { position: [40.910048, -73.124839], name: "Tabler Quad Station" },
    { position: [40.904523, -73.121220], name: "South Campus Station" },
    { position: [40.896715, -73.126444], name: "South P Lot Station" },
    { position: [40.911353, -73.120871], name: "Life Sciences Station" },
    { position: [40.913437, -73.121420], name: "Javits Station" },
    { position: [40.914413, -73.124657], name: "SAC Station" },
    { position: [40.916109, -73.1234889], name: "Library Station" },
    { position: [40.916441, -73.118270], name: "Wang Center Station" },
    { position: [40.919185, -73.120839], name: "James Hall Station" },
    { position: [40.920057, -73.128236], name: "LIRR Station" },
    { position: [40.921497, -73.126662], name: "Athletic Fields Station" },
  ]
};