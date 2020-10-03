import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.scss";
import AddButton from "./AddButton";
import PresentButton from "./PresentButton";
import ProfilePic from "./ProfilePicture/ProfilePic.js";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealsContainer from "./MealsContainer";
import MealWithRecipe from "./MealWithRecipe";
import Messages from "./Messages";
import OthersContainer from "./OthersContainer";
const db = require("../../db/db.js");

// const messages = db.event_messages;
// const items = db.items;
// const users = db.users;
// const event = db.event;
// const currentUser = {
//   id: 1,
//   first_name: "Daniel",
//   last_name: "Nascimento",
//   email: "daniel@email.com",
//   avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
// };

export default function Dashboard(props) {
  const { loggedUser } = props;
  const { id } = useParams();

  // ROUTES WORKING, BUT STATES NOT FUNCTIONAL AND COMPONENTS STILL USING MOCK DATA
  const [isLoading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userPresent, setUserPresent] = useState(null);
  // console.log(event);
  // console.log(users);
  // console.log(items);
  // console.log(messages);

  function addMeal(item, category) {
    const input = {
      event_id: event.id,
      category_id: 1,
      name: item,
    };

    axios.post("http://localhost:3003/items/add", input).then((response) => {
      // console.log("meal added!");
      // console.log(response.data);
      setItems([...items, response.data]);
    });
  }

  useEffect(() => {
    // if (loggedUser.id) {
    Promise.all([
      axios.get(`http://localhost:3003//dashboard/events/${id}`),
      axios.get(`http://localhost:3003//dashboard/guests/${id}`),
      axios.get(`http://localhost:3003//dashboard/items/${id}`),
      axios.get(`http://localhost:3003/dashboard/messages/${id}`),
    ]).then((all) => {
      setEvent(all[0].data[0]);
      setUsers(all[1].data);
      setItems(all[2].data);
      setMessages(all[3].data);
      setLoading(false);
      // console.log(event);
      // console.log(users);
      // console.log(items);
      // console.log(messages);
    });
    //   }
  }, [userPresent]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const host = users.find((user) => {
    return user.id === event.owner_id;
  });

  return (
    <div className="mainDashboard">
      <Container fluid>
        <Col lg={{ span: 2, offset: 1 }} sm={6}>
          <div className="guestTitle">
            <h4>
              Let <strong>{host.first_name}</strong> know if you're going!
            </h4>
            <PresentButton
              userPresent={userPresent}
              setUserPresent={setUserPresent}
              event={event}
              users={users}
              loggedUser={loggedUser}
            />
          </div>
          <Row>
            <GuestList
              loggedUser={loggedUser}
              userPresent={userPresent}
              users={users}
            />
          </Row>
        </Col>
        <Col lg={{ span: 4, offset: 1 }} sm={6}>
          <Row>
            <MealsContainer
              userPresent={userPresent}
              event={event}
              items={items}
              users={users}
              loggedUser={loggedUser}
              addMeal={addMeal}
            />
            <OthersContainer />
          </Row>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} sm={6}>
          <Row>
            <EventInfo event={event} users={users} />
            <Messages
              messages={messages}
              users={users}
              loggedUser={loggedUser}
              event={event}
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
