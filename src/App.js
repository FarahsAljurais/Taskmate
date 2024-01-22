import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

export const App = () => {
  const [taskList, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});
  useEffect(() =>{
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList ])
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
