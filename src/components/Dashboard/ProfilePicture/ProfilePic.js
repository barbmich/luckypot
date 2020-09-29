import React from "react";
import"./ProfilePic.scss"
import { Figure } from "react-bootstrap";

export default function ProfilePic(props) {
  return (
  <Figure className="pic">
    <Figure.Image
      width={171}
      height={180}
      alt="171x180"
      src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg" className="rounded-circle"
    />
    <Figure.Caption>
      Neymar da Silva Santos
    </Figure.Caption>
  </Figure>
  );
}