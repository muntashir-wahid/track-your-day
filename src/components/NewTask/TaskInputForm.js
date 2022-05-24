import React, { useState } from "react";
import "./TaskInputForm.css";

function TaskInputForm(props) {
  // useSate hooks for storing task description
  // Using multi state concept
  const [task, setTask] = useState("");
  const [taskStartsAt, setTaskStartsAt] = useState("");
  const [taskEndsAt, setTaskEndsAt] = useState("");

  /*
  // Using one state concept
  const [taskDescription, setTaskDescription] = useState({
    task: "",
    taskStartsAt: "",
    taskEndsAt: "",
  });
  */

  // Event handlerd to handle user new task description
  const taskInputHandler = function (e) {
    setTask(e.target.value);

    /*
    // One state approach
    setTaskDescription((pervState) => {
      return {
        ...pervState,
        task: e.target.value,
      };
    });
    */
  };
  const taskStartTimeHandler = function (e) {
    setTaskStartsAt(e.target.value);

    /*
    // One state approach
    setTaskDescription((pervState) => {
      return {
        ...pervState,
        taskStartsAt: e.target.value,
      };
    });
    */
  };
  const taskEndTimeHandler = function (e) {
    setTaskEndsAt(e.target.value);

    /*
    // One state approach
    setTaskDescription((pervState) => {
      return {
        ...pervState,
        taskEndsAt: e.target.value,
      };
    });
    */
  };

  // Handling form submit and creat an object to with the inputs
  const submitHandler = function (e) {
    e.preventDefault();
    const inputTaskDescription = {
      task: task,
      startTime: new Date(taskStartsAt),
      endTime: new Date(taskEndsAt),
    };
    props.onSaveTaskDescription(inputTaskDescription);
    setTask("");
    setTaskStartsAt("");
    setTaskEndsAt("");
  };

  return (
    <form className="task-input__form" onSubmit={submitHandler}>
      <div className="task-input__task">
        <label>Your Task</label>
        <input type="taxt" value={task} onChange={taskInputHandler} />
      </div>
      <div className="task-input__starts">
        <label>Task Starts</label>
        <input
          type="datetime-local"
          value={taskStartsAt}
          onChange={taskStartTimeHandler}
        />
      </div>
      <div className="task-input__ends">
        <label>Task Ends</label>
        <input
          type="datetime-local"
          value={taskEndsAt}
          onChange={taskEndTimeHandler}
        />
      </div>
      <div className="task-input__btn">
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskInputForm;
