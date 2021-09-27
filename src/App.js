import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Dogfriendlyplaces from "./components/places/Dogfriendlyplaces";
import UserProfile from "./components/userPage/UserProfile";
import Dogprofile from "./components/dogprofile/Dogprofile";

import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*----------STYLESHEETS----------*/
import "../src/components/home/Header.css";
import "./components/Navbar.css";
import "./App.css";
import "./general-stylesheet.css";
import "../src/components/home/Home.css";
import "../src/components/userPage/HeaderUserProfile.css";
import "../src/components/dogprofile/Dogprofile.css";

function App() {
  const [dogs, setDogs] = useState("");

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/dogs`)
      .then((response) => {
        setDogs(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  if (!dogs) return null;

  return (
    <Router>
      <Switch>
        <Route path="/dogfriendlyplaces">
          <Dogfriendlyplaces />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/userprofile/:id">
          <UserProfile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/dogprofile/:id">
          <Dogprofile dogs={dogs} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
