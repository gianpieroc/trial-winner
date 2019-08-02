import { call, put, select } from "redux-saga/effects";
import { failGetTrialWinner, successGetTrialWinner } from "./actions";

export const getWinnerApi = async body => {
  const response = await fetch(`http://localhost:3030/trial`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await response.json();
};

export default function* getTrialWinner() {
  try {
    const parties = yield select(state => state.trial.parties);
    const response = yield call(getWinnerApi, parties);

    if (!response) {
      throw new Error(response.problem);
    }

    yield put(successGetTrialWinner(response));
  } catch (e) {
    console.log(e);
    yield put(failGetTrialWinner(e));
  }
}
