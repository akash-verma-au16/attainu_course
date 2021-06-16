import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [state, setstate] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    check: '',
  });

  const onChange = (e) =>
    setstate({ ...state, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className='text-center mb-1'>Sign Up</h2>

      <Form.Group controlId='formBasicName'>
        <Form.Label className='mt-3'>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Name'
          name='name'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId='formBasicAddress'>
        <Form.Label className='mt-3'>Address</Form.Label>
        <Form.Control
          as='textarea'
          rows='3'
          placeholder='Address'
          name='address'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPhone'>
        <Form.Label className='mt-3'>Phone</Form.Label>
        <Form.Control
          type='tel'
          placeholder='Phone no.'
          name='phone'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label className='mt-3'>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className='mt-3' controlId='formBasicCheckbox'>
        <Form.Check
          type='checkbox'
          label='Check me out'
          name='check'
          onChange={onChange}
        />
      </Form.Group>

      <Button className='mt-3 w-100' variant='primary' type='submit'>
        Submit
      </Button>

      <h5 className='text-center alert alert-danger w-100 mt-3'>
        !!Check console for submit event output!!
      </h5>
    </Form>
  );
};

export default Register;
