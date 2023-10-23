import {createContext} from 'react'
import { useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function Provider({children}){
    const [tasks, setTasks] = useState([]);
    const createTask = async (title, text) => {
      const response = await axios.post('http://localhost:3001/tasks',{
        title,
        text,
      });
      console.log(response)
      const createdTasks = [
        ...tasks,
        response.data
      ];
      setTasks(createdTasks)
    };
  
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:3001/tasks');    
      setTasks(response.data);
    }
    const deleteTaskById = async (id) =>{
        await axios.delete(`http://localhost:3001/tasks/${id}`)
        const afterDeletingTask= tasks.filter((task) => {
          return task.id !== id;
        })
        setTasks(afterDeletingTask);
      };
      const editTaskById = async (id, updatedTitle, updatedText) =>{
        await axios.put(`http://localhost:3001/tasks/${id}`, {
          title:updatedTitle,
          text:updatedText,
        })
        const updatedTask= tasks.map((task) => {
          if(task.id === id){
            return{id,title:updatedTitle,text:updatedText};
          }
          return task;
        })
        setTasks(updatedTask);
      };
       const MethodsAndValue = {
        tasks,
        createTask,
        fetchTasks,
        deleteTaskById,
        editTaskById
       }
    return(
        <TasksContext.Provider value={MethodsAndValue}> 
            {children}
        </TasksContext.Provider>
    )
}

export {Provider}
export default TasksContext;