/*
 * App Actions
 *
 * Actions change things in your application
 * Since this app uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import {
    GET_VARIABLES,
    VARIABLES_LOADED,
    GET_RESULTS,
    CHANGE_VARIABLE,
    RESULTS_LOADED,
} from './constants';

/**
 * Load the data, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_VARIABLES
 */
export function getVariables() {
    return {
        type: GET_VARIABLES,
    };
}

export function getResults() {
    return {
        type: GET_RESULTS,
    };
}

export function variablesLoaded(variables) {
    return {
        type: VARIABLES_LOADED,
        variables,
    };
}

export function resultsLoaded(results) {
    return {
        type: RESULTS_LOADED,
        results,
    };
}

export function changeVariable(variable) {
    return {
        type: CHANGE_VARIABLE,
        variable,
    };
}