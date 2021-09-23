import doggo_ci_final_6 from "../img/logo/doggo_ci_final_6.png";
import { Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={doggo_ci_final_6} className="nav-logo" />
      </div>
      <div className="navbar-center">
        <Switch>
          <ul>
            <li>
              <Link to="/" className="kollektif textred">
                home
              </Link>
            </li>
            <li>
              <Link to="/dogfriendlyplaces" className="kollektif textwhite">
                doggo places
              </Link>
            </li>
            <li className="kollektif textwhite">doggo sitting</li>
            <li className="kollektif textwhite">community</li>
          </ul>
        </Switch>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="kollektif nav-login textwhite">login</li>

          <li className="kollektif nav-signup textwhite">sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
