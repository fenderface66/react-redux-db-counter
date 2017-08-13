/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_VARIABLES = 'react-redux-songs/Home/GET_VARIABLES';
export const GET_RESULTS = 'react-redux-songs/Home/GET_RESULTS';
export const VARIABLES_LOADED = 'react-redux-songs/Home/VARIABLES_LOADED';
export const CHANGE_VARIABLE = 'react-redux-songs/Home/CHANGE_VARIABLE';
export const RESULTS_LOADED = 'react-redux-songs/Home/RESULTS_LOADED';
