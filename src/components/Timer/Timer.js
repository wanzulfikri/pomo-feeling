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
    workDuration,
    breakDuration,
    setTimerRunning,
    isOnBreak,
    setPlanMode,
    isPlanMode,
    setTimerDuration,
    setOnBreak
  } = props;
  TimerRunner(props);
  return (
    <div>
      <TimerDisplay timerDuration={timerDuration} />
      <ToggleTimerButton
        setTimerRunning={setTimerRunning}
        isTimerRunning={isTimerRunning}
        isOnBreak={isOnBreak}
        isPlanMode={isPlanMode}
        setPlanMode={setPlanMode}
      />
      <SkipTimerButton
        setTimerDuration={setTimerDuration}
        isOnBreak={isOnBreak}
        workDuration={workDuration}
        breakDuration={breakDuration}
        setOnBreak={setOnBreak}
        isPlanMode={isPlanMode}
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

function ToggleTimerButton(props) {
  const {
    setTimerRunning,
    isTimerRunning,
    isOnBreak,
    isPlanMode,
    setPlanMode
  } = props;
  return (
    <button
      className="toggleTimerButton"
      onClick={() => {
        setTimerRunning(!isTimerRunning);
        if (isPlanMode) setPlanMode(false);
      }}
    >
      {selectToggleButtonDisplay(isTimerRunning, isOnBreak)}
    </button>
  );
}

ToggleTimerButton.propTypes = {
  setTimerRunning: PropTypes.func.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isOnBreak: PropTypes.bool.isRequired,
  isPlanMode: PropTypes.bool.isRequired,
  setPlanMode: PropTypes.func.isRequired
};

function selectToggleButtonDisplay(isTimerRunning, isOnBreak) {
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

function SkipTimerButton(props) {
  const { isOnBreak, isPlanMode } = props;
  return (
    <button
      className="skipTimerButton"
      onClick={() => {
        skipTimer(props);
      }}
      disabled={isPlanMode}
    >
      {selectSkipButtonDisplay(isOnBreak)}
    </button>
  );
}

SkipTimerButton.propTypes = {
  workDuration: PropTypes.number.isRequired,
  breakDuration: PropTypes.number.isRequired,
  setTimerDuration: PropTypes.func.isRequired,
  isOnBreak: PropTypes.bool.isRequired,
  setOnBreak: PropTypes.func.isRequired,
  isPlanMode: PropTypes.bool.isRequired
};

function skipTimer(props) {
  const {
    isOnBreak,
    workDuration,
    breakDuration,
    setTimerDuration,
    setOnBreak
  } = props;
  const newDuration = isOnBreak ? workDuration : breakDuration;
  setOnBreak(!isOnBreak);
  setTimerDuration(newDuration);
}

function selectSkipButtonDisplay(isOnBreak) {
  if (isOnBreak) {
    return "Skip Break";
  } else {
    return "Skip Work";
  }
}

export default Timer;
