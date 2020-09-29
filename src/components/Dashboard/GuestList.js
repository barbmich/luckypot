import React, { useState } from 'react';
import { Media } from "react-bootstrap";
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
      <Media className="guestRow">
        <ProfilePic />
      </Media>
      <Media className="guestRow">
        <ProfilePic />
      </Media>
  </div>
  )

}