import React, { useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Home(props) {
  const { auth } = props;
  const [urlGiven, setUrlGiven] = useState("");

  return (
    <div className="home">
      <h1 className="homeTitle">Welcome to LuckyPot</h1>
      <div className="homeContent">
        <h2>Your home for Potluck planning</h2>
        <Form.Control
          value={urlGiven}
          onChange={(event) => setUrlGiven(event.target.value)}
          type="text"
          placeholder="Enter Potluck URL"
          className="urlForm"
        />
        <Link
          to={{
            pathname: auth ? urlGiven.slice(21) : "/signin",
            state: urlGiven ? { urlGiven: urlGiven.slice(21) } : null,
          }}
        >
          <Button>Submit</Button>
        </Link>
        {auth ? (
          <div className="btnHome">
            <Link className="link" to="/create">
              <span className="noselect">Create your potluck</span>
            </Link>
            <div className="circle"></div>
          </div>
        ) : (
          <div>
            <div className="btnHome">
              <Link className="link" to="/signup">
                <span className="noselect">Register Here</span>
              </Link>
              <div className="circle"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
