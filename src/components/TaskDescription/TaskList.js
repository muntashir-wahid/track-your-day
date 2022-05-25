import React, { useState } from "react";
import "./TaskList.css";
import TaskFilter from "./TaskFilter";
import TaskDescription from "./TaskDescription";

function TaskList(props) {
  // Use state to hold and manipulate filtered weekday
  const [selectedWeedDay, setSelectedWeedDay] = useState("Saturday");
  const changeWeedDayHandler = function (weekDayName) {
    setSelectedWeedDay(weekDayName);
  };

  // Filter Task details array with the selected day
  const filteredTaskDetails = props.taskDetailsList.filter((taskDetails) => {
    return (
      taskDetails.startTime.toLocaleString("en-US", { weekday: "long" }) ===
      selectedWeedDay
    );
  });

  // Create a dynamic variable to conditionaly render the content
  let taskDescriptionContent = (
    <h5 className="message">You have no task today</h5>
  );
  if (filteredTaskDetails.length > 0) {
    taskDescriptionContent = filteredTaskDetails.map((taskDescription) => (
      <TaskDescription
        key={taskDescription.id}
        task={taskDescription.task}
        startTime={taskDescription.startTime}
        endTime={taskDescription.endTime}
      />
    ));
  }
  return (
    <section>
      <TaskFilter
        selectedWeedDayName={selectedWeedDay}
        onChangeWeedDay={changeWeedDayHandler}
      />
      <ul className="task-list">{taskDescriptionContent}</ul>
    </section>
  );
}

export default TaskList;
