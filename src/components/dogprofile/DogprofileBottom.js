import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function DogprofileBottom() {
  const { id } = useParams();
  const [dogparent, setDogparent] = useState();

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/user/${id}`)
      .then((json) => {
        setDogparent(json.data.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Test</div>;
}

export default DogprofileBottom;
