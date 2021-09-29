import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import PlacesHeader from "./PlacesHeader";
import "./dogfriendlyPlaces.css";

function Dogfriendlyplaces() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/locations`)
      .then((response) => {
        setLocation(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const newLocation = {
    name: "name",
    address: "address",
    website: "website",
    phone: 234324543,
    lat: 52.54422745190014,
    long: 13.419975829013772,
    type: "614a225fe5ae0efb2d477456",
  };

  const createLocation = () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios
      .post(`https://dry-temple-96625.herokuapp.com/locations`, newLocation)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <PlacesHeader />
      <Map />
      <button onClick={createLocation}>create location</button>
    </div>
  );
}

export default Dogfriendlyplaces;
