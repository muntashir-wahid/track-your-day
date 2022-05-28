import React from "react";
import "./TaskDuration";
import "./TaskDuration.css";

function TaskDuration(props) {
  const totalDuration = props.taskEnds - props.taskStarts;
  const totalHours = totalDuration / 1000 / 60 / 60;
  const totalMinutes = (totalHours * 60) % 60;
  return (
    <div className="task-duration">
      <span>{Math.trunc(totalHours)} Hour(s)</span>
      <span>{Math.round(totalMinutes)} Minute(s)</span>
    </div>
  );
}

export default TaskDuration;
