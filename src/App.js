import React, {useState, useEffect} from 'react';
import {createSearchParams, useSearchParams} from 'react-router-dom';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import NewLocation from './components/NewLocation/NewLocation';
import Location from './components/Location/Location';
import {iconMidpoint, iconAirplane} from './Icons';
import './app.css';
import {MidPoint, Coordinate} from './geomidpoint';
import airports from './airports';
import logo from './assets/meet-midway-logo.png';

function App() {
	const [searchParams, setSearchParams] = useSearchParams();
	let locations = [];
	// Sanitize loc parameter.
	try {
		locations = JSON.parse(searchParams.get('loc')) || [];
		if (!Array.isArray(locations)) {
			throw new Error('loc must be an array.');
		}
		locations.forEach((currentValue) => {
			if (
				!currentValue.hasOwnProperty('lat') ||
				!currentValue.hasOwnProperty('lng') ||
				!currentValue.hasOwnProperty('id')
			) {
				throw new Error('Invalid object in location array.');
			}
		});
	} catch (e) {
		locations = [];
		setSearchParams(createSearchParams({loc: JSON.stringify([])}));
	}

	const [closestAirports, setClosestAirports] = useState([]);
	const [midPoint, setMidPoint] = useState();

	const addLocationHandler = (location) => {
		setSearchParams(createSearchParams({loc: JSON.stringify([...locations, location])}));
		locations = [...locations, location];
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
		} else {
			setMidPoint(null);
			setClosestAirports([]);
		}
	}, [searchParams]);

	function handleRemove(id) {
		const newLocations = locations.filter((item) => item.id !== id);

		setSearchParams(createSearchParams({loc: JSON.stringify(newLocations)}));
	}

	return (
		<div>
			<div className="container">
				<div className="column-1 box">
					<img id="logo" src={logo} width="400" />
					<hr />
					<p>
						Enter your teammates starting coordinates and we'll show you 3 airports that minimize
						the teams total travel distance.
					</p>
					<NewLocation onAddLocation={addLocationHandler}></NewLocation>
					<table>
						<tr>
							<th>Coordinates</th>
							<th>Actions</th>
						</tr>
						{/* TODO: Break out into Locations.js component. */}
						{locations.map((item) => (
							<tr>
								<td key={item.id}>
									{item.lat}, {item.lng}
								</td>
								<td>
									<button
										style={{marginLeft: 10}}
										type="button"
										onClick={() => handleRemove(item.id)}
									>
										Remove
									</button>
								</td>
							</tr>
						))}
					</table>
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
