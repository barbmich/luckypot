import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Panel,
  Glyphicon,
  Grid,
} from "react-bootstrap";
import "./CardTest.scss";
import "./MealItem.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import axios from "axios";
import MealChosenNoRecipe from "./MealChosenNoRecipe";

export default function Card_test(props) {
  const { deleteItem, item, user, loggedUser, event } = props;

  const [userAssigned, setUserAssigned] = useState(user || null);

  console.log("from Cardtest");
  console.log(loggedUser.id);
  console.log(event.owner_id);

  function removeItem(id) {
    console.log("removeItem:", id);
    axios
      .delete(`http://localhost:3003/items/remove/${id}`)
      .then(() => deleteItem(id));
  }

  function removeYourself() {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: item.id,
        assigned: null,
      })
      .then(() => {
        setUserAssigned(null);
      });
  }

  function setAssigned(user) {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: item.id,
        assigned: loggedUser.id,
      })
      .then(() => {
        setUserAssigned(loggedUser);
      });
  }

  function Card(props) {
    return <div className="card">{props.children}</div>;
  }

  function Image(props) {
    return (
      <div className="card-image">
        <img src={item.image_url} />
        {props.icon && <Fab icon={props.icon} />}
      </div>
    );
  }

  function Fab(props) {
    return (
      <a className="btn-floating btn-large halfway-fab red">
        <span className={props.icon} aria-hidden="true"></span>
      </a>
    );
  }

  function Content(props) {
    return (
      <div className="card-content">
        <Title text={item.name} />
        <Description text={props.description} />
      </div>
    );
  }

  function Title(props) {
    return <span className="card-title">{props.text}</span>;
  }

  function Description(props) {
    return <p className="card-description">{props.text}</p>;
  }

  return (
    <Card className="meal-unchosen">
      {loggedUser.id === event.owner_id ? (
        <div
          className="testing"
          style={{
            border: "solid",
            position: "relative",
            height: "2em",
            width: "2em",
            top: "1em",
            left: "1em",
            zIndex: 4,
          }}
          onClick={() => removeItem(item.id)}
        >
          X
        </div>
      ) : null}
      <Image />
      {userAssigned ? (
        <>
          <ProfilePic avatar_url={userAssigned.avatar_url} />
          {userAssigned.id === loggedUser.id ? (
            <>
              <Button onClick={() => removeYourself()}>X</Button>
              <MealChosenNoRecipe item={item} />
            </>
          ) : null}
        </>
      ) : (
        <Button onClick={() => setAssigned(loggedUser)}>Click to Bring</Button>
      )}
      <Content />
    </Card>
  );
}
