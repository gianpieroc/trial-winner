import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PartyContainer from "../../containers/Party";
import Button from "../../components/Button";
import History from "../../components/History";
import { startGetTrialWinner } from "../../redux/actions";
import "./app.scss";

const App = ({ getWinner, parties, history, winner, disabledInput }) => (
  <div className="app">
    <h1>Let's see who's the Trial winner</h1>
    <code>
      Values and its respective points: K:5, V:1 and N:2 (You can only type
      them)
    </code>
    <code>If the King signs, V signs won't have any value</code>
    <form onSubmit={getWinner}>
      <div className="app-container-column">
        <div className="app-container-row">
          {parties.length > 0 &&
            parties.map(party => (
              <PartyContainer key={party.name} party={party} />
            ))}
        </div>
        <div className="bottom-container">
          <Button disabled={disabledInput} type="submit" label="Trial Time!" />
          <h3>
            {winner &&
              winner.name &&
              winner.points &&
              `The winner is: ${winner.name} with ${winner.points} points`}
          </h3>
        </div>
      </div>
    </form>
    <History history={history} />
  </div>
);

App.propTypes = {
  parties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      signatures: PropTypes.string,
      points: PropTypes.number
    })
  ),
  history: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number
    })
  ),
  getWinner: PropTypes.func
};

const mapStateToProps = state => ({
  parties: state.trial.parties,
  disabledInput: state.trial.parties.find(
    party => party.signatures.length === 0
  ),
  winner: state.trial.winner,
  history: state.trial.history,
  isLoading: state.trial.isLoading
});

const mapDispatchToProps = dispatch => ({
  getWinner: event => {
    event.preventDefault();
    dispatch(startGetTrialWinner());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
