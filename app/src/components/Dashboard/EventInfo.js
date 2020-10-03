import React from "react";
import "./EventInfo.scss";
import { Card } from "react-bootstrap";

export default function EventInfo(props) {
  const { event, users } = props;
  const time = new Date().toString();

  // console.log("USERS EI", users);
  // console.log("EVENT EI", event);
  const host = users.find((user) => {
    // console.log("User", user.id);
    // console.log("Owner", event.owner_id);
    return user.id === event.owner_id;
  });
  // console.log("HOST", host);
  return (
    <Card className="text-center eventContainer">
      <Card.Header>Event Details</Card.Header>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          <p>
            Hosted by: {host.first_name} {host.last_name}
          </p>
          <p>{time}</p>
          <span>{event.address}</span>
          <br />
          <span>
            {event.post_code}, {event.city}
          </span>
          <p>{event.province}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Happening in 2 days!</Card.Footer>
    </Card>
  );
}
