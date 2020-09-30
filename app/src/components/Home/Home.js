import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="homeTitle">Welcome to LuckyPot</h1>
      <div className="homeContent">
        <h2>Your home for Potluck planning</h2>
        <div className="btnHome">
          <Link className="link" to="/SignupForm">
            <span className="noselect">Register Here</span>
          </Link>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
