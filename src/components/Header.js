import doggo_ci_final_6 from "../img/logo/doggo_ci_final_6.png";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <p className="textwhite p1 slogan">So you can go places together</p>
      <button className="button-header">learn more</button>
    </div>
  );
}

export default Header;
