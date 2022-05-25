import React from "react";
import "./AddNewTask.css";

function AddNewTask(props) {
  const buttonClickHandler = function(e) {
    props.onEditInputForm(true);
  }
  return (
    <div className="edit-task">
      <button onClick={buttonClickHandler}>Add New Task</button>
    </div>
  );
}

export default AddNewTask;
