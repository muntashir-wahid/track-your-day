import React from "react";
import TaskTime from "./TaskTime";
import TaskDuration from "./TaskDuration";
import styles from "./TaskDescription.module.css";

function TaskDescription(props) {
  return (
    <li className={styles["task-description"]}>
      <TaskTime startsAt={props.startTime} endsAt={props.endTime} />
      <div>
        <h4>{props.task}</h4>
      </div>
      <TaskDuration taskStarts={props.startTime} taskEnds={props.endTime} />
    </li>
  );
}

export default TaskDescription;
