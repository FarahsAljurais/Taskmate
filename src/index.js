import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { App } from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //StricMode -->  It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
