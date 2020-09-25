import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{state.greeting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
