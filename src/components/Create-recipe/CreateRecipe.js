import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreateRecipe.scss";

export default function CreateRecipe(props) {
  return (
    <div className="container">
      <div className="createRecipe">
        <h1 class="pageTitle">Create a Recipe!</h1>
        <div className="createRecipe">
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" placeholder="Enter author name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter author name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control as="textarea" rows="6" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Instructions</Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => console.log("click")}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
