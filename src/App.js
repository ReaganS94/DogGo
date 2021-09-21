import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./App.css";

function App() {
  const position = [52.3759, 9.732];
  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Hannover
            <br /> City
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
