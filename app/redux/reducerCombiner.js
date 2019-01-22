/* @flow */
import { combineReducers } from 'redux';

import * as reducers from './reducers';

// const allReducers = Object.assign({}, reducers);
export default combineReducers(reducers);
