import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const userPotlucks = potlucksList.map((potluck) => {
    if (potluck) {
      return (
        <div>
          <h3>{potluck.event_name}</h3>
          <p>{potluck.date}</p>
          <Link to={`/dashboard/${potluck.id}`}>Get details</Link>
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
