const axios = require("axios");

export function registerUser(data) {
  axios
    .post("/signup", data)
    .then((data) => {
      console.log("DATA!", data);
      res.send("It worked!!");
    })
    .catch((err) => console.log("ERROR", err));
}

let body = {
  first_name: "POST",
  last_name: "ROUTE",
  email: "test@email.com",
  password: "1",
};

registerUser(body);
