import * as ActionTypes from "./types";

export const startGetTrialWinner = payload => ({
  type: ActionTypes.START_GET_TRIAL_WINNER,
  payload
});

export const successGetTrialWinner = payload => ({
  type: ActionTypes.SUCCESS_GET_TRIAL_WINNER,
  payload
});

export const failGetTrialWinner = payload => ({
  type: ActionTypes.FAIL_GET_TRIAL_WINNER,
  payload
});

export const updateParty = payload => ({
  type: ActionTypes.UPDATE_PARTY,
  payload
});


