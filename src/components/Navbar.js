import doggo_ci_final_6 from "../img/logo/doggo_ci_final_6.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={doggo_ci_final_6} className="nav-logo" />
      </div>
      <div className="navbar-center">
        <ul>
          <li className="kollektif textred">home</li>

          <li className="kollektif textwhite">doggo places</li>
          <li className="kollektif textwhite">doggo sitting</li>
          <li className="kollektif textwhite">community</li>
        </ul>
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
