import Navbar from "../Navbar";
import "./AllDogs.css";
import { createTheme, styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

function AllDogs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/dogs/`)
      .then((response) => {
        setDogs(response.data.data);
      })
      .catch((err) => console.log(err))
      .then((res) => {
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <p>Data is loading...</p>;
  // }

  return (
    <>
      {/* <div className="header-alldogs">
        <Navbar />
      </div> */}
      <div className="headline-alldogs">
        <h2 className="textred ">all doggos in your area</h2>
      </div>

      <div>
        <ImageList
          className="imagelist-alldogs"
          sx={{ width: 900 }}
          gap={8}
          cols={3}
          style={{ overflow: "hidden" }}
        >
          {dogs.map((dog) => (
            <ImageListItem key={dog.profilePic}>
              <img src={dog.profilePic} alt={dog.name} loading="lazy" />
              <ImageListItemBar
                title={dog.name}
                position="below"
                subtitle={`${dog.breed}, ${dog.age} years old`}
                actionIcon={
                  <Link to={`/dogprofile/${dog._id}`}>
                    <button>see profile</button>
                  </Link>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="buttondiv">
        <button
          style={{ margin: 0 + "auto" }}
          onClick={scrollToTop}
          className="buttonbacktop"
        >
          back to top
        </button>
      </div>
    </>
  );
}

export default AllDogs;
