/* @flow */
import { take, call, put } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga/effects';
import { loginEmail as loginEmailService } from 'services/auth';
import * as authActions from 'actions/auth';

export function* loginEmail(): Generator<IOEffect, void, any> {
  while (true) {
    try {
      const { eMail, password } = yield take(authActions.LOGIN_EMAIL.REQUEST); // Take every action
      yield call(loginEmailService, eMail, password);

      yield put(authActions.loginEmail.success());
    } catch (errorMessage) {
      // Show info
      yield put(authActions.loginEmail.failure(errorMessage));
    }
  }
}
