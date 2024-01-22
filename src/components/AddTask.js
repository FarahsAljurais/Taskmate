import React, { useRef } from "react";

export const AddTask = (props) => {
  const taskRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    if (props.task.id) {
      const updatedTaskList = props.taskList.map((todo) =>
        todo.id === props.task.id
          ? {
              id: props.task.id,
              name: props.task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      console.log("UPDATED LIST",updatedTaskList);
      props.setTasklist(updatedTaskList);
      console.log("Task List",props.taskList);
      props.setTask({});
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: event.target.task.value,
        time: ` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      props.setTasklist([...props.taskList, newTask]);
      props.setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add task"
          ref={taskRef}
          autoComplete="off"
          maxLength={25}
          value={props.task.name || ""}
          onChange={(e) =>
            props.setTask({ ...props.task, name: e.target.value })
          }
        />
        <button type="submit">{props.task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
