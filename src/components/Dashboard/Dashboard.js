import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.scss";
import ProfilePic from "./ProfilePicture/ProfilePic.js";
import AddButton from "./AddButton";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealForm from "./MealForm";
import MealItem from "./MealItem";
import MealsContainer from "./MealsContainer";
import MealWithRecipe from "./MealWithRecipe";
import Messages from "./Messages";
import OthersContainer from "./OthersContainer";

export default function Dashboard(props) {
  return (
    <div className="mainDashboard">
    
    <Container fluid>
      <Col lg={{span: 2, offset: 0}} sm={6}>
        <Row>
          <GuestList />
        </Row>
      </Col >
      <Col lg={{span: 5, offset: 0}} sm={6}>
        <Row>
        <MealsContainer />
         <OthersContainer />
        </Row>
        </Col >
      <Col lg={{span: 4, offset: 1}} sm={6}>
        <Row>
          <EventInfo />
          <Messages />
        </Row>
      </Col>
      </Container>
    </div>
  );
}
