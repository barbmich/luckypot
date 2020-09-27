import React, { useState } from "react";
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
  const [state, setState] = useState({
    name: "",
    greetings: "",
  });

  const LOGIN = "LOGIN";
  const LOGOUT = "LOGOUT";
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";

  const { mode, transition, back } = useVisualMode(true ? SHOW : EMPTY);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log("this works");
  //   fetch(`/api/greeting?name=${encodeURIComponent(state.name)}`)
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((state) => {
  //       console.log(state);
  //       return setState(state);
  //     });
  // };

  return (
    <main>
      <NavBar />
      <section>
        <Home />
        {/* <MyPotlucks /> */}
      </section>
    </main>
  );
}
