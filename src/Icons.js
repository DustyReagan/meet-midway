import L from 'leaflet';

const iconMidpoint = new L.Icon({
	iconUrl: require('./downArrow.gif'),
	iconAnchor: new L.Point(15, 40),
	popupAnchor: new L.Point(0, -30),
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 40),
	className: 'leaflet-div-icon',
});


const iconAirplane = new L.Icon({
	iconUrl: require('./airplane.gif'),
	popupAnchor: new L.Point(0, -10),
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(60, 100),
	className: 'leaflet-div-icon',
});

export {iconMidpoint, iconAirplane};
