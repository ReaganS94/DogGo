import "./App.css";
import "./general-stylesheet.css";

function App() {
  return (
    <div className="App">
      <h1>dogGo this is a title</h1>
      <h2>dogGo this is a title</h2>
      <h3>dogGo this is a title</h3>
      <h4>dogGo this is a title</h4>
      <h5>dogGo this is a title</h5>
      <h6>dogGo this is a title</h6>
      <p className="p1">
        So you can go places together. This is a test paragraph
      </p>
      <p className="p2">
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
  );
}

export default App;
