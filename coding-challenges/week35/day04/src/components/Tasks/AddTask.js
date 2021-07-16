const AddTask = (props) => {

  const { submitHandler, task, setTask, updatingId } = props;

  return (
    <form onSubmit={submitHandler} className="task-form">
      <input
        className="form-control"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task..."
      />
      <button
        type="submit"
        className={`btn btn-success${task ? '' : ' disabled'}`}
      >
        {updatingId ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default AddTask;
