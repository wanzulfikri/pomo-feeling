import React, { useState } from "react";
import Timer from "../Timer/Timer";
import Status from "../Status/Status";
import Motivation from "../Motivation/Motivation";
import Reset from "../Reset/Reset";

function App() {
  const isDebugMode = true;
  const MINUTES = 60 * 1000;
  const [workDuration, setWorkDuration] = useState(
    (isDebugMode ? 0.1 : 25) * MINUTES
  );
  const [breakDuration, setBreakDuration] = useState(
    (isDebugMode ? 0.05 : 5) * MINUTES
  );
  const [isOnBreak, setOnBreak] = useState(false);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(
    (isDebugMode ? 0.1 : workDuration) * MINUTES
  );
  // TODO: isPlanMode allows user to change motivation level and timer duration
  // it can be reset if user's motivation level changes
  const [isPlanMode, setPlanMode] = useState(true);

  return (
    <div className="App">
      <Motivation
        setWorkDuration={setWorkDuration}
        setTimerDuration={setTimerDuration}
      />
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
      <Reset />
    </div>
  );
}

export default App;
