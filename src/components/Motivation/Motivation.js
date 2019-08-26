import React from "react";
import PropTypes from "prop-types";
import "./Motivation.css";

export default function Motivation(props) {
  return (
    <div>
      <p className="motivationSelectorLabel">Motivation Level: </p>
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
      onChange={event => handleMotivationOptionChange(event, props)}
    >
      {generateMotivationOptionElements(debugMultiplier)}
    </select>
  );
}

function handleMotivationOptionChange(event, props) {
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
  5,
  10,
  15,
  20,
  25,
  35,
  45,
  50,
  60,
  75,
  90
];
