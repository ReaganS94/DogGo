import { MapContainer, TileLayer } from "react-leaflet";
// import { OpenStreetMapProvider } from "leaflet-geosearch";
import LocationMarker from "./LocationMarker";
import LocationsList from "./LocationsList";
import Search from "./Search";

function Map() {
  return (
    <div className="container">
      <LocationsList />
      <div className="leaflet-container">
        <MapContainer
          center={[52.52, 13.405]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <Search />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
