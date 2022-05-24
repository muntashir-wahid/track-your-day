import React, { useState } from "react";
import "./TaskList.css";
import TaskFilter from "./TaskFilter";
import TaskDescription from "./TaskDescription";

function TaskList(props) {
  const [selectedWeedDay, setSelectedWeedDay] = useState("Saturday");
  const changeWeedDayHandler = function (weekDayName) {
    setSelectedWeedDay(weekDayName);
  };

  const filteredTaskDetails = props.taskDetailsList.filter((taskDetails) => {
    return (
      taskDetails.startTime.toLocaleString("en-US", { weekday: "long" }) ===
      selectedWeedDay
    );
  });
  return (
    <section>
      <TaskFilter
        selectedWeedDayName={selectedWeedDay}
        onChangeWeedDay={changeWeedDayHandler}
      />
      <ul className="task-list">
        {filteredTaskDetails.map((taskDescription) => (
          <TaskDescription
            key={taskDescription.id}
            task={taskDescription.task}
            startTime={taskDescription.startTime}
            endTime={taskDescription.endTime}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
