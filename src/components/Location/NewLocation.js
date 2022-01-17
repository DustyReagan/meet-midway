import LocationForm from "./LocationForm";

const NewLocation = (props) => {
  const saveLocationDataHandler = (enteredCoordinate) => {
    const coordinateData = {
      ...enteredCoordinate,
      id: Math.random().toString(),
    };
    props.onAddLocation(coordinateData);
  };

  return (
    <div className="new-expense">
      <LocationForm onSaveLocationData={saveLocationDataHandler} />
    </div>
  );
};

export default NewLocation;
