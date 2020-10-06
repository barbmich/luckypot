import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Panel,
  Glyphicon,
  Grid,
} from "react-bootstrap";
import "./CardTest.scss";

// Card
// Card.Image
// Card.Fab
// Card.Content
// Card.Title
// Card.Description
export default function Card_test(props) {
  function Card(props) {
    return <div className="card">{props.children}</div>;
  }
  function Image(props) {
    return (
      <div className="card-image">
        <img src={props.src} />
        {props.icon && <Fab icon={props.icon} />}
      </div>
    );
  }

  function Fab(props) {
    return (
      <a className="btn-floating btn-large halfway-fab red">
        <span className={props.icon} aria-hidden="true"></span>
      </a>
    );
  }

  function Content(props) {
    return (
      <div className="card-content">
        <Title text={props.title} />
        <Description text={props.description} />
      </div>
    );
  }

  function Title(props) {
    return <span className="card-title">{props.text}</span>;
  }

  function Description(props) {
    return <p className="card-description">{props.text}</p>;
  }

  return (
    <Card>
      <Image
        src={`https://materializecss.com/images/sample-1.jpg`}
        icon={`glyphicon glyphicon-search`}
      />
      <Content
        title="Card Title"
        description="I am a very simple card. I am good at containing small bits of information. I am convenient because I                  require little markup to use effectively."
      />
    </Card>
  );
}
