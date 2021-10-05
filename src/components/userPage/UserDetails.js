import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import axios from "axios";
import { useParams } from "react-router-dom";

import { MdLocationCity, MdPanoramaWideAngle } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFieldNumber } from "react-icons/ai";

import walkingDog from "./9.svg";

function UserDetails({ user }) {
  const [availability, setAvailability] = useState(user.availability);
  const { id } = useParams();

  const onChange = (event) => {
    event.preventDefault();

    const updateUser = {
      availability: !availability,
    };

    axios
      .put(`https://dry-temple-96625.herokuapp.com/users/${id}`, updateUser)
      .then((res) => {
        setAvailability(!availability);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(availability);

  return (
    <div className="userDetails">
      <div className="userDetailsLeft ">
        <img src={user.profilePic} className="profilePic" />

        <div className="userLocation">
          <MdLocationCity className="userPageIcon" />
          <h6 className="textred">{user.city}</h6>
        </div>

        <div className="userEmail">
          <AiOutlineMail className="userPageIcon" />
          <h6 className="textred">{user.email}</h6>
        </div>

        <div className="userNumber">
          <AiOutlineFieldNumber className="userPageIcon" />
          <h6 className="textred">{user.phoneNumber}</h6>
        </div>
      </div>

      <div className="userDetailsMiddle">
        <h3>Hi, my name is {user.username}</h3>
        <h6>about me</h6>
        <p>{user.about}</p>
        <div className="walkingDog">
          <img src="/static/media/9.ba396c01.svg" width="350px" />
        </div>
      </div>

      <div className="userDetailsRight">
        <p>Open to take care of your buddy</p>
        <ToggleButton onChange={onChange} value={availability} />
        {user.tags.map((tag) => (
          <button className={availability ? "openButton" : "closeButton"}>
            {tag.tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
