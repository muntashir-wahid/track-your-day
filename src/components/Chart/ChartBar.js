import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  const barInnerHeight = Math.round((props.totalWorkingHour / 24) * 100) + "%";

  return (
    <div className="chart-bar__container">
      <div className="chart-bar">
        <div
          className="chart-bar__inner"
          style={{ height: barInnerHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
