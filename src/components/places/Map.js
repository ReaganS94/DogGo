import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationsList from "./LocationsList";
import Search from "./Search";
import axios from "axios";

function Map() {
  const [allLocations, setAllLocations] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [locationFilter, setLocationFilter] = useState("");
  const [addLocation, setAddLocation] = useState(false);

  useEffect(() => {
    if (shouldFetch) {
      loadLocations();
    }
  }, [shouldFetch]);

  const placeType = {
    bar: "614a226be5ae0efb2d477457",
    cafe: "6151f2800dd9391391bd082b",
    restaurant: "614a225fe5ae0efb2d477456",
    park: "614a2275e5ae0efb2d477458",
  };

  function loadLocations() {
    const type = locationFilter ? `?type=${locationFilter}` : "";
    axios
      .get(`https://dry-temple-96625.herokuapp.com/locations/${type}`)
      .then((response) => {
        setAllLocations(response.data.data);
        setShouldFetch(false);
      })
      .catch((err) => console.error(err));
  }

  function handleClick() {
    setAddLocation(true);
  }

  return (
    <div className="container">
      <div className="locations">
        <label htmlFor="bar">Bar</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.bar}
          name="placeType"
          id="typeBar"
          checked={locationFilter === placeType.bar}
        ></input>
        <br />
        <label htmlFor="cafe">Cafe</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.cafe}
          name="placeType"
          id="typeCafe"
          checked={locationFilter === placeType.cafe}
        ></input>
        <br />
        <label htmlFor="restaurant">Restaurant</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.restaurant}
          name="placeType"
          id="typeRestaurant"
          checked={locationFilter === placeType.restaurant}
        ></input>
        <br />
        <label htmlFor="park">Park</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.park}
          name="placeType"
          id="typePark"
          checked={locationFilter === placeType.park}
        ></input>
        <br />
        <button onClick={handleClick}>Add a new location</button>
      </div>

      <div className="leaflet-container">
        <MapContainer
          center={[52.52, 13.405]}
          zoom={12}
          scrollWheelZoom={false}
        >
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
          {addLocation ? (
            <LocationMarker
              setShouldFetch={setShouldFetch}
              loadLocations={loadLocations}
              setAddLocation={setAddLocation}
            />
          ) : null}

          <Search />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;

// ?type=642839748923
