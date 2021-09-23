import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PlacesHeader from "./components/places/PlacesHeader";
import Dogfriendlyplaces from "./components/places/Dogfriendlyplaces";
import UserProfile from "./components/userPage/UserProfile"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*----------STYLESHEETS----------*/
import "./components/Header.css";
import "./components/Navbar.css";
import "./App.css";
import "./general-stylesheet.css";
import "./components/Home.css";
import "./components/userPage/HeaderUserProfile.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dogfriendlyplaces">
          <PlacesHeader />
          <Dogfriendlyplaces />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
