const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Enter task"
          />
          
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-outline-success text-uppercase fw-bold"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;