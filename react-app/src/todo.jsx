
import Task from "./Task"
import {useState} from 'react'

function Todo(){
  let [tasks,setTasks] =useState([]);
  let [newTitle,setNewTitle] = useState('');
  let completedTask =[...tasks.filter(task=>task.isCompleted)];
  let incompletedTask = [...tasks.filter(task=>!task.isCompleted)];
  

  function addTask(event){
    event.preventDefault();
    let newTask = {
      id : tasks.length+1,
      taskName : newTitle,
      date : new Date(),
      isCompleted: true,
    };

    setTasks([...tasks, newTask]);
    setNewTitle('');
    console.log(newTask);
  }
  function handleInputChange(event){
    setNewTitle(event.target.value);
  }
  return(
    <>
    <div class = "container">
      <div class="card mt-2">
        <div class="card">
        <div className= "row">
        <form onSubmit={addTask}>
                <div className="col-md-10">
                  <input type="text"
                  value = {newTitle}
                  onChange={handleInputChange} 
                  className="form-control" />
                </div>
                <div className="col-md-2">
                  <input className="btn btn-primary d-inline" type="submit" />
                </div>
                <h3>Completed Tasks</h3>
                {completedTask.map((task) => (
              <Task
                taskName={task.taskName}
                id={task.id}
                isCompleted={task.isCompleted}
              />
            ))}
                <h3>Incompleted Tasks</h3>
                {incompletedTask.map((task) => (
              <Task
                taskName={task.taskName}
                id={task.id}
                isCompleted={task.isCompleted}
              />
            ))}
              </form>
        </div>
        </div>
        </div>
       
        
      
</div>
</>
  )
}
export default Todo