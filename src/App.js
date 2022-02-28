import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import NewLocation from './components/NewLocation/NewLocation';
import Location from './components/Location/Location';
import {iconMidpoint, iconAirplane} from './Icons';
import './app.css';
import {MidPoint, Coordinate} from './geomidpoint';
import airports from './airports';

function App() {
	const [locations, setLocations] = useState([]);
	const [closestAirports, setClosestAirports] = useState([]);
	const [midPoint, setMidPoint] = useState();

	const addLocationHandler = (location) => {
		setLocations((prevLocations) => {
			return [location, ...prevLocations];
		});
	};

	const midPointMarkerHandler = (midPoint) => {
		setMidPoint(
			<Marker position={[midPoint.lat, midPoint.lng]} key={'midPoint'} icon={iconMidpoint}>
				<Popup>Least Travel Point</Popup>
			</Marker>
		);
	};

	useEffect(() => {
		// when new location is added, calculate the midpoint of the locations.
		if (locations.length > 1) {
			const midPoint = new MidPoint();
			const minDistance = midPoint.getMinimumDistance(locations);

			if (minDistance) {
				midPointMarkerHandler(minDistance[0]);

				let airportsDistances = [];
				airports.forEach((currentValue) => {
					airportsDistances.push([
						midPoint.getDistanceBetweenCoordinatesKm(
							new Coordinate(currentValue.lat, currentValue.lng),
							minDistance[0]
						),
						currentValue,
					]);
				});

				airportsDistances.sort((a, b) => {
					return a[0] - b[0];
				});

				let closestAirports = [];
				airportsDistances.slice(0, 3).forEach((currentValue) => {
					closestAirports.push(new Coordinate(currentValue[1].lat, currentValue[1].lng));
				});

				setClosestAirports(closestAirports);
			}
		}
		else {
			setMidPoint(null);
			setClosestAirports([]);
		}
	}, [locations]);

	function handleRemove(id) {
		const newLocations = locations.filter((item) => item.id !== id);

		setLocations(newLocations);
	}

	return (
		<div>
			<div className="container">
				<div className="column-1 box">
					<h1>Meet Midway</h1>
					<p>Enter the your teammates starting coordinates and we'll show you 3 airports that minimize the teams total travel distance.</p>
					<NewLocation onAddLocation={addLocationHandler}></NewLocation>
					<ul>
						{/* Break out into Locations.js component. */}
						{locations.map((item) => (
							<li key={item.id}>
								{item.lat}, {item.lng}
								<button style={{ marginLeft: 10 }} type="button" onClick={() => handleRemove(item.id)}>
									Remove
								</button>
							</li>
						))}
					</ul>
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
						{closestAirports.map(({lat, lng}, index) => (
							<Marker position={[lat, lng]} key={index} icon={iconAirplane}>
								<Popup>Test</Popup>
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
