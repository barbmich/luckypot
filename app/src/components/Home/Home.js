import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home(props) {
  const { auth } = props;

  return (
    <div className="home">
      <h1 className="homeTitle">Welcome to LuckyPot</h1>
      <div className="homeContent">
        <h2>Your home for Potluck planning</h2>
        {auth ? (
          <div className="btnHome">
            <Link className="link" to="/create">
              <span className="noselect">Create your potluck</span>
            </Link>
            <div className="circle"></div>
          </div>
        ) : (
          <div className="btnHome">
            <Link className="link" to="/signup">
              <span className="noselect">Register Here</span>
            </Link>
            <div className="circle"></div>
          </div>
        )}
      </div>
    </div>
  );
}
