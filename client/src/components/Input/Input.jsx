import React from "react";
import PropTypes from "prop-types";

import "./input.scss";

const Input = props => <input className="input-container" {...props} />;

Input.propTypes = {
  value: PropTypes.string.isRequired
};

export default Input;
