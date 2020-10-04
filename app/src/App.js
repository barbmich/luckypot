import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignupForm from "./components/Sign-up/SignupForm";
import SigninForm from "./components/Sign-in/SigninForm";
import CreatePotluck from "./components/Create-potluck/CreatePotluck";
import MyFavorites from "./components/My-favorites/MyFavorites";
import MyPotlucks from "./components/My-potlucks/MyPotlucks";
import MyRecipes from "./components/My-recipes/MyRecipes";
import Recipe from "./components/Recipe/Recipe";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );
  const [auth, setAuth] = useState(loggedUser ? true : false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  }, [loggedUser]);

  return (
    <Router>
      <main>
        <NavBar
          loggedUser={loggedUser}
          auth={auth}
          setLoggedUser={setLoggedUser}
          setAuth={setAuth}
        />
        <section>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={() => <Home auth={auth} />} />
            <Route
              path="/mypotlucks"
              component={() =>
                auth ? (
                  <MyPotlucks loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              path="/dashboard/:id"
              component={() =>
                auth ? (
                  <Dashboard loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              path="/signup"
              component={() => (
                <SignupForm setLoggedUser={setLoggedUser} setAuth={setAuth} />
              )}
            />
            <Route
              path="/signin"
              component={() => (
                <SigninForm setLoggedUser={setLoggedUser} setAuth={setAuth} />
              )}
            />
            <Route
              path="/myrecipes"
              component={() =>
                auth ? (
                  <MyRecipes loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route path="/myfavorites">
              <MyFavorites loggedUser={loggedUser} />
            </Route>
            <Route
              path="/create"
              component={() =>
                auth ? (
                  <CreatePotluck loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              path="/search"
              component={() =>
                auth ? (
                  <Search loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              path="/recipe/:recipe_id"
              component={() =>
                auth ? (
                  <Recipe loggedUser={loggedUser} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route path="*">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div>404 Page Not Found</div>
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}
