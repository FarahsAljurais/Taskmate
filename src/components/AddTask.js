import React, { useRef } from "react";

export const AddTask = (props) => {
  const taskRef = useRef("");

  const handleSubmit = (event) => {
    console.log("TASK ADD Task", props.task);
    props.taskList.map((todo)=> console.log("BEFORE",todo))
    event.preventDefault();
    if (props.task.id) {
      console.log("TASK?????", props.task)

      const date = new Date();
      const updateTaskList = props.taskList.map((t) =>
        t.id === props.task.id
          ? {
              id: props.task.id,
              name: props.task.name,
              time: ` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : { t }
      );
      console.log("UPDATED TASK", updateTaskList)
      props.setTasklist(updateTaskList);
      props.taskList.map((todo)=> console.log("AFTER",todo))
   
    } else {
      const date = new Date();
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: event.target.task.value,
        time: ` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      props.setTasklist([...props.taskList, newTask]);
      event.target.task.value = "";
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add task"
          ref={taskRef}
          autoComplete="off"
          maxLength={25}
          value={props.task.name}
          onChange={(e) =>
            props.setTask({ ...props.task, name: e.target.value })
          }
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
