import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { handleEdit } from '../actions';

const Edit = ({ id }) => {
  const dispatch = useDispatch();
  const textRef = useRef(null);
  return (
    <li className='list-group-item text-capitalize pb-4 pt-3'>
      <Form
        id={id}
        onSubmit={(e) => dispatch(handleEdit(e, textRef))}
        className='w-100'
      >
        <Form.Group>
          <Form.Control
            type='text'
            ref={textRef}
            placeholder='Enter Changes'
            required
          />
        </Form.Group>
      </Form>
    </li>
  );
};

Edit.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Edit;
