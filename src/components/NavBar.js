import React from "react";
import "./NavBar.scss";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-default navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            LuckyPot
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">
                  {" "}
                  <span className="glyphicon glyphicon-heart"></span> My Recipes
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <span className="glyphicon glyphicon-tag"></span> My Potlicks{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="glyphicon glyphicon-envelope"></span> My
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/create">
              <button type="button" id="postBtn" className="btn btn-warning">
                Create Potluck
              </button>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-log-out"></span> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
