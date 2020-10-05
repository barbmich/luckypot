import React from "react";
import { Media, Card } from "react-bootstrap";
import ProfilePic from "./ProfilePicture/ProfilePic";
import "./GuestList.scss";
import classnames from "classnames";

export default function GuestList(props) {
  const { users, userPresent, loggedUser } = props;

  const usersArray = users
    .map((user, i) => {
      console.log(user.id, user.present);
      const presentStateClass = classnames("present-state", {
        "present-state-going": user.present === 2,
        "present-state-missing": user.present === 0,
        "present-state-maybe": user.present === 1,
      });

      return (
        <Media key={i} className="guestRow">
          <ProfilePic
            customStyle={presentStateClass}
            loggedUser={loggedUser}
            userPresent={userPresent}
            className={user.present}
            first_name={user.first_name}
            last_name={user.last_name}
            avatar_url={user.avatar_url}
            user_id={user.id}
          />
        </Media>
      );
    })
    .sort((a, b) => a.present > b.present);

  return (
    <div className="guestList">
      <Card.Header className="guestTitleContainer">
        <Card.Title className="guestContainerTitle">Guests</Card.Title>
      </Card.Header>
      <div className="proofilePicList">
        {usersArray.sort((a, b) => a.present > b.present)}
      </div>
    </div>
  );
}
