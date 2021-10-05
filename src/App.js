import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Dogfriendlyplaces from "./components/places/Dogfriendlyplaces";
import UserProfile from "./components/userPage/UserProfile";
import Dogprofile from "./components/dogprofile/Dogprofile";
import CreateDog from "./components/createdog/CreateDog";
import SignIn from "./components/signIn&Up/SignIn";
import SignUp from "./components/signIn&Up/SignUp";
import AllDogs from "./components/allprofiles/AllDogs";
import AllUsers from "./components/allprofiles/AllUsers";
import DisplayUsersMap from "./components/places/DisplayUsersMap";
import Community from "./components/allprofiles/Community";
import ScrollTop from "./ScrollTop";

// import axios from "axios";
// import { useEffect, useState } from "react";
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
  return (
    <Router>
      <ScrollTop />
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
          <Dogprofile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/createdog">
          <CreateDog />
        </Route>
      </Switch>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Switch>
        <Route path="/alldogs">
          <AllDogs />
        </Route>
      </Switch>
      <Switch>
        <Route path="/allusers">
          <AllUsers />
        </Route>
      </Switch>
      <Switch>
        <Route path="/dogsitting">
          <DisplayUsersMap />
        </Route>
      </Switch>
      <Switch>
        <Route path="/community">
          <Community />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
