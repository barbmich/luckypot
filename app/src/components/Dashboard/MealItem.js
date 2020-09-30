import React, { useState } from "react";
import "./MealItem.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

export default function MealItem(props) {
  const { itemID, name, user, currentUser } = props;

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
        assigned: currentUser.id,
      })
      .then(() => {
        setUserAssigned(currentUser);
      });
  }

  return (
    <Card className="meal-unchosen">
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        {userAssigned ? (
          <>
            <ProfilePic avatar_url={userAssigned.avatar_url} />
            {userAssigned.id === currentUser.id ? (
              <Button onClick={() => removeYourself()}>X</Button>
            ) : null}
          </>
        ) : (
          <Button onClick={() => setAssigned(currentUser)}>
            Click Here to bring <strong>{name}</strong>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
// const currentUser = {
//   id: 1,
//   first_name: "Daniel",
//   last_name: "Nascimento",
//   email: "daniel@email.com",
//   avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
// };
