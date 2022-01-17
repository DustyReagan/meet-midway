import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import NewLocation from "./components/Location/NewLocation";
import "./app.css";
import { Icon } from "leaflet";

function App() {

  const addNewLocationHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    React.createElement('h2', {}, "Let's get started!");
  };

    // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h1>Meet Midway</h1>

      <NewLocation onAddNewLocation={addNewLocationHandler}></NewLocation>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
