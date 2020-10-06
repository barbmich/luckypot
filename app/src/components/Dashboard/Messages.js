import React, { useEffect, useState, useRef } from "react";
import "./MealsContainer.scss";
import { Card, Form, Button, Media } from "react-bootstrap";
import "./Messages.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import axios from "axios";

export default function Messages(props) {
  const { messages, event, users, loggedUser } = props;

  const [messageContent, setMessageContent] = useState();
  const [chatMessages, setChatMessages] = useState(messages);
  const ws = useRef(null);

  const eventMessages = chatMessages
    // .sort((a, b) => a.timestamp < b.timestamp)
    .map((msg, i) => {
      const user = users.find((user) => user.id === msg.user_id);
      return (
        <Media key={i} as="li">
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

  const sendMessage = (message) => {
    const eventMessage = {
      event_id: event.id,
      user_id: loggedUser.id,
      message: message,
    };
    // console.log("obj sent to ws:", eventMessage);
    axios
      .post("http://localhost:3003/messages/add", eventMessage)
      .then((response) => {
        // console.log(typeof response);
        ws.current.send(JSON.stringify(response));
        setMessageContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3003");
    // ws.current.onopen = () =>
    //   // ws.current.send(`user ${loggedUser.first_name} connected to the chat`);
    //   (ws.current.onclose = () =>
    //     ws.current.send(
    //       `user ${loggedUser.first_name} disconnected from the chat`
    //     ));
    ws.current.onmessage = (message) => {
      const newMessage = JSON.parse(message.data);
      // console.log("from websocket:", newMessage.data);
      if (newMessage.data.event_id === event.id) {
        setChatMessages([...chatMessages, newMessage.data]);
      }
    };
    //   setChatMessages((prev) => [...prev, message.data]);
    // }
    return () => ws.current.close();
  }, [chatMessages]);

  return (
    <Card className="msgContainer">
      <Card.Body>
        <Card.Header className="msgTitleContainer">
          <Card.Title className="mealsContainerTitle">Messages</Card.Title>
        </Card.Header>
        <ul className="list-unstyled">{eventMessages}</ul>
        <div className="msgInput">
          <Form className="msgForm">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={messageContent}
                onChange={(event) => setMessageContent(event.target.value)}
              />
              <Button
                className="msgBtn"
                onClick={() => sendMessage(messageContent)}
                variant="primary"
              >
                Send
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}
