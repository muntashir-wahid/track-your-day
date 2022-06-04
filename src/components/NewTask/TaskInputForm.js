import React, { useState } from "react";
import styles from "./TaskInputForm.module.css";
import Button from "../UI/Button";

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
    console.log(e.target.value);
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
    if (!task || !taskStartsAt || !taskEndsAt) {
      return;
    }
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

  const formEditCancleHandler = function () {
    props.onCancleTaskInputForm(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-control"]}>
        <div className={styles["task-title"]}>
          <label>Your Task</label>
          <input type="taxt" value={task} onChange={taskInputHandler} />
        </div>
        <div className={styles["task-start"]}>
          <label>Task Starts</label>
          <input
            type="datetime-local"
            value={taskStartsAt}
            onChange={taskStartTimeHandler}
          />
        </div>
        <div className={styles["task-end"]}>
          <label>Task Ends</label>
          <input
            type="datetime-local"
            value={taskEndsAt}
            onChange={taskEndTimeHandler}
          />
        </div>
        <div className={styles["task-btns"]}>
          <Button
            className={styles.btn}
            type="button"
            onClick={formEditCancleHandler}
          >
            Cancle
          </Button>
          <Button className={styles.btn} type="submit">
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TaskInputForm;
