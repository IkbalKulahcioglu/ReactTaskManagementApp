import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";
function TaskCreate({ task, taskfromUpdate, onUpdate}) {
  const { editTaskById, createTask } = useContext(TasksContext)
  const [title, setTitle] = useState(task ? task.title : "");
  const [text, setText] = useState(task ? task.text : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskfromUpdate) {
      onUpdate(task.id, title, text)
      // editTaskById(task.id, title, text);      
    } else {
      createTask(title, text);      
    }

    setTitle("");
    setText("");
  };
  return (
    <div>
      {""}
      {taskfromUpdate ? (
        <div className="task-edit">
          <h3>Please Edit The Task!</h3>
          <form className="task-form">
            <label className="task-lable">Edit The Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-lable">Edit The Task Description</label>
            <textarea
              value={text}
              onChange={handleTextChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add Task!</h3>
          <form className="task-form">
            <label className="task-lable">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-lable">Task Description</label>
            <textarea
              value={text}
              onChange={handleTextChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
