import React from "react";

function Task() {
  return (
    <div>
      Task: <input type="text" disabled={isTimerRunning && timerDuration} />
    </div>
  );
}

export default Task;
