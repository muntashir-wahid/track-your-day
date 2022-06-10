import React from "react";
import ReactDom from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = function (props) {
  const Backdrop = function (props) {
    return (
      <div
        className={styles["error-modal__backdrop"]}
        onClick={props.onCancle}
      ></div>
    );
  };
  const Overlay = function (props) {
    return (
      <div className={styles["error-modal__overlay"]}>
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
    );
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onCancle={props.onCancle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onCancle={props.onCancle}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
