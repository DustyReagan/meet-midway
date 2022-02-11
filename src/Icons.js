import L from 'leaflet';

const iconMidpoint = new L.Icon({
	iconUrl: require('./downArrow.gif'),
	iconAnchor: new L.Point(15, 40),
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 40),
	className: 'leaflet-div-icon',
});

export {iconMidpoint};
