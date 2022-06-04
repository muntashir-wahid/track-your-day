import React from "react";
import styles from "./TaskFilter.module.css";

function TaskFilter(props) {
  const filterdeDayHandler = function (e) {
    props.onChangeWeedDay(e.target.value);
  };

  return (
    <div className={styles["task-filter"]}>
      <label>Choose a Weekday</label>
      <select
        className={styles["task-filter__weekday"]}
        onChange={filterdeDayHandler}
        value={props.selectedWeedDayName}
      >
        <option value="Saturday">Sat</option>
        <option value="Sunday">Sun</option>
        <option value="Monday">Mon</option>
        <option value="Tuesday">Tue</option>
        <option value="Wednesday">Wed</option>
        <option value="Thursday">Thu</option>
        <option value="Friday">Fri</option>
      </select>
    </div>
  );
}

export default TaskFilter;
