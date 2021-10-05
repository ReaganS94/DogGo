import React, { useState, useEffect } from "react";
import Map from "./Map";
import PlacesHeader from "./PlacesHeader";
import DisplayUsersMap from "./DisplayUsersMap";
import "./dogfriendlyPlaces.css";

function Dogfriendlyplaces() {
  return (
    <div>
      <PlacesHeader />
      <Map />
    </div>
  );
}

export default Dogfriendlyplaces;

// https://mui.com/components/portal/#main-content
// https://www.youtube.com/watch?v=cK7zIoC4lEY
