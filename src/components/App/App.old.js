import React, { useState } from "react";
import Task from "../Task/Task";
import { getMinutesAndSeconds, useInterval } from "../../utilities/helper";
import timerDingURL from "../../media/timerEnds.wav";
import "./App.css";

function App() {
  const MINUTES = 60 * 1000;
  //refactor state changes between neutral, work, pause, and break
  const isDebugMode = false; // toggle this to start debug mode
  const [timerDuration, setTimerDuration] = useState(
    (isDebugMode ? 0.1 : 1) * MINUTES
  );
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [isWaitingForBreak, setWaitingForBreakState] = useState(false);
  const [isOnBreak, setIsOnBreakState] = useState(false);
  const timerDingSound = new Audio(timerDingURL);

  useInterval(
    () => {
      if (timerDuration > 0 && !isWaitingForBreak) {
        setTimerDuration(timerDuration - 1000);
      } else if (!isWaitingForBreak || isOnBreak) {
        timerDingSound.play();
        // set to break
        if (!isOnBreak) {
          setWaitingForBreakState(true);
        } else {
          setIsOnBreakState(false);
        }

        setTimerDuration(isDebugMode ? 0.1 : 1 * MINUTES);
      }
    },
    isTimerRunning ? 1000 : null
  );

  return (
    // refactor the className please. Horrendous nests
    <div
      className={`App ${
        isTimerRunning
          ? isWaitingForBreak || isOnBreak
            ? "break-state"
            : "work-state"
          : "neutral-state"
      }`}
    >
      {/* REFACTORING TASK */}
      <Task />
      <div>
        Feel:
        <select
          onClick={event => {
            const selectedFeeling = event.target.value;
            setTimerDuration(selectedFeeling);
          }}
          id="feeling-select"
          disabled={isTimerRunning && timerDuration}
        >
          {/* refactor this to generate the options */}
          <option default value={1.0 * 1000 * 60}>
            0
          </option>
          <option value={2.5 * 1000 * 60}>1</option>
          <option value={5.0 * 1000 * 60}>2</option>
          <option value={7.5 * 1000 * 60}>3</option>
          <option value={10 * 1000 * 60}>4</option>
          <option value={12.5 * 1000 * 60}>5</option>
          <option value={15.0 * 1000 * 60}>6</option>
          <option value={17.5 * 1000 * 60}>7</option>
          <option value={20 * 1000 * 60}>8</option>
          <option value={22.5 * 1000 * 60}>9</option>
          <option value={25.0 * 1000 * 60}>10</option>
        </select>
      </div>
      <p>{getMinutesAndSeconds(timerDuration)}</p>
      <button
        onClick={() => {
          if (isWaitingForBreak) {
            setWaitingForBreakState(false);
            setIsOnBreakState(true);
          } else {
            setTimerRunning(!isTimerRunning);
          }
        }}
      >
        {isTimerRunning && timerDuration && !isWaitingForBreak
          ? "Stop"
          : isWaitingForBreak
          ? "Break"
          : "Start"}
      </button>
    </div>
  );
}

export default App;
