import React, { useState, useEffect } from "react";
import Map from "./Map";
import PlacesHeader from "./PlacesHeader";

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
