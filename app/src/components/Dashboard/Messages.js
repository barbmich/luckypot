import React from "react";
import "./MealsContainer.scss";
import {
  Card,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
  Media,
} from "react-bootstrap";
import "./Messages.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";

export default function Messages(props) {
  const { messages, users } = props;

  const eventMessages = messages
    // .sort((a, b) => a.timestamp < b.timestamp)
    .map((msg) => {
      const user = users.find((user) => user.id === msg.user_id);

      return (
        <Media as="li">
          <ProfilePic
            first_name={user.first_name}
            last_name={user.last_name}
            avatar_url={user.avatar_url}
          />
          <Media.Body>
            <p className="msgBody">{msg.message}</p>
          </Media.Body>
        </Media>
      );
    });
  return (
    <Card bg="dark" text="light" className="msgContainer">
      <Card.Body>
        <Card.Header className="msgTitleContainer">
          <Card.Title className="mealsContainerTitle">Messages</Card.Title>
        </Card.Header>
        <ul className="list-unstyled">{eventMessages}</ul>
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
