import React from "react";
import { Link } from "react-router-dom";

export default function MyPotlucks(props) {
  // const { potlucks } = [props];

  const potlucks = [
    { name: "My SECOND Potluck", date: "2020-11-25T11:30:01.000Z" },
    { name: "My FIRST Potluck", date: "2020-09-01T11:30:01.000Z" },
  ];

  const userPotlucks = potlucks.map((potluck) => {
    return (
      <div>
        <h3>{potluck.name}</h3>
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
