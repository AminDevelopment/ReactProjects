import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import "./index.css";
import App from "./App";
/* BrowserRouter creates URls in form: http://localhost:3000/route/subroute */


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
