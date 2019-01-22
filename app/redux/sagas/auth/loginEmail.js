/* @flow */
import { take, call, put } from 'redux-saga/effects';

import * as authActions from 'actions/auth';

export function* loginEmail() {
  while (true) {
    try {
      const { eMail, password } = yield take(authActions.LOGIN_EMAIL.REQUEST); // Take every action

      yield put(authActions.loginEmail.success());
    } catch (errorMessage) {
      // Show info
      yield put(authActions.loginEmail.failure(errorMessage));
    }
  }
}
