import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignupForm from "./components/Sign-up/SignupForm";
import SigninForm from "./components/Sign-in/SigninForm";
import CreateRecipe from "./components/Create-recipe/CreateRecipe";
import CreatePotluck from "./components/Create-potluck/CreatePotluck";
import SearchRecipe from "./components/Search-recipe/SearchRecipe";
import MyFavorites from "./components/My-favorites/MyFavorites";
import MyPotlucks from "./components/My-potlucks/MyPotlucks";
import useVisualMode from "./hooks/useVisualMode";
import Home from "./components/Home/Home";

export default function App() {
  const SIGNUP = "SIGNUP";
  const SIGNIN = "SIGNIN";
  const LOGOUT = "LOGOUT";
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";
  const HOME = "HOME";

  const { mode, transition, back } = useVisualMode(HOME);

  return (
    <main>
      <NavBar transition={transition} />
      <section>
        {mode === HOME && <Home />}
        {mode === SIGNUP && <SignupForm />}
        {mode === SIGNIN && <SigninForm />}
      </section>
    </main>
  );
}
