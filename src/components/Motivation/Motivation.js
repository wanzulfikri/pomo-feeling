import React from "react";
import PropTypes from "prop-types";

export default function Motivation(props) {
  return (
    <div>
      <SelectMotivationLevel {...props} />
    </div>
  );
}

Motivation.propTypes = {
  setWorkDuration: PropTypes.func.isRequired,
  setTimerDuration: PropTypes.func.isRequired,
  isPlanMode: PropTypes.bool.isRequired
};

function SelectMotivationLevel(props) {
  const { isPlanMode, debugMultiplier } = props;
  return (
    <select
      disabled={!isPlanMode}
      onClick={event => handleMotivationOptionClick(event, props)}
    >
      {generateMotivationOptionElements(debugMultiplier)}
    </select>
  );
}

function handleMotivationOptionClick(event, props) {
  const { setWorkDuration, setTimerDuration } = props;
  const clickedMotivationOption = Number(event.target.value);
  setWorkDuration(clickedMotivationOption);
  setTimerDuration(clickedMotivationOption);
}

function generateMotivationOptionElements(debugMultiplier) {
  let MotivationOptionElements = MOTIVATIONOPTIONSMINUTESLIST.map(
    (element, index) => (
      <option
        default
        key={element}
        value={debugMultiplier * element * 1000 * 60}
      >
        {index}
      </option>
    )
  );
  return MotivationOptionElements;
}

const MOTIVATIONOPTIONSMINUTESLIST = [
  1,
  2.5,
  5.0,
  7.5,
  10.0,
  12.5,
  15.0,
  17.5,
  20.0,
  22.5,
  25.0
];
