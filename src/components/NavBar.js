import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.scss";

export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">LuckyPot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

  // <nav className="navbar navbar-default navbar-custom">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <a className="navbar-brand" href="/">
  //         LuckyPot
  //       </a>
  //     </div>
  //     <ul className="nav navbar-nav">
  //       <li className="dropdown">
  //         <a className="dropdown-toggle" data-toggle="dropdown" href="#">
  //           <span className="glyphicon glyphicon-menu-hamburger"></span>
  //         </a>
  //         <ul className="dropdown-menu">
  //           <li>
  //             <a href="/">
  //               {" "}
  //               <span className="glyphicon glyphicon-heart"></span> My Recipes
  //             </a>
  //           </li>
  //           <li>
  //             <a href="/">
  //               {" "}
  //               <span className="glyphicon glyphicon-tag"></span> My Potlicks{" "}
  //             </a>
  //           </li>
  //           <li>
  //             <a href="/">
  //               <span className="glyphicon glyphicon-envelope"></span> My
  //               History
  //             </a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li>
  //         <a href="/create">
  //           <button type="button" id="postBtn" className="btn btn-warning">
  //             Create Potluck
  //           </button>
  //         </a>
  //       </li>
  //     </ul>
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //         <a href="/">
  //           <span className="glyphicon glyphicon-log-in"></span> Login
  //         </a>
  //       </li>
  //       <li>
  //         <a href="/">
  //           <span className="glyphicon glyphicon-user"></span> Sign Up
  //         </a>
  //       </li>
  //       <li>
  //         <a href="/">
  //           <span className="glyphicon glyphicon-log-out"></span> Logout
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
  // )
}
