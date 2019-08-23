import React from "react";
import PropTypes from "prop-types";

function Status(props) {
  return (
    <div>
      <StatusDisplay {...props} />
    </div>
  );
}

Status.propTypes = {
  isOnBreak: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isPlanMode: PropTypes.bool.isRequired
};

function StatusDisplay(props) {
  const currentStatus = selectStatusDisplay(props);
  return <p>{currentStatus}</p>;
}

StatusDisplay.propTypes = {
  isOnBreak: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired
};

function selectStatusDisplay(props) {
  const { isOnBreak, isTimerRunning, isPlanMode } = props;
  if (isPlanMode) {
    return "Plan";
  } else if (isOnBreak) {
    if (isTimerRunning) {
      return "Break";
    }
    return "Break  (Paused)";
  } else if (isTimerRunning) {
    return "Work";
  } else {
    return "Work (Paused)";
  }
}

export default Status;
