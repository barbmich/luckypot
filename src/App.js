import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App(props) {
  const [state, setState] = useState({
    name: "",
    greetings: "",
  });

  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const handleChange = (event) => {
    setState({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("this works");
    fetch(`/api/greeting?name=${encodeURIComponent(state.name)}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((state) => {
        console.log(state);
        return setState(state);
      });
  };

  return (
    <NavBar />
  );
}
