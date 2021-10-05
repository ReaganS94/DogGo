import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationsList from "./LocationsList";
import Search from "./Search";
import axios from "axios";



// material UI elements

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ParkIcon from '@mui/icons-material/Park';
import ListItemText from '@mui/material/ListItemText';


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
     <List 
        style={{
        width: '100%',
        maxWidth: 360,
        marginTop: '0.5rem',
        marginLeft: '1rem', 
        marginRight: 0
        }}
       >
        <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#DC3C4D" }}>
            <LocalBarIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
        <label htmlFor="bar">Bar</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.bar}
          name="placeType"
          id="typeBar"
          checked={locationFilter === placeType.bar}
        ></input>
        </ListItemText>
        </ListItem>
     
        <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#DC3C4D" }}>
            <LocalCafeIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
        <label htmlFor="cafe">Cafe</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.cafe}
          name="placeType"
          id="typeCafe"
          checked={locationFilter === placeType.cafe}
        ></input>
        </ListItemText>
        </ListItem>

        <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#DC3C4D" }}>
            <RestaurantIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
        <label htmlFor="restaurant">Restaurant</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.restaurant}
          name="placeType"
          id="typeRestaurant"
          checked={locationFilter === placeType.restaurant}
        ></input>
        </ListItemText>
        </ListItem>

        <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#DC3C4D" }}>
            <ParkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
        <label htmlFor="park">Park</label>
        <input
          onChange={(e) => setLocationFilter(e.target.value)}
          type="radio"
          value={placeType.park}
          name="placeType"
          id="typePark"
          checked={locationFilter === placeType.park}
        ></input>
        </ListItemText>
        </ListItem>

        <button onClick={handleClick} className="addNewLocationBtn">Add a new location</button>
      
      </List>


    

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
