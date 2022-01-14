import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./app.css";
import { Icon } from "leaflet";

function App() {
  return (
    <div>
      <h1>Hello map!</h1>
      <MapContainer
        center={[30.304129, -97.7363697]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default App;
