import Navbar from "../Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <p className="textwhite p1 slogan">So you can go places together</p>

      <a href="#about">
        <button className="button-header p3">learn more</button>
      </a>
    </div>
  );
}

export default Header;
