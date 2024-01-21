import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

export const App = () => {
  const [taskList, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  // console.log("TASK IN APP", task);
  // taskList.map((todo)=> console.log("TaskList in APP",todo))
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </main>
      <Footer />
    </div>
  );
};
