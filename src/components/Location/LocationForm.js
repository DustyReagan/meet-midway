import React, { useState } from "react";

import "./LocationForm.css";

const LocationForm = (props) => {
  const [enteredCoordinate, setEnteredCoordinate] = useState('');

  const coordinateChangeHandler = (event) => {
    setEnteredCoordinate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const locationData = {
      coordinate: enteredCoordinate,
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
