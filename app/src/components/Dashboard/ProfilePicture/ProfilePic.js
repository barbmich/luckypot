import React from "react";
import "./ProfilePic.scss";
import { Figure } from "react-bootstrap";

export default function ProfilePic(props) {
  const { avatar_url, first_name, last_name } = props;
  return (
    <Figure className="pic">
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
