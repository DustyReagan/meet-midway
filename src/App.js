import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import NewLocation from "./components/Location/NewLocation";
import "./app.css";
import { Icon } from "leaflet";

const coords = [
  { lat: 41.19197, lng: 25.33719 },
];

function App() {
  const [locations, setLocations] = useState(coords);

  const addLocationHandler = (location) => {
    setLocations((prevLocations) => {
      return [location, ...prevLocations];
    });
    console.log(locations);
  };

  return (
    <div>
      <h1>Meet Midway</h1>

      <NewLocation onAddLocation={addLocationHandler}></NewLocation>

      <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(({ lat, lng }, index) => (
          <Marker position={[lat, lng]} key={index}>
            <Popup>
              {index + 1} is for popup with lat: {lat} and lon {lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
