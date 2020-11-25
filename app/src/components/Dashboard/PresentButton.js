import React, { useEffect } from "react";
import axios from "axios";
import "./PresentButton.scss";
import { Button, ButtonGroup } from "react-bootstrap";

export default function PresentButton(props) {
  const { loggedUser, event, setUserPresent, userPresent } = props;

  // Get request to know value of whether user is attending //
  useEffect(() => {
    if (!userPresent) {
      axios
        .get(`/dashboard/present/${loggedUser.id}/${event.id}`)
        .then((result) => {
          if (result.data.length === 0) {
            const guest = {
              event_id: event.id,
              user_id: loggedUser.id,
            };
            axios.post("/dashboard/addguest", guest).then((result) => {
              setUserPresent(result.data[0].present);
            });
          } else {
            setUserPresent(result.data[0].present);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // Put req to update whether user is attending //
  const updatePresentValue = (value) => {
    axios
      .put(`/dashboard/present/`, {
        present: value,
        user_id: loggedUser.id,
        event_id: event.id,
      })
      .then((result) => {
        const present = result.data[0].present;
        setUserPresent(present);
        // console.log(userPresent)
      });
  };

  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        variant="secondary"
        onClick={() => {
          updatePresentValue(0);
        }}
      >
        NO
      </Button>
      <Button
        variant="warning"
        onClick={() => {
          updatePresentValue(1);
        }}
      >
        Maybe
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          updatePresentValue(2);
        }}
      >
        YES
      </Button>
    </ButtonGroup>
  );
}
