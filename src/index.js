import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
/*
To install material UI icon:-
npm install @mui/material @emotion/react @emotion/styled
*/ 
ReactDOM.render(
  <>
    <HashRouter>
      <App />
    </HashRouter>
  </>,
  document.getElementById("root")
);
