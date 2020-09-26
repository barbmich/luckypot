import React from "react"
import "./NavBar.scss"

export default function NavBar(props) {
  return (
    <nav class="navbar navbar-default navbar-custom">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">LuckyPot</a>
        </div>
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-menu-hamburger"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/"> <span class="glyphicon glyphicon-heart"></span>     My Recipes</a></li>
                  <li><a href="/"> <span class="glyphicon glyphicon-tag"></span>     My Potlicks </a></li>
                  <li><a href="/"><span class="glyphicon glyphicon-envelope"></span>     My History</a></li>
                </ul>
              </li>
              <li><a href="/create"><button type="button" id="postBtn" class="btn btn-warning">Create Potluck</button></a></li>
            </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><span class="glyphicon glyphicon-log-in"></span>     Login</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-user"></span>     Sign Up</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-log-out"></span>     Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}