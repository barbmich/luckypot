import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import moment from "moment";
import { Card, Button } from "react-bootstrap";
import "./MyPotlucks.scss";

export default function MyPotlucks(props) {
  const { loggedUser } = props;
  let history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [potlucksList, setPotlucksList] = useState([]);

  useEffect(() => {
    axios.get(`/mypotlucks/${loggedUser.id}`).then((result) => {
      setPotlucksList(result.data);
      setLoading(false);
    });
  }, []);

  function visitPotluck(potluck) {
    history.push(`/dashboard/${potluck.unique_key}`);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const userPotlucks = potlucksList.map((potluck, i) => {
    if (potluck) {
      return (
        <Card
          key={i}
          className="text-center potluck-item"
          style={{ border: "solid #282c34 3px" }}
        >
          <Card.Body>
            <Card.Header>
              {" "}
              {`${moment(potluck.date).format("dddd, MMMM Do YYYY, h:mm a")}`}
            </Card.Header>
            <Card.Title>{potluck.event_name}</Card.Title>
            <Card.Text>{`${potluck.address}, ${potluck.city} ${potluck.post_code} - ${potluck.province}`}</Card.Text>
            <Card.Text></Card.Text>
            <Button onClick={() => visitPotluck(potluck)} variant="primary">
              Visit the potluck dashboard{" "}
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            <span>{moment(potluck.date).fromNow()}</span>
          </Card.Footer>
        </Card>
      );
    } else {
      return (
        <div>
          <h3>Link to create a potluck?</h3>
        </div>
      );
    }
  });

  return (
    <div className="myPotlucks">
      <h1 className="pageTitle">My Potlucks</h1>
      {userPotlucks.length === 0 ? (
        <div className="btnHome">
          <Link className="link" to="/create">
            <span className="noselect">Create your potluck</span>
          </Link>
          <div className="circle"></div>
        </div>
      ) : (
        userPotlucks
      )}
      {/* {userPotlucks.length > 0 ? userPotlucks : 
      <div style={{padding: "250px", textAlign: "center"}}><p>You're not host nor guest of any potluck</p>
      <Link to="/create" className="link-nav">
                Create one now!
              </Link><div/>} */}
    </div>
  );
}
