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
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  const SIGNUP = "SIGNUP";
  const SIGNIN = "SIGNIN";
  const LOGOUT = "LOGOUT";
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";
  const HOME = "HOME";

  const { mode, transition, back } = useVisualMode(HOME);
  const [auth, setAuth] = useState(false);
  const [event, setEvent] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);

  function authenticateUser(user) {
    if (typeof user === "object") {
      console.log("got here");
      const newAuth = !auth;
      setAuth(newAuth);
    }
  }

  return (
    <main>
      <NavBar />
      <section>
        <CreatePotluck />
      </section>
    </main>
  );
}
