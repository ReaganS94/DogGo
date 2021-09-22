import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./fonts/Gidole-Regular.ttf";
import "./fonts/Kollektif-Bold.ttf";
import "./fonts/Kollektif-BoldItalic.ttf";
import "./fonts/Kollektif-Italic.ttf";
import "./fonts/Kollektif.ttf";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
