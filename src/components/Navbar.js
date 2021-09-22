function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h4>dog</h4>
        <h4 className="textyellow">Go</h4>
      </div>
      <div className="navbar-center">
        <ul>
          <li className="kollektif">home</li>

          <li className="kollektif">doggo places</li>
          <li className="kollektif">doggo sitting</li>
          <li className="kollektif">community</li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="kollektif">login</li>

          <li className="kollektif">sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
