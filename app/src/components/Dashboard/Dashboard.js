import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.scss";
import PresentButton from "./PresentButton";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealsContainer from "./MealsContainer2"; //Remove "2" to return to previous layout
import Messages from "./Messages";
import AddButton from "./AddButton";
import "./Messages.scss";

export default function Dashboard(props) {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const { unique_key } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userPresent, setUserPresent] = useState(null);
  const [host, setHost] = useState({});

  function addMeal(item) {
    const input = {
      event_id: event.id,
      category_id: 1,
      name: item,
    };

    axios.post("http://localhost:3003/items/add", input).then((response) => {
      setItems([...items, response.data]);
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3003//dashboard/events/${unique_key}`),
      axios.get(`http://localhost:3003//dashboard/guests/${unique_key}`),
      axios.get(`http://localhost:3003//dashboard/items/${unique_key}`),
      axios.get(`http://localhost:3003/dashboard/messages/${unique_key}`),
    ]).then((all) => {
      setEvent(all[0].data[0]);
      if (all[1].data.length === 0) {
        setUsers([loggedUser]);
      } else {
        setUsers(all[1].data);
      }
      setItems(all[2].data);
      console.log("items FROM 53", all[2]);
      setMessages(all[3].data);
      setLoading(false);
      setHost({
        first_name: event.owner_first_name,
        last_name: event.owner_last_name,
      });
    });
  }, [userPresent]);

  console.log("THESE ARE THE ITEMS::: :)", items);

  const styles = {
    col: {
      backgroundColor: "#C3DCE1",
    },
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mainDashboard">
      <Container fluid className="columnContainer">
        <Col lg={{ span: 2 }} sm={6} /*className="columns"*/>
          <GuestList
            loggedUser={loggedUser}
            userPresent={userPresent}
            users={users}
          />
          {loggedUser.id === event.owner_id ? (
            <Link to={event.unique_key}>Invite your friends!</Link>
          ) : (
            // <Row>
              <div className="guestTitle">
                <h4>
                  Let <strong>{host.first_name}</strong> know if you're going!
                </h4>
                <PresentButton
                  userPresent={userPresent}
                  setUserPresent={setUserPresent}
                  event={event}
                  loggedUser={loggedUser}
                />
              </div>
            // </Row>
          )}
          <Row>
            <EventInfo event={event} users={users} host={host} />
          </Row>
          <Row>{/* <CardTest /> */}</Row>
        </Col>
        <Col sm={6} className={styles.col}>
          <Row className="row-meals">
            <MealsContainer
              userPresent={userPresent}
              event={event}
              items={items}
              users={users}
              loggedUser={loggedUser}
              addMeal={addMeal}
            >
            <AddButton items={items} addMeal={addMeal} />
            </MealsContainer>
          </Row>
        </Col>
        <Row>
          <Col sm={6}>
            {/* <Card.Header className="msgTitleContainer">
              <Card.Title className="mealsContainerTitle">Messages</Card.Title>
            </Card.Header> */}
            <Messages
              messages={messages}
              users={users}
              loggedUser={loggedUser}
              event={event}
            />
          </Col>
        </Row>
        {/* <Col
          lg={{ span: 2 }}
          className="mealsContainer"
        >
        </Col> */}
      </Container>
    </div>
  );
}
