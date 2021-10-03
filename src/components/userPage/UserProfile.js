import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";
import HeaderUserProfile from "./HeaderUserProfile";
import ConnectedDogs from "./ConnectedDogs";
import UserDetails from "./UserDetails";
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
    return <p>Data is loading...</p>;
  }

  return (
    <div className="userProfile">
      <HeaderUserProfile />
      <UserDetails user={user} />
      <ConnectedDogs dog={user.dog} />

      {console.log(user.dog)}
    </div>
  );
}

export default UserProfile;
