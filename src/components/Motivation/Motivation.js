import React from "react";
import PropTypes from "prop-types";

export default function Motivation(props) {
  return (
    <div>
      <SelectMotivationLevel props={props} />
    </div>
  );
}

Motivation.propTypes = {
  setWorkDuration: PropTypes.func.isRequired,
  setTimerDuration: PropTypes.func.isRequired
};

function SelectMotivationLevel({ props }) {
  return (
    <select onClick={event => handleMotivationOptionClick(event, props)}>
      {generateMotivationOptionElements()}
    </select>
  );
}

function handleMotivationOptionClick(event, props) {
  const { setWorkDuration, setTimerDuration } = props;
  const clickedMotivationOption = Number(event.target.value);
  setWorkDuration(clickedMotivationOption);
  setTimerDuration(clickedMotivationOption);
}

function generateMotivationOptionElements() {
  let MotivationOptionElements = MOTIVATIONOPTIONSMINUTESLIST.map(
    (element, index) => (
      <option default key={element} value={element * 1000 * 60}>
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
