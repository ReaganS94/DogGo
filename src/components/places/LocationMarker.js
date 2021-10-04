import L from "leaflet";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import axios from "axios";

function LocationMarker({ setShouldFetch }) {
  const GEOCODE_URL =
    "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  // const [newLocation, setNewLocation] = useState(null);

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [type, setType] = useState("");

  const typeSelected = {
    bar: "614a226be5ae0efb2d477457",
    cafe: "6151f2800dd9391391bd082b",
    restaurant: "614a225fe5ae0efb2d477456",
    park: "614a2275e5ae0efb2d477458",
  };

  const myMap = useMap();

  const map = useMapEvents({
    async click(e) {
      const newMarker = await axios.get(
        GEOCODE_URL + `${e.latlng.lng},${e.latlng.lat}`
      );

      const { Postal, Address, City } = newMarker.data.address;

      setMarkers([
        ...markers,
        { Postal, Address, City, lat: e.latlng.lat, lng: e.latlng.lng },
      ]);
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);
      setAddress(Address + " " + Postal + " " + City);
      console.log(newMarker.data.address);
    },
  });

  useEffect(() => {
    myMap.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      // myMap.flyTo(e.latlng, myMap.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(myMap);
    });
  }, [map]);

  // useEffect(() => {
  //   axios
  //     .get(`https://dry-temple-96625.herokuapp.com/locations`)
  //     .then((response) => {
  //       setNewLocation(response.data);
  //       setShouldFetch(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const addNewLocation = {
    name: name,
    website: website,
    phone: "Tel: " + phone,
    address: address,
    LatLng: {
      lat: lat,
      lng: lng,
    },
    type: type,
  };

  function refreshPage() {
    window.location.reload();
  }

  function submit(e) {
    e.preventDefault();
    console.log({
      name: name,
      website: website,
      phone: "Tel: " + phone,
      address: address,
      LatLng: {
        lat: lat,
        lng: lng,
      },
      type: type,
    });
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios
      .post(`https://dry-temple-96625.herokuapp.com/locations`, addNewLocation)
      .then(alert("Location Successfully Saved"))
      .then(refreshPage);
  }

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
      <div>
        {markers.map((marker) => (
          <Marker position={marker} key={marker.lat + marker.lng}>
            <Popup>
              {marker.Address}, {marker.Postal}, {marker.City}
              <form onSubmit={(e) => submit(e)}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="name"
                  value={name}
                  id="name"
                ></input>
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  type="text"
                  placeholder="website"
                  value={website}
                  id="website"
                ></input>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="phone"
                  value={phone}
                  id="phone"
                ></input>
                <br />
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value={typeSelected.bar}
                  id="bar"
                  name="type"
                ></input>
                <label htmlFor="bar">Bar</label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value={typeSelected.cafe}
                  id="cafe"
                  name="type"
                ></input>
                <label htmlFor="cafe">Cafe</label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value={typeSelected.restaurant}
                  id="restaurant"
                  name="type"
                ></input>
                <label htmlFor="restaurant">Restaurant</label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value={typeSelected.park}
                  id="park"
                  name="type"
                ></input>
                <label htmlFor="park">Park</label>
                <br />
                <button>Submit</button>
              </form>
            </Popup>
          </Marker>
        ))}
      </div>
    </>
  );
}

export default LocationMarker;
