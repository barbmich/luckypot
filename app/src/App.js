import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignupForm from "./components/Sign-up/SignupForm";
import SigninForm from "./components/Sign-in/SigninForm";
import CreateRecipe from "./components/Create-recipe/CreateRecipe";
import CreatePotluck from "./components/Create-potluck/CreatePotluck";
import SearchRecipe from "./components/Search-recipe/SearchRecipe";
import MyFavorites from "./components/My-favorites/MyFavorites";
import MyPotlucks from "./components/My-potlucks/MyPotlucks";
import MyRecipes from "./components/My-recipes/MyRecipes";
import useVisualMode from "./hooks/useVisualMode";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  const [event, setEvent] = useState({});
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);
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
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          setAuth={setAuth}
        />
        <section>
          <Route exact="/">
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
              auth ? <Dashboard loggedUser={loggedUser} /> : <Redirect to="/" />
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
        </section>
      </main>
    </Router>
  );
}
