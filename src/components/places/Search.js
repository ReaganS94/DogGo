import { useMap } from "react-leaflet";
import { useEffect } from "react";
import * as GeoSearch from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
function Search() {
  const map = useMap();

  useEffect(() => {
    const search = new GeoSearch.GeoSearchControl({
      provider: new GeoSearch.OpenStreetMapProvider(),
    });

    map.addControl(search);
  }, []);

  return null;
}

export default Search;
