import React from "react";
import PropTypes from "prop-types";
import { getMinutesAndSeconds, useInterval } from "../../utilities/helper";
import timerDingURL from "../../media/timerEnds.wav";
import "./Timer.css";

const timerDingSound = new Audio(timerDingURL);

function Timer(props) {
  const {
    isTimerRunning,
    timerDuration,
    setTimerRunning,
    isOnBreak,
    setPlanMode,
    isPlanMode
  } = props;
  TimerRunner(props);
  return (
    <div>
      <TimerDisplay timerDuration={timerDuration} />
      <TimerButton
        setTimerRunning={setTimerRunning}
        isTimerRunning={isTimerRunning}
        isOnBreak={isOnBreak}
        isPlanMode={isPlanMode}
        setPlanMode={setPlanMode}
      />
    </div>
  );
}

Timer.propTypes = {
  isTimerRunning: PropTypes.bool.isRequired,
  timerDuration: PropTypes.number.isRequired,
  setTimerDuration: PropTypes.func.isRequired,
  setTimerRunning: PropTypes.func.isRequired,
  setOnBreak: PropTypes.func.isRequired,
  isOnBreak: PropTypes.bool.isRequired,
  workDuration: PropTypes.number.isRequired,
  breakDuration: PropTypes.number.isRequired,
  isPlanMode: PropTypes.bool.isRequired,
  setPlanMode: PropTypes.func.isRequired
};

function TimerRunner(props) {
  useInterval(
    () => timerIntervalFunction(props),
    props.isTimerRunning ? 1000 : null
  );
}

function timerIntervalFunction(props) {
  const {
    timerDuration,
    setTimerRunning,
    setTimerDuration,
    setOnBreak,
    isOnBreak,
    workDuration,
    breakDuration
  } = props;
  if (timerDuration > 0) {
    setTimerDuration(timerDuration - 1000);
  } else {
    timerDingSound.play();
    setTimerRunning(false);
    setOnBreak(!isOnBreak);
    const currentTimerDuration = !isOnBreak ? breakDuration : workDuration;
    setTimerDuration(currentTimerDuration);
  }
}

function TimerDisplay({ timerDuration }) {
  return <p className="timerDigits">{getMinutesAndSeconds(timerDuration)}</p>;
}

TimerDisplay.propTypes = {
  timerDuration: PropTypes.number.isRequired
};

function TimerButton(props) {
  const {
    setTimerRunning,
    isTimerRunning,
    isOnBreak,
    isPlanMode,
    setPlanMode
  } = props;
  return (
    <button
      onClick={() => {
        setTimerRunning(!isTimerRunning);
        if (isPlanMode) setPlanMode(false);
      }}
    >
      {selectButtonDisplay(isTimerRunning, isOnBreak)}
    </button>
  );
}

TimerButton.propTypes = {
  setTimerRunning: PropTypes.func.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isOnBreak: PropTypes.bool.isRequired,
  isPlanMode: PropTypes.bool.isRequired,
  setPlanMode: PropTypes.func.isRequired
};

function selectButtonDisplay(isTimerRunning, isOnBreak) {
  if (isOnBreak) {
    if (isTimerRunning) {
      return "Pause Break";
    } else {
      return "Start Break";
    }
  } else {
    if (isTimerRunning) {
      return "Pause Work";
    } else {
      return "Start Work";
    }
  }
}

export default Timer;
