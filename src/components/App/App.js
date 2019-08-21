import React, { useState } from "react";
import Timer from "../Timer/Timer";
import Status from "../Status/Status";

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

  return (
    <div className="App">
      <Status isOnBreak={isOnBreak} isTimerRunning={isTimerRunning} />
      <Timer
        isTimerRunning={isTimerRunning}
        timerDuration={timerDuration}
        setTimerRunning={setTimerRunning}
        setTimerDuration={setTimerDuration}
        setOnBreak={setOnBreak}
        isOnBreak={isOnBreak}
        workDuration={workDuration}
        breakDuration={breakDuration}
      />
    </div>
  );
}

export default App;
