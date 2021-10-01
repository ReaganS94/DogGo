import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import DogAbout from "./DogAbout";
import DogArrays from "./DogArrays";
import DogBooleans from "./DogBooleans";
import DogGallery from "./DogGallery";

import Navbar from "../Navbar";

function Dogprofile() {
  const [dog, setDog] = useState();
  const { id } = useParams();

  console.log("test");

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/dogs/${id}`)
      .then((response) => {
        setDog(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const newDog = {
    name: "doggy",
    breed: "not chiwawa",
    size: 10,
    age: 1,
    about: "fucken godzilla",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTE51yhSXc4CQnu1crf-pT2G71SGM1O0f631F0XHSW6TDvg9XKhEThaoX_X2A5Ojvc-Bc&usqp=CAU",
    castrated: false,
    user: "614b3794e77beb2519343a3c",
    kidFriendly: false,
    catFriendly: false,
    allergies: false,
    character: ["614a39d25f04d20f05cad5e5", "614a39de5f04d20f05cad5e6"],
  };

  const createDog = () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios
      .post(`http://localhost:5000/dogs`, newDog)
      .then((response) => {
        setDog(response.data.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

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
            <button onClick={createDog}>create dog</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dogprofile;
