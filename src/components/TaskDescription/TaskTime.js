import React from "react";
import "./TaskTime.css";

function TaskTime(props) {
  const dayName = props.startsAt.toLocaleString("en-US", { weekday: "long" });
  const taskStartsAt = props.startsAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const taskEndsAt = props.endsAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="task-time">
      <span>{dayName}</span>
      <span>
        {taskStartsAt} - {taskEndsAt}
      </span>
    </div>
  );
}

export default TaskTime;
