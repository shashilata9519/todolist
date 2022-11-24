import React, { useEffect, useState } from 'react';


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  
 
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <i className="fa-regular fa-circle-check text-warning"></i>
                 
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false
                    }) }
                  >
                   <i className="fa-solid fa-pen-to-square mx-2 text-success"></i>
                  </span>
                )}
                <span  className='fs-6'>
                <input type='date' onChange={(e)=> e.target.value} />
                
                </span>
                

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                   <i className="fa fa-trash text-danger"></i>
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;