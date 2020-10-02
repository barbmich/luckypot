import React from "react";
import "./ProfilePic.scss";
import { Figure } from "react-bootstrap";
// const classNames = require('classnames');
import classnames from "classnames";

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
        width={171}
        height={180}
        alt="171x180"
        src={avatar_url}
        className="rounded-circle"
      />
      <Figure.Caption>
        {!first_name ? "" : `${first_name} ${last_name}`}
      </Figure.Caption>
    </Figure>
  );
}
