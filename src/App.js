import React, { useState } from "react";
import "./App.css";
import HeaderTitle from "./components/HeaderSection/HeaderTitle";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskDescription/TaskList";

const DUMMY_TASKS = [
  {
    id: "ts01",
    task: "Practice JavaScript",
    startTime: new Date(2022, 4, 18, 10),
    endTime: new Date(2022, 4, 18, 12, 30),
  },
  {
    id: "ts02",
    task: "Learn React.js",
    startTime: new Date(2022, 4, 18, 18, 30),
    endTime: new Date(2022, 4, 18, 21),
  },
  {
    id: "ts03",
    task: "Review HTML and CSS",
    startTime: new Date(2022, 4, 19, 10),
    endTime: new Date(2022, 4, 19, 13, 30),
  },
  {
    id: "ts04",
    task: "Learn git and github",
    startTime: new Date(2022, 4, 20, 10),
    endTime: new Date(2022, 4, 20, 11, 30),
  },
  {
    id: "ts05",
    task: "Practice JavaScript",
    startTime: new Date(2022, 4, 20, 19, 30),
    endTime: new Date(2022, 4, 20, 22, 30),
  },
];

function App() {
  const [taskDetails, setTaskDetails] = useState(DUMMY_TASKS);

  const addTaskDescriptionHandler = function (taskDescription) {
    setTaskDetails((prevTaskDescriptions) => [
      taskDescription,
      ...prevTaskDescriptions,
    ]);
  };
  return (
    <main className="main">
      <HeaderTitle />
      <NewTask onAddTaskDescription={addTaskDescriptionHandler} />
      <TaskList taskDetailsList={taskDetails} />
    </main>
  );

  // return React.createElement(
  //   "main",
  //   { className: "main" },
  //   React.createElement(HeaderTitle, {}),
  //   React.createElement(TaskList, { taskDetailsList: taskDetails })
  // );
}

export default App;
