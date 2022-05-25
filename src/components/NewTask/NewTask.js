import React, { useState } from "react";
import TaskInputForm from "./TaskInputForm";
import "./NewTask.css";
import AddNewTask from "./AddNewTask";

function NewTask(props) {
  // Lifting state 
  const saveTaskDescriptionHandler = function (inputTaskDescription) {
    const taskDescription = {
      ...inputTaskDescription,
      id: Math.random(),
    };
    props.onAddTaskDescription(taskDescription);
  };
  const [editInputForm, setEditInputForm] = useState(false);
  const isInputFormEditedHandler = function (isEdited) {
    setEditInputForm(isEdited);
  };
  const taskInputFormCancleHandler = function (isCancle) {
    setEditInputForm(!isCancle);
  };
  return (
    <section className="new-task">
      {editInputForm ? (
        <TaskInputForm
          onSaveTaskDescription={saveTaskDescriptionHandler}
          onCancleTaskInputForm={taskInputFormCancleHandler}
        />
      ) : (
        <AddNewTask onEditInputForm={isInputFormEditedHandler} />
      )}
    </section>
  );
}

export default NewTask;
