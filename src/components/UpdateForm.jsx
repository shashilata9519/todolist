const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input 
          type='text'
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20 text-uppercase fs-6 fw-bold"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-outline-dark text-uppercase fs-6 fw-bold"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;