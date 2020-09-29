import React from "react";
import "./EventInfo.scss"
import { Card } from "react-bootstrap";

export default function EventInfo(props) {
  return (

<Card className="text-center eventContainer">
  <Card.Header>Event Details</Card.Header>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      {/* {props.date}
      {props.address}
      {props.city}
      {props.province} */}
      <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed 
        in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his 
        head a little he could see his brown belly, slightly domed and divided by arches into 
        stiff sections. The</p>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">Happening in 2 days!</Card.Footer>
</Card>


  );
}

// owner_id, name, date, address, post_code, city, province