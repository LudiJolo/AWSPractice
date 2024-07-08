import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UI = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group>
          <Form.Label>Text input: </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>File input: </Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {" "}
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UI;
