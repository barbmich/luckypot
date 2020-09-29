import React from "react";
import "./MealsContainer.scss"
import { Card, Form, Button, ListGroup, ListGroupItem, Media } from "react-bootstrap";
import "./Messages.scss"
import ProfilePic from './ProfilePicture/ProfilePic';

export default function Messages(props) {
  return (
    <Card className="msgContainer">
      <Card.Body>
      <Card.Header className="msgTitleContainer">
        <Card.Title className="mealsContainerTitle">Messages</Card.Title>
        </Card.Header>
        <ul className="list-unstyled">

          <Media as="li">
            <ProfilePic controlId="msgPic"/>
            <Media.Body>
              <p className="msgBody">
                Hey guys! Cant wait for this weekend!
              </p>
            </Media.Body>
          </Media> 
             <Media as="li">
            <ProfilePic controlId="msgPic"/>
            <Media.Body>
              <p className="msgBody">
                Hey Neymar, should be fun! Can I bring my dog?
              </p>
            </Media.Body>
          </Media>
        </ul>
        <div className="msgInput">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="msgBtn" variant="primary" type="submit">
          Send
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

