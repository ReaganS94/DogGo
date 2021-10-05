import doggoLogo from "../img/logo/doggoLogo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img
          src="/static/media/doggoLogo.d2be4059.png"
          className="nav-logo"
          alt="nav-logo"
        />
      </div>
      <div className="navbar-center">
        <ul>
          <NavLink to="/">
            <li className="kollektif textwhite">home</li>
          </NavLink>

          <NavLink to="/dogfriendlyplaces">
            <li className="kollektif textwhite">doggo places</li>{" "}
          </NavLink>
          <NavLink to="/dogsitting">
            <li className="kollektif textwhite">doggo sitting</li>{" "}
          </NavLink>
          <NavLink to="/community">
            <li className="kollektif textwhite">community</li>{" "}
          </NavLink>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <NavLink to="/signin">
            <li className="kollektif nav-login textwhite">login</li>
          </NavLink>
          <NavLink to="/signup">
            <li className="kollektif nav-signup textwhite">sign up</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
