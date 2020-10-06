import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
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
                <NavDropdown.Item href="/mypotlucks">
                  My Potlucks
                </NavDropdown.Item>
                <NavDropdown.Item href="/myrecipes">
                  My Recipes
                </NavDropdown.Item>
                <NavDropdown.Item href="/myfavorites">
                  My Favorites
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
