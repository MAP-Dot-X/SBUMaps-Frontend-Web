import L from 'leaflet';

export const expressEastData = {
    expressEastStopIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        iconSize: [15, 25], 
        iconAnchor: [7, 25],
        popupAnchor: [1, -24],
        shadowSize: [25, 25],
    }),

    busStops: [
        { name: 'Lot 40', position: [40.89688182178211, -73.12666708166921] },
        { name: 'South Campus East', position: [40.90444998452158, -73.12151113953891] },
        { name: 'Life Sciences East', position: [40.910972960277036, -73.11892142090437] },
        { name: 'East Side Dining', position: [40.916559838631436, -73.12109903854378] },
        { name: 'Life Sciences West', position: [40.910969924136715, -73.11916997593116] },
        { name: 'South Campus West', position: [40.904759187338726, -73.1217362526996] },
    ],

    busRoute: [
        [40.896581, -73.126627],
        [40.896572, -73.127044],
        [40.896502, -73.127478],
        [40.896408, -73.127947],
        [40.896145, -73.127845],
        [40.896598, -73.125124],
        [40.898503, -73.125719],
        [40.89869, -73.12478],
        [40.89879, -73.12446],
        [40.89898, -73.12412],
        [40.89921, -73.12387],
        [40.89945, -73.12372],
        [40.89982, -73.12363],
        [40.90045, -73.12366],
        [40.9008, -73.12365],
        [40.90106, -73.12357],
        [40.90133, -73.12342],
        [40.90152, -73.12325],
        [40.90169, -73.12304],
        [40.90187, -73.12271],
        [40.90194, -73.12255],
        [40.90199, -73.12237],
        [40.90205, -73.122],
        [40.90205, -73.12189],
        [40.9029, -73.12192],
        [40.90379, -73.1217],
        [40.90414, -73.12164],
        [40.90445, -73.12162],
        [40.9049, -73.12167],
        [40.90524, -73.12173],
        [40.90538, -73.12177],
        [40.90569, -73.12188],
        [40.90594, -73.12199],
        [40.90644, -73.12228],
        [40.90681, -73.12256],
        [40.90721, -73.12283],
        [40.90739, -73.12294],
        [40.90772, -73.12308],
        [40.90828, -73.12322],
        [40.9085, -73.12324],
        [40.90938, -73.12321],
        [40.90949, -73.12316],
        [40.90966, -73.12312],
        [40.90969, -73.12305],
        [40.90974, -73.123],
        [40.90977, -73.12299],
        [40.90986, -73.12249],
        [40.90992, -73.12231],
        [40.90971, -73.12059],
        [40.9097, -73.12031],
        [40.90971, -73.11983],
        [40.90975, -73.11963],
        [40.9098, -73.11951],
        [40.90993, -73.1193],
        [40.91005, -73.11919],
        [40.91017, -73.11913],
        [40.91073, -73.11908], 
        [40.91103, -73.11901],
        [40.91117, -73.11894],
        [40.91169, -73.11875],
        [40.91196, -73.11869],
        [40.91231, -73.11866],
        [40.9126, -73.11868],
        [40.91295, -73.11876],
        [40.91331, -73.1189],
        [40.91394, -73.11909],
        [40.91407, -73.11911],
        [40.91435, -73.11909],
        [40.91448, -73.11907],
        [40.91526, -73.11886],
        [40.91555, -73.11872],
        [40.91579, -73.11858],
        [40.91593, -73.11849],
        [40.91616, -73.11831],
        [40.91633, -73.1187],
        [40.91639, -73.11888],
        [40.91645, -73.11927],
        [40.91644, -73.11959],
        [40.91636, -73.11996],
        [40.91632, -73.12028],
        [40.91633, -73.12057],
        [40.9164, -73.12107],
        [40.91651, -73.12121],
        [40.91666, -73.12129],
        [40.91668, -73.12135],
        [40.91667, -73.1215],
        [40.91664, -73.12155],
        [40.91661, -73.12156],
        [40.91645, -73.12148],
        [40.91643, -73.12139],
        [40.91641, -73.12114],
        [40.91633, -73.12057],
        [40.91632, -73.12028],
        [40.91636, -73.11996],
        [40.91644, -73.11959],
        [40.91645, -73.11927],
        [40.91639, -73.11888],
        [40.91633, -73.1187],
        [40.91616, -73.11831],
        [40.91593, -73.11849],
        [40.91579, -73.11858],
        [40.91555, -73.11872],
        [40.91526, -73.11886],
        [40.91448, -73.11907],
        [40.91435, -73.11909],
        [40.91407, -73.11911],
        [40.91394, -73.11909],
        [40.91331, -73.1189],
        [40.91295, -73.11876],
        [40.9126, -73.11868],
        [40.91231, -73.11866],
        [40.91196, -73.11869],
        [40.91169, -73.11875],
        [40.91117, -73.11894],
        [40.91103, -73.11901],
        [40.91073, -73.11908],
        [40.91017, -73.11913],
        [40.91005, -73.11919],
        [40.90993, -73.1193],
        [40.9098, -73.11951],
        [40.90975, -73.11963],
        [40.90971, -73.11983],
        [40.9097, -73.12011],
        [40.90971, -73.12059],
        [40.90992, -73.12231],
        [40.90993, -73.12251],
        [40.90992, -73.12303],
        [40.90997, -73.12313],
        [40.90996, -73.12328],
        [40.90993, -73.12332],
        [40.90993, -73.12334],
        [40.90986, -73.12339],
        [40.90976, -73.12338],
        [40.9097, -73.12333],
        [40.90968, -73.12328],
        [40.90938, -73.12321],
        [40.9085, -73.12324],
        [40.90828, -73.12322],
        [40.90772, -73.12308],
        [40.90739, -73.12294],
        [40.90721, -73.12283],
        [40.90681, -73.12256],
        [40.90644, -73.12228],
        [40.90594, -73.12199],
        [40.90553, -73.12182],
        [40.90524, -73.12173],
        [40.90478, -73.12166]
    ]
};
