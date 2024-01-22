import React from "react";

export const ShowTask = (props) => {
  const handleReset = () => {
    props.setTasklist([]);
  };
  const handleEdit = (id) => {
    const selectedTask = props.taskList.find(todo => todo.id === id);
    props.setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const updatedTaskList = props.taskList.filter(todo => todo.id !== id);
    props.setTasklist(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.taskList.length}</span>
        </div>
        <button className="clearAll" onClick={handleReset}>
          Clear All
        </button>
      </div>
      <ul>
        {props.taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => {
                handleEdit(todo.id);
              }}
              className="bi bi-pencil-square "
            ></i>
            <i
              onClick={() => {
                handleDelete(todo.id);
              }}
              className="bi bi-trash "
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
