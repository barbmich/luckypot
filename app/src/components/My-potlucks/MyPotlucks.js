import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

export default function MyPotlucks(props) {
  const { loggedUser } = props;

  const [isLoading, setLoading] = useState(true);
  const [potlucksList, setPotlucksList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/mypotlucks/${loggedUser.id}`)
      .then((result) => {
        console.log("this is result:", result.data);
        setPotlucksList(result.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const userPotlucks = potlucksList.map((potluck) => {
    if (potluck) {
      return (
        <div>
          <h3>{potluck.event_name}</h3>
          <p>{moment(potluck.date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
          <p>
            <Link to={`/dashboard/${potluck.unique_key}`}>Get details</Link>
          </p>
          <a href={potluck.tiny_url}>Invite your friends!</a>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Link to create a potluck?</h3>
        </div>
      );
    }
  });

  return (
    <div className="myPotlucks">
      <h1 className="pageTitle">My Potlucks</h1>
      {userPotlucks}
    </div>
  );
}
