import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import DogAbout from "./DogAbout";
import DogArrays from "./DogArrays";
import DogBooleans from "./DogBooleans";

import Navbar from "../Navbar";

function Dogprofile({ dogs }) {
  const { id } = useParams();
  const [dog, setDog] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/dogs/${id}`)
      .then((json) => {
        setDog(json.data.data);
        console.log("dog", json.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="headerdogprofile">
        <Navbar />
        <p className="textwhite p1 slogan">So you can go places together</p>
      </div>

      <div className="dogprofile-container">
        {dogs
          .filter((dog) => dog._id === id)
          .map((dog) => (
            <div>
              <DogAbout dogs={dogs} />
              <DogBooleans dogs={dogs} />
              <DogArrays dogs={dogs} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Dogprofile;
