import React, { useState } from "react";
import Timer from "../Timer/Timer";
import Status from "../Status/Status";
import Motivation from "../Motivation/Motivation";
import Reset from "../Reset/Reset";

function App() {
  const isDebugMode = false;
  const debugMultiplier = isDebugMode ? 0.1 : 1;
  const MINUTES = 60 * 1000;
  const [workDuration, setWorkDuration] = useState(
    debugMultiplier * 1 * MINUTES
  );
  const [breakDuration, setBreakDuration] = useState(
    debugMultiplier * 5 * MINUTES
  );
  const [isOnBreak, setOnBreak] = useState(false);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(workDuration);
  const [isPlanMode, setPlanMode] = useState(true);

  return (
    <div className="App">
      <Motivation
        setWorkDuration={setWorkDuration}
        setTimerDuration={setTimerDuration}
        isPlanMode={isPlanMode}
        debugMultiplier={debugMultiplier}
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
      <Reset
        setPlanMode={setPlanMode}
        setTimerRunning={setTimerRunning}
        workDuration={workDuration}
        setTimerDuration={setTimerDuration}
      />
    </div>
  );
}

export default App;
