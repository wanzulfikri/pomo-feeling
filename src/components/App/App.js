import React, { useState } from "react";
import Timer from "../Timer/Timer";
import Status from "../Status/Status";
import Motivation from "../Motivation/Motivation";
import Reset from "../Reset/Reset";
import "./App.css";

function App() {
  const isDebugMode = false;
  const debugMultiplier = isDebugMode ? 0.1 : 1;
  const MINUTES = 60 * 1000;
  const [workDuration, setWorkDuration] = useState(
    debugMultiplier * 5 * MINUTES
  );
  const [breakDuration, setBreakDuration] = useState(
    debugMultiplier * 1 * MINUTES
  );
  const [isOnBreak, setOnBreak] = useState(false);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(workDuration);
  const [isPlanMode, setPlanMode] = useState(true);

  return (
    <div className={setAppComponentCSSClass(isPlanMode, isOnBreak)}>
      <Motivation
        setWorkDuration={setWorkDuration}
        setTimerDuration={setTimerDuration}
        isPlanMode={isPlanMode}
        debugMultiplier={debugMultiplier}
        setBreakDuration={setBreakDuration}
      />
      <Reset
        setPlanMode={setPlanMode}
        setTimerRunning={setTimerRunning}
        workDuration={workDuration}
        setTimerDuration={setTimerDuration}
        isPlanMode={isPlanMode}
        setOnBreak={setOnBreak}
      />
      <hr />
      <Status
        isOnBreak={isOnBreak}
        isTimerRunning={isTimerRunning}
        isPlanMode={isPlanMode}
      />
      <Timer
        isTimerRunning={isTimerRunning}
        timerDuration={timerDuration}
        setTimerRunning={setTimerRunning}
        setTimerDuration={setTimerDuration}
        setOnBreak={setOnBreak}
        isOnBreak={isOnBreak}
        workDuration={workDuration}
        breakDuration={breakDuration}
        isPlanMode={isPlanMode}
        setPlanMode={setPlanMode}
      />
    </div>
  );
}

function setAppComponentCSSClass(isPlanMode, isOnBreak) {
  let className = "App ";
  if (isPlanMode) {
    return className + "neutral-state";
  } else if (isOnBreak) {
    return className + "break-state";
  } else {
    return className + "work-state";
  }
}

export default App;
