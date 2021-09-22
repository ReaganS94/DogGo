import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "./components/Navbar";

import "./App.css";
import "./general-stylesheet.css";

function App() {
  const position = [52.3759, 9.732];
  return (
    <>
      <Navbar />
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

      <div className="App">
        <h1 className="textyellow">dogGo this is a title</h1>
        <h2 className="textred">dogGo this is a title</h2>
        <h3 className="textblue">dogGo this is a title</h3>
        <h4>dogGo this is a title</h4>
        <h5 className="backgroundblue textwhite">dogGo this is a title</h5>
        <h6>dogGo this is a title</h6>
        <p className="p1">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p2 backgroundred textwhite">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p3">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p4">
          So you can go places together. This is a test paragraph
        </p>
        <button>Click me</button>
        <button className="buttonblue">Click me</button>
        <ol>
          Test
          <li>Testlink</li>
        </ol>
        <ul>
          Test
          <a href="www.google.com">
            <li>Testlink</li>
          </a>
        </ul>
      </div>
      <div className="backgroundred textwhite">Background red</div>
      <div className="backgroundblue textwhite">Background blue</div>
      <div className="backgroundyellow">Background yellow</div>
    </>
  );
}

export default App;
