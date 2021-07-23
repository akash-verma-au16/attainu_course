import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';
import { onChange, onSubmit } from '../actions';

const Add = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-secondary pt-3 px-5'>
      <Form inline className='d-flex' onSubmit={(e) => dispatch(onSubmit(e))}>
        <FormControl
          id='new-task'
          type='text'
          placeholder='New Task'
          className='mr-sm-2 w-75'
          onChange={(e) => dispatch(onChange(e))}
          required
        />
        <Button variant='success' type='submit' size='lg' className='w-25'>
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default Add;
