import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import uuid from 'react-uuid';
import ToDoItem from './ToDoItem';

function Content() {
  const [text, setText] = useState([]);
  const textRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (textRef === '') return;
    else {
      setText([...text, textRef.current.value]);
    }
  };
  return (
    <Container className=' m-5 d-flex flex-column justify-content-center align-items-center'>
      <h1>To Do List</h1>
      <Form
        onSubmit={handleSubmit}
        className='d-flex flex-row justify-content-center align-items-start'
        style={{ margin: '60px' }}
      >
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Enter an item'
            ref={textRef}
            required
            style={{ width: '50vw', marginRight: '50px' }}
          />
        </Form.Group>
        <Button className='w-50' type='submit'>
          Add To-Do
        </Button>
      </Form>
      <Container>
        {text &&
          text.map((inputText) => (
            <ToDoItem key={uuid()} inputText={inputText} />
          ))}
      </Container>
    </Container>
  );
}

export default Content;
