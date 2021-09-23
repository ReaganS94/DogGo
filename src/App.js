import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dogfriendlyplaces from "./components/Dogfriendlyplaces";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*----------STYLESHEETS----------*/
import "./components/Header.css";
import "./components/Navbar.css";
import "./App.css";
import "./general-stylesheet.css";
import "./components/Home.css";

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
