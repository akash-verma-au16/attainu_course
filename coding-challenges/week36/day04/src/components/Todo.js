import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid';
import Task from './Task';
import Edit from './Edit';
import Add from './Add';

const Todo = () => {
  const edit = useSelector((state) => state.edit);
  const tasks = useSelector((state) => state.tasks);
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

export default Todo;
