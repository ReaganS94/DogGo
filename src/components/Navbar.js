import doggo_ci_final_6 from "../img/logo/doggo_ci_final_6.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={doggo_ci_final_6} className="nav-logo" />
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
          <NavLink to="/login">
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
