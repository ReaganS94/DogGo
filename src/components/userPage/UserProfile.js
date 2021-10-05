import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";
import HeaderUserProfile from "./HeaderUserProfile";
import ConnectedDogs from "./ConnectedDogs";
import UserDetails from "./UserDetails";

import { Link } from "react-router-dom";

import Loader from "react-loader-spinner";

function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/users/${id}`)
      .then((json) => {
        setUser(json.data.data);
        console.log("user", json.data.data);
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
    <div className="userProfile">
      <HeaderUserProfile />
      <UserDetails user={user} />
      <ConnectedDogs dog={user.dog} />

      {console.log(user.dog)}
      <Link to="/createdog">
        <button className="adddoggobutton">add new dog</button>
      </Link>
    </div>
  );
}

export default UserProfile;
