/* @flow */
import { fork, all } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga/effects';

import { loginEmail } from './auth';

export default function* root(): Generator<IOEffect, void, any> {
  yield all([fork(loginEmail)]);
}
