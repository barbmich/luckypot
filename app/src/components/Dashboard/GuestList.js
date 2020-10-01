import React, { useState } from "react";
import { Media, Card } from "react-bootstrap";
import ProfilePic from "./ProfilePicture/ProfilePic";
import "./GuestList.scss";
// import useVisualMode from "../../hooks/useVisualMode";
const classNames = require("classnames");

export default function GuestList(props) {
  const { users } = props;

  const usersArray = users.map((user) => {
    return (
      <Media className="guestRow">
        <ProfilePic
          className={user.present}
          first_name={user.first_name}
          last_name={user.last_name}
          avatar_url={user.avatar_url}
        />
      </Media>
    );
  });

  return (
    <div className="guestList">
      <Card.Header className="guestTitleContainer">
        <Card.Title className="guestContainerTitle">Guests</Card.Title>
      </Card.Header>
      {usersArray}
    </div>
  );
}
// export default function Button(props) {
//   const guestClass = classNames('guestRow',
//     {
//       'guestRow-selected': props.confirm,
//       'button--danger': props.danger,
//     });
