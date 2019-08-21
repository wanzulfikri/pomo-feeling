import React from "react";
import PropTypes from "prop-types";

function Status({ isOnBreak, isTimerRunning }) {
  return (
    <div>
      <StatusDisplay isOnBreak={isOnBreak} isTimerRunning={isTimerRunning} />
    </div>
  );
}

Status.propTypes = {
  isOnBreak: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired
};

function StatusDisplay({ isOnBreak, isTimerRunning }) {
  const currentStatus = selectStatusDisplay(isOnBreak, isTimerRunning);
  return <p>{currentStatus}</p>;
}

StatusDisplay.propTypes = {
  isOnBreak: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired
};

function selectStatusDisplay(isOnBreak, isTimerRunning) {
  if (isOnBreak) {
    return "Break";
  } else if (isTimerRunning) {
    return "Work";
  } else {
    return "Plan/Pause";
  }
}

export default Status;
