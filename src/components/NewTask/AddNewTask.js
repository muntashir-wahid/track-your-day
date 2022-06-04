import React from "react";
import styles from "./AddNewTask.module.css";

function AddNewTask(props) {
  const buttonClickHandler = function (e) {
    props.onEditInputForm(true);
  };
  return (
    <div className={styles["edit-task"]}>
      <button onClick={buttonClickHandler}>Add New Task</button>
    </div>
  );
}

export default AddNewTask;
