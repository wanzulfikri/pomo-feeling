import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Motivation.css";

export default function Motivation(props) {
  const [
    selectedMotivationOptionIndex,
    setSelectedMotivationOptionIndex
  ] = useState(0);
  return (
    <div>
      <p className="motivationSelectorLabel">Motivation: </p>
      <SelectMotivationLevel
        {...props}
        setSelectedMotivationOptionIndex={setSelectedMotivationOptionIndex}
      />
      <WorkBreakCycleDisplay
        selectedMotivationOptionIndex={selectedMotivationOptionIndex}
      />
    </div>
  );
}

Motivation.propTypes = {
  setWorkDuration: PropTypes.func.isRequired,
  setTimerDuration: PropTypes.func.isRequired,
  isPlanMode: PropTypes.bool.isRequired,
  setBreakDuration: PropTypes.func.isRequired
};

function SelectMotivationLevel(props) {
  const { isPlanMode, debugMultiplier } = props;
  return (
    <select
      disabled={!isPlanMode}
      onChange={event => handleMotivationOptionChange(event, props)}
    >
      {generateMotivationOptionElements(debugMultiplier)}
    </select>
  );
}

function handleMotivationOptionChange(event, props) {
  const {
    setWorkDuration,
    setTimerDuration,
    setBreakDuration,
    setSelectedMotivationOptionIndex
  } = props;

  const breakIndexInArray = 1;
  const clickedMotivationOption = Number(event.target.value);
  const clickedMotivationIndex = Number(event.target.selectedIndex);
  setSelectedMotivationOptionIndex(clickedMotivationIndex);
  setWorkDuration(clickedMotivationOption);
  setBreakDuration(
    MOTIVATIONOPTIONSMINUTESLIST[clickedMotivationIndex][breakIndexInArray]
  );
  setTimerDuration(clickedMotivationOption);
}

function generateMotivationOptionElements(debugMultiplier) {
  let MotivationOptionElements = MOTIVATIONOPTIONSMINUTESLIST.map(
    (element, index) => {
      const value = debugMultiplier * element[0] * 1000 * 60;
      return (
        <option default key={element} index={index} value={value}>
          {index}
        </option>
      );
    }
  );
  return MotivationOptionElements;
}

const MOTIVATIONOPTIONSMINUTESLIST = [
  [5, 1],
  [10, 2],
  [15, 3],
  [20, 4],
  [25, 5],
  [35, 7],
  [45, 9],
  [50, 10],
  [60, 12],
  [75, 15],
  [90, 30]
];

function WorkBreakCycleDisplay({ selectedMotivationOptionIndex }) {
  const currentCycleElement =
    MOTIVATIONOPTIONSMINUTESLIST[selectedMotivationOptionIndex];
  const workDuration = currentCycleElement[0];
  const breakDuration = currentCycleElement[1];
  return (
    <p>
      Work: {workDuration} | Break: {breakDuration}
    </p>
  );
}

WorkBreakCycleDisplay.propTypes = {
  selectedMotivationOptionIndex: PropTypes.number.isRequired
};
