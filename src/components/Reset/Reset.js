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
  workDuration: PropTypes.number.isRequired,
  isPlanMode: PropTypes.bool.isRequired,
  setOnBreak: PropTypes.func.isRequired
};

function ResetButton(props) {
  const { isPlanMode } = props;
  return (
    <button
      title="Resets the timer and motivation level."
      onClick={() => {
        resetToDefault(props);
      }}
      disabled={isPlanMode}
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
    workDuration,
    setOnBreak
  } = props;
  setPlanMode(true);
  setTimerRunning(false);
  setTimerDuration(workDuration);
  setOnBreak(false);
}

export default Reset;
