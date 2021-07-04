import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Task from './Task';
import Edit from './Edit';
import Add from './Add';

const Todo = ({ edit, tasks }) => {
  return (
    <div className='p-3'>
      <h1 className='text-center text-uppercase py-2 text-danger'>
        to do list
      </h1>
      <Add />
      <ul className='bg-secondary px-5 pt-3 pb-5'>
        <hr />
        {tasks.length === 0 && (
          <h5 className='text-center text-primary'>Add a Task</h5>
        )}
        {tasks.map((task, index) => {
          if (edit !== index) {
            return <Task id={index} key={uuid.v4()} task={task} />;
          } else {
            return <Edit id={index} key={uuid.v4()} />;
          }
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  edit: state.edit,
});

Todo.propTypes = {
  tasks: PropTypes.array.isRequired,
  edit: PropTypes.number,
};

export default connect(mapStateToProps)(Todo);
