import React from "react";
import "./ProfilePic.scss";
import { Figure } from "react-bootstrap";
const classNames = require('classnames');

export default function ProfilePic(props) {
  const { avatar_url, first_name, last_name } = props;

  const picClass = classNames('pic',
    { 'pic':1,
      'pic--no': 0,
      'pic--yes': 2 
    }
  );

  return (
    <Figure className={picClass}>
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
