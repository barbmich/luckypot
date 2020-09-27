import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchRecipe.scss";

export default function SearchRecipe(props) {
  return (
    <div className="searchForm">
      <h1 className="pageTitle">Delicious Recipes Live Here</h1>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
