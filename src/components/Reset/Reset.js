import React from "react";
import PropTypes from "prop-types";

function Reset(props) {
  return (
    <div>
      <ResetButton {...props} />
    </div>
  );
}

Reset.propTypes = {
  setPlanMode: PropTypes.func.isRequired,
  setTimerRunning: PropTypes.func.isRequired,
  setTimerDuration: PropTypes.func.isRequired,
  workDuration: PropTypes.number.isRequired
};

function ResetButton(props) {
  return (
    <button
      title="Resets the timer and motivation level."
      onClick={() => {
        resetToDefault(props);
      }}
    >
      I feel different...
    </button>
  );
}

function resetToDefault(props) {
  const {
    setPlanMode,
    setTimerRunning,
    setTimerDuration,
    workDuration
  } = props;
  setPlanMode(true);
  setTimerRunning(false);
  setTimerDuration(workDuration);
}

export default Reset;
