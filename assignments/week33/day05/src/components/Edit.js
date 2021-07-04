import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { handleEdit } from '../actions';

const Edit = ({ id, handleEdit }) => {
  const textRef = useRef(null);

  return (
    <li className='list-group-item text-capitalize pb-4 pt-3'>
      <Form id={id} onSubmit={(e) => handleEdit(e, textRef)} className='w-100'>
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
  handleEdit: PropTypes.func.isRequired,
};

export default connect(() => ({}), { handleEdit })(Edit);
