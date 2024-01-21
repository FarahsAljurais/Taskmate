import React from "react";

export const ShowTask = (props) => {
  const handleReset = () => {
    props.setTasklist([]);
  };
  const handleDelete = (id) => {
    const updatedTaskList = props.taskList.filter((t) => t.id !== id);
    props.setTasklist(updatedTaskList);
  };
  const handleEdit = (id) => {
    const selectedTask = props.taskList.find((t) => t.id === id);
    console.log("before set",props.task)
    props.setTask(selectedTask.name);
    // console.log("SELECTED TASK",selectedTask)
    console.log("after set",props.task)

    // const selectedTask = tasklist.find(task => task.id === id);
    // setTask(selectedTask.name);
    // setEditid(id);
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
        {props.taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => {
                handleEdit(task.id);
              }}
              className="bi bi-pencil-square "
            ></i>
            <i
              onClick={() => {
                handleDelete(task.id);
              }}
              className="bi bi-trash "
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
