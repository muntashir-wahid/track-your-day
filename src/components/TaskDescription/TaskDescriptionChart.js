import React from "react";
import Chart from "../Chart/Chart";

function TaskDescriptionChart(props) {
  const chartDataPoints = [
    { dayName: "Sunday", totalWorkingHour: 0 },
    { dayName: "Monday", totalWorkingHour: 0 },
    { dayName: "Tuesday", totalWorkingHour: 0 },
    { dayName: "Wednesday", totalWorkingHour: 0 },
    { dayName: "Thursday", totalWorkingHour: 0 },
    { dayName: "Friday", totalWorkingHour: 0 },
    { dayName: "Saturday", totalWorkingHour: 0 },
  ];

  const calcTaskDuration = (startsAt, endsAt) => {
    const startTimeStamp = Date.parse(startsAt);
    const endTimeStamp = Date.parse(endsAt);
    const durationTimeStamp = endTimeStamp - startTimeStamp;
    const durationHour = durationTimeStamp / 1000 / 60 / 60;
    return durationHour;
  };

  props.taskDetails.forEach(
    (taskDetail) =>
      (chartDataPoints[taskDetail.startTime.getDay()].totalWorkingHour +=
        calcTaskDuration(taskDetail.startTime, taskDetail.endTime))
  );

  return <Chart dataPoints={chartDataPoints} />;
}

export default TaskDescriptionChart;
