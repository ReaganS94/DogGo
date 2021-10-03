import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationsList from "./LocationsList";
import Search from "./Search";
import axios from "axios";

function Map() {
  const [allLocations, setAllLocations] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      axios
        .get(`https://dry-temple-96625.herokuapp.com/locations`)
        .then((response) => {
          setAllLocations(response.data.data);
          // console.log(response.data);
          setShouldFetch(false);
        })
        .catch((err) => console.error(err));
    }
  }, [shouldFetch]);

  console.log("this one", allLocations);

  return (
    <div className="container">
      <div className="locations">
        <LocationsList />
      </div>

      <div className="leaflet-container">
        <MapContainer center={[52.52, 13.405]} zoom={12} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {allLocations.map((location) => (
            <Marker
              key={location._id}
              position={[location.LatLng.lat, location.LatLng.lng]}
              riseOnHover={true}
            >
              <Popup>
                {location.name} <br />
                {location.address} <br />
                {location.phone ? location.phone : "-"} <br />
                {location.website ? location.website : "-"} <br />
                {location.type.name}
              </Popup>
            </Marker>
          ))}

          <LocationMarker setShouldFetch={setShouldFetch} />
          <Search />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
