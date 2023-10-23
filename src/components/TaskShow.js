import TaskCreate from "./TaskCreate";
import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";
function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TasksContext)
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id)
  };
  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedText) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedText);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskfromUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Your Mission</h3>
          <p>{task.title}</p>
          <h3>Things To Do</h3>
          <p>{task.text}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-update" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
