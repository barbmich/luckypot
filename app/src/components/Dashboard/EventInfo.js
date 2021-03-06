import React from "react";
import "./EventInfo.scss";
import { Card } from "react-bootstrap";
import moment from "moment";

export default function EventInfo(props) {
  const { event, host } = props;
  console.log("host in event info");
  console.log(host);
  return (
    <Card className="text-center eventContainer">
      <Card.Header
        className="eventTitleContainer"
        style={{ fontSize: "1.5em" }}
      >
        {event.name}
      </Card.Header>
      <Card.Body>
        <p>
          Hosted by: {host.first_name} {host.last_name}
        </p>
        <p>{moment(event.date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
        <span>{event.address}</span>
        <br />
        <span>
          {event.post_code}, {event.city}
        </span>
        <p>{event.province}</p>
      </Card.Body>
      <Card.Footer className="text-muted">
        Happening {moment(event.date).fromNow()}
      </Card.Footer>
    </Card>
  );
}
