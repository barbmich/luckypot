import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.scss";
import AddButton from "./AddButton";
import AttendanceButton from "./AttendanceButton";
import ProfilePic from "./ProfilePicture/ProfilePic.js";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealsContainer from "./MealsContainer";
import MealWithRecipe from "./MealWithRecipe";
import Messages from "./Messages";
import OthersContainer from "./OthersContainer";
const db = require("../../db/db.js");

const messages = db.event_messages;
const items = db.items;
const users = db.users;
const event = db.event;
const currentUser = {
  id: 1,
  first_name: "Daniel",
  last_name: "Nascimento",
  email: "daniel@email.com",
  avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
};

export default function Dashboard(props) {
  return (
    <div>
      <div className="mainDashboard">
        <Container fluid>
          <div className="attendanceBtn">
            <h4>
              Let <strong>INSERT NAME</strong> know if you're going
            </h4>
            <AttendanceButton />
          </div>
          <Col lg={{ span: 2, offset: 1 }} sm={6}>
            <Row>
              <GuestList users={users} />
            </Row>
          </Col>
          <Col lg={{ span: 4, offset: 1 }} sm={6}>
            <Row>
              <MealsContainer
                items={items}
                users={users}
                currentUser={currentUser}
              />
              <OthersContainer />
            </Row>
          </Col>
          <Col lg={{ span: 3, offset: 1 }} sm={6}>
            <Row>
              <EventInfo event={event} users={users} />
              <Messages messages={messages} users={users} />
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}
