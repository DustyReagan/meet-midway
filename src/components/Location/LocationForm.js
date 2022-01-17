import React, { useState } from "react";

import "./LocationForm.css";

const LocationForm = (props) => {
  const [enteredCoordinate, setEnteredCoordinate] = useState('');

  const coordinateChangeHandler = (event) => {
    setEnteredCoordinate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Turn a string 1,1 into an array [1,1].
    const coordinateArray = JSON.parse('[' + enteredCoordinate + ']');
    const locationData = {
      lat: coordinateArray[0],
      lng: coordinateArray[1],
    };

    props.onSaveLocationData(locationData);
    setEnteredCoordinate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="location">
        <label htmlFor="coordinate">Coordinate</label>
        <input type="text" value={enteredCoordinate} onChange={coordinateChangeHandler} id="coordinate"></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default LocationForm;
