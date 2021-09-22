import Header from "./components/Header";
import Footer from "./components/Footer";
import Dogfriendlyplaces from "./components/Dogfriendlyplaces";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./components/Header.css";
import "./components/Navbar.css";
import "./App.css";
import "./general-stylesheet.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dogfriendlyplaces">
          <Dogfriendlyplaces />
        </Route>
      </Switch>
      <div className="App">
        <h1 className="textyellow">dogGo this is a title</h1>
        <h2 className="textred">dogGo this is a title</h2>
        <h3 className="textblue">dogGo this is a title</h3>
        <h4>dogGo this is a title</h4>
        <h5 className="backgroundblue textwhite">dogGo this is a title</h5>
        <h6>dogGo this is a title</h6>
        <p className="p1">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p2 backgroundred textwhite">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p3">
          So you can go places together. This is a test paragraph
        </p>
        <p className="p4">
          So you can go places together. This is a test paragraph
        </p>
        <button>Click me</button>
        <button className="buttonblue">Click me</button>
        <ol>
          Test
          <li>Testlink</li>
        </ol>
        <ul>
          Test
          <a href="www.google.com">
            <li>Testlink</li>
          </a>
        </ul>
      </div>
      <div className="backgroundred textwhite">Background red</div>
      <div className="backgroundblue textwhite">Background blue</div>
      <div className="backgroundyellow">Background yellow</div>
      <Footer />
    </Router>
  );
}

export default App;
