import { useHistory } from "react-router-dom";
const axios = require("axios");

export function isInPotluck(user, key) {
  axios.get(`/dashboard/check/${key}/${user}`).then((response) => {
    const check = response.data;
    // console.log("DATA", check);
    if (check.length === 0) {
      const guest = {
        event_id: event,
        user_id: user,
      };
      return axios.post("/dashboard/addguest", guest).then(() => {
        console.log("new user");
        history.push(`/dashboard/${key}`);
      });
    } else {
      history.push(`/dashboard/${key}`);
      console.log("existing user");
    }
  });
}

// Test data
// const user1 = 7
// const event1 = 1

// isInPotluck(user1, event1)
