import LocationForm from '../LocationForm/LocationForm';

const NewLocation = (props) => {
	const saveLocationDataHandler = (enteredCoordinate) => {
		const coordinateData = {
			...enteredCoordinate,
			id: Math.random().toString(),
		};
		props.onAddLocation(coordinateData);
	};

	return (
		<div>
			<LocationForm onSaveLocationData={saveLocationDataHandler} />
		</div>
	);
};

export default NewLocation;
