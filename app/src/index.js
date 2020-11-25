import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

ReactDOM.render(<App />, document.getElementById("root"));
