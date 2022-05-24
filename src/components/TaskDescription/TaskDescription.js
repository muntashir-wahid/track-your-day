import React from "react";
import TaskTime from "./TaskTime";
import "./TaskDescription.css";

function TaskDescription(props) {
  const taskDuration = (props.endTime - props.startTime) / 1000 / 60 / 60;
  return (
    <li className="task-description">
      <TaskTime startsAt={props.startTime} endsAt={props.endTime} />
      <div>
        <h4>{props.task}</h4>
      </div>
      <div className="task-description__duration">
        <p>{taskDuration} Hour(s)</p>
      </div>
    </li>
  );
}

export default TaskDescription;
