import React from "react";
import axios from "axios";

export default function MyRecipes(props) {
  const { loggedUser } = props;
  console.log("LOGGED USER FROM RECIPES:: ", loggedUser);
  // const user_id = loggedUser.id;
  // const getMyRecipes = () => {
  //   axios
  //     .get(`http://localhost:3003/myrecipes/${user_id}`)
  //     .then((result) => {
  //       console.log("Result from front end", result);
  //     })
  //     .catch((err) => console.log("Error 123", err));
  // };

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
    </div>
  );
}

// SELECT events.id AS event_id, events.name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name
// FROM (SELECT *
// FROM guest_details
// WHERE user_id = 2) AS test
// JOIN events ON events.id = test.event_id
// JOIN items ON events.id = items.event_id
// JOIN users ON users.id = test.user_id;

// SELECT events.id AS event_id, events.name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name
// FROM guest_details
// JOIN events ON events.id = guest_details.event_id
// JOIN items ON events.id = items.event_id
// JOIN users ON users.id = guest_details.user_id
// WHERE events.id IN(SELECT event_id
// FROM guest_details
// WHERE user_id = 2);
