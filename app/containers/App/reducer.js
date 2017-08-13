/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  VARIABLES_LOADED,
  RESULTS_LOADED,
  GET_RESULTS,
  CHANGE_VARIABLE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  variables: null,
  chosenVariable: null,
  results: null,
  loadingResults: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case VARIABLES_LOADED:
    return state
      .set('variables', action.variables)
      .set('chosenVariable', action.variables[0]);
    case GET_RESULTS:
      return state
        .set('loadingResults', true)
    case RESULTS_LOADED:
      return state
        .set('results', action.results)
        .set('loadingResults', false)
    case CHANGE_VARIABLE:
			console.log(action.variable);
      return state
        .set('chosenVariable', action.variable);
    default:
      return state;
  }
}

export default appReducer;
