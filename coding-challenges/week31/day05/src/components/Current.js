import React, { Fragment, useContext } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import PostContext from '../context/post/postContext';

const Current = () => {
  const postContext = useContext(PostContext);
  const { current, clearCurrent } = postContext;

  const clickHandler = (e) => {
    clearCurrent(e.target.id);
  };

  return (
    <ListGroup>
      <ListGroup.Item className='bg-dark text-light p-3 fs-3'>
        POST DETAILS
      </ListGroup.Item>
      {current.id ? (
        <Card className='p-2'>
          <Card.Header>
            <Card.Title>Title :</Card.Title>
            <Card.Text>{current.title}</Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Title>Body :</Card.Title>
            <Card.Text>{current.body}</Card.Text>
          </Card.Body>
          <Button className='btn btn-dark' onClick={clickHandler}>
            CLEAR CURRENT
          </Button>
        </Card>
      ) : (
        <Fragment>
          <h4 className='p-3 alert alert-secondary w-100'>
            Select a post to view Details
          </h4>
        </Fragment>
      )}
    </ListGroup>
  );
};

export default Current;
