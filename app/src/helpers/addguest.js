import { useHistory } from "react-router-dom";
const axios = require('axios');



export function isInPotluck(user, event) {
  let history = useHistory();
  axios.get(`http://localhost:3003/dashboard/check/${event}/${user}`)
  .then((response) => {
    const check = response.data;
    console.log("DATA", check);
    if (check.length === 0){
      
      const guest = {
        event_id : event,
        user_id : user 
      }
      return axios.post("http://localhost:3003/dashboard/addguest", guest)
      .then(() =>{
        console.log("new user");
        history.push(`/dashboard/${event}`)
      })
    } else {
      history.push(`/mypotlucks`)
      console.log("existing user");
    }
  })
}       

const user1 = 7
const event1 = 1

isInPotluck(user1, event1)