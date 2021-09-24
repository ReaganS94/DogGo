import React from "react";
import Navbar from "../Navbar";

function HeaderUserProfile() {
  return (
    <div className="headerUserProfile">
      <Navbar />
      <p className="textwhite p1 slogan">So you can go places together</p>

      <a href="#about">
        <button className="button-header p3">learn more</button>
      </a>
    </div>
  );
}

export default HeaderUserProfile;
