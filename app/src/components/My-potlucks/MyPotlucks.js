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
        setPotlucksList(result.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const generateRandomString = () => {
    return Math.random()    //  Returns a random number between 0 and 1.
    .toString(36)           //  Base36 encoding; use of letters with digits.
    .substring(2,8);        //  Returns the part of the string between the start and end indexes, or to the end of the string. 
  };


  const userPotlucks = potlucksList.map((potluck, i) => {
    if (potluck) {
      return (
        <div>
          <h3>{potluck.event_name}</h3>
          <p>{moment(potluck.date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
          <p><Link to={`/dashboard/${potluck.unique_key}`}>Get details</Link></p>
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
