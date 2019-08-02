import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ label, ...props }) => (
  <button className="button-container" {...props}>
    <p>{label}</p>
  </button>
);

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
