import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.scss";
import PresentButton from "./PresentButton";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealsContainer from "./MealsContainer2"; //Remove "2" to return to previous layout
import Messages from "./Messages";
import MealForm from "./MealForm";
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
      console.log("all0data0");
      console.log(all[0].data[0]);
      setMessages(all[3].data);
      setLoading(false);
      setHost({
        first_name: all[0].data[0].owner_first_name,
        last_name: all[0].data[0].owner_last_name,
      });
    });
  }, [userPresent]);

  const styles = {
    col: {
      backgroundColor: "#C3DCE1",
    },
  };
  const url = "http://localhost:3002/dashboard/" + unique_key;
  const mailtoLink = `mailto:?subject=Please%20Join%20me%20for%20my%20Upcoming%20Potluck!&body=Dear%20Guest%2C%20%0D%0A%0D%0AI%20am%20hosting%20a%20Potluck%20and%20you%20are%20invited!%20Please%20copy%20this%20link%20-->%20${url}%20<--%20Paste%20it%20to%20your%20browser%20and%20you%20will%20be%20added%20to%20the%20guest%20list.%20`;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mainDashboard">
      <Container fluid className="columnContainer">
        <Col lg={{ span: 2 }} sm={6}>
          <GuestList
            loggedUser={loggedUser}
            userPresent={userPresent}
            users={users}
          />
          {loggedUser.id === event.owner_id ? (
            <div className="invite">
              <a href={mailtoLink}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 41H8C5.8 41 4 39.2 4 37V16.1C4 14.8 4.6 13.6 5.7 12.8L24 0L42.3 12.8C43.4 13.5 44 14.8 44 16.1V37C44 39.2 42.2 41 40 41Z"
                    fill="#78909C"
                  />
                  <path d="M12 11H36V33H12V11Z" fill="white" />
                  <path
                    d="M40 41H8C5.8 41 4 39.2 4 37V17L24 30L44 17V37C44 39.2 42.2 41 40 41Z"
                    fill="#FAD76E"
                  />
                  <path d="M22 14H26V26H22V14Z" fill="#212529" />
                  <path d="M18 18H30V22H18V18Z" fill="#212529" />
                </svg>
                Invite your Friends!
              </a>
            </div>
          ) : (
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
          )}
          <Row>
            <EventInfo event={event} users={users} host={host} />
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginTop: "2em" }}>
              <MealForm addMeal={addMeal} />
            </div>
          </Row>
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
            />
          </Row>
        </Col>
        <Row>
          {/* <Col sm={6}>
            <Messages
              messages={messages}
              users={users}
              loggedUser={loggedUser}
              event={event}
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
