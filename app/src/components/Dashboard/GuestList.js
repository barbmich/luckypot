import React, { useReducer, useState, useEffect } from "react";
import { Media, Card } from "react-bootstrap";
import ProfilePic from "./ProfilePicture/ProfilePic";
import "./GuestList.scss";
// import useVisualMode from "../../hooks/useVisualMode";
// const classNames = require("classnames");
import classnames from "classnames";

export default function GuestList(props) {
  const { users, userPresent, loggedUser } = props;
  console.log("USERS: ", users);
  // Sets class based on whether user is going or not, default is maybe

  // useEffect(() => {
  const usersArray = users.map((user) => {
    const presentStateClass = classnames("present-state", {
      "present-state-going": user.present === 2,
      "present-state-missing": user.present === 0,
      "present-state-maybe": user.present === 1,
    });
    return (
      <Media className="guestRow">
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
  });
  // }, [userPresent]);

  // const usersArray = users.map((user) => {
  //   const presentStateClass = classnames("present-state", {
  //     "present-state-going": user.present === 2,
  //     "present-state-missing": user.present === 0,
  //     "present-state-maybe": user.present === 1,
  //   });
  //   return (
  //     <Media className="guestRow">
  //       <ProfilePic
  //         customStyle={presentStateClass}
  //         loggedUser={loggedUser}
  //         userPresent={userPresent}
  //         className={user.present}
  //         first_name={user.first_name}
  //         last_name={user.last_name}
  //         avatar_url={user.avatar_url}
  //         user_id={user.id}
  //       />
  //     </Media>
  //   );
  // });

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
