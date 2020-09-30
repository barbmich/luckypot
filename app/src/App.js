import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState("");
  // let history = useHistory();

  // const authenticateUser = (user) => {
  //   if (typeof user === "object") {
  //     console.log("got here");
  //     const newAuth = !auth;
  //     setAuth(newAuth);
  //     console.log("this is the auth state:", auth);
  //     console.log("history after:", history);
  //     history.push("/");
  //   }
  // };

  function saveLoggedUserInfo(user) {
    setLogin(user);
  }

  return (
    <main>
      <NavBar setAuth={setAuth} saveLoggedUserInfo={saveLoggedUserInfo} />
      {/* <section>
          {mode === HOME && <Home />}
          {mode === SIGNUP && (
            <SignupForm authenticateUser={authenticateUser} />
          )}
          {mode === SIGNIN && <SigninForm />}
        </section> */}
    </main>
  );
}
