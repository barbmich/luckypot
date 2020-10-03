import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  useHistory,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import MyFavorites from "./My-favorites/MyFavorites";
import MyRecipes from "./My-recipes/MyRecipes";
import Home from "./Home/Home";
import MyPotlucks from "./My-potlucks/MyPotlucks";
import SignupForm from "./Sign-up/SignupForm";
import SigninForm from "./Sign-in/SigninForm";
import "./NavBar.scss";

export default function NavBar(props) {
  const { auth, setAuth, loggedUser, setLoggedUser } = props;
  let history = useHistory();

  const clearLogin = (user) => {
    setAuth((prev) => !prev);
    setLoggedUser("");
    history.push("/home");
  };

  return (
    <div className="completeNav">
      <Navbar bg="dark" expand="lg">
        <Link to="/home">
          <Navbar.Brand className="mainTitle"> LuckyPot </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="rightButtons">
            <Nav className="mr-auto"></Nav>
            <div className="welcomeMsg">
              {auth && `Welcome ${loggedUser.first_name}`}
            </div>
            {auth && (
              <Link to="/search" className="link-nav">
                Search Recipes
              </Link>
            )}
            {auth && (
              <Link to="/create" className="link-nav">
                Create Potluck
              </Link>
            )}
            {!auth && (
              <Link className="link-nav" to="/signup">
                Register
              </Link>
            )}
            {!auth && (
              <Link className="link-nav" to="/signin">
                Login
              </Link>
            )}
            {auth && (
              <Nav.Link className="link-nav" onClick={() => clearLogin()}>
                Logout
              </Nav.Link>
            )}
            <div className="link-nav-dropdown">
              <NavDropdown title="My Features" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/mypotlucks">My Potlucks</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/myrecipes">My Recipes</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/myfavorites">My Favorites</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/dashboard/${loggedUser.id}`}>MOCKDASHBOARD</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
