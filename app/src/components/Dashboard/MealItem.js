import React, { useState } from "react";
import "./MealItem.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

export default function MealItem(props) {
  const { itemID, name, user, loggedUser } = props;

  const [userAssigned, setUserAssigned] = useState(user || null);

  function removeYourself() {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: itemID,
        assigned: null,
      })
      .then(() => {
        setUserAssigned(null);
      });
  }

  function setAssigned(user) {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: itemID,
        assigned: loggedUser.id,
      })
      .then(() => {
        setUserAssigned(loggedUser);
      });
  }

  return (
    <Card className="meal-unchosen">
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        {userAssigned ? (
          <>
            <ProfilePic avatar_url={userAssigned.avatar_url} />
            {userAssigned.id === loggedUser.id ? (
              <Button onClick={() => removeYourself()}>X</Button>
            ) : null}
          </>
        ) : (
          <Button onClick={() => setAssigned(loggedUser)}>
            Click Here to bring <strong>{name}</strong>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
