import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import Spinner from './Spinner';
function FormInput() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    title: '',
    Fname: '',
    Lname: '',
    address: '',
    city: '',
    state: '',
    country: '',
    email: '',
    phone: '',
    postal: '',
    ccnumber: '',
    exp_date: '',
    add_type: 'Not Same',
  });
  const {
    title,
    Fname,
    Lname,
    address,
    city,
    state,
    country,
    email,
    postal,
    phone,
    ccnumber,
    exp_date,
    add_type,
  } = details;
  const onChange = (e) => {
    if (e.target.name === 'add_type') {
      if (e.target.checked) {
        e.target.value = 'Same as Shipping Address';
      }
    }
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (postal.length !== 6) {
      return setError('Postal code invalid');
    } else if (phone.length !== 10) {
      return setError('Phone Number invalid');
    } else if (ccnumber.length !== 16) {
      return setError('Credit Card Number invalid');
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log(details);
    setDetails({
      title: '',
      Fname: '',
      Lname: '',
      address: '',
      city: '',
      state: '',
      country: '',
      email: '',
      phone: '',
      postal: '',
      ccnumber: '',
      exp_date: '',
      add_type: 'Not Same',
    });
  };
  if (loading) return <Spinner />;
  return (
    <Container className='mt-5'>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            name='title'
            placeholder='Enter Title'
            value={title}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            name='Fname'
            placeholder='Enter First Name'
            value={Fname}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            name='Lname'
            placeholder='Enter Last Name'
            value={Lname}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            name='address'
            placeholder='Enter Address'
            value={address}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            name='city'
            placeholder='Enter City'
            value={city}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            name='state'
            placeholder='Enter State'
            value={state}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            name='country'
            placeholder='Enter Country'
            value={country}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter Email'
            value={email}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='number'
            name='postal'
            placeholder='Enter Postal Code'
            value={postal}
            onChange={onChange}
            minLength='6'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='number'
            name='phone'
            placeholder='Enter Phone'
            value={phone}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type='number'
            name='ccnumber'
            placeholder='Enter Number'
            value={ccnumber}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type='date'
            name='exp_date'
            value={exp_date}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check
            type='checkbox'
            name='add_type'
            value={add_type}
            label='Billing Address Same as Shipping Address'
            onChange={onChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormInput;
