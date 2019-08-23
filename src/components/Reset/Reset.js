import React from "react";
import PropTypes from "prop-types";

function Reset(props) {
  return (
    <div>
      <ResetButton />
    </div>
  );
}

Reset.propTypes = {};

function ResetButton() {
  return <button title="Resets the timer and motivation level.">Reset</button>;
}

export default Reset;
