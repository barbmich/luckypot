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
    history.push("/Home");
  };

  return (
    <Router>
      <div className="completeNav">
        <Navbar bg="dark" expand="lg">
          <Link to="/Home">
            <Navbar.Brand className="mainTitle"> LuckyPot </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="rightButtons">
              <Nav className="mr-auto"></Nav>
              <div className="welcomeMsg">
                {auth && `Welcome ${loggedUser.first_name}`}
              </div>
              {!auth && (
                <Link className="link-nav" to="/SignupForm">
                  Register
                </Link>
              )}
              {!auth && (
                <Link className="link-nav" to="/SigninForm">
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
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/MyPotlucks">My Potlucks</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/MyRecipes">My Recipes</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link to="/MyFavorites">My Favorites</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/SignupForm">
            <SignupForm setAuth={setAuth} setLoggedUser={setLoggedUser} />
          </Route>
          <Route exact path="/SigninForm">
            <SigninForm
              setLoggedUser={setLoggedUser}
              loggedUser={loggedUser}
              setAuth={setAuth}
            />
          </Route>
          <Route exact path="/MyPotlucks">
            <MyPotlucks />
          </Route>
          <Route path="/MyRecipes">
            <MyRecipes loggedUser={loggedUser} />
          </Route>
          <Route path="/MyFavorites">
            <MyFavorites loggedUser={loggedUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
