import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationsList from "./LocationsList";
import Search from "./Search";
import axios from "axios";
import PlacesHeader from "./PlacesHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DisplayUsersMap() {
  const [userLocation, setUserLocation] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/users`)
      .then((response) => {
        setUserLocation(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(userLocation);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <PlacesHeader />
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
          {userLocation &&
            userLocation.map((users) => (
              <Marker
                key={users._id}
                position={[users.LatLng.lat, users.LatLng.lng]}
                riseOnHover={true}
              >
                <Popup>
                  <img
                    src={users.profilePic}
                    width="180px"
                    height="200px"
                    alt={users.username}
                  />{" "}
                  <br />
                  {users.username} <br />
                  {users.email} <br />
                  <br />
                  {users.about} <br />
                  <br />
                  {users.availability ? "free to dogsit" : "not free to dogsit"}
                  <br />
                  <br />
                  <Link to={`/userprofile/${users._id}`}>
                    <button>Check Profile</button>
                  </Link>
                </Popup>
              </Marker>
            ))}
          <Search />
        </MapContainer>
      </div>
    </div>
  );
}

export default DisplayUsersMap;
