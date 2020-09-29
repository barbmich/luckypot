import React, { useState } from 'react';
import { Media, Card } from "react-bootstrap";
import ProfilePic from './ProfilePicture/ProfilePic';
import "./GuestList.scss";
// import useVisualMode from "../../hooks/useVisualMode";
const classNames = require('classnames');


export default function GuestList() {


  // export default function Button(props) {
  //   const guestClass = classNames('guestRow',
  //     {
  //       'guestRow-selected': props.confirm,
  //       'button--danger': props.danger,
  //     });

  return(
  <div className="guestList">
    <Card.Header className="guestTitleContainer">
      <Card.Title className="guestContainerTitle">Guests</Card.Title>
    </Card.Header>
      <Media className="guestRow">
        <ProfilePic />
      </Media>
      <Media className="guestRow">
        <ProfilePic />
      </Media>
  </div>
  )

}