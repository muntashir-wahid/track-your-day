import React from "react";
import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  return (
    <div className={styles["task-description__chart"]}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.dayName}
          label={dataPoint.dayName}
          totalWorkingHour={dataPoint.totalWorkingHour}
        />
      ))}
    </div>
  );
}

export default Chart;
