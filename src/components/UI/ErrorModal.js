import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = function (props) {
  return (
    <div>
      <div className={styles.overlay} onClick={props.onCancle}></div>
      <div className={styles["error-modal"]}>
        <header>
          <h3>{props.title}</h3>
        </header>
        <article>
          <p>{props.message}</p>
        </article>
        <footer>
          <Button onClick={props.onCancle}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
