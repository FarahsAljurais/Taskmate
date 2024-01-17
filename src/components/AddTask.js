import React, { useState, useRef } from "react";

export const AddTask = (props) => {
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  const handleReset = () => {
    taskRef.current.value = "";
    setProgress(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    props.setTasks([...props.tasks, task]);
    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          ref={taskRef}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
    </section>
  );
};
