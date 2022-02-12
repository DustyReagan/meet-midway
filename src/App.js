import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import NewLocation from './components/Location/NewLocation';
import {iconMidpoint} from './Icons';
import './app.css';
import {LeafletConsumer} from 'react-leaflet';

const coords = [];

function App() {
	const [locations, setLocations] = useState(coords);
	const [midPoint, setMidPoint] = useState();

	const addLocationHandler = (location) => {
		setLocations((prevLocations) => {
			return [location, ...prevLocations];
		});
	};

	const midPointMarkerHandler = (midPoint) => {
		console.log(midPoint.lat);
		setMidPoint(
			<Marker position={[midPoint.lat, midPoint.lng]} key={'midPoint'} icon={iconMidpoint}>
				<Popup>MidPoint</Popup>
			</Marker>
		);
	};

	useEffect(() => {
		// when new location is added, calculate the midpoint of the locations.
		if (locations.length > 1) {
			const midpoint = window.getGeographicMidpoint(locations);
			console.log(midpoint);
			if (midpoint) {
				midPointMarkerHandler(midpoint);
			}
		}
	}, [locations]);

	return (
		<div>
			<div className="container">
				<div className="column-1 box">
					<h1>Meet Midway</h1>
					<NewLocation onAddLocation={addLocationHandler}></NewLocation>
				</div>
				<div className="column-2 box">
					<MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{locations.map(({lat, lng}, index) => (
							<Marker position={[lat, lng]} key={index}>
								<Popup>
									{index + 1} is for popup with lat: {lat} and lon {lng}
								</Popup>
							</Marker>
						))}
						{midPoint}
					</MapContainer>
				</div>
			</div>
		</div>
	);
}

export default App;
