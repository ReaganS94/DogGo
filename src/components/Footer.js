import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Footer.css";

import logo from "../img/logo/logo_redyellow.png";

function Footer() {
  return (
    <>
      <div className="footer effect7">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>join the community</p>
        </div>
        <div className="footerContent">
          <div className="socialMedia">
            <TiSocialFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <TiSocialTwitter className="icon" />
            <TiSocialPinterest className="icon" />
          </div>
          <div className="footerInfo">
            <p>Copyright &copy; 2021</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
