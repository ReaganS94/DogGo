import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import PlacesHeader from "./PlacesHeader";
import "./dogfriendlyPlaces.css";

function Dogfriendlyplaces() {
  return (
    <div>
      <PlacesHeader />
      <Map />
      {/* <button onClick={createLocation}>create location</button> */}
    </div>
  );
}

export default Dogfriendlyplaces;

// https://mui.com/components/portal/#main-content
// https://www.youtube.com/watch?v=cK7zIoC4lEY
