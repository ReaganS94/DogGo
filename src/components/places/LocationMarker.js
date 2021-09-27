import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import icon from "./constants";
// import "leaflet/dist/leaflet.css";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
