import React from "react";
import PropTypes from "prop-types";

import "./history.scss";

const History = ({ history }) =>
  history.length > 0 &&
  history.map((lastWinner, key) => {
    if (key === 0) {
      return null;
    }
    return (
      <p className="history-container" key={key}>
        The winner is: {lastWinner && lastWinner.name} with {lastWinner.points}{" "}
        points
      </p>
    );
  });

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number
    })
  ),
  getWinner: PropTypes.func
};

export default History;
