import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { Provider } from "react-redux"; //allow acces to store
//import { BrowserRouter as Router } from "react-router-dom"; //routes for pages
//import store from "./store";
import App from "./components/App";


// const history = createBrowserHistory();


ReactDOM.render(
        <App />
  ,document.getElementById("root")
);

