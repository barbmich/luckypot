import React from "react";
import "./Home.scss";

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="homeTitle">Welcome to LuckyPot</h1>
      <div className="homeContent">
        <h2>Your home for Potluck planning</h2>
        <div className="btnHome">
          <span className="noselect">Register Here</span>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
