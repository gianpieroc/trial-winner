import { takeLatest, all } from "redux-saga/effects";

import { START_GET_TRIAL_WINNER } from "./types";

import getTrialWinner from "./getTrialWinner";

export default function* rootSaga() {
  yield all([takeLatest(START_GET_TRIAL_WINNER, getTrialWinner)]);
}
