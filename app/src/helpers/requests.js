const axios = require('axios');


// export function registerUser (data) {
//   axios.post('http://localhost:3003/signup',data)
//   .then((data) => {
//     console.log("DATA!", data)
//     res.send ("It worked!!"); 
//   }).catch(err => console.log("ERROR", err))

// } 

// let body = { "first_name": "POST",
// "last_name": "ROUTE",
// "email": "test@email.com",
// "password": "1"
// };

// // registerUser(body);

function isInPotluck(user, event) {
  axios.get(`http://localhost:3003/dashboard/check/${event}/${user}`)
  .then((data) => {
    const check = data.rows
    console.log(data.rows);
    if (!check){
      
      const guest = {
        user_id : user, 
        event_id : event
      }
      return axios.post("http://localhost:3003/dashboard/addguest", guest)
      .then(() =>{
        console.log("new user");
        // history.push(`/dashboard/${event}`)
      })
    } else {
      // history.push(`/dashboard/${event}`)
      console.log("existing user");
    }
  })
}       

const user1 = 4
const event1 = 1

isInPotluck(user1, event1)