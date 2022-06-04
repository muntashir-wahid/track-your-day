import React from "react";
import styles from "./ChartBar.module.css";

function ChartBar(props) {
  const barInnerHeight = Math.round((props.totalWorkingHour / 24) * 100) + "%";

  return (
    <div className={styles["chart-bar__container"]}>
      <div className={styles["chart-bar"]}>
        <div
          className={styles["chart-bar__inner"]}
          style={{ height: barInnerHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}fl>{props.label}</div>
    </div>
  );
}

export default ChartBar;
