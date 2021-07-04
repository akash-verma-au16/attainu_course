import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';
import { onChange, onSubmit } from '../actions';

const Add = ({ onChange, onSubmit }) => {
  return (
    <div className='bg-secondary pt-3 px-5'>
      <Form inline className='d-flex' onSubmit={onSubmit}>
        <FormControl
          id='new-task'
          type='text'
          placeholder='New Task'
          className='mr-sm-2 w-75'
          onChange={onChange}
          required
        />
        <Button variant='success' type='submit' size='lg' className='w-25'>
          ADD
        </Button>
      </Form>
    </div>
  );
};

Add.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(() => ({}), { onChange, onSubmit })(Add);
