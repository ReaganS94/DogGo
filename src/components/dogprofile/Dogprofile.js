import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import DogAbout from "./DogAbout";
import DogArrays from "./DogArrays";
import DogBooleans from "./DogBooleans";
import DogGallery from "./DogGallery";

import Navbar from "../Navbar";

function Dogprofile() {
  const { id } = useParams();
  const [dog, setDog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/dogs/${id}`)
      .then((response) => {
        setDog(response.data.data);
      })
      .catch((err) => console.log(err))
      .then((res) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //5 secs
      />
    );
  }
  return (
    <>
      <div className="headerdogprofile" id="dogprofiletop">
        <Navbar />
        <p className="textwhite p1 slogan">So you can go places together</p>
      </div>

      {dog && (
        <div className="dogprofile-container">
          <div>
            <DogAbout dog={dog} />
            <DogBooleans dog={dog} />
            <DogArrays dog={dog} />
            <DogGallery dog={dog} />
          </div>
        </div>
      )}
    </>
  );
}

export default Dogprofile;
