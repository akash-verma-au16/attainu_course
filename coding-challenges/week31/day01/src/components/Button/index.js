import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ clickHandler, toggle }) => (
  <button className='btn btn-primary' onClick={clickHandler} disabled={toggle}>
    Button
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default Button;
