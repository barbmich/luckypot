import React from "react";
import "./AttendanceButton.scss";
import { Button, ButtonGroup } from "react-bootstrap";

export default function AttendanceButton(props) {
  const setAttendance = (value) => {};

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">NO</Button>
      <Button variant="warning">Maybe</Button>
      <Button variant="primary">YES</Button>
    </ButtonGroup>
  );
}
