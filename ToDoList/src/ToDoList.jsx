import React, {useState} from "react"
function ToDoList() {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange() {
    setNewTask(event.target.value);
  }

  function addTask() {
      if (newTask.trim() !== "") {
          setTasks(t => [...t, newTask]);
          setNewTask("");
      }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return(
    <div className="toDoList-container">

      <h1>To-Do-List</h1>

        <ol>
           {tasks.map((task, index) => 
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="upBtn" onClick={() => moveTaskUp(index)}>↑</button>
                  <button className="downBtn" onClick={() => moveTaskDown(index)}>↓</button>
                  <button className="deleteBtn" onClick={() => deleteTask(index)}>🗑️</button>
                </li>)}
        </ol>
        <div className="input-container">
            <input  type="text"
                    placeholder="Add Task"
                    value={newTask}
                    onChange= {handleInputChange}/>
            <button className="addBtn" 
                    onClick={addTask}>+</button>
        </div>
    </div>
  );
}

export default ToDoList