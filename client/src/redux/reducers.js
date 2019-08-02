import * as ActionTypes from './types';
import {generateParty} from '../utils';

const initialState = {
  isLoading: false,
  error: null,
  history: [],
  parties: [generateParty('Party 1'), generateParty('Party 2')],
  isPlayingSong: false,
  winner: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_GET_TRIAL_WINNER:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.FAIL_GET_TRIAL_WINNER:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.SUCCESS_GET_TRIAL_WINNER:
      return {
        ...state,
        winner: action.payload,
        history: [ action.payload, ...state.history,],
        error: null,
        isLoading: false
      };
    case ActionTypes.UPDATE_PARTY:
      return {
        ...state,
        parties: state.parties.map(party => {
          if (party.name === action.payload.name) {
            return {
              ...party,
              signatures: action.payload.signatures
            };
          }
          return party;
        })
      };
    default:
      return state;
  }
};
