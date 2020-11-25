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
// Card
// Card.Image
// Card.Fab
// Card.Content
// Card.Title
// Card.Description
export default function Card_test(props) {
  const { item, name, user, loggedUser } = props;

  const [userAssigned, setUserAssigned] = useState(user || null);

  const recipeBtn = {
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20px",
    width: "12rem",
  };

  function removeYourself() {
    axios
      .put(`/items/update`, {
        item: item.id,
        assigned: null,
      })
      .then(() => {
        setUserAssigned(null);
      });
  }

  function setAssigned(user) {
    axios
      .put(`/items/update`, {
        item: item.id,
        assigned: loggedUser.id,
      })
      .then(() => {
        setUserAssigned(loggedUser);
      });
  }

  // function Card(props) {
  //   return <div className="card-meal">{props.children}</div>;
  // }

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

  // function Content(props) {
  //   return (
  //     <div className="card-content">
  //       <Title text={item.name} />
  //       {/* <Description text={props.description} /> */}
  //     </div>
  //   );
  // }

  function Title(props) {
    return <span className="card-title">{props.text}</span>;
  }

  // function Description(props) {
  //   return <p className="card-description">{props.text}</p>;
  // }
  const style = {
    width: "20rem",
    margin: "5px",
    height: "35rem",
  };

  const cancelStyle = {
    width: "20rem",
    margin: "5px",
    height: "35rem",
  };

  console.log("ITEM", item);

  return (
    <Card style={style}>
      <Card.Img
        style={{
          height: "150px",
          objectFit: "cover",
        }}
        variant="top"
        src={
          item.image_url
            ? item.image_url
            : "https://i.ibb.co/VtKzBZt/unassigned14.png"
        }
      />
      <Card.Title>{item.name}</Card.Title>
      <div
        className="test"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {userAssigned ? (
          <>
            <ProfilePic avatar_url={userAssigned.avatar_url} />
            {userAssigned.id === loggedUser.id ? (
              <>
                <MealChosenNoRecipe item={item} />
                <Button style={recipeBtn} onClick={() => removeYourself()}>
                  Cancel
                </Button>
              </>
            ) : null}
          </>
        ) : (
          <Button onClick={() => setAssigned(loggedUser)}>
            Click to Bring
          </Button>
        )}
      </div>
    </Card>
  );
}
