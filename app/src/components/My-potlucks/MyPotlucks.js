import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyPotlucks(props) {
  const [isLoading, setLoading] = useState(true);  
  const [potlucksList, setPotlucksList] = useState(null);
  const { loggedUser } = props;
  
  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:3003/mypotlucks/${loggedUser.id}`
    );
    setPotlucksList(result.data);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  const userPotlucks = potlucksList.map((potluck) => {
    return (
      <div>
        <h3>{potluck.event_name}</h3>
        <p>{potluck.date}</p>
        <Link>visit the page</Link>
      </div>
    );
  });

  return (
    <div className="myPotlucks">
      <h1 className="pageTitle">My Potlucks</h1>
      {userPotlucks}
    </div>
  );
}
