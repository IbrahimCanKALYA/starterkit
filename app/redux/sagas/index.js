/* @flow */
import { fork, all } from 'redux-saga/effects';

import { loginEmail } from './auth';

export default function* root() {
  yield all([fork(loginEmail)]);
}
