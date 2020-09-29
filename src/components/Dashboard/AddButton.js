import React from "react";
import './AddButton.scss';

const classNames = require('classnames');

export default function AddButton(props) {
  // const buttonClass = classNames('button',
  // {
  //   'button--confirm': props.confirm,
  //   'button--danger': props.danger,
  // });

return (
  <button className='button-add'

    onClick={props.onClick}
  
  > +
    {props.children}
  </button>
);
}