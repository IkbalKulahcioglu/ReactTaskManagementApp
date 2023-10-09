import { useState } from "react";
function TaskCreate({onCreate}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, text);
    setTitle('');
    setText('');
  }
  return (
    <div className="task-create">
      <h3> Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-lable">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-lable">Task Giriniz</label>
        <textarea value={text} onChange={handleTextChange} className="task-input" rows={5} />
        <button className="task-button" onClick={handleSubmit}>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
