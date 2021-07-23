import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask, setCurrentTask } from '../actions';

const Task = ({ id, task }) => {
  const dispatch = useDispatch();
  return (
    <li
      id={id}
      className='list-group-item text-capitalize pb-4 pt-3'
      onClick={(e) => dispatch(setCurrentTask(e))}
    >
      <span>{task}</span>
      <span
        className='float-end btn btn-danger'
        onClick={(e) => dispatch(deleteTask(e))}
      >
        x
      </span>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
};

export default Task;
