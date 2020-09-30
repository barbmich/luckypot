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
  const [event, setEvent] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);
  const [login, setLogin] = useState("");

  function saveLoggedUserInfo(user) {
    setLogin(user);
  }

  return (
    <main>
      <NavBar
        auth={auth}
        setAuth={setAuth}
        saveLoggedUserInfo={saveLoggedUserInfo}
      />
    </main>
  );
}
