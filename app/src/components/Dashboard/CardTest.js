import  React , { useState } from "react";
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
import "./MealItem.scss";
import ProfilePic from "./ProfilePicture/ProfilePic";
import axios from "axios";
import MealChosenNoRecipe from "./MealChosenNoRecipe";
// Card
// Card.Image
// Card.Fab
// Card.Content
// Card.Title
// Card.Description
export default function Card_test(props) {
  const { item, name, user, loggedUser } = props

  const [userAssigned, setUserAssigned] = useState(user || null);

  function removeYourself() {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: item.id,
        assigned: null,
      })
      .then(() => {
        setUserAssigned(null);
      });
  }

  function setAssigned(user) {
    axios
      .put(`http://localhost:3003/items/update`, {
        item: item.id,
        assigned: loggedUser.id,
      })
      .then(() => {
        setUserAssigned(loggedUser);
      });
  }

  
  function Card(props) {
    return <div className="card">{props.children}</div>;
  }
  function Image(props) {
    return (
      <div className="card-image">
        <img src={item.image_url} />
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
        <Title text={item.name} />
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
    <Card className="meal-unchosen">
      <Image
        src={`https://materializecss.com/images/sample-1.jpg`}
        icon={`glyphicon glyphicon-search`}
      />
              {userAssigned ? (
          <>
            <ProfilePic avatar_url={userAssigned.avatar_url} />
            {userAssigned.id === loggedUser.id ? (
              <>
                <Button onClick={() => removeYourself()}>X</Button>
                <MealChosenNoRecipe item={item} />
              </>
            ) : null}
          </>
        ) : (
          <Button onClick={() => setAssigned(loggedUser)}>
            Click to Bring
          </Button>
        )}
      <Content
        title="Card Title"
        description="I am a very simple card. I am good at containing small bits of information. I am convenient because I                  require little markup to use effectively."
      />
    </Card>
  );
}
