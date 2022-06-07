import React, { useState } from "react";
import styles from "./TaskInputForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function TaskInputForm(props) {
  // useSate hooks for storing task description
  // Using multi state concept
  const [task, setTask] = useState("");
  const [taskStartsAt, setTaskStartsAt] = useState("");
  const [taskEndsAt, setTaskEndsAt] = useState("");
  const [isError, setIsError] = useState();

  /*
  // Using one state concept
  const [taskDescription, setTaskDescription] = useState({
    task: "",
    taskStartsAt: "",
    taskEndsAt: "",
  });
  */

  // Event handlerd to handle user new task description
  const taskInputHandler = function(e) {
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
  const taskStartTimeHandler = function(e) {
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
  const taskEndTimeHandler = function(e) {
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
  const submitHandler = function(e) {
    e.preventDefault();
    if (!task || !taskStartsAt || !taskEndsAt) {
      setIsError({
        title: "Empty Input",
        message: "Please set some task and time for the task",
      });
      return;
    }
    const inputTaskDescription = {
      task: task,
      startTime: new Date(taskStartsAt),
      endTime: new Date(taskEndsAt),
    };
    if (
      inputTaskDescription.startTime.getDate() !==
      inputTaskDescription.endTime.getDate()
    ) {
      setIsError({
        title: "Date invalid",
        message: "Please input same start and end date!!",
      });
      return;
    }
    props.onSaveTaskDescription(inputTaskDescription);
    setTask("");
    setTaskStartsAt("");
    setTaskEndsAt("");
  };

  const formEditCancleHandler = function() {
    props.onCancleTaskInputForm(true);
  };

  const errorModalCancleHandler = function() {
    setIsError(null);
  };

  return (
    <React.Fragment>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onCancle={errorModalCancleHandler}
        />
      )}
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
    </React.Fragment>
  );
}

export default TaskInputForm;
