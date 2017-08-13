import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const makeSelectVariables = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('variables')
);

const makeSelectChosenVariable = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('chosenVariable')
);

const makeSelectResults = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('results')
);

const makeSelectLoadingResults = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingResults')
);

export {
  makeSelectLocationState,
  makeSelectVariables,
  makeSelectChosenVariable,
  makeSelectResults,
  makeSelectLoadingResults,
};
