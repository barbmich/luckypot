import React, { useState } from "react";
import "./MealItem.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import axios from "axios";
import MealChosenNoRecipe from "./MealChosenNoRecipe";

export default function MealItem(props) {
  const { item, name, user, loggedUser } = props;

  const [userAssigned, setUserAssigned] = useState(user || null);

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

  function setAssigned() {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: item.id,
        assigned: loggedUser.id,
      })
      .then(() => {
        setUserAssigned(loggedUser);
      });
  }

  return (
    <Card className="meal-unchosen">
      <Card.Title>{name}</Card.Title>
      {item.image_url && (
        <Image width={80} height={80} roundedCircle src={item.image_url} />
      )}
      <Card.Body>
        {userAssigned ? (
          <>
            <ProfilePic avatar_url={userAssigned.avatar_url} />
            {userAssigned.id === loggedUser.id ? (
              <>
                <Button onClick={() => removeYourself()}>Bring something else?</Button>
                <MealChosenNoRecipe item={item} />
              </>
            ) : null}
          </>
        ) : (
          <Button onClick={() => setAssigned()}>Click to Bring</Button>
        )}
      </Card.Body>
    </Card>
  );
}
