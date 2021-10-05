import Navbar from "../Navbar";
import "./AllDogs.css";
import { createTheme, styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

function AllUsers() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/users/`)
      .then((response) => {
        setUsers(response.data.data);
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
      <div className="header-alldogs">
        <Navbar />
      </div>
      <div className="headline-alldogs">
        <h2 className="textred ">all doggo-friends in your area</h2>
      </div>

      <div>
        <ImageList
          className="imagelist-alldogs"
          sx={{ width: 900 }}
          gap={8}
          cols={3}
          style={{ overflow: "hidden" }}
        >
          {users.map((user) => (
            <ImageListItem key={user.profilePic}>
              <img src={user.profilePic} alt={user.username} loading="lazy" />
              <ImageListItemBar
                title={user.username}
                position="below"
                subtitle={`${user.city} `}
                actionIcon={
                  <Link to={`/userprofile/${user._id}`}>
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

export default AllUsers;
