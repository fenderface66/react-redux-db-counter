/**
 * Gets the Variables from the server
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_VARIABLES, GET_RESULTS ,VARIABLES_LOADED } from 'containers/App/constants';
import { variablesLoaded, variablesLoadingError, resultsLoaded } from 'containers/App/actions';
import { makeSelectChosenVariable, makeSelectVariables } from 'containers/App/selectors';
import request from 'utils/request';

/**
 * Variables request/response handler
 */
export function* getVariables() {
  const requestURL = 'http://localhost:3000/api/getVariables';
  try {
    // Call our request helper (see 'utils/request')
    const variables = yield call(request, requestURL);
    yield put(variablesLoaded(variables));
  } catch (err) {
    console.log(err);
  }
}

/**
 * Results request/response handler
 */
export function* getResults() {
  const chosenVariable = yield select(makeSelectChosenVariable());
  const requestURL = `http://localhost:3000/api/getResults?chosenVariable=${encodeURIComponent(chosenVariable)}`;

  console.log(chosenVariable);
  try {
    // Call our request helper (see 'utils/request')
    const results = yield call(request, requestURL);
    yield put(resultsLoaded(results));
  } catch (err) {
    console.log(err);
  }
}

export function* variablesData() {
  // Watches for GET_VARIABLES actions and calls getVariables when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(GET_VARIABLES, getVariables);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* resultsData() {
  // Watches for GET_RESULTS actions and calls getResults when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(GET_RESULTS, getResults);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  variablesData,
  resultsData,
];
