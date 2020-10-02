import React, { useEffect, useState } from "react";
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

const messages = db.event_messages;
const items = db.items;
const users = db.users;
const event = db.event;
const currentUser = {
  id: 1,
  first_name: "Daniel",
  last_name: "Nascimento",
  email: "daniel@email.com",
  avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
};

export default function Dashboard(props) {
  const { loggedUser } = props;


        // loggeedUser.id

  // ROUTES WORKING, BUT STATES NOT FUNCTIONAL AND COMPONENTS STILL USING MOCK DATA
  // const [event, setEvent] = useState("");
  const [xuser, setUsers] = useState(users);
  const [xitems, setItems] = useState(items);
  const [xmessage, setMessages] = useState(messages);
  const [userPresent, setUserPresent] = useState(null);

  function addMeal(item, category) {
    const input = {
      event_id: event.id,
      category_id: 1,
      name: item,
    };
    console.log("event id:", event.id);
    console.log("user adding meal:", currentUser.first_name);
    console.log("meal added:", item);

    axios.post("http://localhost:3003/items/add", input).then((response) => {
      console.log("meal added!");
      console.log(response.data);
      setItems([...xitems, response.data]);
    });
  }

  useEffect(() => {
    // if (loggedUser.id) {
      Promise.all([
    //     Promise.resolve(
    //       axios.get(`http://localhost:3003//dashboard/events/${event.id}//`)
    //     ),
        Promise.resolve(
          axios.get(`http://localhost:3003//dashboard/guests/${event.id}`)
        ),
    //     Promise.resolve(axios.get(`http://localhost:3003/dashboard/items/`)),
    //     Promise.resolve(axios.get(`http://localhost:3003/dashboard/messages/`)),
      ]).then((all) => {
        console.log((all[0].data));
    //     setUsers(all[1].data);
    //     setItems(all[2].data);
    //     setMessages(all[3].data);
      });
  //   }
  }, [event]);
  // END OF NEW CODE

  return (
    <div className="mainDashboard">
      <Container fluid>
        <div>
          <h4>
            Let <strong>INSERT NAME</strong> know if you're going
          </h4>
          <PresentButton
            userPresent={userPresent}
            setUserPresent={setUserPresent}
            event={event}
            loggedUser={loggedUser}
          />
        </div>
        <Col lg={{ span: 2, offset: 1 }} sm={6}>
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
              event={event}
              items={items}
              users={users}
              currentUser={currentUser}
              addMeal={addMeal}
            />
            <OthersContainer />
          </Row>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} sm={6}>
          <Row>
            <EventInfo event={event} users={users} />
            <Messages messages={messages} users={users} />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
