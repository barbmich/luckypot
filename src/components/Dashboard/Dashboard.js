import React from "react";
import { Container } from "react-bootstrap";
import "./Dashboard.scss";
import ProfilePic from "./ProfilePicture/ProfilePic.js";
import AddButton from "./AddButton";
import EventInfo from "./EventInfo";
import GuestList from "./GuestList";
import MealForm from "./MealForm";
import MealItem from "./MealItem";
import MealsContainer from "./MealsContainer";
import MealWithRecipe from "./MealWithRecipe";
import Messages from "./Messages";
import OthersContainer from "./OthersContainer";

export default function Dashboard(props) {
  return (
    <div className="mainDashboard">
      <GuestList />
      <div className="mealAndOther">
        <h1>Meals</h1>
        <MealsContainer />
        <OthersContainer />
      </div>
      <div className="messagesAndEvent">
        <EventInfo />
        <Messages />
      </div>
    </div>
  );
}
