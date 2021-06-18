import React from 'react';
import { Card, Container } from 'react-bootstrap';

function ToDoItem({ inputText }) {
  return (
    <Container>
      {inputText && (
        <Card>
          <Card.Body>{inputText}</Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default ToDoItem;
