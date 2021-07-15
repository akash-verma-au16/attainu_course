import TaskList from './TaskList';
import './index.scss';

const Tasks = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="task-container">
      <form onSubmit={submitHandler} className="task-form">
        <input className="form-control" />
        <button type="submit" className="btn btn-success">Add</button>
      </form>
      <TaskList />
    </div>
  )
};

export default Tasks;
