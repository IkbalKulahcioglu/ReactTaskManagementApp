import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, text) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        text,
      },
    ];
    setTasks(createdTasks)
  };
  const deleteTaskById = (id) =>{
    const afterDeletingTask= tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTask);
  };
  const editTaskById = (id, updatedTitle, updatedText) =>{
    const updatedTask= tasks.map((task) => {
      if(task.id === id){
        return{id,title:updatedTitle,text:updatedText};
      }
      return task;
    })
    setTasks(updatedTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
