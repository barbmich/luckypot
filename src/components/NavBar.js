import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.scss";

export default function NavBar(props) {
  return (
    <div className="completeNav">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="mainTitle" href="#home">
          LuckyPot
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="rightButtons">
            <Nav className="mr-auto"></Nav>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
            <NavDropdown title="My Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Potlucks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Recipes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Favorites
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
