import React from "react";
import "./ProfilePic.scss";
import { Figure } from "react-bootstrap";

export default function ProfilePic(props) {
  const {
    loggedUser,
    userPresent,
    avatar_url,
    first_name,
    last_name,
    user_id,
    customStyle,
  } = props;

  return (
    <Figure className={customStyle}>
      <Figure.Image
        alt="171x180"
        src={avatar_url}
        className="main-profile-pic"
      />
      <Figure.Caption className="name">
        {!first_name ? "" : `${first_name}`}
      </Figure.Caption>
    </Figure>
  );
}
