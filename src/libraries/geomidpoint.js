/**
 * Defines a Coordinate as an object.
 *
 * @param latitude a number representing the coordinates latitude
 * @param longitude a number representing the coordinates longitude
 */
function Coordinate( latitude, longitude ) {
	this.latitude = latitude;
	this.longitude = longitude;
}

/**
 * This algorithm uses the method found here http://www.geomidpoint.com/calculation.html.
 * Calculates the geographic center from a collection of coordinates.
 *
 * @param coordinates array of Coordinate objects
 *
 * @return Coordinate the coordinates of geographic center
 */
function getGeographicMidpoint( coordinates ) {
	const numberOfCoordinates = coordinates.length;

	if ( numberOfCoordinates < 2 ) {
		return false;
	}

	let X = 0.0;
	let Y = 0.0;
	let Z = 0.0;

	for( let i = 0; i < numberOfCoordinates; i++ ) {
		// Convert latitude and longitude from degrees to radians.
		const lat = degreesToRadians( coordinates[ i ].latitude );
		const lon = degreesToRadians( coordinates[ i ].longitude );

		// Convert latitude and longitude to Cartesian coordinates.
		const a = Math.cos( lat ) * Math.cos( lon );
		const b = Math.cos( lat ) * Math.sin( lon );
		const c = Math.sin( lat );

		// Add all Cartesian coordinates together.
		X += a;
		Y += b;
		Z += c;
	}

	// Calculate average x, y, and z Cartesian coordinates
	X /= numberOfCoordinates;
	Y /= numberOfCoordinates;
	Z /= numberOfCoordinates;

	// Convert Cartesian coordinates back to latitude and longitude in radians
	const lon = Math.atan2( Y, X );
	const hyp = Math.sqrt( X * X + Y * Y );
	const lat = Math.atan2( Z, hyp );

	// Convert latitude and longitude in radians back to degrees.
	const latitude  = radianToDegrees( lat );
	const longitude = radianToDegrees( lon );

	return new Coordinate( latitude, longitude );
}

/**
 * This algorithm uses the method found here http://www.geomidpoint.com/calculation.html.
 * It starts by assuming the “center of minimum distance” will be one of the starting locations. If a starting
 * location’s travel distance is less than “geographic center” and the rest of the starting locations, we end our search
 * there. If “geographic center” has the least travel distance we begin our search there, and fan out in 8 cardinal
 * directions looking for the least travel distance until we zero in on it.
 *
 * @param coordinates array of Coordinate objects
 *
 * @return array contains the min point Coordinate object, and a number that is the total travel distance in km
 */
function getMinimumDistance( coordinates ) {
	// Start our search at the geographic midpoint.
	let currentPoint = getGeographicMidpoint( coordinates );

	// Calculate starting total distance.
	let currentTotalDistance = getTotalTravelDistanceToPointKm( geographicMidpoint, coordinates );

	const numberOfCoordinates = coordinates.length;

	// Try using one of our starting coordinates as the point of least travel distance.
	let foundSmallerPoint = false;
	for( let i = 0; i < numberOfCoordinates; i++ ) {
		const totalDistanceToPoint = getTotalTravelDistanceToPointKm( coordinates[i], coordinates );
		if( totalDistanceToPoint < currentTotalDistance ){
			currentTotalDistance = totalDistanceToPoint;
			currentPoint = coordinates[i];
			foundSmallerPoint = true;
		}
	}
	if ( foundSmallerPoint ) {
		return [ currentPoint, currentTotalDistance ];
	}

	/*
	 * If the coordinate with the least travel distance is the geographic midpoint, we start from that point and fan out
	 * in 8 cardinal directions looking for the least travel distance. We start our search looking at points far away.
	 * 40,075km is the circumference of the earth. Half of that is 20,038km. We assume the point we're looking for will
	 * not be on the opposite side of the earth, and since our starting point is the center of circle, we start by
	 * looking at points 10,019km away. If we don't find a smaller travel distance, we divide our search distance by 2
	 * and try again. We keep dividing by 2 until our search distance is less than 1km.
	 */
	let distanceKm = 10019;
	// A bearing of zero degrees is North. Adding 45 degrees would be Northeast.
	let bearing = 0;

	do {
		let tempCurrentPoint = null;
		do {
			// Get a new point nearby our current midpoint.
			const newPoint = getNewCoordinate(currentPoint, distanceKm, bearing);

			// Get the total travel distance to our new point.
			let newTotalDistance = getTotalTravelDistanceToPointKm(newPoint, coordinates);

			// Is the total travel distance less than our current total travel distance?
			if (newTotalDistance < currentTotalDistance) {
				// Update the currentTotalDistance and note which point this is, but try comparing the other bearings at
				// this distance before making this the new point.
				currentTotalDistance = newTotalDistance;
				tempCurrentPoint = newPoint;
			}
			bearing += 45;
		} while (bearing < 315);

		// If no new point with a smaller distance found, divide test distance by 2 and try again.
		if (null === tempCurrentPoint) {
			distanceKm /= 2;
		} else {
			currentPoint = tempCurrentPoint;
			tempCurrentPoint = null;
		}
		bearing = 0;
	} while ( distanceKm > 1 );

	return [ currentPoint, currentTotalDistance ];
}

/**
 * Sum the travel distance of a collection of coordinates to a destination point.
 *
 * @param destination coordinate object
 * @param coordinates array of coordinate objects
 *
 * @return number The sum of all travel distances between a collection of coordinates and destination point.
 */
function getTotalTravelDistanceToPointKm( destination, coordinates ) {
	const numberOfCoordinates = coordinates.length;

	let totalDistance = 0;

	for( let i = 0; i < numberOfCoordinates; i++ ) {
		totalDistance += getDistanceBetweenCoordinatesKm( destination, coordinates[i] );
	}

	return totalDistance;
}

/**
 * Get the distance between 2 points in kilometers.
 *
 * @param coordinate1 1st Coordinate object
 * @param coordinate2 2nd Coordinate object
 *
 * @return number The distance between the 2 points in kilometers
 */
function getDistanceBetweenCoordinatesKm( coordinate1, coordinate2 ) {
	const earthRadiusInKilometers = 6371;
	const dLat = degreesToRadians( coordinate2.latitude - coordinate1.latitude );
	const dLon = degreesToRadians( coordinate2.longitude - coordinate1.longitude );
	const a =
		Math.sin( dLat / 2 ) * Math.sin( dLat / 2 ) +
		Math.cos( degreesToRadians( coordinate1.latitude ) ) * Math.cos( degreesToRadians( coordinate2.latitude ) ) *
		Math.sin( dLon / 2 ) * Math.sin( dLon / 2 );
	const c = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) );
	return earthRadiusInKilometers * c; // Distance in km
}

/**
 * Given a starting location, distance, and bearing, return the resulting location's latitude and longitude.
 *
 * @param startPoint a Coordinate object as the starting point
 * @param distance a number as the distance to travel in kilometers
 * @param bearing a number that is the cardinal bearing to travel in degrees
 *
 * @return Coordinate the new location's coordinates
 */
function getNewCoordinate(startPoint, distance, bearing) {
	const lat1 = degreesToRadians( startPoint.latitude );
	const lon1 = degreesToRadians( startPoint.longitude );
	const brng = degreesToRadians( bearing );

	const earthRadiusInKilometers = 6371;

	const lat2 = Math.asin(Math.sin(lat1) * Math.cos(distance / earthRadiusInKilometers) + Math.cos(lat1) * Math.sin(distance / earthRadiusInKilometers) * Math.cos(brng));
	const lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(distance / earthRadiusInKilometers) * Math.cos(lat1), Math.cos(distance / earthRadiusInKilometers) - Math.sin(lat1) * Math.sin(lat2));

	return new Coordinate( radianToDegrees ( lat2 ), radianToDegrees( lon2 ) );
}

function degreesToRadians( degrees ) {
	// Const p is just pi / 180 pre-calculated. In theory this is more efficient.
	const p = 0.017453292519943295;
	return degrees * p;
}

function radianToDegrees( radian ) {
	// Const p is just 180 / pi pre-calculated. In theory this is more efficient.
	const p = 57.2957795131;
	return radian * p;
}
