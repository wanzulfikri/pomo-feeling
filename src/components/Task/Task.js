import React from "react";

function Task({ isTimerRunning, timerDuration }) {
  return (
    <div>
      Task: <input type="text" disabled={isTimerRunning && timerDuration} />
    </div>
  );
}

export default Task;
